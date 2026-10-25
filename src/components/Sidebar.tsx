import { useMemo } from "react";
import { X } from "lucide-react";
import { groups, lessonSummaries, type LessonSummary } from "../curriculum";

const searchableLessons = lessonSummaries.map((lesson) => ({
  lesson,
  text: `${lesson.title} ${lesson.group} ${lesson.keys.join(" ")} ${lesson.searchText || ""}`.toLowerCase(),
}));

export function Brand() {
  return (
    <div className="brand">
      <img
        className="brand-mark"
        src={`${import.meta.env.BASE_URL}logo.png?v=3`}
        width={52}
        height={52}
        alt=""
      />
      <img
        className="brand-wordmark"
        src={`${import.meta.env.BASE_URL}wordmark.png`}
        width={106}
        height={52}
        alt="NvChadDojo"
      />
    </div>
  );
}

function sidebarKeys(lesson: LessonSummary) {
  return lesson.keys
    .slice(0, 3)
    .map((key) => key.replace("<leader>", "Space "));
}

function ShortcutBadge({ shortcut }: { shortcut: string }) {
  const isLong = shortcut.length > 16;
  const fitsOneLine = shortcut === ":lua vim.diagnostic.open_float()";
  const breakAt = isLong && !fitsOneLine ? shortcut.indexOf(" ") : -1;
  const label =
    breakAt > 0
      ? `${shortcut.slice(0, breakAt)}\n${shortcut.slice(breakAt + 1)}`
      : shortcut;

  return (
    <kbd
      className={`shortcut-badge ${shortcut.length === 1 ? "is-single" : ""} ${isLong ? "is-long" : ""} ${fitsOneLine ? "fits-one-line" : ""}`}
      aria-label={shortcut}
      title={isLong ? shortcut : undefined}
    >
      {label}
    </kbd>
  );
}

export function Sidebar({
  current,
  query,
  onQueryChange,
  onSelect,
  onClose,
}: {
  current: number;
  query: string;
  onQueryChange: (query: string) => void;
  onSelect: (index: number) => void;
  onClose: () => void;
}) {
  const normalized = query.trim().toLowerCase();
  const groupedMatches = useMemo(() => {
    const matches = new Map<string, LessonSummary[]>();
    for (const group of groups) matches.set(group, []);
    for (const { lesson, text } of searchableLessons) {
      if (!normalized || text.includes(normalized))
        matches.get(lesson.group)?.push(lesson);
    }
    return matches;
  }, [normalized]);
  return (
    <aside id="course-sidebar" className="sidebar" aria-label="Course lessons">
      <div className="side-head">
        <Brand />
        <button type="button" aria-label="Close lessons" onClick={onClose}>
          <X size={19} />
        </button>
      </div>
      <label className="lesson-search">
        <span aria-hidden="true">/</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              onQueryChange("");
              event.currentTarget.blur();
            }
          }}
          placeholder="Find lessons or commands"
        />
        <kbd>Esc</kbd>
      </label>
      <nav className="lesson-list">
        {groups.map((group) => {
          const matches = groupedMatches.get(group) || [];
          if (!matches.length) return null;
          return (
            <section key={group}>
              <div className="group">{group}</div>
              {matches.map((lesson) => {
                const keys = sidebarKeys(lesson);
                return (
                  <button
                    type="button"
                    key={lesson.id}
                    className={`lesson-link ${lesson.index === current ? "active" : ""}`}
                    aria-current={lesson.index === current ? "page" : undefined}
                    onClick={() => onSelect(lesson.index)}
                  >
                    <span className="lesson-title">{lesson.title}</span>
                    {lesson.kind === "review" ? (
                      <span className="review-chip">Review</span>
                    ) : (
                      <span className="side-key-row">
                        {keys.map((key, keyIndex) => (
                          <ShortcutBadge
                            shortcut={key}
                            key={`${key}-${keyIndex}`}
                          />
                        ))}
                      </span>
                    )}
                  </button>
                );
              })}
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
