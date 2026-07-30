import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getCaseBySlug } from "@/lib/data";
import { formatBDT, formatUSD, formatMultiplier } from "@/lib/format";
import VerificationBadge from "@/components/VerificationBadge";
import CostBar from "@/components/CostBar";
import { Bi } from "@/components/LanguageProvider";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = getCaseBySlug(slug);
  if (!record) return {};
  return { title: `${record.person.nameEn} — MP Treatment Watch` };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const record = getCaseBySlug(slug);
  if (!record) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <Link href="/cases" className="text-sm text-accent hover:underline">
        <Bi bn="← সব মামলা" en="← All cases" />
      </Link>

      <header className="mt-6 mb-10 border-b rule pb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Bi
              bn={record.person.nameBn}
              en={record.person.nameEn}
              className="block font-headline text-3xl sm:text-4xl font-semibold"
            />
            <p className="text-sm text-muted mt-2">
              {record.person.party} · {record.person.position}
            </p>
          </div>
          <VerificationBadge status={record.verificationStatus} />
        </div>
      </header>

      <section className="mb-12">
        <Bi
          bn="চিকিৎসা সময়রেখা"
          en="Treatment timeline"
          className="block text-xs uppercase tracking-[0.2em] text-accent mb-3"
        />
        <ol className="relative border-l rule pl-6 space-y-6">
          <li>
            <div className="absolute -left-1.25 w-2.5 h-2.5 rounded-full bg-accent mt-1.5" />
            <p className="text-sm text-muted tabular">{record.treatment.dateStarted}</p>
            <Bi bn={record.treatment.conditionBn} en={record.treatment.conditionEn} className="block font-medium mt-1" />
            <p className="text-sm text-muted mt-1">
              <Bi bn="প্রক্রিয়া" en="Procedure" />: {record.treatment.procedure}
            </p>
          </li>
          <li className="relative">
            <div className="absolute -left-7.25 w-2.5 h-2.5 rounded-full bg-foreground/40 mt-1.5" />
            <p className="text-sm text-muted">
              <Bi bn="চিকিৎসার জন্য" en="Traveled to" />{" "}
              <span className="text-foreground">
                {record.abroad.city}, {record.abroad.country}
              </span>{" "}
              <Bi
                bn={`স্থানে ${record.abroad.durationDays} দিন ${record.abroad.hospital}-এ চিকিৎসা নেন।`}
                en={`for ${record.abroad.durationDays} days of treatment at ${record.abroad.hospital}.`}
              />
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-12 border rule rounded-lg bg-surface p-6 sm:p-8">
        <Bi
          bn="খরচ তুলনা"
          en="Cost comparison"
          className="block text-xs uppercase tracking-[0.2em] text-accent mb-3"
        />
        <h2 className="font-headline text-2xl font-semibold mb-1">
          {formatMultiplier(record.comparison.multiplier)}{" "}
          <Bi bn="বিদেশে বেশি ব্যয়বহুল" en="more expensive abroad" />
        </h2>
        <p className="text-sm text-muted mb-6">
          <Bi bn="দেশে চিকিৎসা করলে আনুমানিক সাশ্রয়" en="Estimated savings if treated locally" />:{" "}
          <span className="text-accent font-semibold tabular">
            {formatBDT(record.comparison.savingsIfLocalBDT)}
          </span>
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <Bi bn="বিদেশে" en="Abroad" className="block text-xs text-muted mb-1" />
            <p className="text-3xl font-headline-en font-semibold text-accent tabular">
              {formatBDT(record.abroad.costBDT)}
            </p>
            <p className="text-sm text-muted tabular">{formatUSD(record.abroad.costUSD)}</p>
            <p className="text-sm text-muted mt-2">
              {record.abroad.hospital}, {record.abroad.city}, {record.abroad.country}
            </p>
            <p className="text-xs text-faint">
              {record.abroad.durationDays} <Bi bn="দিন" en="days" />
            </p>
          </div>
          <div>
            <Bi bn="বাংলাদেশে (আনুমানিক)" en="In Bangladesh (estimated)" className="block text-xs text-muted mb-1" />
            <p className="text-3xl font-headline-en font-semibold tabular">
              {formatBDT(record.inBangladesh.estimatedCostBDT)}
            </p>
            <p className="text-sm text-muted mt-2">
              {record.inBangladesh.available ? (
                <Bi bn="দেশে উপলব্ধ:" en="Available locally at:" />
              ) : (
                <Bi bn="দেশে নির্ভরযোগ্যভাবে উপলব্ধ নয়।" en="Not reliably available locally." />
              )}
            </p>
            {record.inBangladesh.exampleHospitals.length > 0 && (
              <ul className="text-sm text-muted list-disc list-inside mt-1">
                {record.inBangladesh.exampleHospitals.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
            <p className="text-xs text-faint mt-2">{record.inBangladesh.notes}</p>
          </div>
        </div>

        <CostBar
          abroadBDT={record.abroad.costBDT}
          localBDT={record.inBangladesh.estimatedCostBDT}
          multiplier={record.comparison.multiplier}
        />
      </section>

      <section>
        <Bi bn="সূত্র" en="Sources" className="block text-xs uppercase tracking-[0.2em] text-accent mb-3" />
        <ul className="space-y-3">
          {record.sources.map((s) => (
            <li key={s.url} className="border rule rounded-md p-4 text-sm">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {s.title}
              </a>
              <p className="text-xs text-muted mt-1 tabular">
                {s.outlet} · {s.date}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-xs text-faint mt-4">
          <Bi bn="সর্বশেষ আপডেট" en="Last updated" />: {record.lastUpdated}
        </p>
      </section>
    </div>
  );
}
