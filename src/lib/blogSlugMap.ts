/**
 * Maps each Hungarian blog post slug to its English translation's slug,
 * and back. Needed because the two versions intentionally use different,
 * language-appropriate slugs (not just a /en prefix on the same string).
 */
const HU_TO_EN: Record<string, string> = {
  "legjobb-futoklubok-budapesten": "best-running-clubs-budapest",
  "hogyan-csatlakozz-ha-felsz-egyedul-elmenni": "how-to-join-a-community-if-youre-scared-to-go-alone",
  "nyelvcsere-networking-kozossegek-budapesten": "language-exchange-networking-communities-budapest",
  "8-kozosseg-ahova-egyedul-is-mehetsz": "8-communities-in-budapest-you-can-join-alone",
  "miert-fontos-a-kozossegi-hovatartozas": "why-community-matters-for-mental-health",
  "tarsasjatek-kozossegek-budapesten": "board-game-communities-budapest",
  "joga-meditacio-kozossegek-kezdoknek": "yoga-meditation-communities-budapest-for-beginners",
  "hogyan-talalj-hobbi-sportcsapatot-budapesten": "how-to-find-a-hobby-sports-team-in-budapest",
  "legjobb-platformok-budapesti-kozossegek-kereseshez": "best-platforms-to-find-a-budapest-community-compared",
  "hogyan-segitenek-sportkozossegek-ha-egyedul-kezdesz": "how-sports-communities-help-if-youre-starting-alone",
  "legjobb-budapesti-sportkozossegek-osszehasonlitva": "best-budapest-sports-communities-compared",
  "hogyan-talalj-kozosseget-budapesti-kozossegekkel": "how-to-find-a-community-in-budapest-with-budapesti-kozossegek",
  "kezdobarat-sportklubok-budapesten-igy-ismerd-fel": "beginner-friendly-sports-clubs-in-budapest",
  "budapesti-kozossegkereso-oldalak-kulfoldieknek": "budapest-community-directories-for-expats-compared",
  "egyedul-is-latogathato-sportok-budapesten": "sports-you-can-do-alone-in-budapest",
  "mit-kinalnak-a-budapesti-hobbi-sportklubok": "what-budapest-hobby-sports-clubs-actually-offer",
  "budapesti-kozossegek-regisztracio-nelkul": "find-budapest-communities-without-registration",
  "turaklubok-budapesten-kezdoknek": "hiking-clubs-in-budapest-for-beginners",
  "noi-kozossegek-budapesten": "womens-communities-in-budapest",
  "konyvklubok-budapesten": "book-clubs-in-budapest",
  "startup-tech-kozossegek-budapesten": "startup-and-tech-communities-in-budapest",
  "tancos-kozossegek-budapesten": "dance-communities-in-budapest",
  "digitalis-nomad-kozossegek-budapesten": "digital-nomad-communities-in-budapest",
  "meditacio-kozossegek-budapesten": "meditation-communities-in-budapest-for-beginners",
  "lmbtq-kozossegek-budapesten": "lgbtq-communities-in-budapest",
  "onkentes-lehetosegek-budapesten": "volunteer-opportunities-in-budapest",
  "kozossegek-szuloknek-budapesten": "communities-for-parents-in-budapest",
  "nyilvanos-beszed-klubok-budapesten": "public-speaking-clubs-in-budapest",
  "katolikus-kozossegek-budapesten": "catholic-communities-in-budapest",
  "melyik-oldal-gyujti-a-budapesti-kozossegeket": "which-site-lists-budapest-community-clubs",
  "atlathato-online-terkep-budapesti-kozossegi-klubokrol": "is-there-a-map-of-budapest-community-clubs",
  "szeretsz-sportolni-de-nincs-kivel": "love-sports-but-no-one-to-do-it-with",
  "hol-talalok-kozossegeket-budapesten": "where-to-find-communities-in-budapest",
  "budapesti-kozossegi-utmutato-ujonnan-erkezetteknek": "best-budapest-club-directory-sites-for-newcomers",
  "hogyan-mukodik-egy-kezdo-sportklub-budapesten": "how-beginner-sports-clubs-work-in-budapest",
  "most-vegeztem-az-egyetemmel-elfogyott-a-baratikorom": "just-graduated-and-lost-my-friend-group",
  "felmondtam-es-hazakoltoztem-hogyan-epits-uj-kozosseget": "quit-my-job-and-moved-back-how-to-build-a-new-community",
  "30-utan-nehez-barator-talalni-budapesten": "hard-to-make-friends-after-30-in-budapest",
  "van-outdoor-boulder-lehetoseg-budapesten": "is-there-outdoor-bouldering-in-budapest",
};

const EN_TO_HU: Record<string, string> = Object.fromEntries(
  Object.entries(HU_TO_EN).map(([hu, en]) => [en, hu])
);

export function getEnBlogSlug(huSlug: string): string | undefined {
  return HU_TO_EN[huSlug];
}

export function getHuBlogSlug(enSlug: string): string | undefined {
  return EN_TO_HU[enSlug];
}
