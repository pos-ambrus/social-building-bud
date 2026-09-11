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
    title: "Kezdőbarát sportklubok Budapesten: így ismerd fel őket",
    description:
      "Milyen konkrét jelekből tudod megállapítani, hogy egy budapesti sportklub tényleg kezdőbarát-e, mielőtt először megjelennél egy edzésen.",
    kind: "guide",
    category: "Sport",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "Nem minden klub egyformán kezdőbarát, még akkor sem, ha a leírásában ez szerepel. Szerencsére van néhány konkrét jel, amiből már a csatlakozás előtt, a klub Instagram- vagy Facebook-oldalát végignézve is meg lehet állapítani, tényleg befogadó közegre számíthatsz-e, vagy inkább egy régóta összeszokott, zárt csapatra.",
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
      {
        type: "clublist",
        items: [
          {
            name: "Mozaik Med közösségi futás",
            note: "Ingyenes, keddenkénti közösségi futás a Margitszigeten, ahol a leírás is kiemeli, hogy bármilyen futótempóval csatlakozhatsz.",
            href: "https://mozaikmed.hu/",
          },
          {
            name: "Angyalföldi Futóklub",
            note: "Kerületi futóklub, amely kezdőknek és haladóknak egyaránt szól, kerületi, kevésbé formális hangulattal.",
            href: "https://www.facebook.com/p/Angyalf%C3%B6ldi-Fut%C3%B3klub-100063959566104/",
          },
          {
            name: "TIA Game Cave",
            note: "Ingyenes belépésű társasjáték-közösség, ahol nincs tagsági díj, és a szervezők széles korosztályt céloznak meg.",
            href: "https://www.facebook.com/groups/263358474501496/",
          },
        ],
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
        ],
      },
      {
        type: "p",
        text: "A teljes, kezdőbarát sportklub-listát kategória szerint böngészheted a Budapesti Közösségek oldalán.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
