export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "clublist"; items: { name: string; note: string; href: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  kind: "listicle" | "guide";
  category: string | null;
  author: string;
  publishedAt: string;
  updatedAt: string;
  body: BlogBlock[];
};

export const DEFAULT_AUTHOR = "Budapesti Közösségek szerkesztősége";

export const posts: BlogPost[] = [
  {
    slug: "legjobb-futoklubok-budapesten",
    title: "6 legjobb futóklub Budapesten kezdőknek és haladóknak",
    description:
      "Női futóklub, kávézós futás, kerületi közösség és ingyenes szigeti futóest: hat valódi budapesti futóklub, amelyhez bárki csatlakozhat.",
    kind: "listicle",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    body: [
      {
        type: "p",
        text: "Ha futóklubot keresel Budapesten, jó eséllyel nem a teljesítményed miatt akarsz csatlakozni, hanem azért, mert a közös futás egyszerre mozgás és társaság. Az alábbi hat klub mind valódi, aktív budapesti közösség — mindegyikhez ingyenesen csatlakozhatsz, klubtagság vagy előzetes tapasztalat nélkül.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Bridget Runners Budapest",
            note: "Budapest első női futóklubja, közös hétvégi futásokkal és brunch-csal — kezdőknek is barátságos.",
            href: "https://linktr.ee/bridgetrunners",
          },
          {
            name: "Runners High | Budapest Run Club",
            note: "Keddi és csütörtöki esti, valamint vasárnap reggeli közös futások, vegyes szintekkel.",
            href: "https://www.instagram.com/runnershighbud/",
          },
          {
            name: "Angyalföldi Futóklub",
            note: "Kerületi futóklub a XIII. kerületben, kezdőknek és haladóknak egyaránt.",
            href: "https://www.facebook.com/p/Angyalf%C3%B6ldi-Fut%C3%B3klub-100063959566104/",
          },
          {
            name: "Running Latte Club",
            note: "Nem klubhelyiség, hanem baráti találkozópont: a közös futást kávézással köti össze.",
            href: "https://www.instagram.com/runninglatteclub/",
          },
          {
            name: "Run Crew Budapest",
            note: "Elsősorban közösség, aztán futóklub — nyáron alakult csapat, ami futás után strandol vagy kávézik.",
            href: "https://www.instagram.com/the_runcrew/",
          },
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, bármilyen futótempóval.",
            href: "https://mozaikmed.hu/",
          },
        ],
      },
      { type: "h2", text: "Melyik futóklubot válaszd?" },
      {
        type: "p",
        text: "Ha teljesen kezdő vagy, a Mozaik Med szigeti futása vagy az Angyalföldi Futóklub a legkevésbé megterhelő belépő, mert nincs elvárt tempó. Ha inkább a közösségi élmény a fontos a teljesítménynél, a Running Latte Club vagy a Run Crew Budapest a kávézós, laza hangvételéért ajánlott. Ha kifejezetten nőtársakkal futnál, a Bridget Runners Budapest a legjobb kiindulópont.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e felszerelés vagy előzetes tapasztalat egy budapesti futóklubhoz csatlakozáshoz?",
            a: "Nem, a legtöbb itt felsorolt klub kifejezetten kezdőbarát: elég egy pár futócipő, a tempót mindenhol a csoporthoz lehet igazítani.",
          },
          {
            q: "Fizetni kell-e ezekhez a futóklubokhoz?",
            a: "Nem, mind a hat klub ingyenesen látogatható, klubtagsági díj nélkül — legfeljebb a saját felszerelést kell megoldani.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kereshető és szűrhető sportklub-listát a Budapesti Közösségek katalógusában találod.",
      },
    ],
  },
  {
    slug: "hogyan-csatlakozz-ha-felsz-egyedul-elmenni",
    title: "Hogyan csatlakozz egy közösséghez, ha félsz egyedül elmenni?",
    description:
      "Gyakorlati lépések, ha szeretnél új embereket megismerni Budapesten, de az első alkalom egyedül belépni egy idegen csoportba ijesztőnek tűnik.",
    kind: "guide",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    body: [
      {
        type: "p",
        text: "Az első alkalom mindig a legnehezebb: bemenni egy terembe vagy odaállni egy futócsoporthoz, ahol senkit sem ismersz. Ez teljesen normális, és pontosan emiatt lett a legtöbb itt szereplő közösség eleve kezdőbarátra tervezve. Az alábbi néhány dolog segít, hogy az első alkalom ne legyen akkora falat.",
      },
      { type: "h2", text: "Válassz olyan közösséget, ahol van visszatérő, fix alkalom" },
      {
        type: "p",
        text: "Egy heti rendszerességű futás, könyvklub vagy nyelvcsere sokkal kevésbé nyomasztó, mint egy egyszeri nagy esemény, mert tudod, hogy ha most nem sikerül igazán megismerkedned valakivel, jövő héten újra ott lesz a lehetőség.",
      },
      { type: "h2", text: "Írj előre üzenetet a szervezőnek" },
      {
        type: "p",
        text: "A legtöbb budapesti közösség Instagramon vagy Facebookon aktív, és a szervezők szívesen válaszolnak egy rövid üzenetre azelőtt, hogy megjelennél. Ez nemcsak a gyakorlati kérdéseket (hol, mikor, mit hozz) tisztázza, hanem azt is, hogy már lesz egy ismerős név, amikor odaérsz.",
      },
      { type: "h2", text: "Ne az első csoportnál add fel" },
      {
        type: "p",
        text: "Nem minden közösség hangulata fog illeni hozzád elsőre, és ez rendben van. Ha az első próbálkozás nem jött be, ez nem azt jelenti, hogy neked nem való a közösségi élet, csak azt, hogy ez a konkrét csoport nem volt a megfelelő.",
      },
      {
        type: "list",
        items: [
          "Válassz olyan aktivitást, amit egyébként is szeretsz csinálni — könnyebb beszélgetni, ha közben van egy közös elfoglaltság",
          "Érkezz néhány perccel korábban: kevésbé feltűnő egyedül beállni egy még gyülekező csoportba, mint egy már összeállt körbe",
          "Adj magadnak legalább 2-3 alkalmat egy adott közösségnél, mielőtt eldöntenéd, hogy nem a tiéd",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Mi van, ha senkivel nem sikerül beszélgetnem az első alkalommal?",
            a: "Ez gyakori, és nem jelenti azt, hogy rosszul csináltad. A legtöbb visszatérő közösségi alkalomnál a második-harmadik alkalomra alakulnak ki az első igazi ismeretségek.",
          },
          {
            q: "Melyik budapesti közösségek a legjobbak, ha kifejezetten újként, ismerősök nélkül költöztem a városba?",
            a: "A rendszeres, alacsony belépési küszöbű közösségek (ingyenes futóklubok, nyelvcsere-estek, könyvklubok) a legjobb kiindulópont, mert nincs elvárt előzetes tudás vagy kapcsolat.",
          },
        ],
      },
      {
        type: "p",
        text: "Ha még nem tudod, hol kezdd, böngéssz a Budapesti Közösségek teljes katalógusában kategória szerint, és válassz egy olyan aktivitást, amit egyébként is szívesen csinálnál.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
