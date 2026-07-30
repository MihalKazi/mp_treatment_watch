import Link from "next/link";
import { CaseRecord } from "@/lib/types";
import CostBar from "@/components/CostBar";
import VerificationBadge from "@/components/VerificationBadge";
import { Bi } from "@/components/LanguageProvider";

export default function CaseCard({ record }: { record: CaseRecord }) {
  return (
    <Link
      href={`/cases/${record.slug}`}
      className="group block rounded-lg border rule bg-surface p-5 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <Bi
            bn={record.person.nameBn}
            en={record.person.nameEn}
            className="block font-headline text-lg font-semibold group-hover:text-accent transition-colors"
          />
          <Bi
            bn={record.person.position}
            en={record.person.position}
            className="block text-xs text-muted"
          />
        </div>
        <VerificationBadge status={record.verificationStatus} />
      </div>
      <p className="text-sm text-muted mb-4">
        <Bi bn={record.treatment.conditionBn} en={record.treatment.conditionEn} /> · {record.abroad.country}
      </p>
      <CostBar
        abroadBDT={record.abroad.costBDT}
        localBDT={record.inBangladesh.estimatedCostBDT}
        multiplier={record.comparison.multiplier}
      />
    </Link>
  );
}
