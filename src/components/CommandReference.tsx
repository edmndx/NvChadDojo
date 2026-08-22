import type { ReactNode } from "react";
import { referenceSections } from "../commandRegistry";
import type { ReferenceKeyGroups, ReferenceRow } from "../referenceSections";

function HighlightMatch({
  text,
  query,
}: {
  text: string;
  query: string;
}): ReactNode {
  const needle = query.trim();
  if (!needle) return text;
  const escaped = needle.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
  return text.split(new RegExp("(" + escaped + ")", "ig")).map((part, index) =>
    part.toLowerCase() === needle.toLowerCase() ? (
      <mark className="reference-match" key={index}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function defaultKeyGroups(keys: string): ReferenceKeyGroups {
  return keys.split(" / ").map((group) => {
    const trimmed = group.trim();
    if (trimmed.startsWith(":") || /\b(?:then|or)\b/i.test(trimmed))
      return [trimmed];
    const tokens = trimmed.split(/\s+/);
    const isPlainKeySequence = tokens.every((token) =>
      /^[\x21-\x7e]+$/.test(token),
    );
    return tokens.length > 1 && isPlainKeySequence ? tokens : [trimmed];
  });
}

function keyClassName(key: string) {
  const length = Array.from(key).length;
  return [
    "reference-key",
    length === 1 ? "is-single" : "",
    key.startsWith(":") ? "is-command" : "",
    length > 18 ? "is-long" : "",
    length > 28 ? "is-extra-long" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function groupRows(rows: readonly ReferenceRow[]) {
  if (!rows.some(([, , options]) => options?.group))
    return [{ title: "", rows }];

  const groups = new Map<string, ReferenceRow[]>();
  for (const row of rows) {
    const title = row[2]?.group ?? "commands";
    const group = groups.get(title) ?? [];
    group.push(row);
    groups.set(title, group);
  }
  return Array.from(groups, ([title, groupedRows]) => ({
    title,
    rows: groupedRows,
  }));
}

export function CommandReference({ query = "" }: { query?: string }) {
  const normalized = query.trim().toLowerCase();
  return (
    <section className="command-reference">
      <div className="reference-title">
        <div>
          <span>nvim / nvchad</span>
          <p>editing, navigation, developer tools &amp; practical plugins</p>
        </div>
      </div>
      <div className="reference-grid">
        {referenceSections.map((section) => {
          const matches = Boolean(
            normalized &&
            [
              section.title,
              ...section.rows.flatMap(([label, keys, options]) => [
                label,
                keys,
                options?.group ?? "",
              ]),
            ].some((value) => value.toLowerCase().includes(normalized)),
          );
          const rowGroups = groupRows(section.rows);
          const cardGroups =
            section.layout === "wide"
              ? rowGroups.map((group) => [group])
              : [rowGroups];
          return cardGroups.map((groups, cardIndex) => (
            <article
              className={[
                "reference-card",
                section.tone,
                section.layout === "wide" ? "is-split" : "",
                matches ? "search-match" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-section={section.title}
              key={`${section.title}-${cardIndex}`}
            >
              <h3>
                <HighlightMatch text={section.title} query={query} />
              </h3>
              <div
                className={`reference-groups ${
                  groups.length > 1 ? "is-grouped" : ""
                }`}
              >
                {groups.map((group) => (
                  <section className="reference-group" key={group.title}>
                    {group.title ? <h4>{group.title}</h4> : null}
                    {group.rows.map(([label, keys, options]) => {
                      const keyGroups =
                        options?.keyGroups ?? defaultKeyGroups(keys);
                      const hasLongKey = keyGroups
                        .flat()
                        .some((key) => Array.from(key).length > 18);
                      const keyCount = keyGroups.flat().length;
                      const keyCharacterCount = keyGroups
                        .flat()
                        .reduce(
                          (total, key) => total + Array.from(key).length,
                          0,
                        );
                      const keyDensity =
                        keyCount >= 7 || keyCharacterCount >= 36
                          ? "is-very-dense"
                          : keyCount >= 5 || keyCharacterCount >= 24
                            ? "is-dense"
                            : "";
                      return (
                        <div
                          className={`reference-row ${
                            hasLongKey ? "has-long-key" : ""
                          }`}
                          key={label + "-" + keys}
                        >
                          <span>
                            <HighlightMatch text={label} query={query} />
                          </span>
                          <span className={`reference-keys ${keyDensity}`}>
                            {keyGroups.map((keyGroup, groupIndex) => (
                              <span
                                className="reference-key-option"
                                key={keyGroup.join("-") + groupIndex}
                              >
                                {groupIndex > 0 ? (
                                  <span
                                    aria-hidden="true"
                                    className="reference-key-separator"
                                  >
                                    /
                                  </span>
                                ) : null}
                                <span className="reference-key-sequence">
                                  {keyGroup.map((key, keyIndex) => (
                                    <kbd
                                      className={keyClassName(key)}
                                      key={key + keyIndex}
                                    >
                                      <HighlightMatch
                                        text={key}
                                        query={query}
                                      />
                                    </kbd>
                                  ))}
                                </span>
                              </span>
                            ))}
                          </span>
                        </div>
                      );
                    })}
                  </section>
                ))}
              </div>
            </article>
          ));
        })}
      </div>
      <div className="reference-note">
        <span>ⓘ</span>
        <p>
          Cards marked “optional” require that plugin. Cards marked “map these”
          use practical suggested mappings and are not NVChad defaults.
        </p>
      </div>
    </section>
  );
}
