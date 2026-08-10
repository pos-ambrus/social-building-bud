export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 py-8 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Budapesti Klubok — közösségi katalógus.
      </div>
    </footer>
  );
}
