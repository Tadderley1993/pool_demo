"use client";
import { useState } from "react";
import Link from "next/link";
import { brand } from "@/config/brand";

type CustomerTab = "home" | "book" | "tracker" | "rewards";

const PRIMARY    = "#004473";
const TERTIARY   = "#004959";
const BG         = "#f6fafe";
const ON_SURFACE = "#0e1d27";
const DEMO_PTS   = 2450;

const CUSTOMER_TABS = [
  { id: "home"    as const, emoji: "🏠", label: "Dashboard"     },
  { id: "book"    as const, emoji: "📅", label: "Book Services" },
  { id: "tracker" as const, emoji: "📍", label: "Live Tracker"  },
  { id: "rewards" as const, emoji: "⭐", label: "Rewards"       },
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

function CustomerTabBar({ tab, setTab }: { tab: CustomerTab; setTab: (t: CustomerTab) => void }) {
  return (
    <div style={{ height: 64, background: "#fff", borderTop: "1px solid #e8edf2", display: "flex", flexShrink: 0 }}>
      {CUSTOMER_TABS.map((t) => (
        <button key={t.id} onClick={() => setTab(t.id)}
          style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          <span style={{ fontSize: 18 }}>{t.emoji}</span>
          <span style={{ fontSize: 9, fontWeight: 700, color: tab === t.id ? PRIMARY : "#94a3b8" }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CustomerMobilePreviewPage() {
  const [tab, setTab] = useState<CustomerTab>("home");

  return (
    <div className="min-h-screen bg-[#0d1b2a] flex flex-col items-center justify-start py-10 px-4 gap-6">
      <div className="w-full max-w-5xl flex items-center gap-3">
        <Link href="/demo" className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Demo Hub
        </Link>
        <Link href="/demo/mobile" className="text-white/40 hover:text-white/60 text-sm transition-colors ml-3">← Driver App</Link>
        <span className="text-white/20 text-sm ml-auto">{brand.name} — Customer App</span>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full max-w-5xl">

        {/* Phone frame — flexbox column */}
        <div className="flex-shrink-0 mx-auto" style={{
          width: 375, height: 812,
          borderRadius: 44,
          border: "8px solid rgba(255,255,255,0.12)",
          overflow: "hidden",
          background: BG,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}>
          <StatusBar />
          <div style={{ flex: 1, overflowY: "auto" }}>
            {tab === "home"    && <HomeScreen    setTab={setTab} />}
            {tab === "book"    && <BookScreen    />}
            {tab === "tracker" && <TrackerScreen setTab={setTab} />}
            {tab === "rewards" && <RewardsScreen />}
          </div>
          <CustomerTabBar tab={tab} setTab={setTab} />
        </div>

        {/* Sidebar */}
        <div className="text-white max-w-xs">
          <h1 className="text-3xl font-extrabold mb-2">{brand.name}</h1>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">Customer mobile app — tap tabs to explore. Ask Tony and Issue Reporting live in the Home tab.</p>
          <div className="space-y-3 mb-8">
            {CUSTOMER_TABS.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all ${tab === t.id ? "bg-white/15 border border-white/20" : "hover:bg-white/8"}`}>
                <span className="text-xl">{t.emoji}</span>
                <p className={`font-bold text-sm ${tab === t.id ? "text-white" : "text-white/60"}`}>{t.label}</p>
              </button>
            ))}
          </div>
          <div className="bg-white/8 rounded-2xl p-4 text-xs text-white/50 leading-relaxed">
            <p className="font-bold text-white/70 mb-1">🎧 Ask Tony + 📸 Issue Reporting</p>
            Both accessible from the Home screen quick-action buttons.
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Home Screen (with chat + report overlays) ─────────────────────────────────

const chemReadings = [
  { label: "pH",         value: 7.4,  unit: "",    min: 7.2, max: 7.8, ok: true  },
  { label: "Chlorine",   value: 2.9,  unit: "ppm", min: 1,   max: 5,   ok: true  },
  { label: "Alkalinity", value: 102,  unit: "ppm", min: 80,  max: 120, ok: true  },
  { label: "Calcium",    value: 295,  unit: "ppm", min: 200, max: 400, ok: true  },
];

type HomeView = "main" | "chat" | "report" | "reportDone";

function HomeScreen({ setTab }: { setTab: (t: CustomerTab) => void }) {
  const [view, setView] = useState<HomeView>("main");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: brand.customerApp?.aiWelcomeMessage ?? "Hi! I'm Tony, your 24/7 pool assistant." },
  ]);
  const [reportCat, setReportCat] = useState<string | null>(null);

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const q = chatInput.toLowerCase();
    const reply =
      q.includes("ph")        ? "Your pH is 7.4 — perfect range! No action needed." :
      q.includes("chlorine")  ? "Chlorine is 2.9 ppm, slightly below ideal. A light shock treatment would help." :
      q.includes("book")      ? "Head to the Book tab to schedule a service anytime!" :
      q.includes("cost") || q.includes("price") ? "Weekly Maintenance starts at $85/visit. Chemical Balancing is $65." :
                                "Great question! Your pool is looking healthy based on the latest report. Anything else?";
    setMessages((p) => [...p, { role: "user", text: chatInput }, { role: "ai", text: reply }]);
    setChatInput("");
  };

  // ── Chat overlay ──
  if (view === "chat") return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#fff" }}>
      <div style={{ background: PRIMARY, padding: "14px 16px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={() => setView("main")} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", padding: 0, lineHeight: 1 }}>‹</button>
        <div style={{ width: 36, height: 36, borderRadius: 18, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🎧</div>
        <div>
          <p style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>{brand.customerApp?.aiAssistantName ?? "AquaBot"}</p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 11 }}>AI Pool Assistant · Online</p>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 10px", display: "flex", flexDirection: "column", gap: 10, background: BG }}>
        {messages.map((m, i) => (
          <div key={i} style={{ maxWidth: "80%", alignSelf: m.role === "ai" ? "flex-start" : "flex-end", background: m.role === "ai" ? "#fff" : PRIMARY, borderRadius: 16, borderBottomLeftRadius: m.role === "ai" ? 4 : 16, borderBottomRightRadius: m.role === "user" ? 4 : 16, padding: "10px 14px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
            <p style={{ fontSize: 14, color: m.role === "ai" ? ON_SURFACE : "#fff", lineHeight: 1.5 }}>{m.text}</p>
          </div>
        ))}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
          {["What's my pH?", "Chlorine levels?", "Book a service", "Pricing"].map((q) => (
            <button key={q} onClick={() => setChatInput(q)} style={{ fontSize: 11, padding: "5px 10px", borderRadius: 20, border: `1.5px solid ${PRIMARY}`, background: "none", color: PRIMARY, fontWeight: 600, cursor: "pointer" }}>{q}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "10px 12px 14px", background: "#fff", borderTop: "1px solid #f0f4f8", display: "flex", gap: 8 }}>
        <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendChat()}
          placeholder="Ask Tony anything…" style={{ flex: 1, background: BG, borderRadius: 24, padding: "10px 16px", fontSize: 14, border: "none", outline: "none", color: ON_SURFACE }} />
        <button onClick={sendChat} style={{ width: 42, height: 42, borderRadius: 21, background: chatInput.trim() ? PRIMARY : "#ccc", color: "#fff", border: "none", cursor: "pointer", fontSize: 18, fontWeight: 800 }}>↑</button>
      </div>
    </div>
  );

  // ── Report overlay ──
  if (view === "reportDone") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: 32, background: BG, textAlign: "center" }}>
      <span style={{ fontSize: 56, marginBottom: 16 }}>✅</span>
      <p style={{ fontWeight: 800, fontSize: 22, color: ON_SURFACE, marginBottom: 8 }}>Report Submitted</p>
      <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 28 }}>Our team has been notified and will follow up within 24 hours.</p>
      <button onClick={() => setView("main")} style={{ background: PRIMARY, color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 32px", borderRadius: 16, border: "none", cursor: "pointer" }}>Back to Home</button>
    </div>
  );

  if (view === "report") return (
    <div style={{ background: BG, padding: "14px 14px", paddingBottom: 20, overflowY: "auto" }}>
      <button onClick={() => setView("main")} style={{ background: "none", border: "none", color: PRIMARY, fontWeight: 600, fontSize: 14, cursor: "pointer", padding: "0 0 12px", display: "flex", alignItems: "center", gap: 4 }}>‹ Back</button>
      <p style={{ fontWeight: 800, fontSize: 20, color: ON_SURFACE, marginBottom: 6 }}>Report an Issue</p>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 18 }}>Attach photos and describe what you're seeing.</p>

      <p style={{ fontSize: 12, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Issue Type</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {(brand.customerApp?.issueCategories ?? ["Water Chemistry","Equipment","Algae","Leak","Other"]).map((cat) => (
          <button key={cat} onClick={() => setReportCat(cat)} style={{ padding: "8px 14px", borderRadius: 20, border: `2px solid ${reportCat === cat ? PRIMARY : "#e4e9ed"}`, background: reportCat === cat ? PRIMARY : "#fff", color: reportCat === cat ? "#fff" : "#555", fontWeight: 600, fontSize: 12, cursor: "pointer" }}>{cat}</button>
        ))}
      </div>

      <p style={{ fontSize: 12, fontWeight: 700, color: "#666", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Photos (tap to add)</p>
      <div style={{ display: "flex", gap: 10, marginBottom: 6 }}>
        {[1, 2].map((i) => (
          <div key={i} style={{ width: 80, height: 80, borderRadius: 14, background: "#e8f0f8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
            <span style={{ fontSize: 24 }}>📷</span>
            <span style={{ fontSize: 9, color: "#888", fontWeight: 600 }}>Photo {i}</span>
          </div>
        ))}
        <div style={{ width: 80, height: 80, borderRadius: 14, border: "2px dashed #c8d8e8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, cursor: "pointer" }}>
          <span style={{ fontSize: 22, color: PRIMARY, fontWeight: 300 }}>＋</span>
          <span style={{ fontSize: 9, color: PRIMARY, fontWeight: 600 }}>Add</span>
        </div>
      </div>
      <p style={{ fontSize: 11, color: "#aaa", marginBottom: 18 }}>Tap to take a photo or choose from library</p>

      <textarea placeholder="Describe the issue in detail…" rows={3} style={{ width: "100%", borderRadius: 14, padding: "12px 14px", fontSize: 14, border: "1.5px solid #e4e9ed", background: "#fff", resize: "none", outline: "none", color: ON_SURFACE, boxSizing: "border-box", marginBottom: 16 }} />

      <button onClick={() => setView("reportDone")} style={{ width: "100%", background: PRIMARY, color: "#fff", fontWeight: 800, fontSize: 14, padding: "15px", borderRadius: 16, border: "none", cursor: "pointer" }}>
        Submit Report
      </button>
    </div>
  );

  // ── Main home view ──
  return (
    <div style={{ background: BG, paddingBottom: 20 }}>
      {/* Pool photo hero */}
      <div style={{ position: "relative", height: 158, overflow: "hidden" }}>
        <img src={brand.images.hero} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,68,115,0.90) 40%, rgba(0,68,115,0.45))" }} />
        <div style={{ position: "absolute", inset: 0, padding: "16px 16px 14px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600 }}>Welcome back</p>
          <p style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>Jessica Lane</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, background: "rgba(255,255,255,0.18)", padding: "4px 12px", borderRadius: 20, alignSelf: "flex-start" }}>
            <span style={{ color: "#4ade80", fontSize: 10 }}>●</span>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Crystal Clear · pH 7.4</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "14px 14px 0" }}>
        {/* Next appointment */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "14px 14px", marginBottom: 14, borderLeft: `4px solid ${PRIMARY}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#888" }}>📅 Next Service</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#1d6738", background: "#dcfce7", padding: "2px 10px", borderRadius: 20 }}>Confirmed</span>
          </div>
          <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE }}>Thursday, Apr 10 · 10:30 AM</p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
            <div style={{ width: 24, height: 24, borderRadius: 12, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 9 }}>MJ</div>
            <span style={{ fontSize: 12, color: "#666" }}>Marcus Jennings · Weekly Maintenance</span>
          </div>
        </div>

        {/* Pool health */}
        <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Pool Health</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {chemReadings.map((c) => {
            const pct = Math.round(((c.value - c.min) / (c.max - c.min)) * 100);
            return (
              <div key={c.label} style={{ width: "calc(50% - 4px)", background: "#fff", borderRadius: 14, padding: "12px 14px" }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: c.ok ? "#1d6738" : "#b45309", marginBottom: 6 }} />
                <p style={{ fontWeight: 800, fontSize: 17, color: PRIMARY }}>{c.value}{c.unit}</p>
                <p style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{c.label}</p>
                <div style={{ height: 4, background: "#f0f4f8", borderRadius: 2, marginTop: 6, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${pct}%`, background: c.ok ? PRIMARY : "#b45309", borderRadius: 2 }} />
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, color: c.ok ? "#1d6738" : "#b45309", marginTop: 4 }}>{c.ok ? "Ideal" : "Check"}</p>
              </div>
            );
          })}
        </div>

        {/* Quick actions */}
        <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Quick Actions</p>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <button onClick={() => setView("report")} style={{ flex: 1, background: PRIMARY, color: "#fff", border: "none", borderRadius: 16, padding: "16px 10px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 24 }}>📸</span>
            <span style={{ fontWeight: 700, fontSize: 12 }}>Report Issue</span>
          </button>
          <button onClick={() => setView("chat")} style={{ flex: 1, background: TERTIARY, color: "#fff", border: "none", borderRadius: 16, padding: "16px 10px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 24 }}>🎧</span>
            <span style={{ fontWeight: 700, fontSize: 12 }}>Ask Tony</span>
          </button>
        </div>

        {/* Recent services */}
        <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Recent Services</p>
        {[
          { date: "Mar 28", type: "Weekly Maintenance",  tech: "Marcus J.", img: brand.images.about },
          { date: "Mar 14", type: "Chemical Balancing",  tech: "Marcus J.", img: brand.images.services },
        ].map((s) => (
          <div key={s.date} style={{ background: "#fff", borderRadius: 14, marginBottom: 8, display: "flex", overflow: "hidden" }}>
            <img src={s.img} alt="" style={{ width: 60, height: 60, objectFit: "cover", flexShrink: 0 }} />
            <div style={{ padding: "10px 12px", flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: ON_SURFACE }}>{s.type}</p>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#1d6738", background: "#dcfce7", padding: "2px 8px", borderRadius: 20 }}>Done</span>
              </div>
              <p style={{ fontSize: 11, color: "#888", marginTop: 3 }}>📅 {s.date} · 👤 {s.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Book Screen ───────────────────────────────────────────────────────────────

const serviceEmojis: Record<string, string> = { weekly: "🗓️", chemical: "🧪", filter: "🔧", repair: "⚙️", seasonal: "☀️" };

function BookScreen() {
  const [freq, setFreq]       = useState("weekly");
  const [service, setService] = useState("chemical");

  const sel = brand.services.find((s) => s.id === service);

  return (
    <div style={{ background: BG, padding: "16px 14px", paddingBottom: 20, overflowY: "auto" }}>
      <p style={{ fontWeight: 800, fontSize: 20, color: ON_SURFACE, marginBottom: 16 }}>Book a Service</p>

      <p style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>How often?</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {brand.booking.frequencies.map((f) => (
          <button key={f.id} onClick={() => setFreq(f.id)} style={{ flex: 1, borderRadius: 14, padding: "12px 6px", textAlign: "center", border: `2px solid ${freq === f.id ? PRIMARY : "#e4e9ed"}`, background: freq === f.id ? "#edf4fb" : "#fff", cursor: "pointer" }}>
            <p style={{ fontWeight: 800, fontSize: 13, color: freq === f.id ? PRIMARY : "#555" }}>{f.label}</p>
            <p style={{ fontSize: 10, color: freq === f.id ? PRIMARY : "#aaa", marginTop: 2 }}>{f.sublabel}</p>
          </button>
        ))}
      </div>

      {/* Mini calendar */}
      <p style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Pick a date</p>
      <div style={{ background: "#fff", borderRadius: 14, padding: "12px", marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          {["Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
            <div key={d} style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontSize: 10, color: "#aaa", fontWeight: 600, marginBottom: 6 }}>{d}</p>
              <div style={{ width: 30, height: 30, borderRadius: 15, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", background: i === 3 ? PRIMARY : i === 1 || i === 4 ? "#e8f0f8" : "none", cursor: "pointer" }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: i === 3 ? "#fff" : i === 1 || i === 4 ? PRIMARY : "#555" }}>{7 + i}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["9:00 AM", "10:30 AM", "2:00 PM"].map((t, i) => (
            <button key={t} style={{ flex: 1, padding: "8px 4px", borderRadius: 10, border: `1.5px solid ${i === 1 ? PRIMARY : "#e4e9ed"}`, background: i === 1 ? PRIMARY : "#fff", color: i === 1 ? "#fff" : "#555", fontSize: 11, fontWeight: 600, cursor: "pointer" }}>{t}</button>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>Select service</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
        {brand.services.map((s) => (
          <button key={s.id} onClick={() => setService(s.id)} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 14, padding: "12px 14px", border: `2px solid ${service === s.id ? PRIMARY : "transparent"}`, cursor: "pointer", textAlign: "left" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: service === s.id ? "#e8f0f8" : "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{serviceEmojis[s.id] ?? "🔵"}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: ON_SURFACE }}>{s.name}</p>
              <p style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, marginTop: 2 }}>{s.price ? `$${s.price}${s.priceLabel}` : s.priceLabel}</p>
            </div>
            <div style={{ width: 20, height: 20, borderRadius: 10, border: `2px solid ${service === s.id ? PRIMARY : "#ccc"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {service === s.id && <div style={{ width: 10, height: 10, borderRadius: 5, background: PRIMARY }} />}
            </div>
          </button>
        ))}
      </div>

      <button style={{ width: "100%", background: PRIMARY, color: "#fff", fontWeight: 800, fontSize: 14, padding: "15px", borderRadius: 16, border: "none", cursor: "pointer" }}>
        📅  Request Booking{sel?.price ? ` · $${sel.price}` : ""}
      </button>
    </div>
  );
}

// ── Tracker Screen ────────────────────────────────────────────────────────────

const trackerSteps = [
  { label: "Dispatched",    sub: "9:15 AM",         done: true  },
  { label: "In Transit",    sub: "~10 min away",    done: true  },
  { label: "At Your Pool",  sub: "Est. 10:30 AM",   done: false },
];

function TrackerScreen({ setTab }: { setTab: (t: CustomerTab) => void }) {
  return (
    <div style={{ background: BG, paddingBottom: 20 }}>
      {/* Banner */}
      <div style={{ background: PRIMARY, margin: "14px 14px 0", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 28 }}>🚗</span>
        <div>
          <p style={{ color: "#fff", fontWeight: 800, fontSize: 15 }}>Technician En Route</p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>Arriving in approximately 10 min</p>
        </div>
      </div>

      {/* Map */}
      <div style={{ margin: "12px 14px 0", borderRadius: 16, overflow: "hidden" }}>
        <svg viewBox="0 0 347 170" style={{ width: "100%", display: "block" }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="cMapBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#b0d0e8"/>
              <stop offset="100%" stopColor="#c8e4f0"/>
            </linearGradient>
          </defs>
          <rect width="347" height="170" fill="url(#cMapBg)"/>
          {/* Road */}
          <path d="M0 145 Q80 130 160 100 Q240 75 347 45" stroke="#fff" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M0 145 Q80 130 160 100 Q240 75 347 45" stroke="#e2eef6" strokeWidth="8" fill="none" strokeLinecap="round"/>
          {/* Route */}
          <path d="M60 136 Q120 114 200 84" stroke={PRIMARY} strokeWidth="2.5" fill="none" strokeDasharray="6,4"/>
          {/* Destination (house) */}
          <circle cx="248" cy="62" r="18" fill="white" stroke={PRIMARY} strokeWidth="2"/>
          <text x="248" y="68" textAnchor="middle" fontSize="16">🏠</text>
          {/* Car (driver) with glow */}
          <circle cx="72" cy="128" r="16" fill={PRIMARY} opacity="0.2"/>
          <circle cx="72" cy="128" r="12" fill={PRIMARY}/>
          <text x="72" y="133" textAnchor="middle" fontSize="13">🚗</text>
          {/* ETA */}
          <rect x="10" y="10" width="86" height="24" rx="12" fill={PRIMARY}/>
          <text x="53" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">ETA: 10 min</text>
        </svg>
      </div>

      <div style={{ padding: "14px 14px 0" }}>
        {/* Steps */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "16px 16px", marginBottom: 14 }}>
          {trackerSteps.map((step, i) => (
            <div key={step.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: i < trackerSteps.length - 1 ? 14 : 0 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: 14, background: step.done ? PRIMARY : "#f0f4f8", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: step.done ? "#fff" : "#aaa", flexShrink: 0 }}>
                  {step.done ? "✓" : i + 1}
                </div>
                {i < trackerSteps.length - 1 && <div style={{ width: 2, height: 14, background: step.done ? PRIMARY : "#e4e9ed", marginTop: 2 }} />}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 14, color: step.done ? ON_SURFACE : "#aaa" }}>{step.label}</p>
                <p style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>{step.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech card */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{ width: 46, height: 46, borderRadius: 23, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>MJ</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE }}>Marcus Jennings</p>
            <p style={{ fontSize: 12, color: "#888", marginTop: 2 }}>⭐ 4.9 · 120 services · 🚐 Ford Transit</p>
          </div>
          <button style={{ background: "#f0f4f8", border: "none", borderRadius: 12, padding: "8px 12px", cursor: "pointer", fontSize: 16 }}>💬</button>
        </div>

        <button onClick={() => setTab("home")} style={{ width: "100%", border: `2px solid ${PRIMARY}`, borderRadius: 14, padding: "13px", background: "none", color: PRIMARY, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          📸  Report an Issue
        </button>
      </div>
    </div>
  );
}

// ── Rewards Screen ────────────────────────────────────────────────────────────

function RewardsScreen() {
  const { tiers, redeemable, programName, referralPoints } = brand.rewards;
  const curIdx    = tiers.reduce((b, t, i) => DEMO_PTS >= t.minPoints ? i : b, 0);
  const curTier   = tiers[curIdx];
  const nextTier  = tiers[curIdx + 1];
  const progress  = nextTier ? (DEMO_PTS - curTier.minPoints) / (nextTier.minPoints - curTier.minPoints) : 1;
  const tierEmoji = ["💧", "💎", "👑"];
  const redeemEmoji = ["🧪", "💰", "🔧", "🎁"];

  return (
    <div style={{ background: BG, padding: "14px 14px", paddingBottom: 20 }}>
      {/* Hero */}
      <div style={{ background: PRIMARY, borderRadius: 20, padding: "22px 20px", marginBottom: 16, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: 80, opacity: 0.06, lineHeight: 1 }}>✨</div>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{programName}</p>
        <p style={{ color: "#fff", fontSize: 46, fontWeight: 800, marginTop: 4, lineHeight: 1 }}>{DEMO_PTS.toLocaleString()}</p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 2 }}>points ✨</p>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", padding: "5px 14px", borderRadius: 20, marginTop: 10 }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{tierEmoji[curIdx]} {curTier.name}</span>
        </div>
        {nextTier && (
          <div style={{ marginTop: 14 }}>
            <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress * 100}%`, background: "#fff", borderRadius: 3 }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 5 }}>{(nextTier.minPoints - DEMO_PTS).toLocaleString()} pts to {nextTier.name}</p>
          </div>
        )}
      </div>

      {/* Tiers */}
      <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", marginBottom: 16 }}>
        {tiers.map((tier, i) => (
          <div key={tier.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderBottom: i < tiers.length - 1 ? "1px solid #f0f4f8" : "none" }}>
            <span style={{ fontSize: 22 }}>{tierEmoji[i]}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 14, color: i === curIdx ? PRIMARY : "#555" }}>{tier.name}</p>
              <p style={{ fontSize: 11, color: "#aaa" }}>{tier.minPoints === 0 ? "Starting tier" : `${tier.minPoints.toLocaleString()}+ pts`}</p>
            </div>
            {i === curIdx && <span style={{ fontSize: 10, fontWeight: 700, color: PRIMARY, background: "#dbeafe", padding: "3px 10px", borderRadius: 20 }}>Current</span>}
          </div>
        ))}
      </div>

      {/* Redeem */}
      <p style={{ fontWeight: 800, fontSize: 15, color: ON_SURFACE, marginBottom: 10 }}>Redeem Rewards</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {redeemable.map((r, i) => (
          <div key={r.name} style={{ background: "#fff", borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, opacity: r.locked ? 0.5 : 1 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#e8f0f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{redeemEmoji[i] ?? "🎁"}</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: ON_SURFACE }}>{r.name}</p>
              <p style={{ fontSize: 11, color: PRIMARY, fontWeight: 600, marginTop: 2 }}>{r.points.toLocaleString()} pts</p>
            </div>
            <button style={{ padding: "7px 14px", borderRadius: 12, border: "none", background: r.locked || DEMO_PTS < r.points ? "#ccc" : PRIMARY, color: "#fff", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>
              {r.locked ? "🔒" : DEMO_PTS >= r.points ? "Redeem" : "Locked"}
            </button>
          </div>
        ))}
      </div>

      {/* Referral */}
      <div style={{ background: "#edf4fb", borderRadius: 16, padding: "16px" }}>
        <p style={{ fontWeight: 800, fontSize: 14, color: ON_SURFACE, marginBottom: 6 }}>🎁 Refer a Friend</p>
        <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 12 }}>Earn {referralPoints} pts for every referral who books a service.</p>
        <button style={{ width: "100%", background: PRIMARY, color: "#fff", fontWeight: 700, fontSize: 13, padding: "12px", borderRadius: 12, border: "none", cursor: "pointer" }}>Share Referral Link 🔗</button>
      </div>
    </div>
  );
}

