const DESCRIPTIONS: Record<string, string> = {
  "Bor / Gasztro": "Borkóstolók és gasztroesemények Budapest-szerte.",
  Fotózás: "Fotós séták és közösségi alkotóprogramok.",
  "Jóga / Wellness": "Szabadtéri jóga és wellness-közösségek.",
  Karaoke: "Karaoke-esték és zenés összejövetelek.",
  "Kvíz / Trivia": "Kocsmakvízek és tudásversenyek hétről hétre.",
  Könyvklub: "Olvasókörök és könyvbeszélgetések.",
  "LMBTQ+ Közösség": "Közösségi programok az LMBTQ+ közösség számára.",
  "Meditáció / Spiritualitás": "Meditációs és önismereti összejövetelek.",
  "Networking / Digitális Nomád": "Kapcsolatépítés helyieknek és digitális nomádoknak.",
  "Nyelvcsere / Networking": "Nyelvgyakorlás és ismerkedés helyiekkel, külföldiekkel.",
  "Nyilvános beszéd": "Prezentációs és vezetői készségfejlesztő klubok.",
  "Női közösség": "Közösségek és programok nőknek.",
  "Sport / Evezés": "Kajak, kenu és SUP közösségek a Dunán.",
  "Sport / Fitness": "Szabadtéri edzésközösségek minden szintnek.",
  "Sport / Futás": "Közös futások Budapest utcáin és parkjaiban.",
  "Sport / Íjászat": "Íjászklubok kezdőknek és haladóknak.",
  "Sport / Kerékpár": "Kerékpáros közösségek és túrák a városban.",
  "Sport / Kosárlabda": "Utcai és amatőr kosárlabda-közösségek.",
  "Sport / Motoros": "Motoros közösségek és közös túrák.",
  "Sport / Tenisz": "Ütős sportok közössége pálya nélkül is.",
  "Stand-up / Improv": "Stand-up és improvizációs esték.",
  "Startup / Tech": "Startup és technológiai közösségek, AI-építők.",
  Tánc: "Social dance esték és táncos közösségek.",
  Társasjáték: "Társasjáték-esték és klubnapok.",
  "Túra / Természetjárás": "Természetjáró egyesületek és közös túrák.",
  "Vegán / Vegetáriánus": "Közösségek tudatos étkezés köré szervezve.",
  "Írói kör / Irodalom": "Irodalmi estek és alkotói közösségek.",
  "Önkéntesség / Közösségi akció": "Önkéntes és jótékonysági kezdeményezések.",
};

export function getCategoryDescription(category: string): string {
  return DESCRIPTIONS[category] ?? "Fedezd fel az ebben a témában működő budapesti közösségeket.";
}
