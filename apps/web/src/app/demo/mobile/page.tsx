"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { brand } from "@/config/brand";

type DriverTab = "home" | "jobs" | "route" | "profile";

const PRIMARY    = "#004473";
const BG         = "#f6fafe";
const ON_SURFACE = "#0e1d27";

const DRIVER_TABS = [
  { id: "home"    as const, emoji: "🏠", label: "Home"    },
  { id: "jobs"    as const, emoji: "📋", label: "My Jobs" },
  { id: "route"   as const, emoji: "🗺️", label: "Route"   },
  { id: "profile" as const, emoji: "👤", label: "Profile" },
];

function StatusBar() {
  return (
    <div style={{ height: 44, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 22px", flexShrink: 0, position: "relative" }}>
      <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>9:41</span>
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 8, width: 88, height: 26, background: "#000", borderRadius: 13 }} />
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="white">
          <rect x="0" y="8" width="3" height="3" rx="0.5"/>
          <rect x="4.5" y="5.5" width="3" height="5.5" rx="0.5"/>
          <rect x="9" y="3" width="3" height="8" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="11" rx="0.5"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="white">
          <circle cx="7.5" cy="9.5" r="1" fill="white" stroke="none"/>
          <path d="M4.5 7 Q7.5 5 10.5 7" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M1.5 4.5 Q7.5 0.5 13.5 4.5" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="rgba(255,255,255,0.8)"/>
          <rect x="2" y="2" width="15" height="8" rx="1.5" fill="white"/>
          <path d="M22 4 L22 8 Q25 6 22 4Z" fill="rgba(255,255,255,0.5)"/>
        </svg>
      </div>
    </div>
  );
}

function DriverTabBar({ tab, setTab }: { tab: DriverTab; setTab: (t: DriverTab) => void }) {
  return (
    <div style={{ height: 64, background: "#fff", borderTop: "1px solid #e8edf2", display: "flex", flexShrink: 0 }}>
      {DRIVER_TABS.map((t) => (
        <button key={t.id} onClick={() => setTab(t.id)}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontSize: 20 }}>{t.emoji}</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: tab === t.id ? PRIMARY : "#94a3b8" }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DriverMobilePreviewPage() {
  const [tab, setTab] = useState<DriverTab>("home");
  const [phoneScale, setPhoneScale] = useState(1);

  useEffect(() => {
    const update = () => setPhoneScale(Math.min(1, (window.innerWidth - 32) / 391));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const phoneW = 375, phoneH = 812, border = 8;
  const frameW = phoneW + border * 2, frameH = phoneH + border * 2;

  return (
    <div className="min-h-screen bg-[#0d1b2a] flex flex-col items-center justify-start py-6 px-4 gap-6">
      <div className="w-full max-w-5xl flex items-center gap-3">
        <Link href="/demo" className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Demo Hub
        </Link>
        <span className="text-white/20 text-sm ml-auto">{brand.name} — Driver App</span>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8 w-full max-w-5xl">

        {/* Phone scaling wrapper */}
        <div style={{ position: "relative", width: frameW * phoneScale, height: frameH * phoneScale, flexShrink: 0 }} className="mx-auto">
          <div style={{
            position: "absolute", top: 0, left: 0,
            transformOrigin: "top left",
            transform: `scale(${phoneScale})`,
            width: phoneW, height: phoneH,
            borderRadius: 44,
            border: `${border}px solid rgba(255,255,255,0.12)`,
            overflow: "hidden",
            background: BG,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
          }}>
            <StatusBar />
            <div style={{ flex: 1, overflowY: "auto" }}>
              {tab === "home"    && <HomeScreen />}
              {tab === "jobs"    && <JobsScreen />}
              {tab === "route"   && <RouteScreen />}
              {tab === "profile" && <ProfileScreen />}
            </div>
            <DriverTabBar tab={tab} setTab={setTab} />
          </div>
        </div>

        {/* Sidebar — hidden on small screens */}
        <div className="hidden xl:block text-white max-w-xs">
          <h1 className="text-3xl font-extrabold mb-2">{brand.name}</h1>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            Driver mobile app — built with Expo React Native. Tap the tabs to explore each screen.
          </p>
          <div className="space-y-3 mb-8">
            {DRIVER_TABS.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${tab === t.id ? "bg-white/15 border border-white/20" : "hover:bg-white/8"}`}>
                <span className="text-xl">{t.emoji}</span>
                <p className={`font-bold text-sm ${tab === t.id ? "text-white" : "text-white/60"}`}>{t.label}</p>
              </button>
            ))}
          </div>
          <div className="bg-white/8 rounded-2xl p-4 text-xs text-white/50 leading-relaxed">
            <p className="font-bold text-white/70 mb-1">Built with Expo</p>
            Run on a real device with Expo Go — same code, same brand config.
          </div>
        </div>

        {/* Mobile tab switcher — shown only when sidebar is hidden */}
        <div className="xl:hidden flex gap-2 flex-wrap justify-center">
          {DRIVER_TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${tab === t.id ? "bg-white/15 border border-white/20 text-white" : "text-white/50 hover:text-white/80"}`}>
              <span>{t.emoji}</span>{t.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

// ── Screens ───────────────────────────────────────────────────────────────────

const todayJobs = [
  { id: "J-1042", customer: "Sarah Thompson", address: "456 Commonwealth Ave", time: "10:30 AM", status: "Next",     statusColor: PRIMARY,   statusBg: "#d1e4ff" },
  { id: "J-1043", customer: "David Martinez", address: "789 Newbury St",       time: "12:00 PM", status: "Upcoming", statusColor: "#466270", statusBg: "#e4edf4" },
  { id: "J-1044", customer: "Rachel Kim",     address: "321 Boylston St",      time: "2:00 PM",  status: "Upcoming", statusColor: "#466270", statusBg: "#e4edf4" },
];

const allJobs = [
  { id: "J-1042", customer: "Sarah Thompson", address: "456 Commonwealth Ave", time: "10:30 AM", status: "In Progress", border: PRIMARY,   statusColor: PRIMARY,   statusBg: "#d1e4ff" },
  { id: "J-1043", customer: "David Martinez", address: "789 Newbury St",       time: "12:00 PM", status: "Upcoming",    border: "#d1d5db", statusColor: "#466270", statusBg: "#e4edf4" },
  { id: "J-1044", customer: "Rachel Kim",     address: "321 Boylston St",      time: "2:00 PM",  status: "Upcoming",    border: "#d1d5db", statusColor: "#466270", statusBg: "#e4edf4" },
  { id: "J-1040", customer: "Tom Bradley",    address: "12 Oakwood Dr",        time: "8:00 AM",  status: "Completed",   border: "#1d6738", statusColor: "#1d6738", statusBg: "#dcfce7" },
];

const routeStops = [
  { num: 1, customer: "Tom Bradley",    address: "12 Oakwood Dr",        time: "8:00 AM",  done: true,  active: false, x: 52,  y: 164 },
  { num: 2, customer: "Sarah Thompson", address: "456 Commonwealth Ave", time: "10:30 AM", done: false, active: true,  x: 128, y: 118 },
  { num: 3, customer: "David Martinez", address: "789 Newbury St",       time: "12:00 PM", done: false, active: false, x: 210, y: 78  },
  { num: 4, customer: "Rachel Kim",     address: "321 Boylston St",      time: "2:00 PM",  done: false, active: false, x: 298, y: 44  },
];

function HomeScreen() {
  return (
    <div style={{ background: BG, paddingBottom: 20 }}>
      {/* Greeting card — pool photo with overlay */}
      <div style={{ position: "relative", height: 164, overflow: "hidden" }}>
        <img src={brand.images.hero} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,68,115,0.93) 45%, rgba(0,68,115,0.5))" }} />
        <div style={{ position: "absolute", inset: 0, padding: "18px 18px 14px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: "rgba(255,255,255,0.25)", border: "2px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#fff", fontSize: 13, flexShrink: 0 }}>MJ</div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600 }}>Good morning</p>
              <p style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>Marcus Jennings</p>
            </div>
            <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.18)", borderRadius: 20, padding: "4px 10px" }}>
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>☀️ 82°F</span>
            </div>
          </div>
          <p style={{ color: "#fff", fontSize: 24, fontWeight: 800 }}>3 jobs today</p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 3 }}>You're on track · Next job in 25 min</p>
        </div>
      </div>

      <div style={{ padding: "14px 14px 0" }}>
        {/* Stats row */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          {[
            { emoji: "✅", value: "12",  label: "Done",   bg: "#dcfce7", color: "#1d6738" },
            { emoji: "📅", value: "18",  label: "Week",   bg: "#dbeafe", color: "#1e40af" },
            { emoji: "⭐", value: "4.9", label: "Rating", bg: "#fef9c3", color: "#854d0e" },
          ].map((s) => (
            <div key={s.label} style={{ flex: 1, background: "#fff", borderRadius: 14, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ width: 30, height: 30, borderRadius: 15, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", fontSize: 15 }}>{s.emoji}</div>
              <p style={{ fontWeight: 800, fontSize: 17, color: s.color }}>{s.value}</p>
              <p style={{ fontSize: 10, color: "#888", fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Today's Jobs</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {todayJobs.map((job) => (
            <div key={job.id} style={{ background: "#fff", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, borderLeft: `4px solid ${job.status === "Next" ? PRIMARY : "#d1d5db"}` }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 14, color: ON_SURFACE, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.customer}</p>
                <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>📍 {job.address}</p>
                <p style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, marginTop: 2 }}>🕐 {job.time}</p>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: job.statusColor, background: job.statusBg, padding: "3px 10px", borderRadius: 20, flexShrink: 0 }}>{job.status}</span>
            </div>
          ))}
        </div>

        <button style={{ width: "100%", background: PRIMARY, color: "#fff", fontWeight: 800, fontSize: 14, padding: "15px", borderRadius: 16, border: "none", cursor: "pointer", marginTop: 14 }}>
          🗺️  Start Today's Route
        </button>
      </div>
    </div>
  );
}

function JobsScreen() {
  return (
    <div style={{ background: BG, padding: "16px 14px", paddingBottom: 20 }}>
      <p style={{ fontWeight: 800, fontSize: 18, color: ON_SURFACE, marginBottom: 14 }}>My Jobs</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {allJobs.map((job) => (
          <div key={job.id} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", borderLeft: `4px solid ${job.border}` }}>
            <div style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: job.statusBg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, color: job.statusColor, flexShrink: 0 }}>
                    {job.customer.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 14, color: ON_SURFACE }}>{job.customer}</p>
                    <p style={{ fontSize: 11, color: "#888" }}>📍 {job.address}</p>
                    <p style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, marginTop: 2 }}>🕐 {job.time}</p>
                  </div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: job.statusColor, background: job.statusBg, padding: "3px 9px", borderRadius: 20, flexShrink: 0, marginLeft: 6 }}>{job.status}</span>
              </div>

              {job.status === "In Progress" && (
                <>
                  <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                    {[
                      { label: "pH 7.4",     bg: "#dcfce7", color: "#1d6738" },
                      { label: "Cl 2.9ppm",  bg: "#dbeafe", color: "#1e40af" },
                      { label: "Alk 102ppm", bg: "#fef9c3", color: "#854d0e" },
                    ].map((p) => (
                      <span key={p.label} style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20, background: p.bg, color: p.color }}>{p.label}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ flex: 1, background: PRIMARY, color: "#fff", fontWeight: 700, fontSize: 12, padding: "9px 0", borderRadius: 12, border: "none", cursor: "pointer" }}>✅ Complete</button>
                    <button style={{ background: "#f0f4f8", color: "#555", fontWeight: 700, fontSize: 12, padding: "9px 14px", borderRadius: 12, border: "none", cursor: "pointer" }}>📸 Photos</button>
                    <button style={{ background: "#f0f4f8", color: "#555", fontWeight: 700, fontSize: 12, padding: "9px 14px", borderRadius: 12, border: "none", cursor: "pointer" }}>🔧 Log</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteScreen() {
  const W = [33,33,33,33,26,27,27,41]; // block widths between N-S streets
  const NX = [62,95,128,161,194,220,247,274]; // N-S street x positions

  return (
    <div style={{ background: BG, paddingBottom: 20 }}>
      {/* Boston Back Bay — detailed street map */}
      <svg viewBox="0 0 375 215" style={{ width: "100%", display: "block" }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="dShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="rgba(0,0,0,0.28)"/>
          </filter>
        </defs>

        {/* ── Base ── */}
        <rect width="375" height="215" fill="#eae6df"/>

        {/* ── Charles River ── */}
        <path d="M0 0 L375 0 L375 30 Q285 38 190 32 Q95 26 0 34Z" fill="#9ecae1"/>
        <path d="M0 34 Q95 26 190 32 Q285 38 375 30 L375 44 Q285 50 190 46 Q95 42 0 44Z" fill="#b3d9ee"/>
        {/* Esplanade (narrow green strip along river) */}
        <path d="M0 43 Q95 40 190 44 Q285 48 375 43 L375 48 Q285 52 190 49 Q95 46 0 48Z" fill="#c2da9e" opacity="0.7"/>

        {/* ── City blocks (fills between streets) ── */}
        {/* Rows: y-starts for Beacon→Marlborough, Marlborough→CommAve, CommAve→Newbury, Newbury→Boylston, below Boylston */}
        {[44,61,79,99,119].map((rowY, ri) => {
          const heights = [14,14,16,16,58];
          return NX.map((x, ci) => (
            <rect key={`blk-${ri}-${ci}`} x={x+1} y={rowY} width={W[ci]-2} height={heights[ri]} fill="#d4cec2" rx="1"/>
          ));
        })}
        {/* Right of Mass Ave */}
        {[44,61,79,99,119].map((rowY, ri) => {
          const heights = [14,14,16,16,58];
          return <rect key={`rma-${ri}`} x={316} y={rowY} width={57} height={heights[ri]} fill="#d4cec2" rx="1"/>;
        })}

        {/* ── Parks ── */}
        {/* Public Garden */}
        <rect x="8" y="79" width="22" height="34" rx="3" fill="#b5d5a0"/>
        {/* Back Bay Fens */}
        <path d="M332 119 Q350 133 356 155 Q359 174 342 182 Q325 186 317 170 Q308 153 320 137Z" fill="#b5d5a0" opacity="0.85"/>

        {/* ── Horizontal streets ── */}
        {/* Beacon St */}
        <line x1="0" y1="43" x2="375" y2="43" stroke="#fff" strokeWidth="5.5"/>
        <text x="140" y="41" textAnchor="middle" fontSize="5" fill="#aaa" letterSpacing="0.4">BEACON ST</text>
        {/* Marlborough St */}
        <line x1="62" y1="60" x2="375" y2="60" stroke="#fff" strokeWidth="4"/>
        <text x="210" y="58.5" textAnchor="middle" fontSize="4.5" fill="#bbb" letterSpacing="0.3">MARLBOROUGH ST</text>
        {/* Commonwealth Ave — wide with median */}
        <line x1="0" y1="77" x2="375" y2="77" stroke="#fff" strokeWidth="8.5"/>
        <line x1="65" y1="77" x2="312" y2="77" stroke="#c8da9e" strokeWidth="2.5"/> {/* median */}
        <text x="185" y="74.5" textAnchor="middle" fontSize="5" fill="#666" fontWeight="700" letterSpacing="0.5">COMMONWEALTH AVE</text>
        {/* Newbury St */}
        <line x1="62" y1="97" x2="375" y2="97" stroke="#fff" strokeWidth="5.5"/>
        <text x="290" y="95" textAnchor="middle" fontSize="4.5" fill="#aaa" letterSpacing="0.3">NEWBURY ST</text>
        {/* Boylston St */}
        <line x1="0" y1="117" x2="342" y2="117" stroke="#fff" strokeWidth="5.5"/>
        <text x="185" y="114.5" textAnchor="middle" fontSize="5" fill="#aaa" letterSpacing="0.3">BOYLSTON ST</text>
        {/* Huntington Ave (diagonal) */}
        <line x1="282" y1="117" x2="375" y2="168" stroke="#fff" strokeWidth="5"/>

        {/* ── Vertical streets ── */}
        <line x1="62"  y1="36" x2="62"  y2="215" stroke="#fff" strokeWidth="5.5"/>
        <text x="62"  y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">ARLINGTON</text>
        <line x1="95"  y1="36" x2="95"  y2="182" stroke="#fff" strokeWidth="4"/>
        <text x="95"  y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">BERKELEY</text>
        <line x1="128" y1="36" x2="128" y2="182" stroke="#fff" strokeWidth="4"/>
        <text x="128" y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">CLARENDON</text>
        <line x1="161" y1="36" x2="161" y2="182" stroke="#fff" strokeWidth="4"/>
        <text x="161" y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">DARTMOUTH</text>
        <line x1="194" y1="36" x2="194" y2="172" stroke="#fff" strokeWidth="4"/>
        <text x="194" y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">EXETER</text>
        <line x1="220" y1="36" x2="220" y2="172" stroke="#fff" strokeWidth="4"/>
        <line x1="247" y1="36" x2="247" y2="178" stroke="#fff" strokeWidth="4"/>
        <text x="247" y="34" textAnchor="middle" fontSize="4.5" fill="#bbb">GLOUCESTER</text>
        <line x1="274" y1="36" x2="274" y2="172" stroke="#fff" strokeWidth="4"/>
        <line x1="315" y1="36" x2="315" y2="215" stroke="#fff" strokeWidth="6"/>
        <text x="315" y="34" textAnchor="middle" fontSize="5" fill="#999">MASS AVE</text>

        {/* ── Route lines ── */}
        {/* Completed (stop 1 → stop 2): residential → up to Boylston → Clarendon north → Comm Ave east → Dartmouth */}
        <path d="M25 133 L25 117 L128 117 L128 77 L161 77"
          stroke={PRIMARY} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Upcoming (stop 2 → stop 3): east on Comm Ave → Gloucester → south to Newbury */}
        <path d="M161 77 L247 77 L247 97"
          stroke={PRIMARY} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="7 4" opacity="0.65"/>
        {/* Upcoming (stop 3 → stop 4): west on Newbury → Clarendon → south to Boylston */}
        <path d="M247 97 L128 97 L128 117"
          stroke={PRIMARY} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="7 4" opacity="0.65"/>

        {/* ── Stop markers ── */}
        {/* Stop 1 — done */}
        <circle cx="25" cy="133" r="11" fill="#94a3b8" stroke="#fff" strokeWidth="2" filter="url(#dShadow)"/>
        <text x="25" y="137.5" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800">✓</text>

        {/* Stop 2 — active (pulsing) */}
        <circle cx="161" cy="77" r="18" fill={PRIMARY} opacity="0.12">
          <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.12;0.04;0.12" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="161" cy="77" r="13" fill={PRIMARY} stroke="#fff" strokeWidth="2.5" filter="url(#dShadow)"/>
        <text x="161" y="81.5" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="800">2</text>
        {/* "CURRENT" chip above stop 2 */}
        <rect x="133" y="58" width="56" height="13" rx="6.5" fill="#fff" filter="url(#dShadow)"/>
        <text x="161" y="68" textAnchor="middle" fill={PRIMARY} fontSize="6" fontWeight="800">CURRENT STOP</text>

        {/* Stop 3 — upcoming */}
        <circle cx="247" cy="97" r="11" fill="#fff" stroke={PRIMARY} strokeWidth="2.5" filter="url(#dShadow)"/>
        <text x="247" y="101.5" textAnchor="middle" fill={PRIMARY} fontSize="9" fontWeight="800">3</text>

        {/* Stop 4 — upcoming */}
        <circle cx="128" cy="117" r="11" fill="#fff" stroke={PRIMARY} strokeWidth="2.5" filter="url(#dShadow)"/>
        <text x="128" y="121.5" textAnchor="middle" fill={PRIMARY} fontSize="9" fontWeight="800">4</text>

        {/* ── Van icon (driver position — approaching stop 2 on Clarendon) ── */}
        <circle cx="128" cy="94" r="7" fill={PRIMARY} opacity="0.2">
          <animate attributeName="r" values="5;8;5" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <circle cx="128" cy="94" r="6.5" fill={PRIMARY} stroke="#fff" strokeWidth="1.5"/>
        <text x="128" y="97.5" textAnchor="middle" fill="#fff" fontSize="7">🚐</text>

        {/* ── ETA chip ── */}
        <rect x="8" y="8" width="80" height="22" rx="11" fill={PRIMARY}/>
        <text x="48" y="23" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">ETA: 25 min</text>
      </svg>

      <div style={{ padding: "12px 14px 0" }}>
        <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Today's Route · 4 stops</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {routeStops.map((stop) => (
            <div key={stop.num} style={{ background: "#fff", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, borderLeft: `3px solid ${stop.done ? "#94a3b8" : stop.active ? PRIMARY : "#e4e9ed"}` }}>
              <div style={{ width: 30, height: 30, borderRadius: 15, background: stop.done ? "#e4edf4" : stop.active ? PRIMARY : "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: stop.done ? "#94a3b8" : stop.active ? "#fff" : "#555", flexShrink: 0 }}>
                {stop.done ? "✓" : stop.num}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: stop.done ? "#94a3b8" : ON_SURFACE, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{stop.customer}</p>
                <p style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>{stop.address}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: stop.active ? PRIMARY : "#aaa" }}>{stop.time}</p>
                {stop.active && <p style={{ fontSize: 9, color: PRIMARY, fontWeight: 700, marginTop: 2 }}>IN PROGRESS</p>}
              </div>
            </div>
          ))}
        </div>
        <button style={{ width: "100%", background: PRIMARY, color: "#fff", fontWeight: 800, fontSize: 14, padding: "14px", borderRadius: 16, border: "none", cursor: "pointer", marginTop: 14 }}>
          🧭  Navigate to Next Stop
        </button>
      </div>
    </div>
  );
}

function ProfileScreen() {
  const menu = [
    { emoji: "📋", label: "Job History",      bg: "#dbeafe", color: "#1e40af" },
    { emoji: "📸", label: "My Photo Uploads", bg: "#f3e8ff", color: "#7e22ce" },
    { emoji: "💬", label: "Messages",         bg: "#dcfce7", color: "#1d6738" },
    { emoji: "⚙️",  label: "App Settings",    bg: "#f0f4f8", color: "#466270" },
    { emoji: "🔔", label: "Notifications",    bg: "#fef9c3", color: "#854d0e" },
  ];

  return (
    <div style={{ background: BG, paddingBottom: 20 }}>
      {/* Pool photo hero + overlapping avatar */}
      <div style={{ position: "relative", marginBottom: 44 }}>
        <div style={{ height: 100, overflow: "hidden" }}>
          <img src={brand.images.about} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,68,115,0.55)" }} />
        </div>
        {/* Avatar positioned to straddle the header bottom edge */}
        <div style={{ position: "absolute", bottom: -36, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 72, height: 72, borderRadius: 36, background: PRIMARY, border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 22, boxShadow: "0 4px 16px rgba(0,68,115,0.35)" }}>MJ</div>
        </div>
      </div>

      <div style={{ padding: "0 14px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 14 }}>
          <p style={{ fontWeight: 800, fontSize: 17, color: ON_SURFACE, marginTop: 0 }}>Marcus Jennings</p>
          <p style={{ fontSize: 12, color: "#888" }}>Driver / Technician</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>⭐⭐⭐⭐⭐ <span style={{ fontWeight: 700, color: PRIMARY }}>4.9</span> <span style={{ color: "#aaa", fontSize: 11 }}>(120 services)</span></p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {[
            { label: "Jobs This Month", value: "34"     },
            { label: "Miles Driven",    value: "412 mi" },
            { label: "Issues Reported", value: "2"      },
            { label: "On-Time Rate",    value: "98%"    },
          ].map((s) => (
            <div key={s.label} style={{ width: "calc(50% - 4px)", background: "#fff", borderRadius: 14, padding: "12px 14px" }}>
              <p style={{ fontWeight: 800, fontSize: 17, color: PRIMARY }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#888", marginTop: 3 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", marginBottom: 12 }}>
          {menu.map((item, i) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderBottom: i < menu.length - 1 ? "1px solid #f0f4f8" : "none" }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.emoji}</div>
              <span style={{ flex: 1, fontWeight: 600, fontSize: 14, color: ON_SURFACE }}>{item.label}</span>
              <span style={{ color: "#ccc", fontSize: 18 }}>›</span>
            </div>
          ))}
        </div>

        <button style={{ width: "100%", border: "2px solid #ba1a1a", borderRadius: 14, padding: "13px", background: "none", color: "#ba1a1a", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          Log Out
        </button>
      </div>
    </div>
  );
}
