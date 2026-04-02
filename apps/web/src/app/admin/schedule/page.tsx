import type { Metadata } from "next";

export const metadata: Metadata = { title: "Schedule" };

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DATES = [21, 22, 23, 24, 25, 26, 27];
const TODAY_IDX = 3; // Thu Oct 24

const jobs: {
  id: string; customer: string; address: string; tech: string;
  time: string; duration: number; day: number; color: string; icon: string;
}[] = [
  { id: "J-1041", customer: "Alexander White", address: "123 Beacon St",        tech: "Marcus J.", time: "9:00",  duration: 90, day: 0, color: "bg-primary-container border-l-4 border-primary",       icon: "waves"           },
  { id: "J-1042", customer: "Sarah Thompson",  address: "456 Commonwealth Ave", tech: "Carlos R.", time: "10:30", duration: 60, day: 0, color: "bg-secondary-container border-l-4 border-secondary",   icon: "calendar_today"  },
  { id: "J-1043", customer: "David Martinez",  address: "789 Newbury St",       tech: "Elena V.",  time: "9:00",  duration: 45, day: 1, color: "bg-tertiary-container border-l-4 border-tertiary",     icon: "science"         },
  { id: "J-1044", customer: "Rachel Kim",      address: "321 Boylston St",      tech: "Marcus J.", time: "14:00", duration: 60, day: 1, color: "bg-primary-container border-l-4 border-primary",       icon: "waves"           },
  { id: "J-1045", customer: "Tom Anderson",    address: "654 Charles St",       tech: "Carlos R.", time: "9:00",  duration: 120,day: 2, color: "bg-secondary-container border-l-4 border-secondary",   icon: "build"           },
  { id: "J-1046", customer: "Julianne Varkey", address: "99 Marlborough St",    tech: "Elena V.",  time: "11:00", duration: 90, day: 3, color: "bg-tertiary-container border-l-4 border-tertiary",     icon: "filter_alt"      },
  { id: "J-1047", customer: "Marcus Chen",     address: "12 Arlington St",      tech: "Marcus J.", time: "13:30", duration: 60, day: 3, color: "bg-primary-container border-l-4 border-primary",       icon: "waves"           },
  { id: "J-1048", customer: "Elena Rodriguez", address: "77 Gloucester St",     tech: "Carlos R.", time: "9:00",  duration: 45, day: 4, color: "bg-secondary-container border-l-4 border-secondary",   icon: "calendar_today"  },
  { id: "J-1049", customer: "Alexander White", address: "123 Beacon St",        tech: "Elena V.",  time: "15:00", duration: 90, day: 4, color: "bg-tertiary-container border-l-4 border-tertiary",     icon: "waves"           },
  { id: "J-1050", customer: "Sarah Thompson",  address: "456 Commonwealth Ave", tech: "Marcus J.", time: "10:00", duration: 60, day: 5, color: "bg-primary-container border-l-4 border-primary",       icon: "wb_sunny"        },
];

const techs = [
  { name: "Marcus J.", color: "bg-primary text-on-primary",     jobs: 4 },
  { name: "Carlos R.", color: "bg-secondary text-on-secondary", jobs: 3 },
  { name: "Elena V.",  color: "bg-tertiary text-on-tertiary",   jobs: 3 },
];

export default function SchedulePage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Schedule</h1>
          <p className="text-secondary mt-1">Week of October 21 – 27, 2024</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 bg-surface-container-lowest border border-outline-variant/20 p-1 rounded-xl">
            {["Day", "Week", "Month"].map((v, i) => (
              <button key={v} className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${i === 1 ? "bg-primary text-on-primary shadow" : "text-on-surface-variant hover:bg-surface-container"}`}>
                {v}
              </button>
            ))}
          </div>
          <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Job
          </button>
        </div>
      </div>

      {/* Technician legend */}
      <div className="flex flex-wrap gap-3">
        {techs.map((t) => (
          <div key={t.name} className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm border border-outline-variant/10">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold ${t.color}`}>
              {t.name.charAt(0)}
            </div>
            <span className="text-sm font-semibold text-on-surface">{t.name}</span>
            <span className="text-xs text-outline">{t.jobs} jobs</span>
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-outline-variant/20">
          {DAYS.map((d, i) => (
            <div
              key={d}
              className={`py-4 text-center ${i === TODAY_IDX ? "bg-primary/5" : ""}`}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-outline">{d}</p>
              <p className={`text-2xl font-extrabold mt-1 mx-auto w-10 h-10 flex items-center justify-center rounded-full ${i === TODAY_IDX ? "bg-primary text-on-primary" : "text-on-surface"}`}>
                {DATES[i]}
              </p>
            </div>
          ))}
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-7 min-h-[400px] divide-x divide-outline-variant/10">
          {DAYS.map((_, dayIdx) => {
            const dayJobs = jobs.filter((j) => j.day === dayIdx);
            return (
              <div key={dayIdx} className={`p-2 space-y-2 ${dayIdx === TODAY_IDX ? "bg-primary/[0.03]" : ""}`}>
                {dayJobs.map((job) => (
                  <div key={job.id} className={`${job.color} rounded-xl p-2.5 cursor-pointer hover:opacity-90 transition-opacity`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-xs">{job.icon}</span>
                      <span className="text-[10px] font-bold">{job.time}</span>
                    </div>
                    <p className="text-xs font-bold leading-tight truncate">{job.customer}</p>
                    <p className="text-[10px] text-on-surface-variant truncate mt-0.5">{job.tech}</p>
                  </div>
                ))}
                {dayJobs.length === 0 && (
                  <div className="h-16 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="text-[10px] text-outline flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Unscheduled jobs */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-on-surface">Unassigned Requests</h3>
          <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1 rounded-full">2 pending</span>
        </div>
        <div className="space-y-3">
          {[
            { customer: "New Lead — James Holloway", address: "808 Washington St",     note: "First-time deep clean requested", urgency: "high" },
            { customer: "Carla Freeman",             address: "515 Massachusetts Ave", note: "Chemical imbalance follow-up",  urgency: "low"  },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl gap-4">
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${r.urgency === "high" ? "bg-error-container" : "bg-secondary-container"}`}>
                  <span className={`material-symbols-outlined text-base ${r.urgency === "high" ? "text-error" : "text-secondary"}`}>
                    {r.urgency === "high" ? "priority_high" : "pending"}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-on-surface">{r.customer}</p>
                  <p className="text-xs text-outline">{r.address} · {r.note}</p>
                </div>
              </div>
              <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold text-xs hover:opacity-90 flex-shrink-0">
                Assign
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
