import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  lessonSummaries,
  loadLesson,
  prefetchLesson,
  type Lesson,
} from "./curriculum";
import { Brand, Sidebar } from "./components/Sidebar";

const Trainer = lazy(() =>
  import("./components/Trainer").then((module) => ({
    default: module.Trainer,
  })),
);
const CommandReference = lazy(() =>
  import("./components/CommandReference").then((module) => ({
    default: module.CommandReference,
  })),
);
const ConceptVisual = lazy(() =>
  import("./components/LessonPage").then((module) => ({
    default: module.ConceptVisual,
  })),
);
const LessonFollowUp = lazy(() =>
  import("./components/LessonPage").then((module) => ({
    default: module.LessonFollowUp,
  })),
);
const LessonKeyGuide = lazy(() =>
  import("./components/LessonPage").then((module) => ({
    default: module.LessonKeyGuide,
  })),
);

function lessonIndexFromPath() {
  try {
    const id = decodeURIComponent(
      window.location.pathname.replace(/^\/lessons\/?/, "").replace(/\/$/, ""),
    );
    const index = lessonSummaries.findIndex((lesson) => lesson.id === id);
    return index >= 0 ? index : 0;
  } catch {
    return 0;
  }
}

function Course() {
  const [current, setCurrent] = useState(lessonIndexFromPath);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 900);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadedLesson, setLesson] = useState<Lesson | null>(null);
  const [loadError, setLoadError] = useState("");
  const summary = lessonSummaries[current];
  const lesson = loadedLesson?.id === summary.id ? loadedLesson : null;

  const selectLesson = useCallback((index: number, replace = false) => {
    const safeIndex = Math.max(0, Math.min(lessonSummaries.length - 1, index));
    setCurrent(safeIndex);
    const path = `/lessons/${lessonSummaries[safeIndex].id}`;
    if (window.location.pathname !== path)
      window.history[replace ? "replaceState" : "pushState"]({}, "", path);
    window.scrollTo(0, 0);
  }, []);

  const requestLesson = useCallback(() => {
    let active = true;
    setLesson(null);
    setLoadError("");
    loadLesson(summary.id)
      .then((loaded) => {
        if (!active) return;
        setLesson(loaded);
        const next = lessonSummaries[current + 1];
        if (next) window.setTimeout(() => prefetchLesson(next.id), 0);
      })
      .catch(() => {
        if (active)
          setLoadError(
            "This lesson could not be loaded. Check the connection and try again.",
          );
      });
    return () => {
      active = false;
    };
  }, [current, summary.id]);

  useEffect(() => {
    if (!window.location.pathname.startsWith("/lessons/"))
      selectLesson(current, true);
    const restore = () => {
      setCurrent(lessonIndexFromPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);

  useEffect(requestLesson, [requestLesson]);

  const isReference = summary.kind === "reference";
  const isReview = summary.kind === "review";
  return (
    <div
      className={`course ${sidebarOpen ? "sidebar-open" : "sidebar-hidden"}`}
    >
      {sidebarOpen && (
        <>
          <Sidebar
            current={current}
            query={searchQuery}
            onQueryChange={setSearchQuery}
            onClose={() => setSidebarOpen(false)}
            onSelect={(index) => {
              selectLesson(index);
              if (window.innerWidth <= 900) setSidebarOpen(false);
            }}
          />
          <div className="side-scrim" onClick={() => setSidebarOpen(false)} />
        </>
      )}
      <div className="sidebar-toggle-area">
        <button
          type="button"
          className="sidebar-toggle"
          aria-label={sidebarOpen ? "Hide lessons" : "Open lessons"}
          title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
          aria-expanded={sidebarOpen}
          aria-controls={sidebarOpen ? "course-sidebar" : undefined}
          onClick={() => setSidebarOpen((open) => !open)}
        >
          {sidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>
      <main className="lesson-main">
        <header className="course-head">
          <div className="course-brand">
            <Brand />
          </div>
          <div className="course-path">
            <BookOpen size={15} />
            <span>{summary.group}</span>
            <b>/</b>
            <span>{summary.title}</span>
          </div>
        </header>
        <article
          className={`lesson-content ${isReference ? "reference-page" : ""} ${isReview ? "review-page" : ""}`}
        >
          {!lesson && !loadError && (
            <section
              className="lesson-loading"
              aria-live="polite"
              aria-busy="true"
            >
              <h1>{summary.title}</h1>
              <p>Loading lesson…</p>
            </section>
          )}
          {loadError && (
            <section className="lesson-loading" role="alert">
              <h1>{summary.title}</h1>
              <p>{loadError}</p>
              <button
                type="button"
                onClick={() => {
                  requestLesson();
                }}
              >
                Retry
              </button>
            </section>
          )}
          {lesson && (
            <Suspense
              fallback={
                <div className="lesson-loading" aria-busy="true">
                  Preparing lesson…
                </div>
              }
            >
              <>
                {!isReference && (
                  <div className="lesson-copy">
                    <h1>{lesson.title}</h1>
                    <p className="lead">{lesson.summary}</p>
                    {lesson.detail !== lesson.summary && <p>{lesson.detail}</p>}
                    <ConceptVisual lesson={lesson} />
                    <LessonKeyGuide lesson={lesson} />
                  </div>
                )}
                {isReference ? (
                  <CommandReference query={searchQuery} />
                ) : (
                  !isReview && (
                    <Suspense
                      fallback={
                        <div className="lesson-loading" aria-busy="true">
                          Loading trainer…
                        </div>
                      }
                    >
                      <Trainer lesson={lesson} />
                    </Suspense>
                  )
                )}
                {!isReference && <LessonFollowUp lesson={lesson} />}
              </>
            </Suspense>
          )}
          <nav className="lesson-nav" aria-label="Adjacent lessons">
            <button
              type="button"
              disabled={current === 0}
              onClick={() => selectLesson(current - 1)}
            >
              <ArrowLeft size={18} aria-hidden="true" />
              <span className="nav-copy">
                <small>Previous lesson</small>
                <b>{lessonSummaries[current - 1]?.title}</b>
              </span>
            </button>
            <button
              type="button"
              className="next"
              disabled={current === lessonSummaries.length - 1}
              onClick={() => selectLesson(current + 1)}
            >
              <span className="nav-copy">
                <small>Next lesson</small>
                <b>{lessonSummaries[current + 1]?.title}</b>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </nav>
        </article>
      </main>
    </div>
  );
}

export default function App() {
  return <Course />;
}
