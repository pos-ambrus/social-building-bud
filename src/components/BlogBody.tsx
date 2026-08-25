import type { BlogBlock } from "@/data/blog";

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-ink/90">
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              style={{ fontFamily: "var(--font-display)" }}
              className="!mt-10 text-xl uppercase tracking-tight text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 marker:text-cta">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "clublist") {
          return (
            <ol key={i} className="space-y-3">
              {block.items.map((item, idx) => (
                <li key={item.name} className="flex gap-3 rounded-xl bg-accent-soft/60 p-4 ring-1 ring-inset ring-pin-blue/10">
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="shrink-0 text-2xl text-cta"
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink hover:text-pin-blue"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.name}
                    </a>
                    <p className="mt-1 text-sm text-ink/75">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "citation") {
          return (
            <p
              key={i}
              className="flex items-start gap-2 rounded-xl bg-accent-soft/60 px-4 py-3 text-sm text-ink/75 ring-1 ring-inset ring-pin-blue/10"
            >
              <span aria-hidden="true">🔗</span>
              <span>
                Forrás:{" "}
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pin-blue underline"
                >
                  {block.text}
                </a>
              </span>
            </p>
          );
        }
        // faq
        return (
          <div key={i} className="space-y-4 pt-2">
            {block.items.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-ink">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{item.a}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
