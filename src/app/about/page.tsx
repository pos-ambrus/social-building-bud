import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólunk | Socially Budapest",
  description: "Miért hoztuk létre a Socially Budapest katalógust, és hogyan kerülhet fel egy klub a listára.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 style={{ fontFamily: "var(--font-display)" }} className="text-3xl uppercase tracking-tight text-ink">
        Rólunk
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80">
        <p>
          Szia, Ambrus vagyok. Mindig is szerettem közösségeket létrehozni, és hasonló
          gondolkodású embereknek programokat, eseményeket szervezni, és ez a katalógus is
          ebből a szenvedélyből született.
        </p>
        <p>
          Budapesten hihetetlenül sok ilyen kezdeményezés fut: futóklubok, nyelvcserék,
          társasjáték-esték, startup közösségek, csak épp szétszórva, mindenhol máshol.
          A Socially Budapest azért van, hogy egy helyen megtaláld, ami hozzád illik. Remélem,
          te is rátalálsz a saját közösségedre.
        </p>
        <p>
          Szeretnéd, hogy a klubod is felkerüljön a listára, vagy javítanál egy meglévő
          bejegyzésen? Írj nekem közvetlenül:{" "}
          <a
            href="mailto:sociallybudapest@gmail.com"
            className="font-medium text-pin-blue underline"
          >
            sociallybudapest@gmail.com
          </a>
          . Ingyenes, nincs bürokrácia: csak küldd el a klub nevét és egy linket, a többit
          elintézem.
        </p>
        <p style={{ fontFamily: "var(--font-handwritten)" }} className="text-2xl text-ink">
          Ambrus
        </p>
        <p className="text-sm text-ink/50">
          Jogi nyilatkozat: az oldalon szereplő tartalom közösségileg összegyűjtött információ.
          Az oldal nem áll hivatalos kapcsolatban a listázott klubokkal, és nem vállal
          felelősséget az adatok naprakészségéért: mindig ellenőrizd a klub hivatalos
          Instagram- vagy weboldalát a friss információkért.
        </p>
      </div>
    </div>
  );
}
