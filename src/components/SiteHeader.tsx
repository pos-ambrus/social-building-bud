import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-ink/10 bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          style={{ fontFamily: "var(--font-display)" }}
          className="text-xl uppercase tracking-tight text-ink"
        >
          Socially <span className="text-pin-blue">Budapest</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-ink/70">
          <Link href="/klubok" className="transition-colors hover:text-pin-blue">
            Klubok
          </Link>
          <Link href="/about" className="transition-colors hover:text-pin-blue">
            Miért csináltam?
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full border-2 border-cta bg-cta px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover"
          >
            Regisztráld a klubod
          </Link>
        </nav>
      </div>
    </header>
  );
}
