import type { Metadata } from "next";

export const metadata: Metadata = { title: "Analytics" };

const monthlyRevenue = [
  { month: "May",  value: 8200  },
  { month: "Jun",  value: 9100  },
  { month: "Jul",  value: 10400 },
  { month: "Aug",  value: 9800  },
  { month: "Sep",  value: 11120 },
  { month: "Oct",  value: 12480 },
];
const maxRev = Math.max(...monthlyRevenue.map((m) => m.value));

const jobsByType = [
  { type: "Weekly Maintenance", count: 312, pct: 64, color: "bg-primary" },
  { type: "Chemical Balancing",  count: 88,  pct: 18, color: "bg-secondary" },
  { type: "Filter Cleaning",     count: 44,  pct: 9,  color: "bg-tertiary" },
  { type: "Equipment Repair",    count: 29,  pct: 6,  color: "bg-error" },
  { type: "Seasonal Opening",    count: 15,  pct: 3,  color: "bg-outline" },
];

const techPerf = [
  { name: "Marcus J.", jobs: 198, rating: 4.9, revenue: 16830, onTime: 97 },
  { name: "Carlos R.", jobs: 175, rating: 4.8, revenue: 14875, onTime: 94 },
  { name: "Elena V.",  jobs: 115, rating: 5.0, revenue: 9775,  onTime: 99 },
];

const retentionMonths = [88, 91, 89, 93, 92, 95];

export default function AnalyticsPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Analytics</h1>
          <p className="text-secondary mt-1">Business performance · Last 6 months</p>
        </div>
        <div className="flex gap-2 bg-surface-container-lowest border border-outline-variant/20 p-1 rounded-xl">
          {["7d", "30d", "6mo", "1yr"].map((v, i) => (
            <button key={v} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${i === 2 ? "bg-primary text-on-primary" : "text-on-surface-variant hover:bg-surface-container"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue",    value: "$61,000", delta: "+18%", icon: "payments",       color: "text-primary",   bg: "bg-primary-container text-on-primary-container"    },
          { label: "Jobs Completed",   value: "488",     delta: "+22%", icon: "check_circle",   color: "text-tertiary",  bg: "bg-tertiary-container text-on-tertiary-container"  },
          { label: "Avg Job Value",    value: "$97",     delta: "+4%",  icon: "trending_up",    color: "text-secondary", bg: "bg-secondary-container text-on-secondary-container"},
          { label: "Retention Rate",   value: "93%",     delta: "+2%",  icon: "favorite",       color: "text-primary",   bg: "bg-primary-container text-on-primary-container"    },
        ].map((k) => (
          <div key={k.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${k.bg}`}>
              <span className="material-symbols-outlined">{k.icon}</span>
            </div>
            <p className="text-2xl font-extrabold text-on-surface">{k.value}</p>
            <p className="text-sm font-bold text-on-surface mt-0.5">{k.label}</p>
            <p className={`text-xs font-semibold mt-1 ${k.color}`}>▲ {k.delta} vs prior period</p>
          </div>
        ))}
      </div>

      {/* Revenue bar chart + job types */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Revenue chart */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-bold text-on-surface">Monthly Revenue</h2>
              <p className="text-sm text-on-surface-variant">May – October 2024</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-extrabold text-primary">$61,000</p>
              <p className="text-xs text-tertiary font-semibold">▲ +18% overall</p>
            </div>
          </div>
          <div className="flex items-end gap-3 h-40">
            {monthlyRevenue.map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[11px] font-bold text-primary">${(bar.value / 1000).toFixed(1)}k</span>
                <div className="w-full flex flex-col justify-end" style={{ height: "112px" }}>
                  <div
                    className={`w-full rounded-t-xl transition-all ${bar.month === "Oct" ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"}`}
                    style={{ height: `${Math.round((bar.value / maxRev) * 100)}%` }}
                  />
                </div>
                <span className="text-[11px] font-medium text-on-surface-variant">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Job type breakdown */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-on-surface mb-5">Jobs by Type</h2>
          <div className="space-y-4">
            {jobsByType.map((j) => (
              <div key={j.type}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-on-surface-variant truncate pr-2">{j.type}</span>
                  <span className="text-xs font-extrabold text-on-surface flex-shrink-0">{j.pct}%</span>
                </div>
                <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${j.color}`} style={{ width: `${j.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-outline-variant/20">
            <p className="text-xs text-on-surface-variant">Total jobs completed</p>
            <p className="text-2xl font-extrabold text-on-surface">488</p>
          </div>
        </div>
      </div>

      {/* Retention sparkline + technician performance */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Retention */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-on-surface mb-1">Retention Rate</h2>
          <p className="text-sm text-on-surface-variant mb-5">Monthly customer retention %</p>
          <div className="flex items-end gap-2 h-24">
            {retentionMonths.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-lg ${i === retentionMonths.length - 1 ? "bg-tertiary" : "bg-tertiary/30"}`}
                  style={{ height: `${(v - 80) * 6}px` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["May","Jun","Jul","Aug","Sep","Oct"].map((m) => (
              <span key={m} className="text-[10px] text-outline">{m}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 p-3 bg-tertiary-container rounded-xl">
            <span className="material-symbols-outlined text-tertiary">trending_up</span>
            <div>
              <p className="text-sm font-bold text-on-tertiary-container">93% this month</p>
              <p className="text-xs text-on-tertiary-container/70">+2% from last month</p>
            </div>
          </div>
        </div>

        {/* Technician performance */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-bold text-on-surface mb-5">Technician Performance</h2>
          <div className="space-y-4">
            {techPerf.map((t, i) => (
              <div key={t.name} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${
                  i === 0 ? "bg-primary text-on-primary" : i === 1 ? "bg-secondary text-on-secondary" : "bg-tertiary text-on-tertiary"
                }`}>
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-on-surface">{t.name}</p>
                  <div className="flex gap-4 mt-1">
                    <span className="text-xs text-on-surface-variant">{t.jobs} jobs</span>
                    <span className="text-xs font-semibold text-amber-500">★ {t.rating}</span>
                    <span className="text-xs text-on-surface-variant">{t.onTime}% on-time</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-extrabold text-primary">${t.revenue.toLocaleString()}</p>
                  <p className="text-xs text-on-surface-variant">revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
