import { formatBDT } from "@/lib/format";
import { Bi } from "@/components/LanguageProvider";

export default function CostBar({
  abroadBDT,
  localBDT,
  multiplier,
}: {
  abroadBDT: number;
  localBDT: number;
  multiplier: number;
}) {
  const max = Math.max(abroadBDT, localBDT);
  const abroadPct = Math.max((abroadBDT / max) * 100, 4);
  const localPct = Math.max((localBDT / max) * 100, 4);

  return (
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-xs mb-1 text-muted">
          <Bi bn="বিদেশে" en="Abroad" />
          <span className="tabular text-accent font-semibold">{formatBDT(abroadBDT)}</span>
        </div>
        <div className="h-2.5 w-full bg-foreground/10 rounded-sm overflow-hidden">
          <div className="h-full bg-accent rounded-sm" style={{ width: `${abroadPct}%` }} />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1 text-muted">
          <Bi bn="বাংলাদেশে" en="In Bangladesh" />
          <span className="tabular text-foreground font-semibold">{formatBDT(localBDT)}</span>
        </div>
        <div className="h-2.5 w-full bg-foreground/10 rounded-sm overflow-hidden">
          <div className="h-full bg-foreground/50 rounded-sm" style={{ width: `${localPct}%` }} />
        </div>
      </div>
      <p className="text-xs text-muted pt-1">
        <span className="text-accent font-semibold tabular">{multiplier.toFixed(1)}×</span>{" "}
        <Bi bn="বিদেশে বেশি ব্যয়বহুল" en="more expensive abroad" />
      </p>
    </div>
  );
}
