export type VerificationStatus = "verified" | "reported" | "unverified";

export interface Source {
  title: string;
  outlet: string;
  url: string;
  date: string;
}

export interface CaseRecord {
  id: string;
  slug: string;
  person: {
    nameBn: string;
    nameEn: string;
    party: string;
    position: string;
    photoPlaceholder: string;
  };
  treatment: {
    conditionBn: string;
    conditionEn: string;
    procedure: string;
    dateStarted: string;
  };
  abroad: {
    country: string;
    city: string;
    hospital: string;
    durationDays: number;
    costUSD: number;
    costBDT: number;
  };
  inBangladesh: {
    available: boolean;
    exampleHospitals: string[];
    estimatedCostBDT: number;
    notes: string;
  };
  comparison: {
    multiplier: number;
    savingsIfLocalBDT: number;
  };
  sources: Source[];
  verificationStatus: VerificationStatus;
  lastUpdated: string;
}
