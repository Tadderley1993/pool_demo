import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Payments" };

const transactions = [
  { id: "INV-2041", customer: "Alexander White", avatar: "/imgs/pexels-vince-2233366.jpg",           plan: "Weekly",  amount: 85,   status: "Paid",    date: "Oct 17, 2024", method: "Autopay" },
  { id: "INV-2042", customer: "Sarah Thompson",  avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg", plan: "Monthly", amount: 85,   status: "Overdue", date: "Oct 01, 2024", method: "Card"    },
  { id: "INV-2043", customer: "David Martinez",  avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg", plan: "Weekly",  amount: 85, status: "Paid",    date: "Oct 17, 2024", method: "Autopay" },
  { id: "INV-2044", customer: "Rachel Kim",      avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg", plan: "Weekly", amount: 170, status: "Overdue", date: "Oct 03, 2024", method: "Card" },
  { id: "INV-2045", customer: "Tom Anderson",    avatar: "/imgs/pexels-vince-2233366.jpg",           plan: "Monthly", amount: 120,  status: "Paid",    date: "Oct 10, 2024", method: "Autopay" },
  { id: "INV-2046", customer: "Julianne Varkey", avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg", plan: "Weekly",  amount: 85,   status: "Paid",    date: "Oct 17, 2024", method: "Autopay" },
  { id: "INV-2047", customer: "Marcus Chen",     avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg", plan: "Monthly", amount: 255, status: "Overdue", date: "Sep 01, 2024", method: "Card" },
  { id: "INV-2048", customer: "Elena Rodriguez", avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg", plan: "Weekly", amount: 85, status: "Paid", date: "Oct 17, 2024", method: "Autopay" },
];

const statusColor: Record<string, string> = {
  Paid:    "bg-tertiary-container text-on-tertiary-container",
  Overdue: "bg-error-container text-on-error-container",
  Pending: "bg-secondary-container text-on-secondary-container",
};

export default function PaymentsPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Payments</h1>
          <p className="text-secondary mt-1">Billing overview · October 2024</p>
        </div>
        <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2 self-start">
          <span className="material-symbols-outlined text-sm">receipt_long</span>
          Generate Invoices
        </button>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "MTD Revenue",      value: "$12,480", icon: "payments",          color: "bg-primary-container text-on-primary-container",       sub: "+12% vs last mo" },
          { label: "Outstanding",      value: "$1,740",  icon: "account_balance",   color: "bg-error-container text-on-error-container",           sub: "3 customers"     },
          { label: "Autopay Active",   value: "94",      icon: "autorenew",         color: "bg-tertiary-container text-on-tertiary-container",     sub: "of 124 accounts" },
          { label: "Avg Invoice",      value: "$97",     icon: "receipt",           color: "bg-secondary-container text-on-secondary-container",   sub: "per visit"       },
        ].map((k) => (
          <div key={k.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${k.color}`}>
              <span className="material-symbols-outlined">{k.icon}</span>
            </div>
            <p className="text-2xl font-extrabold text-on-surface">{k.value}</p>
            <p className="text-sm font-bold text-on-surface mt-0.5">{k.label}</p>
            <p className="text-xs text-on-surface-variant">{k.sub}</p>
          </div>
        ))}
      </div>

      {/* Overdue banner */}
      <div className="bg-error-container rounded-2xl p-4 flex items-center gap-4">
        <span className="material-symbols-outlined text-error text-2xl">warning</span>
        <div className="flex-1">
          <p className="font-bold text-on-error-container">3 accounts have overdue balances totalling $1,740</p>
          <p className="text-sm text-on-error-container/70">Auto-reminders sent. Manual follow-up may be needed for 30+ day invoices.</p>
        </div>
        <button className="bg-error text-on-error px-4 py-2 rounded-xl text-sm font-bold hover:opacity-90 flex-shrink-0">
          Send Reminders
        </button>
      </div>

      {/* Transactions table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/20">
          <h2 className="font-bold text-on-surface">Recent Transactions</h2>
          <div className="flex gap-2">
            {["All", "Paid", "Overdue"].map((f, i) => (
              <button key={f} className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${i === 0 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-bold uppercase tracking-widest text-outline bg-surface-container-low">
                <th className="px-6 py-4">Invoice</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, i) => (
                <tr key={t.id} className={`hover:bg-surface-container-low transition-colors ${i < transactions.length - 1 ? "border-b border-outline-variant/10" : ""}`}>
                  <td className="px-6 py-4 font-mono font-bold text-primary text-xs">{t.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl overflow-hidden relative flex-shrink-0">
                        <Image src={t.avatar} alt={t.customer} fill className="object-cover" />
                      </div>
                      <span className="font-semibold">{t.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">{t.plan}</td>
                  <td className="px-6 py-4 font-extrabold text-on-surface">${t.amount}.00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">{t.method === "Autopay" ? "autorenew" : "credit_card"}</span>
                      <span className="text-xs">{t.method}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">{t.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor[t.status]}`}>{t.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-base">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
