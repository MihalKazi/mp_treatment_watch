# MP Treatment Watch (এমপি চিকিৎসা নজরদারি)

Data-journalism prototype tracking Bangladeshi politicians and MP/central party leaders who took
medical treatment abroad after 5 August 2024, comparing what they spent abroad against the cost of
equivalent treatment in Bangladesh.

**All data currently shipped in this repo is illustrative** — names, parties, hospitals, and figures
under `data/cases.json` are invented and do not represent real individuals. Swap them for real,
sourced cases before treating this as a live publication (see "Adding a real, sourced case" below).

## Stack

- Next.js 14+ (App Router), TypeScript, Tailwind CSS v4
- Recharts for the country-spending chart
- Data loaded statically from `data/cases.json` — no backend

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Data schema

Each entry in `data/cases.json` is a `CaseRecord` (see `lib/types.ts`):

```ts
{
  id: string;
  slug: string;
  person: { nameBn, nameEn, party, position, photoPlaceholder };
  treatment: { conditionBn, conditionEn, procedure, dateStarted };
  abroad: { country, city, hospital, durationDays, costUSD, costBDT };
  inBangladesh: { available, exampleHospitals[], estimatedCostBDT, notes };
  comparison: { multiplier, savingsIfLocalBDT }; // multiplier = abroad ÷ local cost
  sources: [{ title, outlet, url, date }];
  verificationStatus: "verified" | "reported" | "unverified";
  lastUpdated: string; // ISO date
}
```

`lib/data.ts` exposes helpers (`getAllCases`, `getCaseBySlug`, `getAggregates`, `getFundContext`) used
across pages. `lib/format.ts` formats currency (BDT lakh/crore notation, USD) and multipliers.

## Adding a real, sourced case

1. Confirm at least one published, citable source (news report, official disclosure, hospital
   statement). Multiple independent sources are required for `"verified"` status — see
   `/methodology` for the full tier definitions.
2. Add a new object to `data/cases.json` following the schema above. Use a unique `slug`
   (kebab-case) — case detail pages are statically generated from it.
3. Set `abroad.costBDT` and `inBangladesh.estimatedCostBDT` from sourced figures, then compute:
   - `comparison.multiplier = abroad.costBDT / inBangladesh.estimatedCostBDT`
   - `comparison.savingsIfLocalBDT = abroad.costBDT - inBangladesh.estimatedCostBDT`
4. List every source used in `sources[]` with outlet, title, URL, and publish date — every cost
   figure displayed on the site must be traceable to a source here.
5. Set `verificationStatus` honestly per the methodology tiers, and update `lastUpdated`.

## Pages

- `/` — hero, animated aggregate counters, featured cases, country-spending chart, fund-context module
- `/cases` — full list with card/table toggle, filters (party, country, availability, verification), search, sort
- `/cases/[slug]` — case detail: timeline, side-by-side cost comparison, sources
- `/methodology` — data collection, cost estimation, verification tiers, correction policy
- `/about` — project purpose and scope

**Live site:** https://mp-treatment-watch.vercel.app
