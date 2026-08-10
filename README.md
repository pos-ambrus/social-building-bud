# Budapesti Klubok

Közösségi klubok katalógusa Budapest számára: rácsos elrendezésű, kereshető/szűrhető
klublista, minden klubnál Instagram és/vagy weboldal linkkel, About oldallal és Google
Analytics 4 követéssel.

## Helyi futtatás

```bash
npm install
npm run dev
```

Nyisd meg a [http://localhost:3000](http://localhost:3000) címet.

## Klubadatok szerkesztése

A klubok jelenleg a [`src/data/clubs.json`](src/data/clubs.json) fájlban vannak tárolva —
nincs szükség adatbázisra az MVP-hez. Egy új klub hozzáadásához adj hozzá egy új objektumot
ehhez a listához:

```json
{
  "id": "egyedi-url-baraat-azonosito",
  "name": "Klub neve",
  "category": "Kategória",
  "district": "Kerület vagy null",
  "description": "Rövid, 1-2 mondatos leírás.",
  "website_url": "https://... vagy null",
  "instagram_url": "https://... vagy null",
  "featured": false
}
```

Ha később valódi adatbázisra (pl. Neon vagy Supabase Postgres) és admin felületre lenne
szükség, a `src/data/clubs.ts` fájlban lévő függvényeket (`clubs`, `getClubById`,
`getCategories`, `getDistricts`) kell lecserélni adatbázis-lekérdezésekre — a többi
komponens (`ClubGrid`, `ClubCard`, oldalak) változtatás nélkül tovább működik.

## Google Analytics (GA4)

1. Hozz létre egy GA4 property-t és mérési azonosítót (`G-XXXXXXXXXX`).
2. Másold a `.env.example` fájlt `.env.local` néven, és írd be az azonosítót:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Netlify-on: Site configuration → Environment variables → add
   `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

Ha ez a változó nincs beállítva, a GA szkript egyáltalán nem töltődik be — élesben mindig
állítsd be.

Az oldal automatikusan követi az oldalmegtekintéseket, valamint minden klub Instagram/weboldal
gombjának kattintását (`club_link_click` esemény, `club_name` és `link_type` paraméterekkel) —
ez a GA4 Realtime vagy DebugView riportban ellenőrizhető.

## Deploy Netlify-ra

A repó a Netlify Next.js runtime-hoz van konfigurálva (`netlify.toml`,
`@netlify/plugin-nextjs`). Kösd össze a GitHub repót egy Netlify site-tal — minden `main`
branch-re történő push automatikusan új deployt indít.
