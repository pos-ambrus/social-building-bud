export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "clublist"; items: { name: string; note: string; href: string }[] }
  | { type: "citation"; text: string; href: string }
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
  {
    slug: "nyelvcsere-networking-kozossegek-budapesten",
    title: "4 közösség Budapesten, ahol nyelvet gyakorolhatsz és új embereket ismerhetsz meg",
    description:
      "Helyi és nemzetközi közösségek, ahol nyelvet gyakorolhatsz, digitális nomádokkal, expatokkal vagy egyszerűen nyitott emberekkel ismerkedhetsz Budapesten.",
    kind: "listicle",
    category: "Nyelvcsere / Networking",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    body: [
      {
        type: "p",
        text: "Budapest tele van nemzetközi közösséggel: külföldiek, digitális nomádok, nyelvet gyakorló helyiek. Az alábbi négy közösség mind aktív, ingyenesen látogatható, és mindegyiknek pontosan az a lényege, hogy új emberekkel hozzon össze — akár egy közös nyelv, akár egyszerűen a nyitottság mentén.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Budapest Language Exchange (BPLX)",
            note: "2012 óta működő nyelvcsere közösség, ahol helyiek és külföldiek gyakorolhatnak nyelveket egymással.",
            href: "https://www.meetup.com/budapest/",
          },
          {
            name: "International Socializing in Budapest",
            note: "Heti szombat esti összejövetel helyieknek, expatoknak és utazóknak nyelvgyakorlásra és ismerkedésre.",
            href: "https://www.meetup.com/international-socializing-in-budapest/",
          },
          {
            name: "Budapest Digital Nomads",
            note: "Facebook közösség digitális nomádoknak: állásajánlatok, szállás és rendszeres közösségi események.",
            href: "https://www.facebook.com/groups/budapestdigitalnomads/",
          },
          {
            name: "Havervagy",
            note: "Közösség nyitott, hasonló gondolkodású embereknek, akik szeretnének új barátokat találni: rendszeres közösségi buliknak ad otthont.",
            href: "https://www.instagram.com/havervagy/",
          },
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha kifejezetten nyelvet gyakorolnál?" },
      {
        type: "p",
        text: "Ha konkrétan nyelvgyakorlás a cél, a Budapest Language Exchange (BPLX) a legrégebbi és legkiforrottabb formátum erre. Ha inkább laza, nyelvfüggetlen ismerkedésre vágysz nemzetközi közegben, az International Socializing in Budapest szombat esti alkalmai jobban illenek. A Budapest Digital Nomads elsősorban azoknak jó, akik szakmailag is szeretnének kapcsolódni más külföldiekhez, a Havervagy pedig azoknak, akik egyszerűen csak új baráti kört keresnek, nyelvtől függetlenül.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e jól beszélnem angolul ezekhez a közösségekhez?",
            a: "Nem feltétlenül — a legtöbb ilyen alkalom kifejezetten kevert szintű, sok résztvevő maga is nyelvet gyakorol, tehát a tökéletlen nyelvtudás nem akadály.",
          },
          {
            q: "Kell-e előzetesen jelentkezni ezekre az alkalmakra?",
            a: "Általában nem, de érdemes megnézni az adott közösség Instagram- vagy Meetup-oldalát közvetlenül az esemény előtt, mert néhány alkalomhoz mégis kérnek gyors jelentkezést.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes nyelvcsere- és networking-közösség listát a Budapesti Közösségek katalógusában találod.",
      },
    ],
  },
  {
    slug: "8-kozosseg-ahova-egyedul-is-mehetsz",
    title: "8 közösség Budapesten, ahova egyedül is mehetsz, és mégsem leszel egyedül",
    description:
      "Futás, könyvklub, társasjáték, jóga és túrázás: nyolc valódi budapesti közösség, amelyhez egyedül is bátran csatlakozhatsz.",
    kind: "listicle",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Az egyik leggyakoribb ok, amiért valaki nem csatlakozik egy közösséghez, hogy nincs kivel elmennie elsőre. Az alábbi nyolc budapesti közösségnek pontosan az a lényege, hogy egyedül érkező emberekre van kitalálva — vegyes hátterű, nyitott csoportok, ahol nem kell ismerőssel érkezned.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, bármilyen futótempóval.",
            href: "https://mozaikmed.hu/",
          },
          {
            name: "Unicorn Book Club",
            note: "Non-fiction fókuszú könyvklub havi rendszerességű beszélgetésekkel Budapesten.",
            href: "https://unicornbookclub.hu/",
          },
          {
            name: "TIA Game Cave",
            note: "Ingyenes belépésű társasjáték-közösség 14-99 éveseknek: nincs tagsági díj, csak csatlakozni kell.",
            href: "https://www.facebook.com/groups/263358474501496/",
          },
          {
            name: "Margitszigeti Jóga",
            note: "Közösségi szabadtéri jógaórák a Margitszigeten, tíz éve működő, barátságos csapattal.",
            href: "https://www.instagram.com/margitszigetijoga.hu/",
          },
          {
            name: "International Socializing in Budapest",
            note: "Heti szombat esti összejövetel helyieknek, expatoknak és utazóknak nyelvgyakorlásra és ismerkedésre.",
            href: "https://www.meetup.com/international-socializing-in-budapest/",
          },
          {
            name: "Just Connect",
            note: "Offline közösségi eseménysorozat, amely hegyi túrákkal és laza összejövetelekkel hoz össze nyitott embereket.",
            href: "https://www.instagram.com/justconnect.hu/",
          },
          {
            name: "Budapest Personal Growth Meetup",
            note: "Nyílt, vallástól és szervezettől független meditációs és önismereti közösség, változó helyszíneken.",
            href: "https://www.meetup.com/budapest-personal-growth-szemelyes-fejl%C5%91des-meetup/",
          },
          {
            name: "Havervagy",
            note: "Közösség nyitott, hasonló gondolkodású embereknek, akik szeretnének új barátokat találni.",
            href: "https://www.instagram.com/havervagy/",
          },
        ],
      },
      { type: "h2", text: "Miért pont ezek a közösségek egyedülállóknak valók?" },
      {
        type: "p",
        text: "Mindegyik felsorolt közösségnek van egy közös vonása: a résztvevők nagy része maga is egyedül, ismerős nélkül érkezik, tehát a csoport hozzá van szokva az új arcokhoz. Nincs zárt, régóta összeszokott klikk, amibe nehéz bekerülni — a rendszeres, nyílt alkalmak miatt mindig van friss ismerkedés.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Melyik a legkevésbé megterhelő belépő, ha még sosem jártam hasonló közösségben?",
            a: "A Mozaik Med szigeti futása vagy a TIA Game Cave a legkevésbé megterhelő kezdés, mert nincs elvárt előzetes tudás, és a hangulat kifejezetten laza.",
          },
          {
            q: "Mennyire kell aktívnak vagy extrovertáltnak lennem ezekhez a közösségekhez?",
            a: "Egyáltalán nem szükséges: a legtöbb felsorolt közösség kifejezetten introvertált vagy csendesebb embereknek is barátságos, mert a közös tevékenység (futás, olvasás, társasjáték) önmagában is beszélgetési alapot ad.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kereshető klublistát a Budapesti Közösségek katalógusában böngészheted kategória szerint.",
      },
    ],
  },
  {
    slug: "miert-fontos-a-kozossegi-hovatartozas",
    title: "Miért fontos a közösséghez tartozás a mentális egészségnek?",
    description:
      "Kutatások szerint a rendszeres társas kapcsolat mérhetően védi a mentális egészséget — összefoglaljuk, miért érdemes komolyan venni a közösségkeresést.",
    kind: "guide",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A magány nem csak kellemetlen érzés, hanem mérhető egészségügyi kockázati tényező is. Az Egészségügyi Világszervezet (WHO) 2023-as jelentése a társas elszigeteltséget és a magányt globális közegészségügyi problémaként azonosította, hasonló súlyú kockázati tényezőként, mint a dohányzás vagy a mozgásszegény életmód.",
      },
      {
        type: "citation",
        text: "WHO Commission on Social Connection — a magány és a társas elszigeteltség hatásairól szóló jelentés",
        href: "https://www.who.int/groups/commission-on-social-connection",
      },
      { type: "h2", text: "Mit mond erről a kutatás?" },
      {
        type: "p",
        text: "A rendszeres, valódi társas kapcsolatok csökkentik a szorongás és a depresszió kockázatát, javítják az alvásminőséget, és hosszabb távon a fizikai egészségre is mérhető hatásuk van. A kulcs nem a kapcsolatok száma, hanem azok rendszeressége és minősége — egy heti visszatérő közösségi alkalom többet ér, mint ritka, nagy, egyszeri események.",
      },
      { type: "h2", text: "Miért nehezebb ez felnőttként, mint gyerekként?" },
      {
        type: "p",
        text: "Gyerekként és egyetemistaként a barátságok szinte automatikusan alakulnak ki: iskola, kollégium, közös órarend. Felnőttként, munka mellett, ez a struktúra megszűnik — ezért kell tudatosan felkeresni azokat a helyeket (klubok, közösségek, rendszeres programok), amik pótolják ezt a véletlenszerű találkozási felületet.",
      },
      {
        type: "list",
        items: [
          "Válassz olyan közösséget, ami rendszeresen (heti vagy kétheti gyakorisággal) találkozik",
          "Ne várd, hogy egy alkalom elég legyen — a mély kapcsolatok több találkozás alatt alakulnak ki",
          "Építs a közös tevékenységre (sport, olvasás, alkotás), ne csak a beszélgetésre — ez csökkenti a kezdeti nyomást",
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Tényleg mérhető egészségügyi hatása van a magánynak?",
            a: "Igen, a WHO 2023-as jelentése és több nagy mintás longitudinális kutatás is összefüggést talált a krónikus magány és a szív- és érrendszeri, valamint mentális egészségügyi kockázatok között.",
          },
          {
            q: "Mennyi idő alatt alakul ki egy új barátság egy közösségben?",
            a: "Kutatások szerint egy hétköznapi barátság kialakulásához átlagosan 50 óra közös idő szükséges — ezért számít többet egy rendszeres, visszatérő közösségi alkalom, mint egy-két egyszeri esemény.",
          },
        ],
      },
      {
        type: "p",
        text: "Ha szeretnél elkezdeni egy rendszeres közösségi alkalmat keresni, böngéssz kategória szerint a Budapesti Közösségek katalógusában.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
