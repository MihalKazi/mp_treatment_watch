import { VerificationStatus } from "@/lib/types";
import { Bi } from "@/components/LanguageProvider";

const labels: Record<VerificationStatus, { bn: string; en: string }> = {
  verified: { bn: "যাচাইকৃত", en: "Verified" },
  reported: { bn: "প্রতিবেদিত", en: "Reported" },
  unverified: { bn: "অযাচাইকৃত", en: "Unverified" },
};

export default function VerificationBadge({ status }: { status: VerificationStatus }) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide border";

  const styles: Record<VerificationStatus, string> = {
    verified: "bg-accent border-accent text-white",
    reported: "bg-transparent border-muted text-foreground",
    unverified: "bg-transparent border-line text-muted",
  };

  return (
    <span className={`${base} ${styles[status]}`} title={labels[status].en}>
      <Bi bn={labels[status].bn} en={labels[status].en} />
    </span>
  );
}
