export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "clublist"; items: { name: string; note: string; href: string }[] }
  | { type: "citation"; text: string; href: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  /**
   * Rövidebb változat a <title> taghez, ha a H1 túllépné azt a ~60 karaktert,
   * amennyit a Google kiír. A H1 marad a hosszú, beszédes változat.
   */
  metaTitle?: string;
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
        text: "Ha futóklubot keresel Budapesten, valljuk be, ritkán a személyes rekordodért csatlakozol, sokkal inkább azért, mert a közös futás egyszerre mozgás és társaság. Nem kell versenyzőnek lenned ahhoz, hogy örömöd legyen benne: a legtöbb budapesti futóközösség tudatosan a vegyes szintű, beszélgetős tempót részesíti előnyben a teljesítménnyel szemben. Ez a hat klub mind valódi, aktív budapesti közösség, mindegyikhez ingyenesen csatlakozhatsz, klubtagság vagy előzetes futótapasztalat nélkül.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Bridget Runners Budapest",
            note: "Budapest első, tisztán női futóklubja. A közös hétvégi futásokat rendszerint közös brunch követi, így legalább annyira a beszélgetésről és az ismerkedésről szól, mint a futásról. Kezdőknek is barátságos: a csoport több tempóban fut, senki nem marad le egyedül.",
            href: "https://linktr.ee/bridgetrunners",
          },
          {
            name: "Runners High | Budapest Run Club",
            note: "Heti több alkalommal (keddi és csütörtöki este, valamint vasárnap reggel) tartott közös futások, vegyes szintekkel. A klub aktívan posztol Instagramon a következő találkozó helyszínéről és időpontjáról, így könnyű előre tájékozódni, mielőtt először csatlakozol.",
            href: "https://www.instagram.com/runnershighbud/",
          },
          {
            name: "Angyalföldi Futóklub",
            note: "Kerületi futóklub a XIII. kerületben, kezdőknek és haladóknak egyaránt. A kerületi jelleg miatt sokan a szomszédságból csatlakoznak, ezért a hangulat kevésbé formális, mint egy nagyvárosi futóegyesületnél.",
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
        text: "Ha teljesen kezdő vagy, a Mozaik Med szigeti futása vagy az Angyalföldi Futóklub a legkevésbé megterhelő belépő, mert nincs elvárt tempó, és a hangulat igazán laza. Ha inkább a közösségi élmény számít neked a teljesítménynél, a Running Latte Club vagy a Run Crew Budapest jó választás a kávézós, baráti hangvételéért. Ha pedig konkrétan nőtársakkal futnál, a Bridget Runners Budapest a legjobb kiindulópont, hiszen erre a közegre épült a közösség.",
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
            a: "Nem, a legtöbb itt felsorolt klub kezdőbarát: elég egy pár futócipő, a tempót mindenhol a csoporthoz lehet igazítani.",
          },
          {
            q: "Fizetni kell-e ezekhez a futóklubokhoz?",
            a: "Nem, mind a hat klub ingyenesen látogatható, klubtagsági díj nélkül, legfeljebb a saját felszerelést kell megoldani.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kereshető és szűrhető sportklub-listát a Budapesti Közösségek listájában találod, ahol kerület és kategória szerint is szűrhetsz.",
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
        text: "Az első alkalom mindig a legnehezebb: bemenni egy terembe, vagy odaállni egy futócsoporthoz, ahol senkit sem ismersz. Teljesen normális, ha ettől félsz, és pontosan emiatt lett a legtöbb itt szereplő közösség eleve kezdőbarátra tervezve. A szervezők is tudják, milyen érzés elsőként megjelenni, hiszen ők maguk is így kezdték egykor. Néhány apróság sokat segít abban, hogy az első alkalom ne legyen akkora falat.",
      },
      { type: "h2", text: "Válassz olyan közösséget, ahol van visszatérő, fix alkalom" },
      {
        type: "p",
        text: "Egy heti rendszerességű futás, könyvklub vagy nyelvcsere sokkal kevésbé nyomasztó, mint egy egyszeri nagy esemény, mert tudod, hogy ha most nem sikerül igazán megismerkedned valakivel, jövő héten újra ott lesz a lehetőség. Egy nagy létszámú, egyszeri rendezvényen sokkal nagyobb a nyomás, hogy már elsőre minden jól sikerüljön, egy rendszeres alkalomnál viszont ez a nyomás fokozatosan feloldódik.",
      },
      { type: "h2", text: "Írj előre üzenetet a szervezőnek" },
      {
        type: "p",
        text: "A legtöbb budapesti közösség Instagramon vagy Facebookon aktív, és a szervezők szívesen válaszolnak egy rövid üzenetre, mielőtt megjelennél. Ez nemcsak a gyakorlati kérdéseket tisztázza (hol, mikor, mit hozz magaddal), hanem azt is elősegíti, hogy legyen már egy ismerős név, mire odaérsz, ez pedig sokat old a kezdeti feszültségen.",
      },
      { type: "h2", text: "Ne add fel az első csoportnál" },
      {
        type: "p",
        text: "Nem minden közösség hangulata fog illeni hozzád elsőre, és ez teljesen rendben van. Ha az első próbálkozás nem jött be, az nem azt jelenti, hogy neked nem való a közösségi élet, csak azt, hogy ez a konkrét csoport nem volt a megfelelő. Budapesten ugyanabban a témában, legyen az futás, olvasás vagy társasjáték, rendszerint több különböző hangulatú közösség is működik párhuzamosan, tehát ha az egyik nem jön be, van hova továbblépni.",
      },
      { type: "h2", text: "Figyelj a testbeszédedre, mielőtt megszólalnál" },
      {
        type: "p",
        text: "Mielőtt bárkivel beszélgetnél, a testbeszéded már sokat elárul arról, mennyire vagy nyitott. Egy nyitott testtartás (nem keresztbe font kar, felemelt fej, rövid szemkontaktus) sokkal könnyebbé teszi mások számára, hogy odalépjenek hozzád, mintha telefonba nézve, zárkózottan állnál a csoport szélén. Nem kell azonnal beszélgetést kezdeményezned, elég, ha látszik rajtad, hogy szívesen fogadnál egy megszólítást.",
      },
      { type: "h2", text: "Építs a közös tevékenységre beszélgetési alapként" },
      {
        type: "p",
        text: "Az egyik legnagyobb előnye annak, ha egy aktivitás köré szerveződő közösséghez csatlakozol, hogy sosem kell a semmiből beszélgetést indítanod. Mindig ott a közös téma: hogy ment a mai táv, mit gondolsz a könyvről, ki nyerte az előző kört. Ez sokkal kevésbé megterhelő, mint egy tisztán társasági eseményen, ahol a beszélgetést a nulláról kell felépíteni.",
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
            q: "Melyik budapesti közösségek a legjobbak, ha újként, ismerősök nélkül költöztem a városba?",
            a: "A rendszeres, alacsony belépési küszöbű közösségek (ingyenes futóklubok, nyelvcsere-estek, könyvklubok) a legjobb kiindulópont, mert nincs elvárt előzetes tudás vagy kapcsolat.",
          },
        ],
      },
      {
        type: "p",
        text: "Ha még nem tudod, hol kezdd, böngéssz a Budapesti Közösségek teljes listájában kategória szerint, és válassz egy olyan aktivitást, amit egyébként is szívesen csinálnál.",
      },
    ],
  },
  {
    slug: "nyelvcsere-networking-kozossegek-budapesten",
    title: "4 közösség Budapesten, ahol nyelvet gyakorolhatsz és új embereket ismerhetsz meg",
    metaTitle: "Nyelvcsere Budapesten: 4 közösség, ahol gyakorolhatsz",
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
        text: "Budapest tele van nemzetközi közösséggel: külföldiek, digitális nomádok, és olyan helyiek, akik szívesen gyakorolnának egy idegen nyelvet valódi, élő beszélgetésben. Ez a négy közösség mind aktív, ingyenesen látogatható, és mindegyiknek az a lényege, hogy új emberekkel hozzon össze, akár egy közös nyelv, akár egyszerűen a közös nyitottság mentén.",
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
      { type: "h2", text: "Melyiket válaszd, ha tényleg nyelvet gyakorolnál?" },
      {
        type: "p",
        text: "Ha konkrétan nyelvgyakorlás a cél, a Budapest Language Exchange (BPLX) a legrégebbi és legkiforrottabb formátum erre, hiszen a struktúrája a rotáló beszélgetésekre épül. Ha inkább laza, nyelvfüggetlen ismerkedésre vágysz nemzetközi közegben, az International Socializing in Budapest szombat esti alkalmai jobban illenek hozzád. A Budapest Digital Nomads elsősorban azoknak jó, akik szakmailag is kapcsolódnának más külföldiekhez, a Havervagy pedig azoknak, akik egyszerűen csak új baráti kört keresnek, nyelvtől és szakmától függetlenül.",
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
            a: "Nem feltétlenül. A legtöbb ilyen alkalom kevert szintű, sok résztvevő maga is nyelvet gyakorol, tehát a tökéletlen nyelvtudás nem akadály.",
          },
          {
            q: "Kell-e előzetesen jelentkezni ezekre az alkalmakra?",
            a: "Általában nem, de érdemes megnézni az adott közösség Instagram- vagy Meetup-oldalát közvetlenül az esemény előtt, mert néhány alkalomhoz mégis kérnek gyors jelentkezést.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes nyelvcsere- és networking-közösség listát a Budapesti Közösségek listájában találod, ahol a többi kategóriát is böngészheted.",
      },
    ],
  },
  {
    slug: "8-kozosseg-ahova-egyedul-is-mehetsz",
    title: "8 közösség Budapesten, ahova egyedül is mehetsz, és mégsem leszel egyedül",
    metaTitle: "8 budapesti közösség, ahova egyedül is elmehetsz",
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
        text: "Az egyik leggyakoribb ok, amiért valaki nem csatlakozik egy közösséghez, hogy nincs kivel elmennie elsőre. Ez a nyolc budapesti közösség pont erre van kitalálva: vegyes hátterű, nyitott csoportok, ahol nem kell ismerőssel érkezned, és nem is számítanak rá.",
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
            note: "Heti szombat esti összejövetel helyieknek, expatoknak és utazóknak nyelvgyakorlásra és ismerkedésre, pont az egyedül érkezőkre szabva.",
            href: "https://www.meetup.com/international-socializing-in-budapest/",
          },
          {
            name: "Just Connect",
            note: "Offline közösségi eseménysorozat, amely hegyi túrákkal és laza összejövetelekkel hoz össze nyitott embereket, sokszor pont azoknak, akik új városban keresnek társaságot.",
            href: "https://www.instagram.com/justconnect.hu/",
          },
          {
            name: "Budapest Personal Growth Meetup",
            note: "Nyílt, vallástól és szervezettől független meditációs és önismereti közösség, változó helyszíneken. A közös téma miatt a beszélgetések gyakran mélyebbek, mint egy átlagos ismerkedős eseményen.",
            href: "https://www.meetup.com/budapest-personal-growth-szemelyes-fejl%C5%91des-meetup/",
          },
          {
            name: "Havervagy",
            note: "Közösség nyitott, hasonló gondolkodású embereknek, akik szeretnének új barátokat találni: azzal a céllal jött létre, hogy az egyedül érkezők is otthon érezzék magukat.",
            href: "https://www.instagram.com/havervagy/",
          },
        ],
      },
      { type: "h2", text: "Miért pont ezek a közösségek jók egyedülállóknak?" },
      {
        type: "p",
        text: "Mindegyik felsorolt közösségnek van egy közös vonása: a résztvevők nagy része maga is egyedül, ismerős nélkül érkezik, tehát a csoport hozzá van szokva az új arcokhoz. Nincs zárt, régóta összeszokott klikk, amibe nehéz bekerülni, a rendszeres, nyílt alkalmak miatt mindig van friss ismerkedés, a szervezők pedig tudatosan figyelnek arra, hogy az újonnan érkezők ne érezzék magukat kívülállónak.",
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
            a: "A Mozaik Med szigeti futása vagy a TIA Game Cave a legkevésbé megterhelő kezdés, mert nincs elvárt előzetes tudás, és a hangulat igazán laza.",
          },
          {
            q: "Mennyire kell aktívnak vagy extrovertáltnak lennem ezekhez a közösségekhez?",
            a: "Egyáltalán nem szükséges: a legtöbb felsorolt közösség csendesebb, introvertáltabb embereknek is barátságos, mert a közös tevékenység (futás, olvasás, társasjáték) önmagában is beszélgetési alapot ad.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kereshető klublistát a Budapesti Közösségek listájában böngészheted kategória szerint.",
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
        text: "A magány nem csak kellemetlen érzés, hanem mérhető egészségügyi kockázati tényező is. Az Egészségügyi Világszervezet (WHO) 2023-as jelentése a társas elszigeteltséget és a magányt globális közegészségügyi problémaként azonosította, hasonló súlyú kockázati tényezőként, mint a dohányzás vagy a mozgásszegény életmód. Ez azt jelenti, hogy a rendszeres közösségi részvétel nem luxus vagy szabadidős tevékenység, hanem olyan befektetés, aminek mérhető hozadéka van a hosszú távú egészségre.",
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
        text: "Gyerekként és egyetemistaként a barátságok szinte automatikusan alakulnak ki: közös iskola, kollégium, közös órarend biztosítja a rendszeres találkozást. Felnőttként, munka mellett ez a struktúra megszűnik, ezért kell tudatosan felkeresni azokat a helyeket (klubok, közösségek, rendszeres programok), amik pótolják ezt a korábban véletlenszerűen adott találkozási felületet.",
      },
      { type: "h2", text: "Mennyi közösség elég: a minőség vagy a mennyiség számít?" },
      {
        type: "p",
        text: "Nem kell tucatnyi közösséghez csatlakoznod ahhoz, hogy érezhető legyen a különbség. A kutatások szerint már egy vagy két, rendszeresen látogatott közösség is mérhetően csökkenti a magány érzését, feltéve, hogy a részvétel valóban rendszeres, nem csak alkalmi. Sokkal nagyobb védőhatása van egy heti visszatérő futóklubnak, mint négy különböző, ritkán látogatott csoportnak, mert a rendszeresség az, ami a felszínes ismerkedésből tényleges kapcsolatot épít.",
      },
      { type: "h2", text: "Mi történik, ha halogatod a közösségkeresést?" },
      {
        type: "p",
        text: "A magány sajátossága, hogy önerősítő folyamat: minél tovább marad valaki elszigetelve, annál nehezebbnek tűnik az első lépés megtétele, ez pedig tovább mélyíti az elszigeteltséget. Ezért érdemes minél korábban, még mielőtt a magány krónikussá válna, tudatosan keresni egy rendszeres közösségi alkalmat, ahelyett hogy a megfelelő pillanatra várnál. A kutatások szerint maga a halogatás is növeli a szorongást a társas helyzetekkel kapcsolatban, tehát minél tovább vársz, annál nehezebb lesz az első lépés.",
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
        text: "Ha szeretnél elkezdeni egy rendszeres közösségi alkalmat keresni, böngéssz kategória szerint a Budapesti Közösségek listájában.",
      },
    ],
  },
  {
    slug: "tarsasjatek-kozossegek-budapesten",
    title: "3 társasjáték-közösség Budapesten, ahova ingyen csatlakozhatsz",
    metaTitle: "3 ingyenes társasjáték-közösség Budapesten",
    description:
      "Angol nyelvű és magyar társasjáték-esték, ahol modern klasszikusoktól a stratégiai játékokig mindent kipróbálhatsz új emberek társaságában.",
    kind: "listicle",
    category: "Társasjáték",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A társasjáték az egyik legjobb ürügy az ismerkedésre, mert a játék önmagában ad beszélgetési alapot, és nem kell aktívan társalgási témát keresned. Budapesten több aktív, ingyenesen látogatható társasjáték-közösség működik, ebből mutatunk be hármat, amelyekhez kortól és tapasztalattól függetlenül csatlakozhatsz.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "TIA Game Cave",
            note: "Ingyenes belépésű társasjáték-közösség 14-99 éveseknek: nincs tagsági díj, csak csatlakozni kell. A közösség rendszeresen szervez alkalmakat, ahol modern és klasszikus társasjátékok is asztalra kerülnek.",
            href: "https://www.facebook.com/groups/263358474501496/",
          },
          {
            name: "Budapest Board Game Nights",
            note: "Angol nyelvű társasjáték-esték, amelyek változó budapesti helyszíneken, gyakran társasjáték-bárokban zajlanak. Bárkit szívesen látnak, aki angolul szeretne beszélgetni és játszani egyszerre.",
            href: "https://www.facebook.com/bpboardgames/",
          },
          {
            name: "Board Games in English",
            note: "Nemzetközi társasjáték-közösség több mint kétezer taggal, amely heti több alkalommal találkozik különböző társasjáték-bárokban és kávézókban. A kínálat a modern klasszikusoktól (Ticket to Ride, Catan) a szó- és stratégiai játékokig terjed.",
            href: "https://www.meetup.com/board-games-in-english/",
          },
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha még sosem jártál társasjáték-közösségben?" },
      {
        type: "p",
        text: "A TIA Game Cave a legjobb kiindulópont, ha magyar nyelvű, ingyenes és tagságmentes közeget keresel. Ha inkább nemzetközi, angol nyelvű társaságban ismerkednél, a Budapest Board Game Nights és a Board Games in English is kiváló választás: mindkettő rendszeresen vált helyszínt, így folyamatosan van apropó egy új találkozóra. A Board Games in English nagyobb létszáma miatt szinte minden héten van program, ha gyakrabban járnál.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e saját társasjátékot vinnem magammal?",
            a: "Nem szükséges, a legtöbb alkalmon a szervezők vagy a helyszín biztosítja a játékokat. Ha van kedvenced, természetesen elviheted, de nem elvárás.",
          },
          {
            q: "Milyen korosztálynak ajánlottak ezek a közösségek?",
            a: "A TIA Game Cave széles korosztályt (14-99 év) céloz meg, a nemzetközi közösségek pedig elsősorban felnőtteknek szólnak, de nincs szigorú korhatár egyiknél sem.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes társasjáték- és hobbi-közösség listát a Budapesti Közösségek listájában találod, ahol más kategóriákat is böngészhetsz.",
      },
    ],
  },
  {
    slug: "joga-meditacio-kozossegek-kezdoknek",
    title: "Jóga és meditáció Budapesten kezdőknek: 4 közösség, ahol nulla tapasztalattal is elindulhatsz",
    metaTitle: "Jóga és meditáció Budapesten kezdőknek: 4 közösség",
    description:
      "Szabadtéri jóga, wellness-közösség és önismereti meditáció Budapesten: négy valódi közösség, amely kezdőknek is barátságos.",
    kind: "listicle",
    category: "Jóga / Wellness",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A jóga és a meditáció sokak számára ijesztően szakértőinek tűnik elsőre, pedig a legtöbb budapesti közösség pontosan azoknak szól, akik korábban sosem próbálták. Ez a négy közösség mind nyitott kezdőknek, és egyikhez sem kell drága stúdióbérlet vagy előzetes tudás.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Margitszigeti Jóga",
            note: "Közösségi szabadtéri jógaórák a Margitszigeten, tíz éve működő, barátságos csapattal. A szabadtéri jelleg miatt kötetlenebb a hangulat, mint egy zárt stúdióban, ami sokak számára könnyebb belépési pontot jelent.",
            href: "https://www.instagram.com/margitszigetijoga.hu/",
          },
          {
            name: "Conscious Budapest",
            note: "Wellness-közösség jógával, légzőgyakorlatokkal, alkoholmentes társasági alkalmakkal és közösségi sétákkal. A cél a valódi, mély kapcsolódás, nem csak a fizikai gyakorlat.",
            href: "https://www.meetup.com/yogamindfulnessbudapest/",
          },
          {
            name: "Budapest Personal Growth Meetup",
            note: "Nyílt, vallástól és szervezettől független meditációs és önismereti közösség, változó helyszíneken. Azoknak ajánlott elsősorban, akik a fizikai gyakorlat mellett a belső munkára is nyitottak.",
            href: "https://www.meetup.com/budapest-personal-growth-szemelyes-fejl%C5%91des-meetup/",
          },
          {
            name: "Artemis Compass",
            note: "Természethez kapcsolódó, önismereti programok, ahol a természet csendje és nyugalma segít közelebb kerülni önmagunkhoz. Jó választás, ha a teremben tartott meditáció helyett inkább a szabadban keresnéd a nyugalmat.",
            href: "https://www.facebook.com/profile.php?id=61574524619037",
          },
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha teljesen kezdő vagy?" },
      {
        type: "p",
        text: "Ha a fizikai gyakorlat áll közelebb hozzád, a Margitszigeti Jóga a legkevésbé megterhelő kezdés, mert szabadtéri, laza hangulatú, és nem igényel semmilyen előzetes tudást. Ha inkább a társasági, közösségi élmény a fontos, a Conscious Budapest szélesebb programkínálata (jóga mellett séták, teázások, szauna) jobban illik hozzád. Ha pedig az önismereti, elmélyültebb irányba mennél, a Budapest Personal Growth Meetup vagy az Artemis Compass a jobb választás.",
      },
      {
        type: "citation",
        text: "We Love Budapest: hét angol nyelvű jógastúdió Budapesten, ha később mélyebben belevágnál",
        href: "https://welovebudapest.com/en/toplist/7-english-language-yoga-studios-in-budapest",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e saját jógaszőnyeget vinnem?",
            a: "Szabadtéri alkalmaknál (például a Margitszigeti Jóga esetében) érdemes saját szőnyeget vagy takarót hozni, a többi közösségnél érdemes előre rákérdezni az adott esemény leírásában.",
          },
          {
            q: "Fizetni kell ezekhez a közösségekhez?",
            a: "A legtöbb itt felsorolt közösségi alkalom ingyenes vagy önkéntes adományos alapú, ellentétben a fizetős jógastúdiókkal, amelyek külön szolgáltatásnak számítanak.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes jóga, wellness és meditációs közösség listát a Budapesti Közösségek listájában böngészheted.",
      },
    ],
  },
  {
    slug: "hogyan-talalj-hobbi-sportcsapatot-budapesten",
    title: "Hogyan találj hobbi sportcsapatot Budapesten, ha csapatjátékos vagy?",
    metaTitle: "Hogyan találj hobbi sportcsapatot Budapesten?",
    description:
      "Kosárlabda, foci, kerékpáros póló: gyakorlati tanácsok, ha nem egyéni sportot, hanem valódi csapatot keresel Budapesten, edzői szerződés nélkül.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Sokan azt hiszik, hogy Budapesten csak egyesületi keretek között, komoly elköteleződéssel lehet csapatsportot űzni. A valóság ennél sokkal lazább: a városban rengeteg hobbi szintű csapat és spontán meccs-közösség működik, ahova edzői szerződés és bajnokságba nevezés nélkül is be lehet kapcsolódni.",
      },
      { type: "h2", text: "Kezdd a spontán, nyílt pályás közösségeknél" },
      {
        type: "p",
        text: "A legkönnyebb belépési pont azok a közösségek, ahol nincs fix csapatbeosztás, csak megjelensz, és csatlakozol az aktuális meccshez. Budapesten ilyen például a Bikás Park Streetball, ahol utcai kosárlabda-meccsekhez lehet spontán csatlakozni, vagy a Budapest Bike Polo, amely heti rendszerességű edzéseket és meccseket tart, kezdőknek is nyitottan.",
      },
      { type: "h2", text: "Próbáld ki a ChempZ appot, ha egy adott pályához vagy sportághoz keresel társakat" },
      {
        type: "p",
        text: "A ChempZ egy ingyenes, magyar fejlesztésű sportpálya- és meccskereső app, amellyel a közeledben lévő pályákat és nyitott meccseket böngészheted, sportágtól függetlenül. Fiók nélkül is végignézheted, mi zajlik a környéken, és csak akkor kell regisztrálnod, ha ténylegesen csatlakoznál egy meccshez vagy chatelnél a többiekkel. Ez különösen jó megoldás, ha nem egy konkrét közösséget, hanem egy adott időpontra, egy adott pályára keresel játékostársakat.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "ChempZ",
            note: "Ingyenes sportpálya- és meccskereső app: fedezz fel pályákat a közeledben, találj játékostársakat és csapatot bármilyen sportághoz, fiók nélkül is böngészhető.",
            href: "https://chempz.hu/",
          },
        ],
      },
      { type: "h2", text: "Keress rá Facebook-csoportokra, ha konkrét sportágat szeretnél" },
      {
        type: "p",
        text: "Ha focihoz, kosárlabdához vagy röplabdához keresel csapattársakat, érdemes rákeresni a hobbi csapatsport Facebook-csoportokra: ezekben rendszeresen posztolnak azok a csapatok, akiknek éppen hiányzik egy-két játékosuk egy adott meccshez vagy szezonhoz. Ez a legjobb módja annak, hogy fix csapatba kerülj anélkül, hogy egyesületi tagságot vállalnál.",
      },
      {
        type: "citation",
        text: "Facebook: Hobbi kosárlabda-, foci-, röplabda stb. csapattag kereső csoport Budapesten",
        href: "https://www.facebook.com/groups/2866489026922478/",
      },
      { type: "h2", text: "Ne várd meg, amíg tökéletesen felkészült leszel" },
      {
        type: "p",
        text: "A hobbi szintű csapatoknál a cél a közös élmény, nem a versenyszerű teljesítmény, ezért nem kell edzésbe hozott formában érkezned. A legtöbb szervező örül az új arcoknak, és a csapat szintjéhez igazítja a tempót, hasonlóan ahhoz, ahogy a futóklubok is vegyes szinteket fogadnak be.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell-e felszerelés egy hobbi csapatsporthoz való csatlakozáshoz?",
            a: "Sportáganként változó, de általában elég a megfelelő cipő és kényelmes sportruházat. Kerékpáros pólónál saját kerékpár és sisak szükséges, ezt a Budapest Bike Polo közösség oldalán érdemes előre tisztázni.",
          },
          {
            q: "Mi van, ha egy adott csapatnál nincs éppen hely?",
            a: "Ez gyakori, mert a hobbi csapatoknak korlátozott a létszáma. Érdemes több csoportba is beszállni, és több csapatot is megkeresni, mert Budapesten egyszerre több hasonló kezdeményezés fut párhuzamosan.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes sport-közösség listát a Budapesti Közösségek listájában böngészheted kategória szerint.",
      },
    ],
  },
  {
    slug: "legjobb-platformok-budapesti-kozossegek-kereseshez",
    title: "A legjobb platformok, ahol budapesti közösségeket kereshetsz, összehasonlítva",
    metaTitle: "Hol keress budapesti közösséget? Platformok összevetve",
    description:
      "Meetup, Facebook-csoportok, Instagram vagy egy dedikált klublista: melyik platform éri meg, ha budapesti közösséget keresel? Egyenes összehasonlítás.",
    kind: "listicle",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Ha valaha megpróbáltál már közösséget keresni Budapesten, valószínűleg pontosan tudod, milyen szétszórt ez a terep: az egyik klub Meetupon szervez, a másik Facebook-csoportban, a harmadik meg csak Instagramon posztol, valahol elrejtve a story highlightok között. Nincs egyetlen egyértelmű hely, ahova bárki automatikusan menne. Négy platformot hasonlítunk össze aszerint, hogy melyik mire jó valójában, nem pedig aszerint, hogy melyiket ismered a legjobban.",
      },
      {
        type: "table",
        headers: ["Platform", "Nyelv", "Szűrhető kategória szerint", "Kell hozzá fiók", "Mikor a legjobb választás"],
        rows: [
          [
            "Budapesti Közösségek",
            "Magyar",
            "Igen, kategória és kulcsszó szerint",
            "Nem",
            "Ha gyorsan át akarod látni, mi létezik egy adott témában",
          ],
          [
            "Meetup",
            "Túlnyomórészt angol",
            "Részben, téma szerint",
            "Igen, a csatlakozáshoz",
            "Ha nemzetközi, angol nyelvű közösséget keresel",
          ],
          [
            "Facebook-csoportok",
            "Vegyes",
            "Nem igazán, csak kulcsszavas keresés",
            "Igen, Facebook-fiók",
            "Ha már tudod a csoport nevét, vagy helyi, informális közösséget keresel",
          ],
          [
            "Instagram",
            "Vegyes",
            "Nem, csak hashtag vagy keresés",
            "Igen",
            "Ha egy adott klubot már ismersz, és a friss posztjait, sztorijait követnéd",
          ],
        ],
      },
      { type: "h2", text: "Miért nehéz csak Facebookon vagy Instagramon keresgélni?" },
      {
        type: "p",
        text: "A Facebook és az Instagram remek arra, hogy egy már megtalált közösséggel kapcsolatban maradj, felfedezőeszköznek viszont gyenge. A keresés a legtöbbször csak a csoport vagy a fiók nevére működik jól, a leírásra vagy a tevékenység típusára nem lehet rendesen szűrni. Ha nem tudod pontosan, mit keresel, könnyen tíz-húsz percet elveszíthetsz a görgetésben, mielőtt egyáltalán rátalálsz egy releváns csoportra.",
      },
      { type: "h2", text: "Miben más egy dedikált klublista, mint a Meetup?" },
      {
        type: "p",
        text: "A Meetup nagyszerű nemzetközi eszköz, és Budapesten is több aktív angol nyelvű közösség szervez rajta programokat. A különbség inkább abban van, mennyire helyi és magyar nyelvű a kínálat: egy Budapestre fókuszáló, magyar nyelvű lista (mint amit itt olvasol) jobban lefedi azokat a kisebb, informális magyar közösségeket is, amik sosem regisztráltak Meetupra, mert nem érezték szükségét egy nemzetközi platformnak.",
      },
      {
        type: "citation",
        text: "Delivered Social: hogyan találj és válassz megfelelő Facebook-csoportot közösségkereséshez",
        href: "https://deliveredsocial.com/groups-for-facebook-how-to-find-join-and-grow-the-right-communities/",
      },
      {
        type: "faq",
        items: [
          {
            q: "Melyik platformot érdemes elsőként kipróbálni?",
            a: "Ha még nem tudod pontosan, milyen közösséget keresel, egy kategória szerint böngészhető lista (mint a Budapesti Közösségek) a leggyorsabb kiindulópont, mert egy helyen látod az összes lehetőséget regisztráció nélkül.",
          },
          {
            q: "Miért van szükség egyáltalán egy külön klublistára a Facebook és a Meetup mellett?",
            a: "Mert egyik platform sem közösség-felfedezésre lett tervezve: mindkettő elsősorban a már megtalált csoportok kezelésére és eseményszervezésre optimalizált, nem a böngészésre.",
          },
        ],
      },
      {
        type: "p",
        text: "Ha kíváncsi vagy, milyen közösségek szerepelnek jelenleg a listánkban, böngéssz kategória szerint a Budapesti Közösségek teljes listájában.",
      },
    ],
  },
  {
    slug: "hogyan-segitenek-sportkozossegek-ha-egyedul-kezdesz",
    title: "Hogyan segítenek a budapesti sportközösségek, ha egyedül vágnál bele?",
    metaTitle: "Budapesti sportközösségek, ha egyedül vágnál bele",
    description:
      "Miért könnyebb egyedül csatlakozni egy sportközösséghez, mint azt elsőre gondolnád, és mely budapesti klubok a legjobb kiindulópontok ehhez.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Sokan azért halogatják a sportolást Budapesten, mert nincs kivel elmenniük. Ez érthető, de fordítva is igaz: a legtöbb budapesti sportközösség pont azokra épül, akik egyedül érkeznek. A közös mozgás olyan szerkezetet ad a találkozásnak, ami sok más társasági helyzetből hiányzik, ez teszi könnyebbé az egyedüli kezdést, mint amilyennek elsőre tűnik.",
      },
      { type: "h2", text: "A közös mozgás levesz egy réteg nyomást a beszélgetésről" },
      {
        type: "p",
        text: "Amikor futsz, kosarazol vagy pickleballozol valakivel, nem kell aktívan társalgási témát keresned. A mozgás maga adja a keretet: lehet csendben futni egymás mellett, aztán a szünetben szó nélkül is természetesen alakul ki beszélgetés. Ez sokkal kevésbé megterhelő, mint egy tisztán társasági eseményen ülni, és aktívan beszélgetést kezdeményezni valakivel, akit még nem ismersz.",
      },
      { type: "h2", text: "A vegyes szintű csoportok miatt nem kell felkészültnek lenned" },
      {
        type: "p",
        text: "A legtöbb itt felsorolt sportközösség vegyes szintekre épül: senki nem várja el, hogy versenyszerű formában érkezz. Az Angyalföldi Futóklub és a Mozaik Med közösségi futása pont emiatt jó kiindulópont, hiszen a tempót mindig a csoporthoz igazítják, nem fordítva.",
      },
      { type: "h2", text: "A spontán, nyílt alkalmak csökkentik a belépési küszöböt" },
      {
        type: "p",
        text: "Azoknál a közösségeknél, ahol nincs fix csapatbeosztás, csak megjelensz és csatlakozol az aktuális meccshez, jóval kisebb a tétje az első alkalomnak. A Bikás Park Streetball és a PickMeBall Club is ilyen: nem kell előre bejelentkezned egy csapatba, elég odaállni, a csoport magától befogad.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, ahol bárki csatlakozhat futótempótól függetlenül.",
            href: "https://mozaikmed.hu/",
          },
          {
            name: "Bikás Park Streetball",
            note: "Utcai kosárlabda közösség a Bikás parki pályákon, ahol bárki csatlakozhat egy spontán meccshez.",
            href: "https://www.instagram.com/bikas_park/",
          },
          {
            name: "PickMeBall Club",
            note: "Budapesti pickleball közösség, amely rendszeres edzéseket és tornákat szervez kezdőknek és haladóknak egyaránt.",
            href: "https://www.instagram.com/pickmeball.club/",
          },
          {
            name: "ChempZ",
            note: "Ingyenes sportpálya- és meccskereső app, amellyel egyedül is találhatsz nyitott meccset vagy játékostársat a közeledben.",
            href: "https://chempz.hu/",
          },
        ],
      },
      {
        type: "citation",
        text: "Mayo Clinic: hogyan enyhíti a testmozgás a szorongás és a depresszió tüneteit",
        href: "https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression-and-exercise/art-20046495",
      },
      {
        type: "faq",
        items: [
          {
            q: "Melyik sportközösséggel érdemes kezdeni, ha teljesen új vagyok ebben?",
            a: "A Mozaik Med szigeti futása vagy a Bikás Park Streetball a legkevésbé megterhelő kezdés, mert nincs elvárt előzetes tudás, és a hangulat igazán laza.",
          },
          {
            q: "Mi van, ha egyáltalán nem vagyok formában?",
            a: "Ez nem akadály: a legtöbb felsorolt közösség a tempót a csoporthoz igazítja, nem fordítva, tehát a fittségi szinted nem számít annyira, mint gondolnád.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes sport-közösség listát a Budapesti Közösségek listájában böngészheted kategória szerint.",
      },
    ],
  },
  {
    slug: "legjobb-budapesti-sportkozossegek-osszehasonlitva",
    title: "A legjobb budapesti sportközösségek összehasonlítva",
    description:
      "Futás, kerékpár, tenisz, kerékpáros póló, pickleball: melyik budapesti sportközösség illik hozzád? Gyors összehasonlítás sportág szerint.",
    kind: "listicle",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Budapesten nem csak futóklubból van sok: szinte minden sportágnak megvan a maga informális, ingyenesen látogatható közössége. A táblázat sportág szerint mutatja meg, hova érdemes menned, attól függően, mi érdekel és mennyire vagy kezdő.",
      },
      {
        type: "table",
        headers: ["Sportág", "Közösség", "Kezdőbarát", "Ingyenes", "Link"],
        rows: [
          ["Futás", "6 futóklub összehasonlítva külön cikkben", "Igen", "Igen", "lásd a futóklub-listánkat"],
          ["Kerékpár", "I Bike Budapest (Kerékpárosklub)", "Igen", "Igen", "kerekparosklub.hu"],
          ["Motoros túrázás", "The Café Club Budapest", "Igen", "Igen", "Facebook"],
          ["Tenisz", "Budapest Racquet Society", "Igen", "Igen", "Instagram"],
          ["Utcai kosárlabda", "Bikás Park Streetball", "Igen", "Igen", "Instagram"],
          ["Kerékpáros póló", "Budapest Bike Polo", "Igen", "Igen", "budapestbikepolo.hu"],
          ["Pickleball", "PickMeBall Club", "Igen", "Igen", "Instagram"],
          ["Bármilyen sport, pálya- és társkeresés", "ChempZ (app)", "Igen", "Igen", "chempz.hu"],
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha nem tudod, hol kezdd?" },
      {
        type: "p",
        text: "Ha csapatban, meccsszerű keretek között sportolnál, a Bikás Park Streetball vagy a Budapest Bike Polo a jó kiindulópont, mindkettőnél elég megjelenned egy nyílt alkalmon. Ha inkább egyénileg, saját tempóban mozognál, de közösségi háttérrel, az I Bike Budapest vagy a Budapest Racquet Society illik jobban hozzád. Ha pedig egy vadonatúj, gyorsan terjedő sportot próbálnál ki, a PickMeBall Club pickleball közössége remek belépő, mivel maga a sportág is kezdőbarátnak számít világszerte.",
      },
      {
        type: "citation",
        text: "PickleballScorer: a pickleball növekedési statisztikái, amiért világszerte ez a leggyorsabban terjedő sportág",
        href: "https://pickleballscorer.com/blog/pickleball-statistics-2026",
      },
      {
        type: "faq",
        items: [
          {
            q: "Melyik sportközösséghez a legkönnyebb csatlakozni felszerelés nélkül?",
            a: "A Bikás Park Streetball és az I Bike Budapest a legkönnyebb belépő, mert az egyikhez elég egy pár tornacipő, a másikhoz pedig már egy alap kerékpár is elegendő.",
          },
          {
            q: "Van olyan közösség, ami több sportágat is lefed egyszerre?",
            a: "Igen, a ChempZ app pontosan erre való: sportágtól függetlenül segít pályát és játékostársat találni, ha nem egy konkrét közösséghez, hanem egy adott alkalomhoz keresel társaságot.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes sport-közösség listát a Budapesti Közösségek listájában böngészheted kategória szerint, a futóklubokról pedig külön cikkben olvashatsz részletesebben.",
      },
    ],
  },
  {
    slug: "hogyan-talalj-kozosseget-budapesti-kozossegekkel",
    title: "Hogyan találj közösséget Budapesten a Budapesti Közösségek segítségével",
    metaTitle: "Hogyan találj közösséget Budapesten? Lépésről lépésre",
    description:
      "Lépésről lépésre útmutató, hogyan böngéssz, szűrj és csatlakozz egy valódi budapesti klubhoz a Budapesti Közösségek listán keresztül, regisztráció nélkül.",
    kind: "guide",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A Budapesti Közösségek egy egyszerű dolgot próbál megoldani: hogy ne kelljen tucatnyi Facebook-csoportot és Instagram-fiókot végigböngészned ahhoz, hogy megtaláld a hozzád illő közösséget. Végigvezetünk azon, pontosan hogyan érdemes használni az oldalt, az első kereséstől a tényleges csatlakozásig.",
      },
      { type: "h2", text: "Hol kezdd, ha még fogalmad sincs, mit keresel?" },
      {
        type: "p",
        text: "Ha nincs konkrét elképzelésed, a legjobb kiindulópont a főoldal kategória szerinti böngészője. Itt tizenhat kategória közül választhatsz (sport, nyelvcsere, könyvklub, jóga és sok más), mindegyikhez rövid leírással, hogy lásd, mire számíthatsz, mielőtt rákattintanál.",
      },
      { type: "h2", text: "Hogyan szűrj, ha már tudod, mit keresel?" },
      {
        type: "p",
        text: "Ha pontosan tudod, milyen aktivitást keresel, ugorj egyenesen a Klubok oldalra, és vagy válassz kategóriát a legördülő listából, vagy írj be egy kulcsszót a keresőmezőbe. A keresés a klub nevében és a leírásában is talál egyezést, tehát akkor is működik, ha csak egy tevékenységre emlékszel, mondjuk „futás” vagy „társasjáték”, nem egy konkrét klubnévre.",
      },
      { type: "h2", text: "Mi történik, ha rátaláltál egy klubra?" },
      {
        type: "p",
        text: "Minden klubkártyán ott van egy közvetlen link az adott közösség Instagram- vagy weboldalára. Nincs köztes regisztrációs lépés: a Budapesti Közösségek csak összekapcsol téged a klubbal, magát a csatlakozást közvetlenül ott intézed, ahol a közösség ténylegesen aktív.",
      },
      {
        type: "list",
        items: [
          "Böngéssz kategória szerint a főoldalon, ha még nem tudod, mit keresel",
          "Használd a keresőt vagy a szűrőt a Klubok oldalon, ha már van konkrét elképzelésed",
          "Kattints a klub Instagram- vagy weboldal-linkjére, és lépj kapcsolatba közvetlenül velük",
          "Ha elakadtál, olvasd el a blogot: sok konkrét listát és útmutatót találsz kategóriánként",
        ],
      },
      {
        type: "citation",
        text: "Thinkific: statisztikák arról, miért fontos szerepet játszanak a közösségek az emberek életében",
        href: "https://www.thinkific.com/blog/community-statistics/",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell regisztrálnom a Budapesti Közösségek oldalán?",
            a: "Nem, az oldal böngészéséhez soha nem kell fiókot létrehoznod. A tényleges csatlakozás mindig az adott klub saját Instagram- vagy weboldalán történik.",
          },
          {
            q: "Mit tegyek, ha nem találom a keresett tevékenységet?",
            a: "Írj emailt a Rólunk oldalon található címre: ha ismersz egy valódi, aktív budapesti közösséget, amit még nem listáztunk, szívesen felvesszük.",
          },
        ],
      },
      {
        type: "p",
        text: "Kezdd itt: böngéssz kategória szerint, vagy ugorj egyenesen a teljes klublistára a Budapesti Közösségek oldalán.",
      },
    ],
  },
  {
    slug: "kezdobarat-sportklubok-budapesten-igy-ismerd-fel",
    title: "Kezdőbarát sportklubok Budapesten: így ismerd fel és csatlakozz",
    metaTitle: "Kezdőbarát sportklubok Budapesten",
    description:
      "Miből tudod megállapítani, hogy egy budapesti sportklub tényleg kezdőbarát-e, és konkrétan melyikhez csatlakozhatsz ingyen, közvetlen linkkel.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-13",
    body: [
      {
        type: "p",
        text: "Nem minden klub egyformán kezdőbarát, még akkor sem, ha a leírásában ez szerepel. Szerencsére van néhány konkrét jel, amiből már a csatlakozás előtt, a klub Instagram- vagy Facebook-oldalát végignézve is meg lehet állapítani, tényleg befogadó közegre számíthatsz-e, vagy inkább egy régóta összeszokott, zárt csapatra.",
      },
      {
        type: "p",
        text: "Az útmutató két részből áll. Először végigvesszük, mire figyelj, ha magad akarod eldönteni egy klubról. Utána jön a konkrét lista: kilenc budapesti sportközösség, amelyik kezdőket is fogad, mindegyiknél a közvetlen linkkel.",
      },
      { type: "h2", text: "Mire figyelj a klub közösségi oldalán, mielőtt megjelennél?" },
      {
        type: "p",
        text: "Jó jel, ha a klub világosan kiírja a találkozási pontot, az időpontot, és azt, hogy kezdők is jöhetnek-e. Ha a posztokban rendszeresen szerepel olyan mondat, mint „bárki csatlakozhat” vagy „nem kell tapasztalat”, az jó eséllyel azt jelenti, hogy a szervezők tudatosan gondoltak az újonnan érkezőkre, nem csak utólag toldották be ezt a mondatot.",
      },
      { type: "h2", text: "Miért számít, hogy van-e vegyes szintű csoport?" },
      {
        type: "p",
        text: "Ha egy klub megemlíti, hogy a tempót vagy a szintet a csoporthoz igazítják, az sokkal megbízhatóbb jel, mint egy általános „mindenkit szeretettel várunk” szlogen. A vegyes szintű csoportoknál a szervezők valóban számítanak rá, hogy lesznek kezdők, nem csak elméletben engedik meg a részvételüket.",
      },
      { type: "h2", text: "Mit jelent, ha gyorsan válaszolnak egy privát üzenetre?" },
      {
        type: "p",
        text: "Mielőtt először elmennél, írj egy rövid üzenetet a klubnak. Az, hogy milyen gyorsan és milyen hangnemben válaszolnak, sokat elárul arról, mennyire aktívan törődnek az új érdeklődőkkel. Egy kezdőbarát klub általában örül a kérdésnek, és konkrét, gyakorlati választ ad, nem csak egy általános linket küld vissza.",
      },
      { type: "h2", text: "Kezdőbarát budapesti sportklubok, ahova ingyen csatlakozhatsz" },
      {
        type: "p",
        text: "Az alábbi közösségek mindegyike vagy kimondottan jelzi, hogy kezdőket is vár, vagy olyan formátumban működik, ahol a szintkülönbség nem okoz problémát. A linkek közvetlenül a klub saját oldalára visznek, tehát nem kell nálunk regisztrálnod.",
      },
      {
        type: "table",
        headers: ["Klub", "Sportág", "Költség", "Előzetes jelentkezés"],
        rows: [
          ["Mozaik Med közösségi futás", "Futás", "Ingyenes", "Nem kell"],
          ["Run Crew Budapest", "Futás", "Ingyenes", "Nem kell"],
          ["Bridget Runners Budapest", "Futás, nőknek", "Ingyenes", "Nem kell"],
          ["Bikás Park Streetball", "Kosárlabda", "Ingyenes", "Nem kell"],
          ["Hot Girls Walk Club", "Séta, nőknek", "Ingyenes", "Nem kell"],
          ["Budapest Hikers", "Túra", "Utazás ára", "Jellemzően igen"],
          ["Budapest Bike Polo", "Bike polo", "Ingyenes", "Érdemes szólni"],
          ["PickMeBall Club", "Pickleball", "Pályaköltség", "Igen"],
          ["Budapest Racquet Society", "Tenisz", "Pályaköltség", "Igen"],
        ],
      },
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten. A leírásuk külön kiemeli, hogy bármilyen futótempóval csatlakozhatsz, tehát nincs az a helyzet, hogy lemaradsz és utánad kell jönni. Nincs nevezés, egyszerűen oda kell menni a megadott időpontban, ami a legalacsonyabb belépési küszöb az egész listán.",
            href: "https://mozaikmed.hu/",
          },
          {
            name: "Run Crew Budapest",
            note: "Magukat elsősorban közösségnek, másodsorban futóklubnak tartják, és ez a sorrend kezdőként sokat számít. Együtt futnak, majd együtt kávéznak vagy strandolnak utána, tehát ha a futás alatt nem jött szóba semmi, utána még van rá alkalom. Viszonylag friss csapat, ami azt is jelenti, hogy nincsenek évtizedes belső körök.",
            href: "https://www.instagram.com/the_runcrew/",
          },
          {
            name: "Bridget Runners Budapest",
            note: "Budapest első női futóklubja, közös hétvégi futásokkal és utána brunch-csal. A leírásuk kifejezetten kezdőbarátnak jelöli magát, és a hétvégi időzítés miatt nem kell munka után rohanni. Ha nőként tartasz attól, hogy egy vegyes klubban túl gyors lesz a tempó, ez a legjobb kiindulópont.",
            href: "https://linktr.ee/bridgetrunners",
          },
          {
            name: "Bikás Park Streetball",
            note: "Utcai kosárlabda a Bikás parki pályákon, ahol bárki beállhat egy spontán meccsbe. Azért kezdőbarát, mert a csapatok helyben állnak össze és folyamatosan cserélődnek, tehát egyetlen mondatba kerül a becsatlakozás. Nincs tagdíj, nincs nevezés, és nem kell felszerelést vinned.",
            href: "https://www.instagram.com/bikas_park/",
          },
          {
            name: "Hot Girls Walk Club Budapest",
            note: "Nők közössége, akik rendszeres közös sétákat szerveznek Budapesten. A séta a legkisebb belépési küszöbű mozgásforma: nem kell hozzá edzettség, felszerelés és átöltözés sem. Ha még a futóklub is soknak tűnik, ez az a formátum, ahol tényleg csak meg kell jelenni.",
            href: "https://www.instagram.com/hotgirlswalkbudapest/",
          },
          {
            name: "Budapest Hikers",
            note: "Nemzetközi közösség, amely havi rendszerességgel szervez vezetett túrákat Budapest környéki helyszínekre, minden szinten. Kezdőként azért jó, mert a túra hosszú, tehát természetesen alakul a beszélgetés, és mert nem neked kell útvonalat terveznek. A túrák nehézségét előre jelzik, így tudsz magadnak valót választani.",
            href: "https://budapesthikers.com/",
          },
          {
            name: "Budapest Bike Polo",
            note: "Kerékpáros pólóklub heti rendszerességű edzésekkel a Puskás Aréna melletti pályán. Külön kiírják, hogy kezdőket is szívesen látnak, ami ennél a sportágnál ritka. Mivel kevesen űzik itthon, szinte mindenki kezdőként érkezett valamikor, és jellemzően van kölcsönfelszerelés is.",
            href: "https://www.budapestbikepolo.hu/",
          },
          {
            name: "PickMeBall Club",
            note: "Budapesti pickleball közösség rendszeres edzésekkel és tornákkal, kezdőknek és haladóknak egyaránt. A pickleball itthon még új sportág, tehát a résztvevők többsége maga is nemrég kezdte, ami sokat old a kezdeti feszélyezettségen. Ütőt jellemzően lehet kölcsönözni, tehát nem kell előre vásárolnod.",
            href: "https://www.instagram.com/pickmeball.club/",
          },
          {
            name: "Budapest Racquet Society",
            note: "Teniszközösség, amely közös játékalkalmakat és meccseket szervez minden szinten, saját pálya nélkül. Pont ez a lényege: nem neked kell partnert és pályát keresned, a közösség hozza össze a párokat. Teniszhez ez a legnagyobb akadály, és itt meg van oldva helyetted.",
            href: "https://www.instagram.com/budapestracquetsociety/",
          },
        ],
      },
      { type: "h2", text: "Melyikkel kezdj, ha még sosem jártál sportközösségben?" },
      {
        type: "p",
        text: "A Mozaik Med futással vagy a Hot Girls Walk Clubbal, mert ezeknél nincs előzetes jelentkezés, nincs költség, és nem kell felszerelés. Ha egyszer túl vagy az első alkalmon, onnantól sokkal könnyebb lesz egy pályás sportot is kipróbálni, ahol már írni kell valakinek előre.",
      },
      {
        type: "citation",
        text: "Running Club Check-In: tizenkét gyakorlati tipp, hogyan fogadj be új tagokat egy futóklubban",
        href: "https://runningclubcheckin.com/welcome-new-running-club-members/",
      },
      {
        type: "faq",
        items: [
          {
            q: "Elég csak a klub leírását elolvasni, hogy tudjam, kezdőbarát-e?",
            a: "Nem feltétlenül. A leírás csak kiindulópont: a friss posztok hangneme és az, hogyan válaszolnak egy privát üzenetre, sokkal megbízhatóbb jelzés a tényleges hozzáállásról.",
          },
          {
            q: "Mi van, ha egy klub nem válaszol az üzenetemre?",
            a: "Ez önmagában nem feltétlenül rossz jel, de ha ismételten sem kapsz választ, érdemes inkább egy másik, aktívabban kommunikáló közösséget keresni a listánkban.",
          },
          {
            q: "Ingyenesek a kezdőbarát sportklubok Budapesten?",
            a: "A szabadtéri formák jellemzően igen: a futás, a séta és az utcai kosárlabda nem kerül semmibe. Ahol pálya kell, például teniszhez vagy pickleballhoz, ott a pályabérlet arányos részét szokták elosztani a résztvevők között.",
          },
          {
            q: "Kell felszerelést vinnem az első alkalomra?",
            a: "A futáshoz és a sétához csak cipő kell. Az utcai kosárlabdához semmi. A pickleballhoz és a bike polóhoz jellemzően van kölcsönfelszerelés, de ezt érdemes előre megkérdezni a klubtól.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes, kategória szerint böngészhető sportklub-lista a Budapesti Közösségek oldalán érhető el, regisztráció nélkül.",
      },
    ],
  },
  {
    slug: "budapesti-kozossegkereso-oldalak-kulfoldieknek",
    title: "Budapesti közösségkereső oldalak külföldieknek, összehasonlítva",
    metaTitle: "Közösségkereső oldalak Budapesten külföldieknek",
    description:
      "Meetup, Facebook, InterNations vagy Instagram? Végigvesszük, melyik platformon mit találsz, ha frissen költöztél Budapestre és angolul beszélő közösséget keresel.",
    kind: "listicle",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    body: [
      {
        type: "p",
        text: "Ha most költöztél Budapestre, a nehézség nem az, hogy nincs közösségi élet, hanem az, hogy szét van szórva öt különböző felületre, és mindegyik mást tud. Van, ahol angolul beszélnek, de fizetni kell, és van, ahol ingyenes minden, de csak magyarul megy a szervezés. Ez a lista végigveszi, melyik platformon mit érdemes keresni.",
      },
      {
        type: "p",
        text: "Fontos különbség az általános közösségkereséshez képest: külföldiként a nyelv és a belépési küszöb sokkal többet számít, mint a kínálat mérete. Egy húszezer tagú magyar nyelvű csoport kevesebbet ér, mint egy negyvenfős, ahol angolul is szólnak hozzád.",
      },
      { type: "h2", text: "Melyik platformon mit találsz?" },
      {
        type: "table",
        headers: ["Platform", "Nyelv", "Ingyenes?", "Mire jó igazán"],
        rows: [
          ["Meetup", "Főleg angol", "Böngészés igen", "Visszatérő, heti eseményekre"],
          ["Facebook csoportok", "Vegyes", "Igen", "Gyakorlati kérdésekre, lakhatásra"],
          ["InterNations", "Angol", "Részben", "Formálisabb networkingre"],
          ["Instagram", "Vegyes", "Igen", "Kisebb, informális csapatokra"],
          ["Budapesti Közösségek", "Magyar felület", "Igen", "Egy helyen átlátni a kínálatot"],
        ],
      },
      { type: "h2", text: "A platformok részletesen" },
      {
        type: "clublist",
        items: [
          {
            name: "Meetup",
            note: "Külföldiként ez a legkézenfekvőbb kiindulópont, mert Budapesten a Meetup-csoportok többsége eleve angolul szervez. A nagy előnye a rendszeresség: a csoportok ismétlődő eseményeket hirdetnek, tehát nem egy alkalomra jelentkezel be, hanem beállhatsz egy heti ritmusba. Hátránya, hogy a kapcsolatfelvétel a platform belső üzenetküldőjén megy, és sok csoport évek óta inaktívan áll a listán, tehát mindig nézd meg, mikor volt az utolsó esemény.",
            href: "https://www.meetup.com/cities/hu/budapest/",
          },
          {
            name: "Facebook csoportok",
            note: "Itt a legnagyobb a tömeg, és itt a legzajosabb. A budapesti expat csoportok elsősorban gyakorlati kérdésekre jók: albérlet, ügyintézés, orvoskeresés, használt bútor. Közösségi programot is hirdetnek bennük, de az elvész a napi ötven poszt között. Érdemes a keresőt használni konkrét kifejezésre, nem görgetni. Csoportba lépni jellemzően pár kérdés megválaszolásával lehet.",
            href: "https://www.facebook.com/groups/648464231947085/",
          },
          {
            name: "InterNations",
            note: "Ez a formálisabb, networking felé hajló véglet. Az eseményei szervezettek, gyakran bárban vagy étteremben zajlanak, és nagyrészt dolgozó, hosszabb távra érkező külföldiek járnak rájuk. Aki szakmai kapcsolatokat is építene, annak ez a leghatékonyabb. Aki viszont laza, hobbi alapú társaságot keres, annak drága és kissé merev lehet, mert a tartalom jelentős része fizetős tagsághoz kötött.",
            href: "https://www.internations.org/budapest-expats",
          },
          {
            name: "Instagram",
            note: "A budapesti kis közösségek nagy része ma már kizárólag itt él. Futóklubok, sétálós csapatok, társasjátékos esték: sokuknak nincs weboldala, se Meetup-oldala, csak egy Instagram-fiókja, ahol a sztorikban hirdetik a következő alkalmat. Ez a legfrissebb forrás, viszont a legnehezebben kereshető, mert hashtag alapján kell vadászni, és a múltbeli eseményeket nem archiválja senki.",
            href: "https://www.instagram.com/explore/tags/budapestcommunity/",
          },
          {
            name: "Budapesti Közösségek",
            note: "Ez a mi listánk, és azért készült, mert a fenti négy platformot külön-külön kell végigböngészni. Egy helyen gyűjti össze a valódi, aktív budapesti közösségeket kategória szerint, mindegyiknél ott a saját Instagram- vagy weboldal-linkjük. A felület magyar nyelvű, viszont sok listázott közösség angolul működik, és ezt a leírásuk jelzi. Ingyenes, és nem kell hozzá regisztrálni.",
            href: "https://www.sociallybudapest.hu/klubok",
          },
        ],
      },
      { type: "h2", text: "Melyikkel kezdd, ha egy hete vagy itt?" },
      {
        type: "p",
        text: "Kezdd a Meetuppal, mert ott a legkisebb a súrlódás: angolul van, látod az időpontot, és látod, hányan mennek. Ha két hét alatt nem találsz semmit, ami tetszik, akkor váltsd az Instagramot, mert a kisebb és lazább csapatok ott vannak. A Facebookot hagyd a praktikus ügyekre, ne a barátkozásra.",
      },
      {
        type: "citation",
        text: "InterNations: Budapest expat közösségi útmutató",
        href: "https://www.internations.org/budapest-expats",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell magyarul tudni egy budapesti közösséghez csatlakozni?",
            a: "A legtöbb esetben nem. A nyelvcsere, társasjáték és túrázó közösségek jelentős része angolul működik, és a sportközösségeknél sokszor nincs is szükség sok beszédre. A klub saját oldalán jellemzően jelzik, milyen nyelven megy a szervezés.",
          },
          {
            q: "Melyik platform a legolcsóbb?",
            a: "A Facebook, az Instagram és a Budapesti Közösségek használata ingyenes. A Meetupon a böngészés és a csatlakozás ingyenes, egyes események viszont kérhetnek helyszíni hozzájárulást. Az InterNations tartalmának egy része fizetős tagsághoz kötött.",
          },
          {
            q: "Mennyi idő, mire tényleg megismersz valakit?",
            a: "Reálisan három vagy négy alkalom ugyanannál a csoportnál. Az első alkalom szinte mindig kínos, a második már ismerős arcokat hoz. Ezért éri meg rendszeres eseményt választani egyszeri program helyett.",
          },
        ],
      },
    ],
  },
  {
    slug: "egyedul-is-latogathato-sportok-budapesten",
    title: "Egyedül is látogatható sportok Budapesten: kezdő útmutató",
    metaTitle: "Egyedül is látogatható sportok Budapesten",
    description:
      "Nem minden sportba lehet ugyanolyan könnyen egyedül beállni. Végigvesszük sportáganként, hol nem tűnsz fel kezdőként, és mit kell vinned az első alkalomra.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    body: [
      {
        type: "p",
        text: "A legtöbb tanács arról szól, hogyan válassz közösséget. Ez az útmutató másról szól: arról, hogy maga a sportág mennyire engedi meg, hogy egyedül állj be. Mert ez sportáganként nagyon eltér, és sokkal többet számít, mint gondolnád.",
      },
      {
        type: "p",
        text: "A kulcskérdés mindig ugyanaz: ha egyedül érkezel, kell-e bárkit megkérned bármire ahhoz, hogy elkezdj sportolni? Ahol a válasz nem, ott könnyű dolgod lesz. Ahol párt vagy csapatot kell találni, ott az első alkalom nehezebb.",
      },
      { type: "h2", text: "Mennyire könnyű egyedül beállni?" },
      {
        type: "table",
        headers: ["Sportág", "Egyedül beállni", "Kell hozzá felszerelés", "Beszélned kell?"],
        rows: [
          ["Futás", "Nagyon könnyű", "Cipő", "Alig"],
          ["Túrázás", "Nagyon könnyű", "Cipő, víz", "Amennyit szeretnél"],
          ["Közös séta", "Nagyon könnyű", "Semmi", "Ez a lényege"],
          ["Utcai kosárlabda", "Könnyű", "Semmi", "Egy mondat"],
          ["Pickleball", "Közepes", "Kölcsönözhető", "Igen, párt kell"],
          ["Tenisz", "Nehezebb", "Ütő", "Igen, partner kell"],
          ["Bike polo", "Közepes", "Bringa, kölcsön is", "Igen"],
        ],
      },
      { type: "h2", text: "Futás: a legkisebb belépési küszöb" },
      {
        type: "p",
        text: "A futóklub azért a legegyszerűbb kezdés, mert nincs benne holtidő. Megérkezel, elindultok, és futás közben nem elvárás a társalgás. Ha valaki melléd ér, beszélgettek, ha nem, akkor sem furcsa. A legtöbb budapesti futóklub külön jelzi, ha több tempócsoportban indul, tehát nem kell attól tartanod, hogy lemaradsz.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten. Nincs nevezés és nincs szintfeltétel, bárki csatlakozhat futótempótól függetlenül, tehát tipikusan az a fajta alkalom, ahova az első alkalommal is be lehet esni.",
            href: "https://www.instagram.com/mozaikmed/",
          },
          {
            name: "Run Crew Budapest",
            note: "Magukat elsősorban közösségnek, másodsorban futóklubnak tartják. Együtt futnak, majd együtt kávéznak vagy strandolnak utána, tehát ha a futás után is maradna kedved beszélgetni, itt erre külön van alkalom.",
            href: "https://www.instagram.com/the_runcrew/",
          },
        ],
      },
      { type: "h2", text: "Túrázás és séta: ahol az idő dolgozik neked" },
      {
        type: "p",
        text: "A túra azért működik jól kezdőként, mert hosszú. Egy háromórás túrán nincs az a kínos csend, ami egy egyórás programon van, egyszerűen mert van idő természetesen szóba elegyedni. Ráadásul van közös téma, hiszen ugyanazt az útvonalat járjátok.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Budapest Hikers",
            note: "Nemzetközi közösség, amely havi rendszerességgel szervez vezetett túrákat Budapest környéki helyszínekre. Minden szinten fogadnak túrázókat, és mivel vezetett programokról van szó, nem neked kell útvonalat terveznod.",
            href: "https://budapesthikers.com/",
          },
          {
            name: "Hot Girls Walk Club Budapest",
            note: "Nők közössége, akik rendszeres közös sétákat szerveznek Budapesten. A séta a legalacsonyabb belépési küszöbű formátum: nem kell hozzá felszerelés, nem kell edzettség, és a beszélgetés maga a program.",
            href: "https://www.instagram.com/hotgirlswalkbudapest/",
          },
        ],
      },
      { type: "h2", text: "Labdajátékok: itt kell egy mondatot kimondanod" },
      {
        type: "p",
        text: "Az utcai kosárlabda a legnyitottabb labdajáték, mert a pályán jellemzően folyamatosan cserélődnek a csapatok. Egyetlen mondat kell hozzá, hogy beszállhatsz-e a következő meccsbe. A teniszhez és a pickleballhoz viszont partner kell, tehát ott érdemes olyan közösséget keresni, amelyik maga szervezi a párokat.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Bikás Park Streetball",
            note: "Utcai kosárlabda közösség a Bikás parki pályákon, ahol bárki csatlakozhat egy spontán meccshez. Nincs nevezés és nincs tagdíj, a pálya adott, a csapatok pedig helyben állnak össze.",
            href: "https://www.instagram.com/bikas_park/",
          },
          {
            name: "PickMeBall Club",
            note: "Budapesti pickleball közösség rendszeres edzésekkel és tornákkal, kezdőknek és haladóknak egyaránt. Mivel a pickleball itthon még új sportág, a legtöbb résztvevő maga is kezdő volt nemrég, ami sokat old a helyzeten.",
            href: "https://www.instagram.com/pickmeball.club/",
          },
          {
            name: "ChempZ",
            note: "Ingyenes pálya- és meccskereső alkalmazás, amivel a közeledben találhatsz pályákat és játékostársakat bármilyen sportághoz. Akkor hasznos, ha nem közösséget, hanem konkrét meccset keresel egy adott estére, és fiók nélkül is böngészhető.",
            href: "https://chempz.hu/",
          },
        ],
      },
      { type: "h2", text: "Mennyit érdemes mozogni egyáltalán?" },
      {
        type: "p",
        text: "Az Egészségügyi Világszervezet felnőtteknek heti legalább 150 perc közepes intenzitású mozgást javasol. Ez a gyakorlatban két vagy három közösségi alkalom hetente, ami pont az a ritmus, amiben a legtöbb budapesti klub működik. Tehát ha heti kétszer eljársz valahová, az egyszerre fedezi a mozgásigényt és a társaságot.",
      },
      {
        type: "citation",
        text: "WHO: fizikai aktivitásra vonatkozó ajánlások",
        href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
      {
        type: "faq",
        items: [
          {
            q: "Melyik sporttal kezdjem, ha nagyon félek egyedül elmenni?",
            a: "Közös sétával vagy futással. Mindkettőnél elindul a program abban a percben, ahogy megérkezel, tehát nincs az az ácsorgós, bemutatkozós szakasz, ami a legtöbb embert visszatartja.",
          },
          {
            q: "Kell előre jelentkeznem?",
            a: "Sportágtól függ. A szabadtéri futásokra és a streetball pályára jellemzően nem, a teniszhez, pickleballhoz és a vezetett túrákhoz viszont általában igen, mert ott pályát vagy létszámot kell tervezni.",
          },
          {
            q: "Mi van, ha nagyon rossz formában vagyok?",
            a: "A közösségi alkalmak nem edzések, hanem közös mozgás. A legtöbb futóklub több tempócsoportot indít, a túrák nehézségét pedig előre jelzik. A közös séta gyakorlatilag bármilyen formában vállalható.",
          },
        ],
      },
    ],
  },
  {
    slug: "mit-kinalnak-a-budapesti-hobbi-sportklubok",
    title: "Mit kínálnak valójában a budapesti hobbi sportklubok?",
    metaTitle: "Mit kínálnak a budapesti hobbi sportklubok?",
    description:
      "Mennyibe kerül, mit kell vinni, mi történik az első alkalmon, és mit nem adnak meg. Reális elvárások a budapesti hobbi sportközösségekről.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    body: [
      {
        type: "p",
        text: "Sokan azért nem mennek el egy hobbi sportklubba, mert fogalmuk sincs, mibe csöppennek. Fizetni kell? Lesz edző? Kinevetnek, ha rosszul csinálom? Ez az útmutató végigveszi, mit kapsz valójában, és mit nem.",
      },
      {
        type: "p",
        text: "Fontos tisztázni a kiindulópontot: a hobbi sportklub nem edzőterem és nem sportegyesület. Valahol a kettő között van, és pont ettől olcsóbb, lazább és barátságosabb, mint amire számítasz.",
      },
      { type: "h2", text: "Mit kapsz egy hobbi sportklubtól?" },
      {
        type: "list",
        items: [
          "Fix időpontot és helyszínt, tehát nem neked kell szervezned",
          "Társaságot, akik ugyanabban az időben ugyanoda járnak",
          "Alacsony vagy nulla költséget, mert a legtöbb közösség nem kér tagdíjat",
          "Belépési pontot egy sportághoz, amit egyedül nem próbálnál ki",
          "Gyakran közös programot a sport után, kávét vagy sört",
        ],
      },
      { type: "h2", text: "Mit nem kapsz meg?" },
      {
        type: "list",
        items: [
          "Személyre szabott edzéstervet, mert ez nem személyi edzés",
          "Garantált fejlődést, mert nem teljesítményközpontú a dolog",
          "Felszerelést minden esetben, bár sok helyen van kölcsön",
          "Versenyeztetést, hacsak a klub külön nem jelzi",
          "Igazolást vagy tagsági kártyát, mert jellemzően nincs formális tagság",
        ],
      },
      { type: "h2", text: "Mennyibe kerül?" },
      {
        type: "p",
        text: "A budapesti hobbi sportközösségek jelentős része teljesen ingyenes, különösen a szabadtéri formák: futás, séta, utcai kosárlabda, túra. Ahol pálya kell, ott jellemzően a pályabérlet arányos részét osztjátok el egymás között. Tagdíj a legtöbb helyen nincs, és ahol van, azt a klub a saját oldalán feltünteti.",
      },
      {
        type: "table",
        headers: ["Típus", "Tipikus költség", "Miért"],
        rows: [
          ["Szabadtéri futás, séta", "Ingyenes", "Nincs helyszínköltség"],
          ["Utcai kosárlabda", "Ingyenes", "Közterületi pálya"],
          ["Vezetett túra", "Ingyenes vagy utazás ára", "A túravezető jellemzően önkéntes"],
          ["Pályás sport", "Osztott pályabérlet", "A pályát fizetni kell"],
          ["Társasjáték-est", "Fogyasztás", "A helyszín jellemzően bár vagy kávézó"],
        ],
      },
      { type: "h2", text: "Mi történik az első alkalmon?" },
      {
        type: "p",
        text: "A reális forgatókönyv: megérkezel, valaki köszön, megkérdezi a neved, aztán elkezdődik a program. Nincs bemutatkozókör és nincs szintfelmérés. A legtöbb ember nem fog rád különösebben figyelni, és ez jó hír, nem rossz.",
      },
      {
        type: "p",
        text: "Az első alkalom szinte mindig kicsit kellemetlen. A második már nem, mert lesz két ismerős arc. Ezért érdemes eleve úgy odamenni, hogy legalább háromszor kipróbálod, mielőtt eldöntöd, hogy való-e neked.",
      },
      { type: "h2", text: "Miért éri meg a sportnál többet is nézni benne?" },
      {
        type: "p",
        text: "A rendszeres, személyes kapcsolatok mérhetően jót tesznek az egészségnek, és a hobbi sportklub pont ilyet ad: ugyanazokat az embereket látod hetente, minimális szervezési erőfeszítéssel. Ez felnőttként meglepően nehezen pótolható máshonnan.",
      },
      {
        type: "citation",
        text: "Harvard Health: a szoros kapcsolatok egészségügyi hatásai",
        href: "https://www.health.harvard.edu/staying-healthy/the-health-benefits-of-strong-relationships",
      },
      {
        type: "faq",
        items: [
          {
            q: "Kell tagdíjat fizetni egy budapesti hobbi sportklubban?",
            a: "A legtöbb esetben nem. A szabadtéri közösségek jellemzően ingyenesek, a pályás sportoknál pedig a pályabérletet szokták elosztani a résztvevők között. Ha egy klubnak van díja, azt a saját oldalán tünteti fel.",
          },
          {
            q: "Lesz edző, aki megmutatja, hogyan kell?",
            a: "Ritkán. A hobbi sportklub nem edzés, hanem közös mozgás. Valaki jellemzően elmagyarázza az alapokat, de nem számíthatsz strukturált oktatásra. Ha erre van szükséged, keress külön kezdő kurzust.",
          },
          {
            q: "Mi van, ha nem tetszik?",
            a: "Nem mész többet. Mivel a legtöbb közösségnél nincs formális tagság és nincs elköteleződés, semmit nem kell lemondanod. Emiatt nyugodtan kipróbálhatsz többet is párhuzamosan.",
          },
        ],
      },
    ],
  },
  {
    slug: "budapesti-kozossegek-regisztracio-nelkul",
    title: "Hogyan találj budapesti közösséget regisztráció nélkül?",
    metaTitle: "Budapesti közösségek regisztráció nélkül",
    description:
      "A legtöbb közösségkereső oldalhoz fiók kell. Megmutatjuk, hol lehet regisztráció nélkül böngészni, és melyik budapesti klubot éred el fiók nélkül is.",
    kind: "guide",
    category: null,
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    body: [
      {
        type: "p",
        text: "Közösséget keresel Budapesten, rákattintasz az első találatra, és rögtön egy regisztrációs űrlap fogad. Email, jelszó, profilkép, érdeklődési körök. Mire végigérsz, elment a kedved az egésztől. Ez az útmutató arról szól, hogyan lehet ezt kikerülni.",
      },
      {
        type: "p",
        text: "A regisztráció nem csak idő. Egy új fiók új adatbázis, ahol ott van az email-címed, és onnantól kapod a hírleveleket is. Ha csak annyit szeretnél megtudni, van-e Budapesten kezdőbarát futóklub, ez aránytalanul nagy ár.",
      },
      { type: "h2", text: "Melyik platformhoz kell fiók?" },
      {
        type: "p",
        text: "Érdemes két dolgot szétválasztani: a böngészéshez kell-e fiók, és a kapcsolatfelvételhez kell-e. A kettő gyakran nem ugyanaz.",
      },
      {
        type: "table",
        headers: ["Platform", "Böngészéshez kell fiók?", "Kapcsolatfelvételhez kell fiók?"],
        rows: [
          ["Facebook csoportok", "Jellemzően igen", "Igen"],
          ["Meetup", "Részben, korlátozottan", "Igen, a jelentkezéshez"],
          ["InterNations", "Részben", "Igen"],
          ["Instagram", "Korlátozottan", "Igen, az üzenethez"],
          ["Budapesti Közösségek", "Nem", "A klub saját csatornáján múlik"],
        ],
      },
      {
        type: "p",
        text: "Az utolsó sor fontos, és nem akarjuk szebbnek mutatni a valóságnál. Nálunk a böngészéshez tényleg nem kell semmi. Viszont ha egy klub csak Instagramon van jelen, akkor ahhoz, hogy üzenj nekik, mégis kelleni fog egy Instagram-fiók. Ezért gyűjtöttük külön össze azokat, amelyeknél ez sem szükséges.",
      },
      { type: "h2", text: "Miért jobb, ha nem kell regisztrálni?" },
      {
        type: "list",
        items: [
          "Gyorsabb, mert két perc alatt átlátod a kínálatot, nem húsz alatt",
          "Kevesebb személyes adatot adsz ki egy olyan szolgáltatásnak, amit talán egyszer használsz",
          "Nem kapsz hírlevelet olyantól, akitől nem kértél",
          "Meg tudod nézni, van-e egyáltalán neked való, mielőtt bármit megosztanál magadról",
          "Nem kell jelszót kitalálnod és tárolnod egy újabb helyre",
        ],
      },
      {
        type: "p",
        text: "Ez nem csak kényelmi kérdés. Az európai adatvédelmi szabályozás adattakarékossági elve is arról szól, hogy csak annyi személyes adatot kérjenek el, amennyi a célhoz feltétlenül szükséges. Egy klublista böngészéséhez pedig semennyi nem szükséges.",
      },
      {
        type: "citation",
        text: "GDPR 5. cikk: az adatkezelés elvei, köztük az adattakarékosság",
        href: "https://gdpr-info.eu/art-5-gdpr/",
      },
      { type: "h2", text: "Budapesti közösségek, amiket fiók nélkül is elérsz" },
      {
        type: "p",
        text: "Ezeknek saját weboldaluk van, tehát a programjaikat meg tudod nézni, és a kapcsolatfelvételhez sem kell közösségimédia-fiók.",
      },
      {
        type: "clublist",
        items: [
          {
            name: "Budapest Hikers",
            note: "Nemzetközi túraközösség, amely havi rendszerességgel szervez vezetett túrákat Budapest környéki helyszínekre, minden szinten. A túrák időpontja és útvonala a saját weboldalukon olvasható, és emailen is elérhetők, tehát a teljes folyamat végigvihető bármilyen közösségi oldal nélkül.",
            href: "https://budapesthikers.com/",
          },
          {
            name: "Túrázók Baráti Köre",
            note: "Természetjáró egyesület rendszeres közös túrákkal minden szintű túrázónak. A turakor.hu-n fent van a túranaptár és a túravezetők elérhetősége, tehát előre látod, mikor hova indulnak, és kit kereshetsz konkrét kérdéssel.",
            href: "https://turakor.hu/",
          },
          {
            name: "I Bike Budapest (Kerékpárosklub)",
            note: "Kerékpáros közösség és érdekvédelmi klub, amely rendszeres közös felvonulásokat és túrákat szervez. A weboldaluk teljes értékű hírforrás a budapesti kerékpáros eseményekről, és a kapcsolati adataik is nyilvánosak rajta.",
            href: "https://kerekparosklub.hu/",
          },
          {
            name: "Toastmasters Magyarország",
            note: "Nyilvános beszéd és vezetői készségfejlesztő klubok hálózata Budapesten és országszerte. A toastmasters.hu listázza a klubokat és a találkozóik helyszínét, a legtöbb klubnál pedig vendégként is be lehet ülni egy alkalomra, előzetes regisztráció nélkül.",
            href: "https://toastmasters.hu/klubok/",
          },
          {
            name: "ChempZ",
            note: "Ingyenes sportpálya- és meccskereső, amivel a közeledben találhatsz pályákat és játékostársakat. Kifejezetten azért került ebbe a listába, mert fiók nélkül is böngészhető, tehát meg tudod nézni, van-e a környékeden pálya, mielőtt bármit létrehoznál.",
            href: "https://chempz.hu/",
          },
          {
            name: "Latinfo",
            note: "Latin táncos események gyűjtőoldala Budapesten: salsa, bachata és egyéb social dance alkalmak egy helyen. Az eseménynaptár szabadon böngészhető, és mivel a legtöbb social dance estre egyszerűen be lehet sétálni, a részvételhez sem kell előre jelentkezni.",
            href: "https://latinfo.hu/events/",
          },
        ],
      },
      { type: "h2", text: "Így keress fiók nélkül, lépésről lépésre" },
      {
        type: "list",
        items: [
          "Böngéssz kategória szerint, és szűkíts arra, ami tényleg érdekel",
          "Nézd meg a klub leírásában, milyen nyelven működik és van-e szintfeltétel",
          "Ellenőrizd, van-e saját weboldala, mert akkor fiók nélkül is írhatsz nekik",
          "Ha csak Instagramon van, döntsd el, megéri-e a fiók, vagy keress alternatívát",
          "Az első alkalomra ne jelentkezz be sehova, csak menj el és nézd meg",
        ],
      },
      { type: "h2", text: "Kinek való ez a megközelítés?" },
      {
        type: "p",
        text: "Elsősorban annak, aki most érkezett a városba, és még csak tájékozódik. Frissen költözött külföldieknek, digitális nomádoknak és azoknak a budapestieknek, akik évek után szeretnének újra közösségbe járni. Mindhárom esetben az a lényeg, hogy előbb lásd a kínálatot, és csak utána köteleződj el bármi mellett.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Tényleg nem kell regisztrálni a Budapesti Közösségek használatához?",
            a: "Nem. A teljes lista böngészhető és kereshető fiók nélkül, és nem kérünk email-címet sem. Ha viszont egy klub csak Instagramon érhető el, ahhoz, hogy nekik írj, kelleni fog egy Instagram-fiók, mert ez már az ő csatornájuk.",
          },
          {
            q: "Ingyenes is, vagy csak regisztrációmentes?",
            a: "Mindkettő. A böngészés ingyenes, és az is ingyenes, ha egy klub fel szeretne kerülni a listára. A listázott közösségek nagy része szintén nem kér tagdíjat, ahol pedig van díj, azt a klub a saját oldalán tünteti fel.",
          },
          {
            q: "Angolul is működik, ha nem beszélek magyarul?",
            a: "A felület magyar nyelvű, viszont sok listázott közösség angolul működik, és ezt a leírásuk jelzi. A nyelvcsere, társasjáték és túraközösségek jelentős része nemzetközi társaságot vár.",
          },
          {
            q: "Honnan tudom, hogy egy klub még aktív?",
            a: "Minden klubnál ott van a saját Instagram- vagy weboldal-linkje. Ott látod, mikor posztoltak utoljára, ami a legmegbízhatóbb jelzés. A listát folyamatosan frissítjük, de a klub saját csatornája mindig naprakészebb.",
          },
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
