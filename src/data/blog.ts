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
        text: "Ha futóklubot keresel Budapesten, jó eséllyel nem kizárólag a teljesítményed miatt akarsz csatlakozni, hanem azért, mert a közös futás egyszerre mozgás és társaság. Nem kell versenyzőnek lenned ahhoz, hogy örömöd legyen benne: a legtöbb budapesti futóközösség kifejezetten a vegyes szintű, beszélgetős tempót részesíti előnyben a teljesítménnyel szemben. Az alábbi hat klub mind valódi, aktív budapesti közösség, mindegyikhez ingyenesen csatlakozhatsz, klubtagság vagy előzetes futótapasztalat nélkül.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Bridget Runners Budapest",
            note: "Budapest első kifejezetten női futóklubja. A közös hétvégi futásokat rendszerint közös brunch követi, így a hangsúly legalább annyira van a beszélgetésen és az ismerkedésen, mint magán a futáson. Kezdőknek is barátságos: a csoport több tempóban fut, senki nem marad le egyedül.",
            href: "https://linktr.ee/bridgetrunners",
          },
          {
            name: "Runners High | Budapest Run Club",
            note: "Heti több alkalommal (keddi és csütörtöki este, valamint vasárnap reggel) tartott közös futások, vegyes szintekkel. A klub aktívan posztol Instagramon a következő találkozó helyszínéről és időpontjáról, így könnyű előre tájékozódni, mielőtt először csatlakozol.",
            href: "https://www.instagram.com/runnershighbud/",
          },
          {
            name: "Angyalföldi Futóklub",
            note: "Kerületi futóklub a XIII. kerületben, amely kifejezetten kezdőknek és haladóknak egyaránt szól. A kerületi jelleg miatt sokan a szomszédságból csatlakoznak, ezért a hangulat kevésbé formális, mint egy nagyvárosi futóegyesületnél.",
            href: "https://www.facebook.com/p/Angyalf%C3%B6ldi-Fut%C3%B3klub-100063959566104/",
          },
          {
            name: "Running Latte Club",
            note: "Nem hagyományos klubhelyiséghez kötött közösség, hanem baráti találkozópont: a közös futást mindig kávézással köti össze. Ideális, ha a társasági rész legalább annyira fontos neked, mint maga a mozgás.",
            href: "https://www.instagram.com/runninglatteclub/",
          },
          {
            name: "Run Crew Budapest",
            note: "Elsősorban közösségként, csak másodsorban futóklubként definiálja magát: nyáron alakult csapat, amely futás után gyakran strandol vagy kávézik együtt. Laza, fiatalos hangulat jellemzi.",
            href: "https://www.instagram.com/the_runcrew/",
          },
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, bármilyen futótempóval. Nincs regisztráció, nincs elvárás: egyszerűen megjelensz a megadott időpontban és helyszínen, és csatlakozol a csoporthoz.",
            href: "https://mozaikmed.hu/",
          },
        ],
      },
      { type: "h2", text: "Melyik futóklubot válaszd?" },
      {
        type: "p",
        text: "Ha teljesen kezdő vagy, a Mozaik Med szigeti futása vagy az Angyalföldi Futóklub a legkevésbé megterhelő belépő, mert nincs elvárt tempó, és a hangulat kifejezetten laza. Ha inkább a közösségi élmény a fontos a teljesítménynél, a Running Latte Club vagy a Run Crew Budapest ajánlott a kávézós, baráti hangvételéért. Ha kifejezetten nőtársakkal futnál, a Bridget Runners Budapest a legjobb kiindulópont, mert kifejezetten erre a közegre épült fel a közösség.",
      },
      {
        type: "citation",
        text: "Harvard Health Publishing: miért segít jobban a motivációban, ha nem egyedül sportolsz",
        href: "https://www.health.harvard.edu/heart-health/need-more-inspiration-to-exercise-dont-go-it-alone",
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
            a: "Nem, mind a hat klub ingyenesen látogatható, klubtagsági díj nélkül, legfeljebb a saját felszerelést kell megoldani.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kereshető és szűrhető sportklub-listát a Budapesti Közösségek katalógusában találod, ahol kerület és kategória szerint is szűrhetsz.",
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
        text: "Az első alkalom mindig a legnehezebb: bemenni egy terembe, vagy odaállni egy futócsoporthoz, ahol senkit sem ismersz. Ez teljesen normális reakció, és pontosan emiatt lett a legtöbb itt szereplő közösség eleve kezdőbarátra tervezve. A legtöbb szervező is pontosan tudja, milyen érzés elsőként megjelenni, hiszen ő maga is így kezdte egykor. Az alábbi néhány dolog segít, hogy az első alkalom ne legyen akkora falat.",
      },
      { type: "h2", text: "Válassz olyan közösséget, ahol van visszatérő, fix alkalom" },
      {
        type: "p",
        text: "Egy heti rendszerességű futás, könyvklub vagy nyelvcsere sokkal kevésbé nyomasztó, mint egy egyszeri nagy esemény, mert tudod, hogy ha most nem sikerül igazán megismerkedned valakivel, jövő héten újra ott lesz a lehetőség. Az egyszeri, nagy létszámú rendezvényeken sokkal nagyobb a nyomás, hogy már az első alkalommal minden jól sikerüljön, miközben egy rendszeres alkalomnál ez a nyomás fokozatosan feloldódik.",
      },
      { type: "h2", text: "Írj előre üzenetet a szervezőnek" },
      {
        type: "p",
        text: "A legtöbb budapesti közösség Instagramon vagy Facebookon aktív, és a szervezők szívesen válaszolnak egy rövid üzenetre azelőtt, hogy megjelennél. Ez nemcsak a gyakorlati kérdéseket (hol, mikor, mit hozz magaddal) tisztázza, hanem azt is elősegíti, hogy már legyen egy ismerős név, amikor odaérsz, ami sokat old a kezdeti feszültségen.",
      },
      { type: "h2", text: "Ne az első csoportnál add fel" },
      {
        type: "p",
        text: "Nem minden közösség hangulata fog illeni hozzád elsőre, és ez teljesen rendben van. Ha az első próbálkozás nem jött be, ez nem azt jelenti, hogy neked nem való a közösségi élet, csak azt, hogy ez a konkrét csoport nem volt a megfelelő. Budapesten ugyanabban a témában (legyen az futás, olvasás vagy társasjáték) rendszerint több különböző hangulatú közösség is működik párhuzamosan.",
      },
      {
        type: "list",
        items: [
          "Válassz olyan aktivitást, amit egyébként is szeretsz csinálni: könnyebb beszélgetni, ha közben van egy közös elfoglaltság",
          "Érkezz néhány perccel korábban: kevésbé feltűnő egyedül beállni egy még gyülekező csoportba, mint egy már összeállt körbe",
          "Adj magadnak legalább két-három alkalmat egy adott közösségnél, mielőtt eldöntenéd, hogy nem a tiéd",
        ],
      },
      {
        type: "citation",
        text: "Healthline: kilenc szakértők által javasolt módszer a szociális szorongás leküzdésére",
        href: "https://www.healthline.com/health/anxiety/how-to-get-over-social-anxiety",
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
        text: "Budapest tele van nemzetközi közösséggel: külföldiek, digitális nomádok, és olyan helyiek, akik szívesen gyakorolnának egy idegen nyelvet valódi, élő beszélgetésben. Az alábbi négy közösség mind aktív, ingyenesen látogatható, és mindegyiknek pontosan az a lényege, hogy új emberekkel hozzon össze, akár egy közös nyelv, akár egyszerűen a közös nyitottság mentén.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Budapest Language Exchange (BPLX)",
            note: "2012 óta működő, jól bejáratott nyelvcsere közösség, ahol helyiek és külföldiek gyakorolhatnak nyelveket egymással. A hosszú múlt miatt a formátum kiforrott: általában kis csoportokban, rotáló beszélgetőpartnerekkel zajlik az est.",
            href: "https://www.meetup.com/budapest/",
          },
          {
            name: "International Socializing in Budapest",
            note: "Heti szombat esti összejövetel helyieknek, expatoknak és utazóknak nyelvgyakorlásra és ismerkedésre. A hangsúly kevésbé a strukturált nyelvtanuláson, inkább a laza, nemzetközi társasági élményen van.",
            href: "https://www.meetup.com/international-socializing-in-budapest/",
          },
          {
            name: "Budapest Digital Nomads",
            note: "Facebook közösség digitális nomádoknak: állásajánlatok, szállás-tippek és rendszeres közösségi események egy helyen. Elsősorban azoknak hasznos, akik szakmailag is szeretnének kapcsolódni más külföldi szabadúszókhoz vagy távmunkásokhoz.",
            href: "https://www.facebook.com/groups/budapestdigitalnomads/",
          },
          {
            name: "Havervagy",
            note: "Közösség nyitott, hasonló gondolkodású embereknek, akik szeretnének új barátokat találni: rendszeres közösségi buliknak és programoknak ad otthont, nyelvtől és háttértől függetlenül.",
            href: "https://www.instagram.com/havervagy/",
          },
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha kifejezetten nyelvet gyakorolnál?" },
      {
        type: "p",
        text: "Ha konkrétan nyelvgyakorlás a cél, a Budapest Language Exchange (BPLX) a legrégebbi és legkiforrottabb formátum erre, mert a struktúrája kifejezetten a rotáló beszélgetésekre épül. Ha inkább laza, nyelvfüggetlen ismerkedésre vágysz nemzetközi közegben, az International Socializing in Budapest szombat esti alkalmai jobban illenek hozzád. A Budapest Digital Nomads elsősorban azoknak jó, akik szakmailag is szeretnének kapcsolódni más külföldiekhez, a Havervagy pedig azoknak, akik egyszerűen csak új baráti kört keresnek, nyelvtől és szakmától teljesen függetlenül.",
      },
      {
        type: "citation",
        text: "Tandem: nyolc kutatással alátámasztott előny, amit a nyelvcsere ad a hagyományos nyelvtanuláshoz képest",
        href: "https://tandem.net/blog/benefits-language-exchange",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e jól beszélnem angolul ezekhez a közösségekhez?",
            a: "Nem feltétlenül. A legtöbb ilyen alkalom kifejezetten kevert szintű, sok résztvevő maga is nyelvet gyakorol, tehát a tökéletlen nyelvtudás nem akadály.",
          },
          {
            q: "Kell-e előzetesen jelentkezni ezekre az alkalmakra?",
            a: "Általában nem, de érdemes megnézni az adott közösség Instagram- vagy Meetup-oldalát közvetlenül az esemény előtt, mert néhány alkalomhoz mégis kérnek gyors jelentkezést.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes nyelvcsere- és networking-közösség listát a Budapesti Közösségek katalógusában találod, ahol a többi kategóriát is böngészheted.",
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
        text: "Az egyik leggyakoribb ok, amiért valaki nem csatlakozik egy közösséghez, hogy nincs kivel elmennie elsőre. Az alábbi nyolc budapesti közösségnek pontosan az a lényege, hogy egyedül érkező emberekre van kitalálva: vegyes hátterű, nyitott csoportok, ahol nem kell ismerőssel érkezned, és nem is számítanak rá.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, bármilyen futótempóval. A résztvevők nagy része maga is egyedül érkezik, így senki nem lóg ki a sorból.",
            href: "https://mozaikmed.hu/",
          },
          {
            name: "Unicorn Book Club",
            note: "Non-fiction fókuszú könyvklub havi rendszerességű beszélgetésekkel Budapesten. A közös könyv önmagában beszélgetési alapot ad, így nem kell aktívan társalgási témát keresned.",
            href: "https://unicornbookclub.hu/",
          },
          {
            name: "TIA Game Cave",
            note: "Ingyenes belépésű társasjáték-közösség 14-99 éveseknek: nincs tagsági díj, csak csatlakozni kell. A társasjáték jó ürügy a beszélgetésre azoknak is, akik kevésbé szeretnek kötetlenül csevegni.",
            href: "https://www.facebook.com/groups/263358474501496/",
          },
          {
            name: "Margitszigeti Jóga",
            note: "Közösségi szabadtéri jógaórák a Margitszigeten, tíz éve működő, barátságos csapattal. A rendszeres, ismétlődő időpontok miatt könnyű visszajáró arcokkal újra találkozni.",
            href: "https://www.instagram.com/margitszigetijoga.hu/",
          },
          {
            name: "International Socializing in Budapest",
            note: "Heti szombat esti összejövetel helyieknek, expatoknak és utazóknak nyelvgyakorlásra és ismerkedésre, kifejezetten egyedül érkezőkre kalibrálva.",
            href: "https://www.meetup.com/international-socializing-in-budapest/",
          },
          {
            name: "Just Connect",
            note: "Offline közösségi eseménysorozat, amely hegyi túrákkal és laza összejövetelekkel hoz össze nyitott embereket, sokszor kifejezetten azoknak, akik új városban keresnek társaságot.",
            href: "https://www.instagram.com/justconnect.hu/",
          },
          {
            name: "Budapest Personal Growth Meetup",
            note: "Nyílt, vallástól és szervezettől független meditációs és önismereti közösség, változó helyszíneken. A közös téma (önismeret) miatt a beszélgetések gyakran mélyebbek, mint egy átlagos ismerkedős eseményen.",
            href: "https://www.meetup.com/budapest-personal-growth-szemelyes-fejl%C5%91des-meetup/",
          },
          {
            name: "Havervagy",
            note: "Közösség nyitott, hasonló gondolkodású embereknek, akik szeretnének új barátokat találni, kifejezetten azzal a céllal létrehozva, hogy az egyedül érkezők is otthon érezzék magukat.",
            href: "https://www.instagram.com/havervagy/",
          },
        ],
      },
      { type: "h2", text: "Miért pont ezek a közösségek egyedülállóknak valók?" },
      {
        type: "p",
        text: "Mindegyik felsorolt közösségnek van egy közös vonása: a résztvevők nagy része maga is egyedül, ismerős nélkül érkezik, tehát a csoport hozzá van szokva az új arcokhoz. Nincs zárt, régóta összeszokott klikk, amibe nehéz bekerülni, a rendszeres, nyílt alkalmak miatt mindig van friss ismerkedés, és a szervezők is tudatosan figyelnek arra, hogy az újonnan érkezők ne érezzék magukat kívülállónak.",
      },
      {
        type: "citation",
        text: "SucceedSocially: gyakorlati tanácsok, hogyan menj el egyedül társasági eseményekre új barátok szerzése céljából",
        href: "https://www.succeedsocially.com/goingoutalone",
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
      "Kutatások szerint a rendszeres társas kapcsolat mérhetően védi a mentális egészséget: összefoglaljuk, miért érdemes komolyan venni a közösségkeresést.",
    kind: "guide",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A magány nem csak kellemetlen érzés, hanem mérhető egészségügyi kockázati tényező is. Az Egészségügyi Világszervezet (WHO) 2023-as jelentése a társas elszigeteltséget és a magányt globális közegészségügyi problémaként azonosította, hasonló súlyú kockázati tényezőként, mint a dohányzás vagy a mozgásszegény életmód. Ez azt jelenti, hogy a rendszeres közösségi részvétel nem luxus vagy szabadidős tevékenység, hanem egy olyan beruházás, aminek mérhető hozadéka van a hosszú távú egészségre.",
      },
      {
        type: "citation",
        text: "WHO Commission on Social Connection: a magány és a társas elszigeteltség hatásairól szóló jelentés",
        href: "https://www.who.int/groups/commission-on-social-connection",
      },
      { type: "h2", text: "Mit mond erről a kutatás?" },
      {
        type: "p",
        text: "A rendszeres, valódi társas kapcsolatok csökkentik a szorongás és a depresszió kockázatát, javítják az alvásminőséget, és hosszabb távon a fizikai egészségre is mérhető hatásuk van. A kulcs nem a kapcsolatok száma, hanem azok rendszeressége és minősége: egy heti visszatérő közösségi alkalom többet ér, mint ritka, nagy, egyszeri események, mert a rendszeresség teszi lehetővé, hogy a felszínes ismeretségből valódi kapcsolat alakuljon ki.",
      },
      { type: "h2", text: "Miért nehezebb ez felnőttként, mint gyerekként?" },
      {
        type: "p",
        text: "Gyerekként és egyetemistaként a barátságok szinte automatikusan alakulnak ki: közös iskola, kollégium, közös órarend biztosítja a rendszeres találkozást. Felnőttként, munka mellett, ez a struktúra megszűnik, ezért kell tudatosan felkeresni azokat a helyeket (klubok, közösségek, rendszeres programok), amik pótolják ezt a korábban véletlenszerűen adott találkozási felületet.",
      },
      {
        type: "list",
        items: [
          "Válassz olyan közösséget, ami rendszeresen, heti vagy kétheti gyakorisággal találkozik",
          "Ne várd, hogy egy alkalom elég legyen: a mély kapcsolatok több találkozás alatt alakulnak ki",
          "Építs a közös tevékenységre (sport, olvasás, alkotás), ne csak a beszélgetésre, mert ez csökkenti a kezdeti nyomást",
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
            a: "Kutatások szerint egy hétköznapi barátság kialakulásához átlagosan ötven óra közös idő szükséges, ezért számít többet egy rendszeres, visszatérő közösségi alkalom, mint egy-két egyszeri esemény.",
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
