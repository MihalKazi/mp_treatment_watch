import { getAllCases, getAllParties, getAllCountries } from "@/lib/data";
import CasesExplorer from "@/components/CasesExplorer";
import { Bi } from "@/components/LanguageProvider";

export const metadata = {
  title: "সব মামলা · All Cases — MP Treatment Watch",
};

export default function CasesPage() {
  const cases = getAllCases();
  const parties = getAllParties();
  const countries = getAllCountries();

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <Bi bn="ডেটাবেস" en="Database" className="block text-xs uppercase tracking-[0.25em] text-accent mb-3" />
      <Bi bn="সব মামলা" en="All Cases" className="block font-headline text-3xl sm:text-4xl font-semibold mb-3" />
      <Bi bn="সব ট্র্যাক করা মামলা" en="All tracked cases" className="block font-headline-en text-lg text-muted mb-8" />
      <CasesExplorer cases={cases} parties={parties} countries={countries} />
    </div>
  );
}
