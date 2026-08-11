export default function SiteFooter() {
  return (
    <footer className="border-t border-accent-soft py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-foreground/60">
        © {new Date().getFullYear()} Budapesti Klubok — ingyenes, közösségi katalógus 💛
      </div>
    </footer>
  );
}
