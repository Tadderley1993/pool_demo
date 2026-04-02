import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Customers" };

const customers = [
  { id: "C-001", name: "Alexander White",  email: "alex.white@email.com",  phone: "(555) 201-3344", plan: "Weekly",  status: "Active",  balance: "$0.00",   joined: "Mar 2022", visits: 84,  avatar: "/imgs/pexels-vince-2233366.jpg"                          },
  { id: "C-002", name: "Sarah Thompson",   email: "s.thompson@email.com",  phone: "(555) 874-2211", plan: "Monthly", status: "Active",  balance: "$85.00",  joined: "Jun 2022", visits: 24,  avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg"                 },
  { id: "C-003", name: "David Martinez",   email: "d.martinez@email.com",  phone: "(555) 399-5500", plan: "Weekly",  status: "Active",  balance: "$0.00",   joined: "Jan 2023", visits: 52,  avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg"             },
  { id: "C-004", name: "Rachel Kim",       email: "rachel.kim@email.com",  phone: "(555) 661-9900", plan: "Weekly",  status: "Pending", balance: "$170.00", joined: "Sep 2023", visits: 18,  avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg"      },
  { id: "C-005", name: "Tom Anderson",     email: "t.anderson@email.com",  phone: "(555) 732-0088", plan: "Monthly", status: "Active",  balance: "$0.00",   joined: "Apr 2021", visits: 116, avatar: "/imgs/pexels-vince-2233366.jpg"                           },
  { id: "C-006", name: "Julianne Varkey",  email: "j.varkey@email.com",    phone: "(555) 204-7766", plan: "Weekly",  status: "Active",  balance: "$0.00",   joined: "Aug 2020", visits: 198, avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg"                 },
  { id: "C-007", name: "Marcus Chen",      email: "m.chen@email.com",      phone: "(555) 445-3210", plan: "Monthly", status: "Inactive",balance: "$255.00", joined: "Nov 2022", visits: 30,  avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg"             },
  { id: "C-008", name: "Elena Rodriguez",  email: "e.rodriguez@email.com", phone: "(555) 883-1122", plan: "Weekly",  status: "Active",  balance: "$0.00",   joined: "Feb 2023", visits: 46,  avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg"      },
];

const statusColor: Record<string, string> = {
  Active:   "bg-tertiary-container text-on-tertiary-container",
  Pending:  "bg-secondary-container text-on-secondary-container",
  Inactive: "bg-surface-container-high text-on-surface-variant",
};

export default function CustomersPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Customers</h1>
          <p className="text-secondary mt-1">{customers.length} accounts · {customers.filter(c => c.status === "Active").length} active</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-4 py-2.5 rounded-xl">
            <span className="material-symbols-outlined text-outline text-base">search</span>
            <input
              type="text"
              placeholder="Search customers…"
              className="bg-transparent text-sm text-on-surface placeholder:text-outline outline-none w-44"
            />
          </div>
          <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Add Customer
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Customers",  value: "124",   icon: "people",          color: "bg-primary-container text-on-primary-container"    },
          { label: "Active Plans",     value: "108",   icon: "check_circle",    color: "bg-tertiary-container text-on-tertiary-container"  },
          { label: "Pending Balance",  value: "$1,740",icon: "account_balance", color: "bg-error-container text-on-error-container"        },
          { label: "New This Month",   value: "8",     icon: "person_add",      color: "bg-secondary-container text-on-secondary-container"},
        ].map((s) => (
          <div key={s.label} className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color}`}>
              <span className="material-symbols-outlined">{s.icon}</span>
            </div>
            <div>
              <p className="text-xl font-extrabold text-on-surface">{s.value}</p>
              <p className="text-xs text-on-surface-variant">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/20">
          <h2 className="font-bold text-on-surface">All Customers</h2>
          <div className="flex gap-2">
            {brand.admin.customerStatuses.map((s, i) => (
              <button key={s} className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${i === 0 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-bold uppercase tracking-widest text-outline bg-surface-container-low">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Visits</th>
                <th className="px-6 py-4">Balance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={c.id} className={`hover:bg-surface-container-low transition-colors ${i < customers.length - 1 ? "border-b border-outline-variant/10" : ""}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl overflow-hidden relative flex-shrink-0">
                        <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">{c.name}</p>
                        <p className="text-xs text-outline">{c.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-on-surface-variant">{c.email}</p>
                    <p className="text-xs text-outline">{c.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">{c.plan}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-on-surface">{c.visits}</td>
                  <td className={`px-6 py-4 font-bold ${c.balance !== "$0.00" ? "text-error" : "text-tertiary"}`}>{c.balance}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">{c.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">edit</span>
                      </button>
                      <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-base">more_horiz</span>
                      </button>
                    </div>
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
