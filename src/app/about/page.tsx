import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólunk — Budapesti Klubok",
  description: "Miért hoztuk létre a Budapesti Klubok katalógust, és hogyan kerülhet fel egy klub a listára.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        Rólunk
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          A Budapesti Klubok egy ingyenes, független katalógus, amelynek célja, hogy egy helyen
          gyűjtse össze és tegye könnyen összehasonlíthatóvá a városban működő közösségi és
          társasági klubokat — legyen szó sportról, hobbiról, nyelvcseréről, könyvklubról vagy
          bármilyen más közösségi kezdeményezésről.
        </p>
        <p>
          Célunk, hogy segítsünk mindenkinek megtalálni a hozzá illő közösséget: akár régóta
          Budapesten élsz, akár most költöztél a városba, akár csak egy új hobbihoz keresel
          társaságot.
        </p>
        <p>
          Szeretnéd, hogy a klubod is felkerüljön a listára, vagy javítanál egy meglévő
          bejegyzésen? Írj nekünk:{" "}
          <a
            href="mailto:hello@budapestiklubok.hu"
            className="font-medium text-neutral-900 underline dark:text-white"
          >
            hello@budapestiklubok.hu
          </a>
          .
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          Jogi nyilatkozat: az oldalon szereplő tartalom közösségileg összegyűjtött információ.
          Az oldal nem áll hivatalos kapcsolatban a listázott klubokkal, és nem vállal
          felelősséget az adatok naprakészségéért — mindig ellenőrizd a klub hivatalos
          Instagram- vagy weboldalát a friss információkért.
        </p>
      </div>
    </div>
  );
}
