const DESCRIPTIONS_EN: Record<string, string> = {
  Sport: "Running, cycling, basketball, tennis, rowing and other sporty communities.",
  "Nyelvcsere / Networking": "Language practice and meeting locals or foreigners.",
  Könyvklub: "Reading circles and book discussions.",
  "Túra / Természetjárás": "Hiking associations and group hikes.",
  Tánc: "Social dance nights and dance communities.",
  "Jóga / Wellness": "Outdoor yoga and wellness communities.",
  "Networking / Digitális Nomád": "Connecting locals and digital nomads.",
  "Meditáció / Spiritualitás": "Meditation and self-development meetups.",
  "Startup / Tech": "Startup and tech communities, AI builders.",
  "Női közösség": "Communities and events for women.",
  "LMBTQ+ Közösség": "Community events for the LGBTQ+ community.",
  Társasjáték: "Board game nights and club meetups.",
  "Önkéntesség / Közösségi akció": "Volunteer and charity initiatives.",
  "Szülők / Családok": "Communities for new parents and families.",
  "Nyilvános beszéd": "Presentation and leadership skill clubs.",
  "Katolikus Közösségek": "Prayer groups, choirs and faith-focused communities.",
};

export function getCategoryDescriptionEn(category: string): string {
  return DESCRIPTIONS_EN[category] ?? "Explore Budapest communities active in this topic.";
}
