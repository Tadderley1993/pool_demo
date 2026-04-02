import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Dashboard" };

// ── Demo data (will come from API/DB in production) ───────────────────────────
const demoUser = { name: "Alexander", poolStatus: "Crystal clear · pH 7.4 · Chlorine 3ppm" };

const nextAppointment = {
  date: "Oct 24",
  time: "9:00 AM",
  technician: { name: "Marcus Jennings", avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg" },
};

const recentServices = [
  {
    id: 1,
    type:   "Weekly Maintenance",
    date:   "October 17, 2023",
    status: "Completed",
    ph:     "7.4",
    chl:    "3ppm",
    image:  "/imgs/pexels-bertellifotografia-9056658.jpg",
    note:   null,
  },
  {
    id: 2,
    type:   "Filter Deep Clean",
    date:   "October 10, 2023",
    status: "Completed",
    ph:     null,
    chl:    null,
    image:  "/imgs/pexels-jdgromov-4716818.jpg",
    note:   "System pressure optimized. Replaced worn O-ring on pump basket. Flow rate restored to 100%.",
  },
];

export default function DashboardPage() {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Greeting */}
      <section className="space-y-2">
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
          Good Morning, {demoUser.name}
        </h1>
        <p className="text-secondary text-lg max-w-2xl font-medium">
          {demoUser.poolStatus}. Enjoy your swim today!
        </p>
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* Next appointment */}
        <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-3xl shadow-sm relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 p-8">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">event</span>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
              Next Appointment
            </h2>
            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl md:text-7xl font-extrabold text-on-surface">
                  {nextAppointment.date}
                </span>
                <span className="text-2xl font-medium text-secondary">
                  at {nextAppointment.time}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-inner relative">
                  <Image
                    src={nextAppointment.technician.avatar}
                    alt={nextAppointment.technician.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-secondary font-medium">Assigned Professional</p>
                  <p className="text-on-surface font-bold text-lg">
                    {nextAppointment.technician.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">edit_calendar</span>
              Reschedule
            </button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-3 rounded-xl font-bold text-sm hover:bg-surface-container-highest transition-all">
              View Checklist
            </button>
          </div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
        </div>

        {/* Payment summary */}
        <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary-fixed/60">
                Current Balance
              </h2>
              <span className="material-symbols-outlined text-primary-fixed/60">
                account_balance_wallet
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-extrabold">$85.00</p>
              <p className="text-sm text-primary-fixed/80">Next billing: Nov 01, 2024</p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <button className="w-full bg-white text-primary py-4 rounded-xl font-extrabold text-sm shadow-lg hover:scale-[1.02] active:scale-95 transition-all">
              Quick Pay Now
            </button>
            <button className="w-full border border-primary-fixed/20 text-primary-fixed py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
              Manage Autopay
            </button>
          </div>
        </div>

        {/* Recent services */}
        <div className="md:col-span-12 space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">
                Recent Services
              </h2>
              <p className="text-secondary">A record of your pool&apos;s health and maintenance</p>
            </div>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline underline-offset-4">
              View All History{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {recentServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-surface-container-low rounded-3xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 w-full relative">
                  <Image src={svc.image} alt={svc.type} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                    {svc.status}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-on-surface">{svc.type}</h3>
                      <p className="text-sm text-secondary">{svc.date}</p>
                    </div>
                    <span className="material-symbols-outlined filled text-tertiary">
                      check_circle
                    </span>
                  </div>
                  {svc.ph && (
                    <div className="flex gap-4 text-xs font-semibold text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">science</span>
                        pH: {svc.ph}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">opacity</span>
                        Chl: {svc.chl}
                      </div>
                    </div>
                  )}
                  {svc.note && (
                    <p className="text-sm text-on-surface-variant leading-relaxed">{svc.note}</p>
                  )}
                  <button className="w-full py-3 bg-white border border-outline-variant/30 rounded-xl text-sm font-bold hover:bg-surface-container-high transition-colors">
                    {svc.ph ? "Download Report" : "View Photos"}
                  </button>
                </div>
              </div>
            ))}

            {/* Support card */}
            <div className="bg-surface-container-lowest text-on-surface p-8 rounded-3xl flex flex-col justify-between border border-outline-variant/20">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-primary">support_agent</span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">Need assistance?</h3>
                <p className="text-on-surface-variant font-medium">
                  Our specialists are ready to help with any pool care questions or emergency repairs.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  Start Live Chat
                </button>
                <Link
                  href="/booking"
                  className="w-full py-3 text-primary font-bold hover:bg-surface-container rounded-xl transition-all text-center block"
                >
                  Book a Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
