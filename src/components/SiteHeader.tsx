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
          Budapesti <span className="text-pin-blue">Klubok</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-ink/70">
          <Link href="/" className="transition-colors hover:text-pin-blue">
            Klubok
          </Link>
          <Link href="/about" className="transition-colors hover:text-pin-blue">
            Rólunk
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Regisztráld a klubod
          </Link>
        </nav>
      </div>
    </header>
  );
}
