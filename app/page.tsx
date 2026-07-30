import Link from "next/link";
import { getAllCases, getAggregates } from "@/lib/data";
import CaseCard from "@/components/CaseCard";
import Counter from "@/components/Counter";
import CountryChart from "@/components/CountryChart";
import FundContextModule from "@/components/FundContextModule";
import { Bi } from "@/components/LanguageProvider";

export default function Home() {
  const cases = getAllCases();
  const agg = getAggregates();
  const featured = cases.slice(0, 4);

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <Bi
          bn="তদন্তমূলক প্রকল্প"
          en="Investigative Data Project"
          className="block text-xs uppercase tracking-[0.25em] text-accent mb-4"
        />
        <Bi
          bn="বিদেশে চিকিৎসা, দেশে বঞ্চনা।"
          en="Treatment abroad, denial at home."
          className="block font-headline text-4xl sm:text-6xl font-semibold max-w-3xl"
        />
        <Bi
          bn="২০২৪ সালের ৫ আগস্টের পর থেকে, এমপি চিকিৎসা নজরদারি বাংলাদেশের রাজনীতিবিদ ও এমপি/কেন্দ্রীয় নেতাদের নথিভুক্ত করে যারা বিদেশে চিকিৎসা নিয়েছেন, এবং তাদের ব্যয়কে বাংলাদেশে সমতুল্য চিকিৎসার প্রকৃত খরচের সাথে তুলনা করে — প্রতিটি অঙ্কের জন্য সূত্রসহ।"
          en="Since 5 August 2024, MP Treatment Watch documents Bangladeshi politicians and MP / central party leaders who sought medical treatment abroad, and compares what they paid against the verified cost of equivalent care available inside Bangladesh — with sources cited for every figure."
          className="block text-sm sm:text-base text-muted mt-6 max-w-2xl leading-relaxed"
        />
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/cases" className="bg-accent text-white text-sm px-5 py-3 rounded-md hover:bg-accent-soft transition-colors">
            <Bi bn="সব মামলা দেখুন" en="Browse all cases" />
          </Link>
          <Link href="/methodology" className="border rule text-sm px-5 py-3 rounded-md hover:border-accent/60 transition-colors">
            <Bi bn="যাচাই পদ্ধতি" en="How we verify" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 border-t rule pt-10">
          <div>
            <p className="text-3xl sm:text-4xl font-headline-en font-semibold text-accent">
              <Counter value={agg.totalCases} />
            </p>
            <Bi bn="মামলা ট্র্যাক করা হয়েছে" en="Cases tracked" className="block text-xs text-muted mt-1" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-headline-en font-semibold text-accent">
              <Counter value={agg.totalSpentAbroadUSD} format="usd" />
            </p>
            <Bi bn="বিদেশে খরচ (USD)" en="Spent abroad" className="block text-xs text-muted mt-1" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-headline-en font-semibold text-accent">
              <Counter value={agg.totalPotentialSavingsBDT} format="bdt" />
            </p>
            <Bi bn="সাশ্রয় হতে পারত" en="Could have been saved" className="block text-xs text-muted mt-1" />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-headline-en font-semibold text-accent">
              <Counter value={agg.countriesInvolved} />
            </p>
            <Bi bn="দেশ জড়িত" en="Countries involved" className="block text-xs text-muted mt-1" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-baseline justify-between mb-6">
          <Bi bn="নির্বাচিত মামলা" en="Featured cases" className="font-headline text-2xl sm:text-3xl font-semibold" />
          <Link href="/cases" className="text-sm text-accent hover:underline">
            <Bi bn="সব দেখুন →" en="View all →" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((c) => (
            <CaseCard key={c.id} record={c} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <Bi bn="গন্তব্য দেশ অনুযায়ী খরচ" en="Spending by destination country" className="block font-headline text-2xl sm:text-3xl font-semibold mb-6" />
        <div className="border rule rounded-lg bg-surface p-4 sm:p-6">
          <CountryChart data={agg.spendingByCountry} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <FundContextModule totalBDT={agg.totalPotentialSavingsBDT} />
      </section>

      <section className="border-t rule">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Bi bn="আমরা যেভাবে যাচাই করি" en="How we verify" className="block text-xs uppercase tracking-[0.2em] text-accent mb-3" />
          <Bi
            bn="প্রতিটি অঙ্ক যাচাই স্তর অনুযায়ী শ্রেণীবদ্ধ এবং একটি প্রকাশিত সূত্রে সন্ধানযোগ্য।"
            en="Every figure here is tiered by verification status and traced to a published source."
            className="block font-headline text-2xl sm:text-3xl font-semibold mb-4 max-w-2xl"
          />
          <Bi
            bn="প্রাপ্য নথির শক্তি অনুযায়ী মামলাগুলো যাচাইকৃত, প্রতিবেদিত, বা অযাচাইকৃত হিসেবে চিহ্নিত। খরচ নির্ণয়ের পদ্ধতি ও সংশোধন নীতিসহ সম্পূর্ণ পদ্ধতি পড়ুন।"
            en="Cases are marked verified, reported, or unverified depending on the strength of available documentation. Read the full methodology, including cost-estimation approach and correction policy."
            className="block text-sm text-muted max-w-2xl mb-6"
          />
          <Link href="/methodology" className="text-sm text-accent hover:underline">
            <Bi bn="পদ্ধতি পড়ুন →" en="Read the methodology →" />
          </Link>
        </div>
      </section>
    </div>
  );
}
