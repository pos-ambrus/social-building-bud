export type CategorySeoEn = {
  h1: string;
  title: string;
  description: string;
  intro: string[];
};

const SEO_EN: Record<string, CategorySeoEn> = {
  Sport: {
    h1: "Sports communities and clubs in Budapest",
    title: "Sports communities in Budapest",
    description:
      "Running clubs, cycling groups, tennis, basketball and pickleball communities in Budapest. A free list where most groups happily welcome beginners.",
    intro: [
      "Most sports communities in Budapest aren't formal clubs, they're groups of friends who meet at the same spot once a week. That's exactly why they're hard to find: no website, just an Instagram account, and they rarely advertise anywhere.",
      "Every group listed here is real and active, and most are open to you showing up alone. If you've never done this before, running clubs and outdoor basketball are the easiest way in, because nobody expects you to sign up ahead of time. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Nyelvcsere / Networking": {
    h1: "Language exchange and networking communities in Budapest",
    title: "Language exchange and networking in Budapest",
    description:
      "Language exchange evenings and social meetups in Budapest for locals, expats and travelers. Free to browse, no sign-up required.",
    intro: [
      "Language exchange events work well as a first community because everyone shows up with the same intention: talking to strangers. You don't need to break into an existing group, the format itself does that work for you.",
      "The communities listed here typically meet weekly and don't require advance registration. You can show up regardless of your language level, since most venues set up separate tables for different languages and levels. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Túra / Természetjárás": {
    h1: "Hiking clubs and outdoor communities in Budapest",
    title: "Hiking clubs in Budapest",
    description:
      "Group hikes in the hills around Budapest, guided trips for every level. A free list of real hiking communities.",
    intro: [
      "Hiking is one of the easiest ways to join a group alone. It lasts for hours, there's always something to walk toward and talk about, and nobody notices if you're quiet for the first thirty minutes.",
      "The communities here set out from Budapest, usually to spots reachable by public transport, and most clearly mark which hikes are beginner-friendly. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Női közösség": {
    h1: "Women's communities and clubs in Budapest",
    title: "Women's communities in Budapest",
    description:
      "Communities for women in Budapest: group walks, conversation-focused meetups and events. A free list where you can make real friends.",
    intro: [
      "Making friends as an adult is harder than anyone admits, and women's communities exist precisely to fill that gap: they're built around connection first, not necessarily around a specific activity.",
      "The groups listed here run in different formats, from group walks to organized conversation evenings. If you're unsure where to start, walks are the easiest entry point: there's no icebreaker round, you just start moving together. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  Társasjáték: {
    h1: "Board game clubs and game nights in Budapest",
    title: "Board game clubs in Budapest",
    description:
      "Board game nights and regular meetups in Budapest, in Hungarian and English, open to beginners. Free to join, most charge no membership fee.",
    intro: [
      "Board game nights are an unusually good entry point because the game itself gives you the structure, so you don't have to start a conversation, you just have to sit at a table. One round in, you've met three or four people without trying.",
      "Most communities here are free or just expect you to buy something at the venue, and there's almost always someone happy to explain the rules. You don't need to bring your own game. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  Könyvklub: {
    h1: "Book clubs in Budapest",
    title: "Book clubs in Budapest",
    description:
      "Reading circles and book clubs in Budapest, fiction and non-fiction, meeting monthly. A free list.",
    intro: [
      "A book club differs from most communities in one key way: you know exactly what you'll be talking about in advance. For a lot of people, that's the safety net that makes showing up for the first time possible at all.",
      "The clubs listed here typically meet once a month and announce the next book ahead of time. If you fell behind on the reading, you can still come, and most clubs say so explicitly. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Jóga / Wellness": {
    h1: "Yoga and wellness communities in Budapest",
    title: "Yoga and wellness communities in Budapest",
    description:
      "Outdoor yoga classes, breathwork and wellness communities in Budapest, open to beginners. A free list of real communities.",
    intro: [
      "A studio yoga class and a yoga community aren't the same thing. In the first, you pay for the pass and go home; in the second, people stick around to talk afterward. This list focuses on the latter.",
      "No prior experience is needed for the communities here, and outdoor sessions usually require nothing but your own mat. Several are paired with alcohol-free social events. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Meditáció / Spiritualitás": {
    h1: "Meditation and self-development communities in Budapest",
    title: "Meditation communities in Budapest",
    description:
      "Meditation groups and self-development communities in Budapest, independent of any religion or organization. A free list.",
    intro: [
      "Many people avoid trying a meditation group because they assume it means joining some kind of organization. Most of the communities listed here go out of their way to say the opposite: they're independent.",
      "Formats vary widely, from short group sits to full-day programs held outdoors. No prior practice is required anywhere. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Startup / Tech": {
    h1: "Startup and tech communities in Budapest",
    title: "Startup and tech communities in Budapest",
    description:
      "Startup meetups, founder communities and AI meetups in Budapest. A free list of regularly running professional communities.",
    intro: [
      "Budapest's startup and tech scene is small enough that a handful of recurring events will introduce you to most of it. The hard part is knowing which ones those are.",
      "The communities listed here meet monthly or more often, and most welcome curious newcomers, not just founders or engineers. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  Tánc: {
    h1: "Social dance communities in Budapest",
    title: "Dance communities in Budapest",
    description:
      "Salsa, bachata and other social dance nights in Budapest, open to beginners. A free list of dance communities.",
    intro: [
      "The whole point of social dance is that you're not supposed to arrive as a couple: you rotate partners on the floor, and that's exactly what makes it a community rather than a date night. Showing up alone isn't awkward, it's the norm.",
      "Most events start with a beginner lesson covering the basic steps, so you can walk in with zero prior experience. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Networking / Digitális Nomád": {
    h1: "Digital nomad and networking communities in Budapest",
    title: "Digital nomad communities in Budapest",
    description:
      "Communities for digital nomads and remote workers in Budapest: events, housing tips, networking. A free list.",
    intro: [
      "If you've come to Budapest for just a few months, you don't have time to slowly integrate somewhere. These communities are built for exactly that situation: fast entry, frequent events.",
      "They cover the practical side too, from housing to job leads, so they're not just about company, they make the first weeks of moving in easier as well. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "LMBTQ+ Közösség": {
    h1: "LGBTQ+ communities and events in Budapest",
    title: "LGBTQ+ communities in Budapest",
    description:
      "LGBTQ+ communities and shared activities in Budapest, in a safe, welcoming atmosphere. A free list.",
    intro: [
      "The communities listed here aim to be a space where you don't have to explain yourself, and where the shared activity is the point, not introductions.",
      "Formats range from group hikes to casual meetups, and every one listed here is open to new people. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Önkéntesség / Közösségi akció": {
    h1: "Volunteer communities and initiatives in Budapest",
    title: "Volunteer communities in Budapest",
    description:
      "Volunteer initiatives and charity actions in Budapest that you can join for a single occasion. A free list.",
    intro: [
      "Volunteering has a double payoff: you do something worthwhile, and you meet people while doing it. That's a much easier setup than an event where talking is the entire point.",
      "The initiatives listed here typically let you join for a single occasion, with no ongoing commitment and no prior experience required. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Szülők / Családok": {
    h1: "Communities for parents and families in Budapest",
    title: "Parent and family communities in Budapest",
    description:
      "Communities for new parents and families in Budapest, for both Hungarian and international parents. A free list.",
    intro: [
      "Most of your old social life disappears with a small child, and rebuilding it is hard because everything now runs on the kid's schedule. These communities are designed around exactly that constraint.",
      "Meetups usually happen during the day, kids are welcome, and several groups specifically target international parents who've moved to Budapest. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Nyilvános beszéd": {
    h1: "Public speaking clubs in Budapest",
    title: "Public speaking clubs in Budapest",
    description:
      "Clubs where you can practice public speaking and presentation skills in Budapest, in a structured, supportive environment. A free list.",
    intro: [
      "These clubs work because they're structured: every session follows a fixed format, you know in advance when your turn comes, and everyone else in the room is in the same boat.",
      "Almost everywhere lets you sit in as a guest without speaking, and decide afterward whether to join. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
  "Katolikus Közösségek": {
    h1: "Catholic communities in Budapest",
    title: "Catholic communities in Budapest",
    description:
      "Prayer groups, choirs and faith-focused communities in Budapest and across Hungary. A free list.",
    intro: [
      "Most parish communities don't advertise online at all, so they're nearly invisible from the outside, even though many genuinely welcome newcomers.",
      "The directories listed here cover the different formats, from prayer groups to choirs to discussion-based communities. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  },
};

export function getCategorySeoEn(huCategory: string, clubCount: number, enName: string): CategorySeoEn {
  const known = SEO_EN[huCategory];
  if (known) return known;

  const plural = clubCount === 1 ? "community" : "communities";
  return {
    h1: `${enName} communities in Budapest`,
    title: `${enName} communities in Budapest`,
    description: `A list of Budapest communities focused on ${enName.toLowerCase()}. Free to browse, no sign-up required.`,
    intro: [
      `This category currently lists ${clubCount} ${plural}. Each one is a real, active Budapest community with its own Instagram or website.`,
      "There's no need to register with us to join: click through to the community's own link and get in touch with them directly. This list is hand-curated and kept up to date by Budapesti Közösségek.",
    ],
  };
}
