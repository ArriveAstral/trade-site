"use client";

import { AnimatedCounter } from "@/components/common/AnimatedCounter";

const stats = [
  { value: "12+", label: "Core products" },
  { value: "30+", label: "Export markets" },
  { value: "OEM", label: "Customization" },
  { value: "24h", label: "Sales response" },
];

export function StatsPanel() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-surface p-6">
      {/* 玻璃卡背后的装饰色块 */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />

      <p className="relative text-sm font-medium text-gray-400">
        Company Snapshot
      </p>
      <dl className="relative mt-6 grid grid-cols-2 gap-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-lg border border-white/60 bg-white/70 px-4 py-4 shadow-sm backdrop-blur-md"
          >
            <dt className="text-sm text-gray-400">{label}</dt>
            <dd className="mt-2 text-2xl font-semibold text-gray-900">
              <AnimatedCounter value={value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
