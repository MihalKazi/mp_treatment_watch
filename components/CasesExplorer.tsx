"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CaseRecord } from "@/lib/types";
import { formatBDT, formatUSD, formatMultiplier } from "@/lib/format";
import CaseCard from "@/components/CaseCard";
import VerificationBadge from "@/components/VerificationBadge";
import { useLanguage } from "@/components/LanguageProvider";

type SortKey = "costDesc" | "costAsc" | "dateDesc" | "dateAsc" | "multiplierDesc";

const t = {
  search: { bn: "অনুসন্ধান", en: "Search" },
  searchPlaceholder: { bn: "বাংলা বা ইংরেজিতে নাম", en: "Name in Bengali or English" },
  party: { bn: "দল", en: "Party" },
  allParties: { bn: "সব দল", en: "All parties" },
  country: { bn: "দেশ", en: "Country" },
  allCountries: { bn: "সব দেশ", en: "All countries" },
  availability: { bn: "প্রাপ্যতা", en: "Availability in BD" },
  all: { bn: "সব", en: "All" },
  available: { bn: "দেশে পাওয়া যায়", en: "Available locally" },
  unavailable: { bn: "দেশে পাওয়া যায় না", en: "Not available locally" },
  verification: { bn: "যাচাই", en: "Verification" },
  verified: { bn: "যাচাইকৃত", en: "Verified" },
  reported: { bn: "প্রতিবেদিত", en: "Reported" },
  unverified: { bn: "অযাচাইকৃত", en: "Unverified" },
  cases: { bn: "মামলা", en: "case(s)" },
  costDesc: { bn: "খরচ: বেশি থেকে কম", en: "Cost: high to low" },
  costAsc: { bn: "খরচ: কম থেকে বেশি", en: "Cost: low to high" },
  dateDesc: { bn: "তারিখ: নতুন প্রথমে", en: "Date: newest first" },
  dateAsc: { bn: "তারিখ: পুরাতন প্রথমে", en: "Date: oldest first" },
  multiplierDesc: { bn: "গুণক: সর্বোচ্চ প্রথমে", en: "Multiplier: highest first" },
  cards: { bn: "কার্ড", en: "Cards" },
  table: { bn: "টেবিল", en: "Table" },
  noResults: { bn: "এই ফিল্টারে কোনো মামলা মেলে না।", en: "No cases match these filters." },
  name: { bn: "নাম", en: "Name" },
  abroadCost: { bn: "বিদেশে খরচ", en: "Abroad cost" },
  bdEstimate: { bn: "বাংলাদেশে আনুমানিক", en: "BD estimate" },
  multiplier: { bn: "গুণক", en: "Multiplier" },
  status: { bn: "অবস্থা", en: "Status" },
};

export default function CasesExplorer({
  cases,
  parties,
  countries,
}: {
  cases: CaseRecord[];
  parties: string[];
  countries: string[];
}) {
  const { lang } = useLanguage();
  const tr = (entry: { bn: string; en: string }) => entry[lang];

  const [view, setView] = useState<"cards" | "table">("cards");
  const [search, setSearch] = useState("");
  const [party, setParty] = useState("all");
  const [country, setCountry] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [verification, setVerification] = useState("all");
  const [sort, setSort] = useState<SortKey>("costDesc");

  const filtered = useMemo(() => {
    let result = cases.filter((c) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        c.person.nameEn.toLowerCase().includes(q) ||
        c.person.nameBn.includes(search.trim());
      const matchesParty = party === "all" || c.person.party === party;
      const matchesCountry = country === "all" || c.abroad.country === country;
      const matchesAvailability =
        availability === "all" ||
        (availability === "available" && c.inBangladesh.available) ||
        (availability === "unavailable" && !c.inBangladesh.available);
      const matchesVerification = verification === "all" || c.verificationStatus === verification;
      return matchesSearch && matchesParty && matchesCountry && matchesAvailability && matchesVerification;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "costDesc":
          return b.abroad.costBDT - a.abroad.costBDT;
        case "costAsc":
          return a.abroad.costBDT - b.abroad.costBDT;
        case "dateDesc":
          return new Date(b.treatment.dateStarted).getTime() - new Date(a.treatment.dateStarted).getTime();
        case "dateAsc":
          return new Date(a.treatment.dateStarted).getTime() - new Date(b.treatment.dateStarted).getTime();
        case "multiplierDesc":
          return b.comparison.multiplier - a.comparison.multiplier;
        default:
          return 0;
      }
    });

    return result;
  }, [cases, search, party, country, availability, verification, sort]);

  return (
    <div>
      <div className="border rule rounded-lg bg-surface p-4 sm:p-5 mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <label className="block text-xs text-muted mb-1" htmlFor="search">
            {tr(t.search)}
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={tr(t.searchPlaceholder)}
            className="w-full bg-surface border rule rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <FilterSelect
          id="party"
          label={tr(t.party)}
          value={party}
          onChange={setParty}
          options={[{ value: "all", label: tr(t.allParties) }, ...parties.map((p) => ({ value: p, label: p }))]}
        />
        <FilterSelect
          id="country"
          label={tr(t.country)}
          value={country}
          onChange={setCountry}
          options={[{ value: "all", label: tr(t.allCountries) }, ...countries.map((c) => ({ value: c, label: c }))]}
        />
        <FilterSelect
          id="availability"
          label={tr(t.availability)}
          value={availability}
          onChange={setAvailability}
          options={[
            { value: "all", label: tr(t.all) },
            { value: "available", label: tr(t.available) },
            { value: "unavailable", label: tr(t.unavailable) },
          ]}
        />
        <FilterSelect
          id="verification"
          label={tr(t.verification)}
          value={verification}
          onChange={setVerification}
          options={[
            { value: "all", label: tr(t.all) },
            { value: "verified", label: tr(t.verified) },
            { value: "reported", label: tr(t.reported) },
            { value: "unverified", label: tr(t.unverified) },
          ]}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted">
            {filtered.length} {tr(t.cases)}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <FilterSelect
            id="sort"
            label=""
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
            options={[
              { value: "costDesc", label: tr(t.costDesc) },
              { value: "costAsc", label: tr(t.costAsc) },
              { value: "dateDesc", label: tr(t.dateDesc) },
              { value: "dateAsc", label: tr(t.dateAsc) },
              { value: "multiplierDesc", label: tr(t.multiplierDesc) },
            ]}
            compact
          />
          <div className="flex border rule rounded-md overflow-hidden text-xs">
            <button
              onClick={() => setView("cards")}
              className={`px-3 py-2 ${view === "cards" ? "bg-accent text-white" : "text-muted"}`}
            >
              {tr(t.cards)}
            </button>
            <button
              onClick={() => setView("table")}
              className={`px-3 py-2 ${view === "table" ? "bg-accent text-white" : "text-muted"}`}
            >
              {tr(t.table)}
            </button>
          </div>
        </div>
      </div>

      {view === "cards" ? (
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((c) => (
            <CaseCard key={c.id} record={c} />
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted col-span-full py-10 text-center">{tr(t.noResults)}</p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto border rule rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-muted border-b rule">
                <th className="px-4 py-3">{tr(t.name)}</th>
                <th className="px-4 py-3">{tr(t.party)}</th>
                <th className="px-4 py-3">{tr(t.country)}</th>
                <th className="px-4 py-3 text-right">{tr(t.abroadCost)}</th>
                <th className="px-4 py-3 text-right">{tr(t.bdEstimate)}</th>
                <th className="px-4 py-3 text-right">{tr(t.multiplier)}</th>
                <th className="px-4 py-3">{tr(t.status)}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b rule hover:bg-black/[0.02]">
                  <td className="px-4 py-3">
                    <Link href={`/cases/${c.slug}`} className="hover:text-accent">
                      {lang === "bn" ? c.person.nameBn : c.person.nameEn}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted">{c.person.party}</td>
                  <td className="px-4 py-3 text-muted">{c.abroad.country}</td>
                  <td className="px-4 py-3 text-right tabular text-accent font-medium">
                    {formatBDT(c.abroad.costBDT)}
                    <span className="block text-xs text-faint">{formatUSD(c.abroad.costUSD)}</span>
                  </td>
                  <td className="px-4 py-3 text-right tabular text-muted">
                    {formatBDT(c.inBangladesh.estimatedCostBDT)}
                  </td>
                  <td className="px-4 py-3 text-right tabular font-medium">
                    {formatMultiplier(c.comparison.multiplier)}
                  </td>
                  <td className="px-4 py-3">
                    <VerificationBadge status={c.verificationStatus} />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-muted">
                    {tr(t.noResults)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  id,
  label,
  value,
  onChange,
  options,
  compact,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "min-w-40" : ""}>
      {label && (
        <label className="block text-xs text-muted mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface border rule rounded-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
