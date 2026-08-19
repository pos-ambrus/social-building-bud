export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink/10 py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-ink/60">
        © {new Date().getFullYear()} Budapesti Közösségek, ingyenes közösségi katalógus 💛
      </div>
    </footer>
  );
}
