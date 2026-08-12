import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-accent-soft bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <span className="text-foreground">Budapesti</span>
          <span className="text-accent">Klubok</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-foreground/70">
          <Link href="/" className="transition-colors hover:text-accent">
            Klubok
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            Rólunk
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Regisztráld a klubod
          </Link>
        </nav>
      </div>
    </header>
  );
}
