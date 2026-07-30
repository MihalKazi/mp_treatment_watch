import { Bi } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";

export const metadata = { title: "পদ্ধতি · Methodology — MP Treatment Watch" };

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <Bi bn="পদ্ধতি" en="Methodology" className="block text-xs uppercase tracking-[0.25em] text-accent mb-3" />
      <Bi
        bn="আমরা যেভাবে তথ্য সংগ্রহ করি"
        en="How we collect our data"
        className="block font-headline text-3xl sm:text-4xl font-semibold mb-8"
      />

      <Reveal as="section" className="mb-10">
        <Bi bn="তথ্য সংগ্রহ" en="Data collection" className="block font-headline text-xl font-semibold mb-3" />
        <Bi
          bn="প্রতিটি মামলা একটি প্রকাশিত প্রতিবেদন থেকে শুরু হয় — সংবাদ কভারেজ, সংসদীয় প্রকাশনা, হাসপাতালের বিবৃতি, বা আদালত/প্রোবেট ফাইলিং। আমরা গুজব বা অযাচাইকৃত সোশ্যাল মিডিয়া দাবির ভিত্তিতে কোনো মামলা যুক্ত করি না। প্রতিটি সূত্র তার প্রকাশনা, তারিখ এবং সরাসরি লিংকসহ লগ করা হয়।"
          en="Every case begins from a published report — news coverage, parliamentary disclosures, hospital statements, or court/probate filings. We do not add a case based on rumor or unverified social media claims alone. Each source is logged with its outlet, publication date, and a direct link."
          className="block text-sm text-muted leading-relaxed mb-3"
        />
        <Bi
          bn="যখন একাধিক প্রতিবেদনে ভিন্ন অঙ্ক পাওয়া যায়, আমরা সবচেয়ে রক্ষণশীল (সর্বনিম্ন) বিশ্বাসযোগ্য অনুমান উপস্থাপন করি এবং মামলার নোটে পার্থক্যটি উল্লেখ করি।"
          en="Where multiple outlets report conflicting figures, we present the most conservative (lowest) credible estimate and note the discrepancy in the case's notes field."
          className="block text-sm text-muted leading-relaxed"
        />
      </Reveal>

      <Reveal as="section" className="mb-10">
        <Bi bn="খরচ নির্ণয়ের পদ্ধতি" en="Cost estimation approach" className="block font-headline text-xl font-semibold mb-3" />
        <Bi
          bn="বিদেশের খরচ প্রতিবেদিত অঙ্ক, উপলব্ধ হাসপাতালের ফি তালিকা, বা প্রামাণ্য পরিবার/সহযোগীর বিবৃতি থেকে নেওয়া হয়। বাংলাদেশ-সমতুল্য খরচ অনুমান করা হয় একই বা ক্লিনিক্যালি সমতুল্য পদ্ধতি সম্পাদনকারী তুলনীয় সরকারি ও বেসরকারি হাসপাতালের প্রকাশিত রেট কার্ড ব্যবহার করে।"
          en="Abroad costs are drawn from reported figures, hospital fee schedules where available, or documented family/associate statements. Bangladesh-equivalent costs are estimated using published rate cards from comparable public and private hospitals performing the same or clinically equivalent procedure."
          className="block text-sm text-muted leading-relaxed mb-3"
        />
        <Bi
          bn="গুণক (বিদেশ ÷ দেশ) এবং সম্ভাব্য সাশ্রয়ের অঙ্কগুলো দৃষ্টান্তমূলক তুলনা, নিখুঁত আর্থিক নিরীক্ষা নয় — প্রকৃত খরচ জটিলতার হার, ওয়ার্ড ক্লাস এবং হাসপাতালের সমঝোতাকৃত রেটের উপর নির্ভর করে পরিবর্তিত হয়।"
          en="The multiplier (abroad ÷ local) and potential savings figures are illustrative comparisons, not precise financial audits — actual costs vary by complication rate, ward class, and negotiated hospital rates."
          className="block text-sm text-muted leading-relaxed"
        />
      </Reveal>

      <Reveal as="section" className="mb-10">
        <Bi bn="যাচাই স্তর" en="Verification tiers" className="block font-headline text-xl font-semibold mb-3" />
        <ul className="space-y-3 text-sm text-muted">
          <li>
            <Bi bn="যাচাইকৃত" en="Verified" className="font-medium text-foreground" /> —{" "}
            <Bi
              bn="দুই বা তার বেশি স্বতন্ত্র, বিশ্বাসযোগ্য সূত্র, বা একটি সরকারি নথি/বিবৃতি দ্বারা সমর্থিত।"
              en="corroborated by two or more independent, credible sources, or by an official document/statement."
            />
          </li>
          <li>
            <Bi bn="প্রতিবেদিত" en="Reported" className="font-medium text-foreground" /> —{" "}
            <Bi
              bn="অন্তত একটি বিশ্বাসযোগ্য সংবাদমাধ্যমে প্রকাশিত, তবে এখনও স্বতন্ত্রভাবে যাচাই করা হয়নি।"
              en="covered by at least one credible news outlet, not yet independently corroborated."
            />
          </li>
          <li>
            <Bi bn="অযাচাইকৃত" en="Unverified" className="font-medium text-foreground" /> —{" "}
            <Bi
              bn="প্রাথমিক বা একক সূত্রের দাবি, আরও নথির অপেক্ষায়। স্বচ্ছতার জন্য অন্তর্ভুক্ত, তবে যথাযথভাবে গুরুত্ব দেওয়া হয়।"
              en="preliminary or single-source claims pending further documentation. Included for transparency, weighted accordingly."
            />
          </li>
        </ul>
      </Reveal>

      <Reveal as="section" id="corrections" className="mb-6">
        <Bi bn="সংশোধন নীতি" en="Correction policy" className="block font-headline text-xl font-semibold mb-3" />
        <Bi
          bn="যদি আপনি কোনো ভুল খুঁজে পান, অতিরিক্ত সূত্র রাখেন, বা কোনো মামলার বিষয়বস্তুর প্রতিনিধিত্ব করেন এবং সংশোধন বা বিবৃতি জমা দিতে চান, সহায়ক প্রমাণসহ সম্পাদকীয় দলের সাথে যোগাযোগ করুন। সংশোধনগুলো মূল সূত্রের বিরুদ্ধে পর্যালোচনা করা হয় এবং মামলার &ldquo;সর্বশেষ আপডেট&rdquo; তারিখে দৃশ্যমান আপডেট প্রতিফলিত হয়।"
          en="If you find an error, have additional sourcing, or represent a subject of a case entry and wish to submit a correction or statement, contact the editorial team with supporting documentation. Corrections are reviewed against original sources and reflected with a visible update to the case&rsquo;s &ldquo;last updated&rdquo; date."
          className="block text-sm text-muted leading-relaxed mb-3"
        />
        <p className="text-sm text-muted leading-relaxed">
          <Bi bn="যোগাযোগ" en="Contact" />:{" "}
          <a href="mailto:corrections@example.org" className="text-accent hover:underline">
            corrections@example.org
          </a>{" "}
          <Bi bn="সাধারণত আমরা ২ কর্মদিবসের মধ্যে সাড়া দেওয়ার চেষ্টা করি।" en="We aim to respond within 2 business days." />
        </p>
      </Reveal>
    </div>
  );
}
