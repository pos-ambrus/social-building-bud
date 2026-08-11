const ICONS: Record<string, string> = {
  "Bor / Gasztro": "🍷",
  Fotózás: "📷",
  "Jóga / Wellness": "🧘",
  Karaoke: "🎤",
  "Kvíz / Trivia": "🧠",
  Könyvklub: "📚",
  "LMBTQ+ Közösség": "🏳️‍🌈",
  "Meditáció / Spiritualitás": "🕯️",
  "Networking / Digitális Nomád": "💻",
  "Nyelvcsere / Networking": "🗣️",
  "Nyilvános beszéd": "🎙️",
  "Női közösség": "💜",
  "Sport / Evezés": "🚣",
  "Sport / Fitness": "🏋️",
  "Sport / Futás": "🏃",
  "Sport / Kerékpár": "🚴",
  "Sport / Kosárlabda": "🏀",
  "Sport / Motoros": "🏍️",
  "Sport / Tenisz": "🎾",
  "Sport / Íjászat": "🏹",
  "Stand-up / Improv": "😂",
  "Startup / Tech": "🚀",
  Tánc: "💃",
  Társasjáték: "🎲",
  "Túra / Természetjárás": "🥾",
  "Vegán / Vegetáriánus": "🌱",
  "Írói kör / Irodalom": "✍️",
  "Önkéntesség / Közösségi akció": "🤲",
};

export function getCategoryIcon(category: string): string {
  return ICONS[category] ?? "✨";
}
