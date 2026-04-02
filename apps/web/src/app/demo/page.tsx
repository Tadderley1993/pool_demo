import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata = { title: "Demo Hub" };

const WEB_SECTIONS = [
  { icon: "public",           label: "Marketing Site",    href: "/",                desc: "Home, Services, Gallery, Contact" },
  { icon: "person",           label: "Customer Portal",   href: "/dashboard",       desc: "Dashboard, Booking, Tracker, Rewards" },
  { icon: "admin_panel_settings", label: "Admin Dashboard", href: "/admin/dashboard", desc: "CRM, Schedule, Routes, Analytics" },
];

export default function DemoHubPage() {
  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Header */}
      <header className="bg-primary px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined filled text-3xl text-on-primary">
            water
          </span>
          <span className="text-on-primary font-extrabold text-xl tracking-tight">
            {brand.name}
          </span>
        </div>
        <span className="text-xs bg-white/20 text-white font-semibold px-3 py-1.5 rounded-full tracking-wide">
          DEMO MODE
        </span>
      </header>

      {/* Hero copy */}
      <div className="px-8 pt-14 pb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-on-surface leading-tight mb-3">
          Platform Demo
        </h1>
        <p className="text-on-surface-variant text-lg">
          Explore every layer of {brand.name} — from the customer-facing site to
          the admin back-office and the driver's mobile app.
        </p>
      </div>

      {/* Cards */}
      <div className="px-8 pb-16 grid gap-6 md:grid-cols-2 max-w-5xl">

        {/* ── Web Platform card ── */}
        <div className="bg-surface-container-lowest rounded-4xl shadow-sm border border-outline-variant/20 overflow-hidden flex flex-col">
          <div className="bg-primary/8 px-8 py-6 border-b border-outline-variant/10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined filled text-on-primary text-xl">
                  desktop_windows
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-on-surface">Web Platform</h2>
            </div>
            <p className="text-sm text-on-surface-variant ml-13">
              Full site + admin — all three layers
            </p>
          </div>

          <div className="px-8 py-6 flex flex-col flex-1 gap-4">
            {WEB_SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-base">
                    {s.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-on-surface text-sm">{s.label}</p>
                  <p className="text-xs text-on-surface-variant truncate">{s.desc}</p>
                </div>
                <span className="material-symbols-outlined text-outline text-base group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>

          <div className="px-8 pb-8">
            <Link
              href="/"
              className="block w-full bg-primary text-on-primary text-center font-bold py-3.5 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 text-sm"
            >
              Open Web Demo
            </Link>
          </div>
        </div>

        {/* ── Mobile App card ── */}
        <div className="bg-surface-container-lowest rounded-4xl shadow-sm border border-outline-variant/20 overflow-hidden flex flex-col">
          <div className="bg-tertiary/8 px-8 py-6 border-b border-outline-variant/10">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined filled text-on-tertiary text-xl">
                  smartphone
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-on-surface">Mobile Apps</h2>
            </div>
            <p className="text-sm text-on-surface-variant">
              Driver &amp; Customer apps — interactive phone previews
            </p>
          </div>

          <div className="px-8 py-6 flex-1 flex flex-col gap-5">
            {/* Driver sub-section */}
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
                Driver App
              </p>
              <div className="space-y-2">
                {[
                  { icon: "home",     label: "Home",    desc: "Today's jobs + greeting"  },
                  { icon: "list_alt", label: "My Jobs", desc: "Job list with chem log"    },
                  { icon: "route",    label: "Route",   desc: "Map + optimized stops"     },
                  { icon: "badge",    label: "Profile", desc: "Stats + mode switch"       },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container/50">
                    <div className="w-8 h-8 rounded-xl bg-tertiary/15 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-tertiary text-sm">{s.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{s.label}</p>
                      <p className="text-xs text-on-surface-variant">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-outline-variant/20" />

            {/* Customer sub-section */}
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">
                Customer App
              </p>
              <div className="space-y-2">
                {[
                  { icon: "home",            label: "Home",    desc: "Pool health + AI chat + report" },
                  { icon: "calendar_add_on", label: "Book",    desc: "Service booking + add-ons"      },
                  { icon: "explore",         label: "Tracker", desc: "Live driver map + ETA"          },
                  { icon: "stars",           label: "Rewards", desc: "Points, tiers, referrals"       },
                  { icon: "person",          label: "Profile", desc: "Notifications + settings"       },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container/50">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-sm">{s.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{s.label}</p>
                      <p className="text-xs text-on-surface-variant">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-8 pb-8 flex gap-3">
            <Link
              href="/demo/mobile"
              className="flex-1 bg-tertiary text-on-tertiary text-center font-bold py-3.5 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 text-sm"
            >
              Driver App
            </Link>
            <Link
              href="/demo/mobile/customer"
              className="flex-1 bg-primary text-on-primary text-center font-bold py-3.5 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 text-sm"
            >
              Customer App
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
