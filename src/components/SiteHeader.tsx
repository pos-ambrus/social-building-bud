import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-accent-soft bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          <span className="text-xl">🏙️</span> Budapesti Klubok
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-foreground/70">
          <Link href="/" className="transition-colors hover:text-accent">
            Klubok
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            Rólunk
          </Link>
        </nav>
      </div>
    </header>
  );
}
