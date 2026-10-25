import type { Lesson } from "../../curriculum";
export function ConceptVisual({ lesson }: { lesson: Lesson }) {
  if (/Moving by (?:Words|WORDs)/.test(lesson.title)) {
    const chunks = lesson.title.includes("WORDs")
      ? ["const", "test", "=", 'document.getElementById("test");']
      : [
          "const",
          "test",
          "=",
          "document",
          ".",
          "getElementById",
          "(",
          '"test"',
          ");",
        ];
    return (
      <div className="concept-visual word-steps">
        <code>
          {chunks.map((chunk, index) => (
            <span key={`${chunk}-${index}`}>
              <b>{index + 1}</b>
              {chunk}
            </span>
          ))}
        </code>
        <p>Each numbered region is a destination for the motion.</p>
      </div>
    );
  }
  if (lesson.group.startsWith("Text Objects"))
    return (
      <div className="concept-visual">
        <code>
          <span>operator</span>
          <i>+</i>
          <span>inside / around</span>
          <i>+</i>
          <span>object</span>
        </code>
        <p>Read the command as a short editing sentence.</p>
      </div>
    );
  if (lesson.group === "Basic Operators")
    return (
      <div className="concept-visual">
        <code>
          <span>operator</span>
          <i>+</i>
          <span>motion</span>
          <i>=</i>
          <span>edit</span>
        </code>
        <p>Think in verbs and targets rather than isolated shortcuts.</p>
      </div>
    );
  if (lesson.group === "Search")
    return (
      <div className="concept-visual">
        <code>
          const <mark>theme</mark> = config.<mark>theme</mark>;
        </code>
        <p>Search creates destinations; repeat motions move between them.</p>
      </div>
    );
  return null;
}
