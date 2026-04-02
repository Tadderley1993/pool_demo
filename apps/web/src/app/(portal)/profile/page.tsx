import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "My Profile" };

const user = {
  name:     "Alexander White",
  email:    "alexander@example.com",
  phone:    "(555) 987-6543",
  address:  "123 Beacon St, Boston, MA 02108",
  plan:     "Weekly Maintenance",
  since:    "March 2022",
  avatar:   "/imgs/pexels-vlada-karpovich-7903138.jpg",
  poolSize: "18 × 36 ft",
  poolType: "Gunite / Saltwater",
};

const notificationItems = [
  { label: "Service Reminders",       desc: "24 hrs before each visit",    enabled: true  },
  { label: "Technician En Route",     desc: "When driver is 30 min away",  enabled: true  },
  { label: "Report Ready",            desc: "After every service",         enabled: true  },
  { label: "Rewards Milestones",      desc: "When you reach a new tier",   enabled: false },
  { label: "Promotional Offers",      desc: "Seasonal deals and specials", enabled: false },
];

const menuItems = [
  { icon: "receipt_long",   label: "Billing & Payments",  href: "/billing"  },
  { icon: "history",        label: "Service History",     href: "/history"  },
  { icon: "pool",           label: "Pool Details",        href: "/pool"     },
  { icon: "lock",           label: "Security & Password", href: "/security" },
  { icon: "help_outline",   label: "Help & Support",      href: "/contact"  },
];

export default function ProfilePage() {
  return (
    <div className="px-4 md:px-8 max-w-4xl mx-auto pb-10 space-y-8">

      {/* Profile hero card */}
      <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-8 text-on-primary relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/5 rounded-full" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/20 relative shadow-xl">
              <Image src={user.avatar} alt={user.name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-headline text-2xl font-extrabold tracking-tight">{user.name}</h1>
            <p className="text-on-primary/70 text-sm mt-1">{user.email}</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span className="bg-white/15 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                {user.plan}
              </span>
              <span className="bg-white/15 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full">
                Member since {user.since}
              </span>
            </div>
          </div>
          <div className="sm:ml-auto">
            <button className="bg-white/15 hover:bg-white/25 transition-colors text-white border border-white/20 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base">edit</span>
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-5 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">contact_page</span>
          Contact Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "phone",       label: "Phone",   value: user.phone   },
            { icon: "mail",        label: "Email",   value: user.email   },
            { icon: "location_on", label: "Address", value: user.address },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl">
              <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-base">{item.icon}</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-on-surface mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl">
            <div className="w-9 h-9 rounded-xl bg-secondary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-secondary text-base">pool</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Pool</p>
              <p className="text-sm font-semibold text-on-surface mt-0.5">{user.poolSize} · {user.poolType}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification preferences */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-5 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">notifications</span>
          Notification Preferences
        </h2>
        <div className="space-y-3">
          {notificationItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
              <div>
                <p className="font-semibold text-sm text-on-surface">{item.label}</p>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
              {/* Visual toggle — not interactive in this static demo */}
              <div className={`w-12 h-6 rounded-full flex items-center px-0.5 transition-colors ${item.enabled ? "bg-primary" : "bg-surface-container-high"}`}>
                <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${item.enabled ? "translate-x-6" : "translate-x-0"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-on-surface mb-5 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">apps</span>
          Account
        </h2>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-surface-container-low transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-surface-container-low group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-base transition-colors">
                  {item.icon}
                </span>
              </div>
              <span className="font-medium text-sm text-on-surface flex-1">{item.label}</span>
              <span className="material-symbols-outlined text-outline text-base group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Sign out */}
      <button className="w-full py-4 rounded-2xl border-2 border-error/20 text-error font-bold hover:bg-error-container/50 transition-colors flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">logout</span>
        Sign Out
      </button>

    </div>
  );
}
