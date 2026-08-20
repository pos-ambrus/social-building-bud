import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-ink/10 bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          style={{ fontFamily: "var(--font-display)" }}
          className="whitespace-nowrap text-base uppercase tracking-tight text-ink sm:text-xl"
        >
          Budapesti <span className="text-pin-blue">Közösségek</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium text-ink/70 sm:gap-6">
          <Link href="/klubok" className="hidden transition-colors hover:text-pin-blue sm:inline">
            Klubok
          </Link>
          <Link href="/about" className="hidden transition-colors hover:text-pin-blue sm:inline">
            Miért csináltam?
          </Link>
          <Link
            href="/about"
            className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border-2 border-cta bg-cta px-3 py-1.5 text-xs font-semibold text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover sm:px-4 sm:py-2 sm:text-sm"
          >
            Regisztráld a klubod
          </Link>
        </nav>
      </div>
    </header>
  );
}
