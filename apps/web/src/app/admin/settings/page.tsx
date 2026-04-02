import type { Metadata } from "next";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-10 max-w-3xl space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Settings</h1>
        <p className="text-secondary mt-1">Manage your business account and preferences</p>
      </div>

      {/* Business info */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">business</span>
          Business Information
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Company Name",  value: brand.name,           type: "text"  },
            { label: "Phone",         value: brand.contact.phone,  type: "tel"   },
            { label: "Email",         value: brand.contact.email,  type: "email" },
            { label: "Service Area",  value: brand.contact.address,type: "text"  },
            { label: "Business Hours",value: brand.contact.hours,  type: "text"  },
            { label: "Tagline",       value: brand.tagline,        type: "text"  },
          ].map((f) => (
            <div key={f.label} className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{f.label}</label>
              <input
                type={f.type}
                defaultValue={f.value}
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant/20 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90">
          Save Changes
        </button>
      </section>

      {/* Notifications */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">notifications</span>
          Notification Settings
        </h2>
        {[
          { label: "Job Completion Alerts",      desc: "Email admin when each job is marked complete",     on: true  },
          { label: "Customer Messages",           desc: "Push notification for new customer messages",      on: true  },
          { label: "Overdue Invoice Reminders",   desc: "Weekly digest of outstanding balances",            on: true  },
          { label: "New Booking Requests",        desc: "Immediate alert when a customer books online",     on: true  },
          { label: "Low Inventory Alerts",        desc: "Alert when items fall below par level",            on: true  },
          { label: "Weather Route Warnings",      desc: "Notify when rain may affect scheduled routes",     on: false },
          { label: "Weekly Performance Report",   desc: "Summary email every Monday morning",               on: false },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between py-3 border-b border-outline-variant/10 last:border-0">
            <div>
              <p className="font-semibold text-sm text-on-surface">{item.label}</p>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
            <div className={`w-12 h-6 rounded-full flex items-center px-0.5 transition-colors flex-shrink-0 ml-4 ${item.on ? "bg-primary" : "bg-surface-container-high"}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${item.on ? "translate-x-6" : "translate-x-0"}`} />
            </div>
          </div>
        ))}
      </section>

      {/* Billing / Pricing */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">payments</span>
          Pricing Defaults
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {brand.services.map((s) => (
            <div key={s.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-base">{s.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{s.name}</p>
                  <p className="text-xs text-outline">{s.priceLabel}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-surface-container rounded-xl px-3 py-2">
                <span className="text-sm font-bold text-on-surface">{s.price ? `$${s.price}` : "—"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Roles */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">group</span>
            Team Members
          </h2>
          <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Invite
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: "You (Owner)",    email: brand.contact.email,        role: "Admin",   initials: "OW", color: "bg-primary text-on-primary"     },
            { name: "Marcus Jennings",email: "marcus@aquacare.com",       role: "Driver",  initials: "MJ", color: "bg-secondary text-on-secondary" },
            { name: "Carlos Reyes",   email: "carlos@aquacare.com",       role: "Driver",  initials: "CR", color: "bg-secondary text-on-secondary" },
            { name: "Elena Vasquez",  email: "elena@aquacare.com",        role: "Driver",  initials: "EV", color: "bg-tertiary text-on-tertiary"   },
          ].map((member) => (
            <div key={member.email} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${member.color}`}>
                {member.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-on-surface">{member.name}</p>
                <p className="text-xs text-outline truncate">{member.email}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface-container text-on-surface-variant">{member.role}</span>
              <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-base">more_horiz</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">extension</span>
          Integrations
        </h2>
        <div className="space-y-3">
          {[
            { name: "Stripe Payments",   desc: "Accept cards and manage subscriptions", connected: true,  icon: "credit_card"   },
            { name: "Google Maps",       desc: "Route optimization and customer maps",  connected: true,  icon: "map"           },
            { name: "Twilio SMS",        desc: "Automated appointment reminders",       connected: true,  icon: "sms"           },
            { name: "OpenAI (AquaBot)",  desc: "AI chat assistant for customers",       connected: false, icon: "smart_toy"     },
            { name: "QuickBooks",        desc: "Sync invoices to accounting",           connected: false, icon: "account_balance"},
          ].map((intg) => (
            <div key={intg.name} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary">{intg.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-on-surface">{intg.name}</p>
                <p className="text-xs text-outline">{intg.desc}</p>
              </div>
              {intg.connected ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container text-on-tertiary-container">Connected</span>
              ) : (
                <button className="px-3 py-1 rounded-full text-xs font-bold border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Danger zone */}
      <section className="bg-error-container/30 border border-error/20 rounded-3xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-error">warning</span>
          Danger Zone
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-2xl border border-error/20">
          <div>
            <p className="font-semibold text-sm text-on-surface">Delete Account & All Data</p>
            <p className="text-xs text-on-surface-variant">This action is permanent and cannot be undone.</p>
          </div>
          <button className="border-2 border-error text-error px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-error hover:text-on-error transition-all flex-shrink-0">
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
}
