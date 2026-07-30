import casesData from "@/data/cases.json";
import { CaseRecord } from "@/lib/types";

export const cases = casesData as CaseRecord[];

export function getAllCases(): CaseRecord[] {
  return cases;
}

export function getCaseBySlug(slug: string): CaseRecord | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}

export function getAllParties(): string[] {
  return Array.from(new Set(cases.map((c) => c.person.party))).sort();
}

export function getAllCountries(): string[] {
  return Array.from(new Set(cases.map((c) => c.abroad.country))).sort();
}

export interface Aggregates {
  totalCases: number;
  totalSpentAbroadUSD: number;
  totalSpentAbroadBDT: number;
  totalPotentialSavingsBDT: number;
  countriesInvolved: number;
  spendingByCountry: { country: string; totalBDT: number; count: number }[];
}

export function getAggregates(): Aggregates {
  const totalSpentAbroadUSD = cases.reduce((sum, c) => sum + c.abroad.costUSD, 0);
  const totalSpentAbroadBDT = cases.reduce((sum, c) => sum + c.abroad.costBDT, 0);
  const totalPotentialSavingsBDT = cases.reduce((sum, c) => sum + c.comparison.savingsIfLocalBDT, 0);
  const countries = getAllCountries();

  const spendingByCountry = countries.map((country) => {
    const countryCases = cases.filter((c) => c.abroad.country === country);
    return {
      country,
      totalBDT: countryCases.reduce((sum, c) => sum + c.abroad.costBDT, 0),
      count: countryCases.length,
    };
  }).sort((a, b) => b.totalBDT - a.totalBDT);

  return {
    totalCases: cases.length,
    totalSpentAbroadUSD,
    totalSpentAbroadBDT,
    totalPotentialSavingsBDT,
    countriesInvolved: countries.length,
    spendingByCountry,
  };
}

// Rough public-health cost benchmarks (BDT) used only for illustrative context.
export const FUND_BENCHMARKS = {
  icuBedPerYear: 1200000,
  dialysisSession: 4000,
  ruralClinicPerYear: 2500000,
};

export function getFundContext(totalBDT: number) {
  return {
    icuBeds: Math.round(totalBDT / FUND_BENCHMARKS.icuBedPerYear),
    dialysisSessions: Math.round(totalBDT / FUND_BENCHMARKS.dialysisSession),
    ruralClinics: Math.round(totalBDT / FUND_BENCHMARKS.ruralClinicPerYear),
  };
}
