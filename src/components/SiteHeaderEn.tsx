import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeaderEn() {
  return (
    <header className="border-b-2 border-ink/10 bg-board/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/en"
          style={{ fontFamily: "var(--font-display)" }}
          className="whitespace-nowrap text-base uppercase tracking-tight text-ink sm:text-xl"
        >
          Budapest <span className="text-pin-blue">Communities</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-medium text-ink/70 sm:gap-6">
          <Link href="/en/clubs" className="hidden transition-colors hover:text-pin-blue sm:inline">
            Clubs
          </Link>
          <Link href="/en/blog" className="hidden transition-colors hover:text-pin-blue sm:inline">
            Blog
          </Link>
          <Link href="/en/about" className="hidden transition-colors hover:text-pin-blue sm:inline">
            Why I made this
          </Link>
          <LanguageSwitcher />
          <Link
            href="/en/about"
            className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border-2 border-cta bg-cta px-3 py-1.5 text-xs font-semibold text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover sm:px-4 sm:py-2 sm:text-sm"
          >
            List your club
          </Link>
        </nav>
      </div>
    </header>
  );
}
