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
        text: "Nem minden közösség hangulata fog illeni hozzád elsőre, és ez teljesen rendben van. Ha az első próbálkozás nem jött be, ez nem azt jelenti, hogy neked nem való a közösségi élet, csak azt, hogy ez a konkrét csoport nem volt a megfelelő. Budapesten ugyanabban a témában (legyen az futás, olvasás vagy társasjáték) rendszerint több különböző hangulatú közösség is működik párhuzamosan, tehát ha az egyik nem vált be, van hova továbblépni.",
      },
      { type: "h2", text: "Figyelj a testbeszédedre, mielőtt megszólalnál" },
      {
        type: "p",
        text: "Mielőtt bárkivel beszélgetnél, a testbeszéded már sokat elárul arról, mennyire vagy nyitott. Egy nyitott testtartás (nem keresztbe font kar, felemelt fej, rövid szemkontaktus) sokkal könnyebbé teszi mások számára, hogy odalépjenek hozzád, mintha telefonba nézve, zárkózottan állnál a csoport szélén. Nem kell azonnal beszélgetést kezdeményezned: elég, ha látszik rajtad, hogy szívesen fogadnál egy megszólítást.",
      },
      { type: "h2", text: "Használd ki a közös tevékenységet beszélgetési alapként" },
      {
        type: "p",
        text: "Az egyik legnagyobb előnye annak, ha egy aktivitás köré szerveződő közösséghez csatlakozol (futás, könyvklub, társasjáték), hogy sosem kell a semmiből beszélgetést indítanod. Mindig ott a közös téma: hogy ment a mai táv, mit gondolsz a könyvről, ki nyerte az előző kört. Ez jóval kevésbé megterhelő, mint egy tisztán társasági eseményen, ahol a beszélgetést a nulláról kell felépíteni.",
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
      { type: "h2", text: "Mennyi közösség elég: a minőség vagy a mennyiség számít?" },
      {
        type: "p",
        text: "Nem szükséges tucatnyi közösséghez csatlakozni ahhoz, hogy érezhető legyen a különbség. A kutatások szerint már egy vagy két, rendszeresen látogatott közösség is mérhetően csökkenti a magány érzését, feltéve, hogy a részvétel valóban rendszeres, és nem csak alkalmi. Sokkal nagyobb védőhatása van egy heti visszatérő futóklubnak, mint négy különböző, ritkán látogatott csoportnak, mert a rendszeresség az, ami a felszínes ismerkedésből tényleges kapcsolatot épít.",
      },
      { type: "h2", text: "Mi történik, ha halogatod a közösségkeresést?" },
      {
        type: "p",
        text: "A magány sajátossága, hogy önerősítő folyamat: minél tovább marad valaki elszigetelve, annál nehezebbnek tűnik az első lépés megtétele, ami tovább mélyíti az elszigeteltséget. Ezért érdemes minél korábban, még mielőtt a magány krónikussá válna, tudatosan keresni egy rendszeres közösségi alkalmat, ahelyett hogy a megfelelő pillanatra várnánk. A kutatások szerint a halogatás maga is növeli a szorongást a társas helyzetekkel kapcsolatban, tehát minél tovább vársz, annál nehezebb lesz az első lépés.",
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
        text: "A társasjáték az egyik legjobb ürügy az ismerkedésre, mert a játék önmagában ad beszélgetési alapot, és nem kell aktívan társalgási témát keresned. Budapesten több aktív, ingyenesen látogatható társasjáték-közösség működik, ezek közül mutatunk be hármat, amelyekhez kortól és tapasztalattól függetlenül csatlakozhatsz.",
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
            note: "Angol nyelvű társasjáték-esték, amelyek változó budapesti helyszíneken (gyakran társasjáték-bárokban) zajlanak. A közösség kifejezetten nyitott mindenkire, aki angolul szeretne beszélgetni és játszani egyszerre.",
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
        text: "A TIA Game Cave a legjobb kiindulópont, ha magyar nyelvű, ingyenes és tagságmentes közeget keresel. Ha inkább nemzetközi, angol nyelvű társaságban ismerkednél, a Budapest Board Game Nights és a Board Games in English is kiváló választás: mindkettő rendszeresen vált helyszínt, így folyamatosan van apropó egy új találkozóra. A Board Games in English nagyobb létszáma miatt szinte minden héten van program, ha gyakrabban szeretnél járni.",
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
            a: "A TIA Game Cave kifejezetten széles korosztályt (14-99 év) céloz meg, a nemzetközi közösségek pedig elsősorban felnőtteknek szólnak, de nincs szigorú korhatár egyiknél sem.",
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
      "Szabadtéri jóga, wellness-közösség és önismereti meditáció Budapesten: négy valódi közösség, amely kifejezetten kezdőknek is barátságos.",
    kind: "listicle",
    category: "Jóga / Wellness",
    author: DEFAULT_AUTHOR,
    publishedAt: "2026-09-03",
    updatedAt: "2026-09-03",
    body: [
      {
        type: "p",
        text: "A jóga és a meditáció sokak számára ijesztően szakértőinek tűnik elsőre, pedig a legtöbb budapesti közösség pontosan azoknak szól, akik korábban sosem próbálták. Az alábbi négy közösség mind nyitott kezdőknek, és egyikhez sem kell drága stúdióbérlet vagy előzetes tudás.",
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
            note: "Wellness-közösség jógával, légzőgyakorlatokkal, alkoholmentes társasági alkalmakkal és közösségi sétákkal. A cél kifejezetten a valódi, mély kapcsolódás, nem csak a fizikai gyakorlat.",
            href: "https://www.meetup.com/yogamindfulnessbudapest/",
          },
          {
            name: "Budapest Personal Growth Meetup",
            note: "Nyílt, vallástól és szervezettől független meditációs és önismereti közösség, változó helyszíneken. Kifejezetten azoknak ajánlott, akik a fizikai gyakorlat mellett a belső munkára is nyitottak.",
            href: "https://www.meetup.com/budapest-personal-growth-szemelyes-fejl%C5%91des-meetup/",
          },
          {
            name: "Artemis Compass",
            note: "Természethez kapcsolódó, önismereti programok, ahol a természet csendje és nyugalma segít közelebb kerülni önmagunkhoz. Jó választás, ha a hagyományos teremben tartott meditáció helyett inkább a szabadban keresnéd a nyugalmat.",
            href: "https://www.facebook.com/profile.php?id=61574524619037",
          },
        ],
      },
      { type: "h2", text: "Melyiket válaszd, ha teljesen kezdő vagy?" },
      {
        type: "p",
        text: "Ha a fizikai gyakorlat áll közelebb hozzád, a Margitszigeti Jóga a legkevésbé megterhelő kezdés, mert szabadtéri, laza hangulatú, és nem igényel semmilyen előzetes tudást. Ha inkább a társasági, közösségi élmény a fontos, a Conscious Budapest szélesebb programkínálata (jóga mellett séták, teázások, szauna) jobban illik hozzád. Ha kifejezetten az önismereti, elmélyültebb irányba mennél, a Budapest Personal Growth Meetup vagy az Artemis Compass a jobb választás.",
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
        text: "A legkönnyebb belépési pont azok a közösségek, ahol nincs fix csapatbeosztás, csak megjelensz, és csatlakozol az aktuális meccshez. Budapesten ilyen például a Bikás Park Streetball, ahol utcai kosárlabda-meccsekhez lehet spontán csatlakozni, vagy a Budapest Bike Polo, amely heti rendszerességű edzéseket és meccseket tart kezdőknek is nyitottan.",
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
        text: "Ha kifejezetten focihoz, kosárlabdához vagy röplabdához keresel csapattársakat, érdemes rákeresni a hobbi csapatsport Facebook-csoportokra: ezekben rendszeresen posztolnak azok a csapatok, akiknek éppen hiányzik egy-két játékosuk egy adott meccshez vagy szezonhoz. Ez a legjobb módja annak, hogy fix csapatba kerülj anélkül, hogy egyesületi tagságot vállalnál.",
      },
      {
        type: "citation",
        text: "Facebook: Hobbi kosárlabda-, foci-, röplabda stb. csapattag kereső csoport Budapesten",
        href: "https://www.facebook.com/groups/2866489026922478/",
      },
      { type: "h2", text: "Ne várd meg, amíg tökéletesen felkészült leszel" },
      {
        type: "p",
        text: "A hobbi szintű csapatoknál a cél a közös élmény, nem a versenyszerű teljesítmény, ezért nem kell edzésbe hozott formában érkezned. A legtöbb szervező kifejezetten örül az új arcoknak, és a csapat szintjéhez igazítja a tempót, hasonlóan ahhoz, ahogy a futóklubok is vegyes szinteket fogadnak be.",
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
            a: "Ez gyakori, mert a hobbi csapatoknak korlátozott a létszáma. Érdemes több csoportba is beszállni és több csapatot is megkeresni, mert Budapesten egyszerre több hasonló kezdeményezés fut párhuzamosan.",
          },
        ],
      },
      {
        type: "p",
        text: "A teljes sport-közösség listát a Budapesti Közösségek listájában böngészheted kategória szerint.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
