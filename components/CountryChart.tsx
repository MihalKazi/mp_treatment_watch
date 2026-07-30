"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { formatBDT } from "@/lib/format";

export default function CountryChart({
  data,
}: {
  data: { country: string; totalBDT: number; count: number }[];
}) {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 24, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd8cc" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(v) => formatBDT(v)}
            stroke="#7a7568"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            type="category"
            dataKey="country"
            stroke="#7a7568"
            tick={{ fontSize: 12 }}
            width={90}
          />
          <Tooltip
            contentStyle={{ background: "#ffffff", border: "1px solid #ddd8cc", fontSize: 12 }}
            labelStyle={{ color: "#1a1a1a" }}
            formatter={(value, _name, item) => [
              formatBDT(Number(value)),
              `${item.payload.count} case(s)`,
            ]}
          />
          <Bar dataKey="totalBDT" fill="#c0392b" radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
