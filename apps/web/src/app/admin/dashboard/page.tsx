import type { Metadata } from "next";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Admin Dashboard" };

// Demo KPI data — will be real API data in production
const kpis = [
  { label: "Active Customers",  value: "124",    delta: "+8 this month",  icon: "people",         color: "bg-primary-container text-on-primary-container"       },
  { label: "Jobs Today",        value: "18",     delta: "3 remaining",    icon: "home_repair_service", color: "bg-secondary-container text-on-secondary-container" },
  { label: "Revenue (MTD)",     value: "$12,480",delta: "+12% vs last mo",icon: "payments",       color: "bg-tertiary-container text-on-tertiary-container"      },
  { label: "Issues Reported",   value: "2",      delta: "Needs attention", icon: "warning",       color: "bg-error-container text-on-error-container"            },
];

const recentJobs = [
  { id: "J-1041", customer: "Alexander White",  address: "123 Beacon St",         tech: "Marcus J.", status: "Completed",     time: "9:00 AM" },
  { id: "J-1042", customer: "Sarah Thompson",   address: "456 Commonwealth Ave",  tech: "Carlos R.", status: "In Progress",   time: "10:30 AM" },
  { id: "J-1043", customer: "David Martinez",   address: "789 Newbury St",        tech: "Elena V.",  status: "En Route",      time: "12:00 PM" },
  { id: "J-1044", customer: "Rachel Kim",       address: "321 Boylston St",       tech: "Marcus J.", status: "Scheduled",     time: "2:00 PM"  },
  { id: "J-1045", customer: "Tom Anderson",     address: "654 Charles St",        tech: "Carlos R.", status: "Issue Reported",time: "3:30 PM"  },
];

const statusColors: Record<string, string> = {
  "Completed":      "bg-tertiary-container text-on-tertiary-container",
  "In Progress":    "bg-secondary-container text-on-secondary-container",
  "En Route":       "bg-primary-container text-on-primary-container",
  "Scheduled":      "bg-surface-container-high text-on-surface-variant",
  "Issue Reported": "bg-error-container text-on-error-container",
};

export default function AdminDashboardPage() {
  return (
    <div className="p-6 md:p-10 space-y-10 max-w-7xl">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">
            Dashboard
          </h1>
          <p className="text-secondary mt-1">
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
        </div>
        <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">add</span>
          New Job
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${kpi.color}`}>
              <span className="material-symbols-outlined">{kpi.icon}</span>
            </div>
            <p className="text-2xl font-extrabold text-on-surface">{kpi.value}</p>
            <p className="text-sm font-bold text-on-surface mt-1">{kpi.label}</p>
            <p className="text-xs text-on-surface-variant mt-1">{kpi.delta}</p>
          </div>
        ))}
      </div>

      {/* Jobs table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/20">
          <h2 className="text-xl font-bold text-on-surface">Today&apos;s Jobs</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-semibold text-primary bg-primary-container rounded-xl hover:opacity-80">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-bold uppercase tracking-widest text-outline bg-surface-container-low">
                <th className="px-6 py-4">Job ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Technician</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job, i) => (
                <tr
                  key={job.id}
                  className={`text-sm hover:bg-surface-container-low transition-colors ${
                    i < recentJobs.length - 1 ? "border-b border-outline-variant/10" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-mono font-bold text-primary">{job.id}</td>
                  <td className="px-6 py-4 font-semibold">{job.customer}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{job.address}</td>
                  <td className="px-6 py-4">{job.tech}</td>
                  <td className="px-6 py-4 font-semibold">{job.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[job.status]}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary-container transition-colors">
                      <span className="material-symbols-outlined text-sm">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue chart */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-on-surface">Monthly Revenue</h2>
            <p className="text-sm text-on-surface-variant">Last 6 months</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-extrabold text-primary">$12,480</p>
            <p className="text-xs text-tertiary font-semibold">▲ +12% vs last month</p>
          </div>
        </div>
        {/* Mini bar chart */}
        <div className="flex items-end justify-between gap-2 h-28">
          {[
            { month: "May",  value: 8200,  pct: 66 },
            { month: "Jun",  value: 9100,  pct: 73 },
            { month: "Jul",  value: 10400, pct: 83 },
            { month: "Aug",  value: 9800,  pct: 78 },
            { month: "Sep",  value: 11120, pct: 89 },
            { month: "Oct",  value: 12480, pct: 100 },
          ].map((bar) => (
            <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-bold text-primary">${(bar.value / 1000).toFixed(1)}k</span>
              <div className="w-full flex flex-col justify-end" style={{ height: "80px" }}>
                <div
                  className={`w-full rounded-t-xl transition-all ${bar.month === "Oct" ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"}`}
                  style={{ height: `${bar.pct}%` }}
                />
              </div>
              <span className="text-[10px] font-medium text-on-surface-variant">{bar.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-on-surface mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Assign Route",     icon: "route"           },
              { label: "Send Reminder",    icon: "send"            },
              { label: "Add Customer",     icon: "person_add"      },
              { label: "Generate Invoice", icon: "receipt_long"    },
            ].map((action) => (
              <button
                key={action.label}
                className="flex flex-col items-center gap-2 p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors group"
              >
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  {action.icon}
                </span>
                <span className="text-xs font-semibold text-on-surface">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming alerts */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-on-surface mb-4">Alerts &amp; Reminders</h3>
          <div className="space-y-3">
            {[
              { msg: "Tom Anderson — equipment issue needs follow-up",    icon: "warning",      color: "text-error"    },
              { msg: "3 customers have overdue invoices (> 30 days)",     icon: "receipt",      color: "text-primary"  },
              { msg: "Low stock: Chlorine tabs (2 bags remaining)",       icon: "inventory_2",  color: "text-secondary"},
              { msg: "Weather alert: Rain forecast Thu. — review routes", icon: "cloud_alert",  color: "text-tertiary" },
            ].map((alert, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container-low transition-colors">
                <span className={`material-symbols-outlined text-xl flex-shrink-0 ${alert.color}`}>
                  {alert.icon}
                </span>
                <p className="text-sm text-on-surface leading-relaxed">{alert.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
