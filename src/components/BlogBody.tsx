import type { BlogBlock } from "@/data/blog";

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-ink/80">
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
            <ul key={i} className="list-disc space-y-1.5 pl-5">
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
                <li key={item.name} className="rounded-xl bg-paper p-4 shadow-sm">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink hover:text-pin-blue"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {idx + 1}. {item.name}
                  </a>
                  <p className="mt-1 text-sm text-ink/70">{item.note}</p>
                </li>
              ))}
            </ol>
          );
        }
        // faq
        return (
          <div key={i} className="space-y-4 pt-2">
            {block.items.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-ink">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
