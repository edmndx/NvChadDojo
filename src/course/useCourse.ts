import { useCallback, useEffect, useState } from "react";
import {
  lessonSummaries,
  loadLesson,
  prefetchLesson,
  type Lesson,
} from "../curriculum";
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

export function useCourse() {
  const [current, setCurrent] = useState(lessonIndexFromPath);
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

  return { current, summary, lesson, loadError, selectLesson, requestLesson };
}
