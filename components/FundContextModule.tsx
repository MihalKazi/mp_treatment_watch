import { getFundContext } from "@/lib/data";
import { formatBDT, formatNumber } from "@/lib/format";
import { Bi } from "@/components/LanguageProvider";

export default function FundContextModule({ totalBDT }: { totalBDT: number }) {
  const ctx = getFundContext(totalBDT);

  const items = [
    { value: ctx.icuBeds, bn: "ICU শয্যা (১ বছর)", en: "ICU beds, funded for a year" },
    { value: ctx.dialysisSessions, bn: "ডায়ালাইসিস সেশন", en: "Dialysis sessions" },
    { value: ctx.ruralClinics, bn: "গ্রামীণ ক্লিনিক (১ বছর)", en: "Rural clinics, funded for a year" },
  ];

  return (
    <section className="border-t rule pt-10">
      <Bi
        bn="এই অর্থ দিয়ে কী হতো"
        en="What this money could fund"
        className="block text-xs uppercase tracking-[0.2em] text-accent mb-3"
      />
      <Bi
        bn={`${formatBDT(totalBDT)} দিয়ে দেশে কী হতে পারত`}
        en={`What ${formatBDT(totalBDT)} could fund locally`}
        className="block font-headline text-2xl sm:text-3xl font-semibold mb-2"
      />
      <Bi
        bn="শুধুমাত্র দৃষ্টান্তমূলক প্রেক্ষাপট, আনুমানিক জনস্বাস্থ্য ব্যয় বেঞ্চমার্কের ভিত্তিতে — কোনো সরকারি বাজেট বরাদ্দ নয়।"
        en="Illustrative context only, based on approximate public-health cost benchmarks — not an official budget allocation."
        className="block text-sm text-muted mb-8 max-w-2xl"
      />
      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.en} className="border rule rounded-lg p-5 bg-surface">
            <p className="text-3xl font-headline-en font-semibold text-accent tabular">
              {formatNumber(item.value)}
            </p>
            <Bi bn={item.bn} en={item.en} className="block text-sm mt-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
