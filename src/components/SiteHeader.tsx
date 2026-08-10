import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
          Budapesti Klubok
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white">
            Klubok
          </Link>
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white">
            Rólunk
          </Link>
        </nav>
      </div>
    </header>
  );
}
