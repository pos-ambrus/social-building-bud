export type CategorySeo = {
  /** Oldal H1-e: arra a kifejezésre írva, amit tényleg keresnek. */
  h1: string;
  /** Meta title (a template hozzáteszi a márkanevet). */
  title: string;
  /** Meta description. */
  description: string;
  /** Bevezető bekezdések a lista fölé. */
  intro: string[];
};

const SEO: Record<string, CategorySeo> = {
  Sport: {
    h1: "Sportközösségek és sportklubok Budapesten",
    title: "Sportközösségek Budapesten",
    description:
      "Futóklubok, kerékpáros csapatok, tenisz, kosárlabda és pickleball közösségek Budapesten. Ingyenes lista, ahol a legtöbb csapat kezdőket is szívesen lát.",
    intro: [
      "Budapesten a sportközösségek nagy része nem egyesület, hanem baráti társaság, ami hetente egyszer ugyanott találkozik. Pont ezért nehéz rájuk találni: nincs honlapjuk, csak egy Instagram-oldaluk, és jellemzően nem hirdetik magukat sehol.",
      "Az itt szereplő csapatok mind valódi, aktív közösségek, és a többségük nyitott arra, hogy egyedül állj be. Ha még sosem csináltad, a futóklubok és a szabadtéri kosárlabda a legkönnyebb belépő, mert ott senki nem várja el, hogy előre bejelentkezz.",
    ],
  },
  "Nyelvcsere / Networking": {
    h1: "Nyelvcsere és networking közösségek Budapesten",
    title: "Nyelvcsere és networking közösségek Budapesten",
    description:
      "Nyelvcsere estek és ismerkedős közösségek Budapesten helyieknek, expatoknak és utazóknak. Ingyenes lista, regisztráció nélkül.",
    intro: [
      "A nyelvcsere alkalmak azért működnek jól első közösségként, mert ott mindenki azzal a szándékkal érkezik, hogy ismeretlenekkel beszélgessen. Nem kell csoportba beépülni, mert a formátum maga oldja fel a helyzetet.",
      "Az itt listázott közösségek jellemzően heti rendszerességgel találkoznak, és nincs szükség előzetes jelentkezésre. Nyelvtudástól függetlenül lehet menni: a legtöbb helyen külön asztalok vannak a különböző nyelvekhez és szintekhez.",
    ],
  },
  "Túra / Természetjárás": {
    h1: "Túraklubok és természetjáró közösségek Budapesten",
    title: "Túraklubok és természetjáró közösségek Budapesten",
    description:
      "Közös túrák a budai hegyekben és Budapest környékén, vezetett programokkal, minden szinten. Ingyenes lista valódi túraközösségekről.",
    intro: [
      "A túrázás az egyik legkönnyebb módja annak, hogy egyedül csatlakozz egy csoporthoz. Órákig tart, közben végig van min menni és miről beszélni, és senkinek nem tűnik fel, ha az első félórát csendben töltöd.",
      "Az itt szereplő közösségek Budapestről indulnak, jellemzően tömegközlekedéssel elérhető helyszínekre, és a többségük külön jelzi, ha egy túra kezdőknek is ajánlott.",
    ],
  },
  "Női közösség": {
    h1: "Női közösségek és klubok Budapesten",
    title: "Női közösségek Budapesten",
    description:
      "Közösségek nőknek Budapesten: közös séták, beszélgetős találkozók és programok. Ingyenes lista, ahol új barátságokat is köthetsz.",
    intro: [
      "A felnőttkori barátkozás nehezebb, mint bárki bevallaná, és a női közösségek pont erre a hiányra épültek: nem valamilyen tevékenység köré szerveződnek elsősorban, hanem a kapcsolódás köré.",
      "Az itt listázott csoportok különböző formátumokban működnek, a közös sétától a szervezett beszélgetős estekig. Ha bizonytalan vagy, a séták a legjobb kiindulópont, mert nincs bemutatkozókör, csak elindultok együtt.",
    ],
  },
  Társasjáték: {
    h1: "Társasjáték-klubok és játékestek Budapesten",
    title: "Társasjáték-klubok Budapesten",
    description:
      "Társasjáték-esték és klubnapok Budapesten, magyarul és angolul, kezdőknek is. Ingyenes lista, a legtöbb helyen nincs tagdíj.",
    intro: [
      "A társasjáték-esték azért kivételesen jó belépők, mert a játék adja a struktúrát: nem neked kell beszélgetést kezdeményezned, elég leülnöd egy asztalhoz. Egy kör alatt óhatatlanul megismersz három-négy embert.",
      "Az itt szereplő közösségek nagy része ingyenes vagy csak a helyszín fogyasztását kéri, és szinte mindenhol van, aki elmagyarázza a szabályokat. Saját játékot nem kell vinni.",
    ],
  },
  Könyvklub: {
    h1: "Könyvklubok és olvasókörök Budapesten",
    title: "Könyvklubok Budapesten",
    description:
      "Olvasókörök és könyvklubok Budapesten, szépirodalmi és non-fiction fókusszal, havi rendszerességgel. Ingyenes lista.",
    intro: [
      "A könyvklub abban különbözik a legtöbb közösségtől, hogy előre tudod, miről lesz szó. Ez sokaknak pont az a biztonsági háló, ami miatt egyáltalán el mernek menni először.",
      "Az itt listázott klubok jellemzően havonta egyszer találkoznak, és a következő könyvet előre kihirdetik. Ha lemaradtál az olvasással, attól még mehetsz: ezt a legtöbb helyen külön jelzik is.",
    ],
  },
  "Jóga / Wellness": {
    h1: "Jóga és wellness közösségek Budapesten",
    title: "Jóga és wellness közösségek Budapesten",
    description:
      "Szabadtéri jógaórák, légzőgyakorlatok és wellness-közösségek Budapesten, kezdőknek is. Ingyenes lista valódi közösségekről.",
    intro: [
      "A stúdiós jógaóra és a jógaközösség nem ugyanaz. Az elsőn kifizeted a bérletet és hazamész, a másodikon utána maradtok beszélgetni. Ez a lista az utóbbiakra fókuszál.",
      "Az itt szereplő közösségeknél nem kell előzetes tapasztalat, és a szabadtéri alkalmakon jellemzően saját matracon kívül semmit nem kell hozni. Több helyen alkoholmentes társasági programok is kapcsolódnak hozzá.",
    ],
  },
  "Meditáció / Spiritualitás": {
    h1: "Meditációs és önismereti közösségek Budapesten",
    title: "Meditációs és önismereti közösségek Budapesten",
    description:
      "Meditációs csoportok és önismereti közösségek Budapesten, vallástól és szervezettől függetlenül. Ingyenes lista.",
    intro: [
      "Sokan azért nem próbálnak ki egy meditációs csoportot, mert attól tartanak, hogy valamilyen szervezethez kell csatlakozniuk. Az itt listázott közösségek nagy része pont ezért hangsúlyozza, hogy független.",
      "A formátumok eltérőek, a rövid csoportos üléstől a természetben tartott egész napos programokig. Előzetes gyakorlat sehol nem feltétel.",
    ],
  },
  "Startup / Tech": {
    h1: "Startup és tech közösségek Budapesten",
    title: "Startup és tech közösségek Budapesten",
    description:
      "Startup meetupok, alapítói közösségek és AI-találkozók Budapesten. Ingyenes lista rendszeresen működő szakmai közösségekről.",
    intro: [
      "A budapesti startup és tech színtér kicsi annyira, hogy pár rendszeres eseményen keresztül gyakorlatilag az egészet meg lehet ismerni. A nehézség inkább az, hogy tudd, melyek ezek.",
      "Az itt szereplő közösségek havi vagy annál sűrűbb rendszerességgel találkoznak, és a legtöbbjük nyitott arra, hogy érdeklődőként is beülj, nem csak alapítóként vagy fejlesztőként.",
    ],
  },
  Tánc: {
    h1: "Táncos közösségek és social dance Budapesten",
    title: "Táncos közösségek Budapesten",
    description:
      "Salsa, bachata és egyéb social dance alkalmak Budapesten, kezdőknek is. Ingyenes lista táncos közösségekről.",
    intro: [
      "A social dance formátum lényege, hogy nem párban kell érkezni: a helyszínen cserélgetitek a partnereket, és pont ez teszi közösséggé. Egyedül menni nemhogy furcsa, hanem a szokásos.",
      "A legtöbb esemény előtt van kezdő órakezdés, ahol az alaplépéseket megtanítják, tehát előzetes tudás nélkül is be lehet esni.",
    ],
  },
  "Networking / Digitális Nomád": {
    h1: "Digitális nomád és networking közösségek Budapesten",
    title: "Digitális nomád közösségek Budapesten",
    description:
      "Közösségek digitális nomádoknak és távmunkásoknak Budapesten: események, szállás, kapcsolatépítés. Ingyenes lista.",
    intro: [
      "Aki néhány hónapra érkezik Budapestre dolgozni, annak nincs ideje lassan beépülni valahová. Ezek a közösségek pont erre a helyzetre vannak kitalálva: gyors belépés, sűrű események.",
      "A gyakorlati rész is megvan bennük, a szállástól az álláslehetőségekig, tehát nem csak társaságot adnak, hanem a beköltözés első heteit is megkönnyítik.",
    ],
  },
  "LMBTQ+ Közösség": {
    h1: "LMBTQ+ közösségek és programok Budapesten",
    title: "LMBTQ+ közösségek Budapesten",
    description:
      "LMBTQ+ közösségek és közös programok Budapesten, biztonságos és befogadó légkörben. Ingyenes lista.",
    intro: [
      "Az itt szereplő közösségek célja, hogy legyen olyan tér, ahol nem kell magyarázkodni, és ahol a közös program a lényeg, nem a bemutatkozás.",
      "A formátumok a közös túráktól a kötetlen összejövetelekig terjednek, és mindegyik nyitott új résztvevőkre.",
    ],
  },
  "Önkéntesség / Közösségi akció": {
    h1: "Önkéntes közösségek és közösségi akciók Budapesten",
    title: "Önkéntes közösségek Budapesten",
    description:
      "Önkéntes kezdeményezések és jótékonysági akciók Budapesten, ahol egy alkalomra is be lehet állni. Ingyenes lista.",
    intro: [
      "Az önkéntesség kettős haszna, hogy közben csinálsz valami értelmeset, és közben ismersz meg embereket. Ez sokkal könnyebb helyzet, mint egy olyan esemény, ahol csak beszélgetni kell.",
      "Az itt listázott akciókhoz jellemzően egyetlen alkalomra is lehet csatlakozni, elköteleződés nélkül, és nem kell hozzá előzetes tapasztalat.",
    ],
  },
  "Szülők / Családok": {
    h1: "Közösségek szülőknek és családoknak Budapesten",
    title: "Szülői és családi közösségek Budapesten",
    description:
      "Közösségek kismamáknak, szülőknek és családoknak Budapesten, magyar és külföldi szülőknek egyaránt. Ingyenes lista.",
    intro: [
      "Kisgyerekkel a régi társasági élet nagy része eltűnik, és az újat nehéz felépíteni, mert minden a gyerek napirendjéhez igazodik. Ezek a közösségek ezzel a korláttal együtt vannak megtervezve.",
      "A találkozók jellemzően nappal vannak, gyerekkel együtt lehet menni, és több csoport kifejezetten a Budapestre költöző külföldi szülőket célozza.",
    ],
  },
  "Nyilvános beszéd": {
    h1: "Nyilvános beszéd klubok és retorika közösségek Budapesten",
    title: "Nyilvános beszéd klubok Budapesten",
    description:
      "Klubok, ahol a nyilvános beszéd és a prezentációs készség fejleszthető Budapesten, gyakorlati, támogató környezetben. Ingyenes lista.",
    intro: [
      "Ezek a klubok azért működnek, mert strukturáltak: minden alkalomnak fix menete van, előre tudod, mikor kerülsz sorra, és mindenki más is ugyanabban a cipőben jár.",
      "Vendégként szinte mindenhol be lehet ülni egy alkalomra anélkül, hogy beszélned kellene, és csak utána eldönteni, hogy csatlakozol.",
    ],
  },
  "Katolikus Közösségek": {
    h1: "Katolikus közösségek Budapesten",
    title: "Katolikus közösségek Budapesten",
    description:
      "Imacsoportok, kórusok és hitmélyítő közösségek Budapesten és országszerte. Ingyenes lista.",
    intro: [
      "A plébániai közösségek nagy része nem hirdeti magát online, ezért kívülről szinte láthatatlanok, pedig sok helyen kifejezetten várják az újakat.",
      "Az itt szereplő gyűjtések a különböző formátumokat lefedik, az imacsoporttól a kóruson át a beszélgetős közösségekig.",
    ],
  },
};

export function getCategorySeo(category: string, clubCount: number): CategorySeo {
  const known = SEO[category];
  if (known) return known;

  const plural = `${clubCount} ${clubCount === 1 ? "közösség" : "közösség"}`;
  return {
    h1: `${category} közösségek Budapesten`,
    title: `${category} közösségek Budapesten`,
    description: `${category} témájú budapesti közösségek listája. Ingyenes, regisztráció nélkül böngészhető.`,
    intro: [
      `Ebben a kategóriában jelenleg ${plural} szerepel a listán. Mindegyik valódi, aktív budapesti közösség, saját Instagram- vagy weboldallal.`,
      "A csatlakozáshoz nem kell rajtunk keresztül regisztrálni: kattints a klub saját linkjére, és vedd fel velük közvetlenül a kapcsolatot.",
    ],
  };
}
