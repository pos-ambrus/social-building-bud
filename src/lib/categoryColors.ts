const PALETTE = [
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-teal-100 text-teal-700",
  "bg-purple-100 text-purple-700",
  "bg-yellow-100 text-yellow-800",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-800",
  "bg-cyan-100 text-cyan-700",
];

export function getCategoryClasses(category: string): string {
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = (hash * 31 + category.charCodeAt(i)) % PALETTE.length;
  }
  return PALETTE[hash];
}

export function getCategoryDotClass(): string {
  return "bg-cta";
}
