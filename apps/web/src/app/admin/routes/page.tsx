import type { Metadata } from "next";

export const metadata: Metadata = { title: "Routes" };

const routes = [
  {
    tech: "Marcus J.", color: "bg-primary text-on-primary", lineColor: "#004473",
    stops: [
      { order: 1, customer: "Alexander White",  address: "123 Beacon St",        type: "Weekly",   time: "9:00 AM",  done: true  },
      { order: 2, customer: "Julianne Varkey",  address: "99 Marlborough St",    type: "Chemical", time: "11:00 AM", done: true  },
      { order: 3, customer: "Marcus Chen",      address: "12 Arlington St",      type: "Weekly",   time: "1:30 PM",  done: false },
      { order: 4, customer: "New Prospect",     address: "404 Huntington Ave",   type: "Audit",    time: "3:00 PM",  done: false },
    ],
  },
  {
    tech: "Carlos R.", color: "bg-secondary text-on-secondary", lineColor: "#466270",
    stops: [
      { order: 1, customer: "Sarah Thompson",  address: "456 Commonwealth Ave", type: "Monthly",  time: "9:00 AM",  done: true  },
      { order: 2, customer: "Tom Anderson",    address: "654 Charles St",       type: "Repair",   time: "10:30 AM", done: false },
      { order: 3, customer: "Elena Rodriguez", address: "77 Gloucester St",     type: "Weekly",   time: "1:00 PM",  done: false },
    ],
  },
  {
    tech: "Elena V.", color: "bg-tertiary text-on-tertiary", lineColor: "#004959",
    stops: [
      { order: 1, customer: "David Martinez",  address: "789 Newbury St",   type: "Weekly",   time: "9:00 AM",  done: true  },
      { order: 2, customer: "Rachel Kim",      address: "321 Boylston St",  type: "Filter",   time: "11:00 AM", done: false },
      { order: 3, customer: "Seasonal Open",   address: "55 Bay State Rd",  type: "Seasonal", time: "2:00 PM",  done: false },
    ],
  },
];

export default function RoutesPage() {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Routes</h1>
          <p className="text-secondary mt-1">Today · Thursday, October 24 · 10 stops total</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-surface-container flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary">auto_fix</span>
            Optimize All
          </button>
          <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            Add Stop
          </button>
        </div>
      </div>

      {/* Map + routes layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Simulated map */}
        <div className="lg:col-span-7 bg-[#e8f0f7] rounded-3xl overflow-hidden relative min-h-[480px]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapgrid" width="36" height="36" patternUnits="userSpaceOnUse">
                <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#c5d8e8" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
            {/* Roads */}
            <line x1="0"    y1="160" x2="100%" y2="160" stroke="#fff" strokeWidth="10" />
            <line x1="0"    y1="300" x2="100%" y2="300" stroke="#fff" strokeWidth="6"  />
            <line x1="0"    y1="400" x2="100%" y2="400" stroke="#fff" strokeWidth="6"  />
            <line x1="140"  y1="0"   x2="140"  y2="100%" stroke="#fff" strokeWidth="10" />
            <line x1="280"  y1="0"   x2="280"  y2="100%" stroke="#fff" strokeWidth="6"  />
            <line x1="430"  y1="0"   x2="430"  y2="100%" stroke="#fff" strokeWidth="6"  />
            {/* Water */}
            <ellipse cx="88%" cy="80%" rx="120" ry="80" fill="#b8d4e8" opacity="0.7"/>
            {/* Marcus route */}
            <polyline points="100,240 220,160 340,300 460,220" fill="none" stroke="#004473" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" opacity="0.9"/>
            {/* Carlos route */}
            <polyline points="200,380 310,300 460,370" fill="none" stroke="#466270" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" opacity="0.9"/>
            {/* Elena route */}
            <polyline points="80,400 140,300 280,380" fill="none" stroke="#004959" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" opacity="0.9"/>
          </svg>

          {/* Stop markers — Marcus */}
          {[
            { cx: 100, cy: 240, n: 1, done: true,  color: "#004473" },
            { cx: 220, cy: 160, n: 2, done: true,  color: "#004473" },
            { cx: 340, cy: 300, n: 3, done: false, color: "#004473" },
            { cx: 460, cy: 220, n: 4, done: false, color: "#004473" },
          ].map((m) => (
            <div key={`m-${m.n}`} className="absolute flex items-center justify-center" style={{ left: m.cx - 16, top: m.cy - 16 }}>
              <div className="w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-xs font-extrabold text-white" style={{ background: m.done ? m.color : `${m.color}80` }}>
                {m.done ? "✓" : m.n}
              </div>
            </div>
          ))}
          {/* Stop markers — Carlos */}
          {[
            { cx: 200, cy: 380, n: 1, done: true,  color: "#466270" },
            { cx: 310, cy: 300, n: 2, done: false, color: "#466270" },
            { cx: 460, cy: 370, n: 3, done: false, color: "#466270" },
          ].map((m) => (
            <div key={`c-${m.n}`} className="absolute flex items-center justify-center" style={{ left: m.cx - 14, top: m.cy - 14 }}>
              <div className="w-7 h-7 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-xs font-extrabold text-white" style={{ background: m.done ? m.color : `${m.color}80` }}>
                {m.done ? "✓" : m.n}
              </div>
            </div>
          ))}
          {/* Stop markers — Elena */}
          {[
            { cx: 80,  cy: 400, n: 1, done: true,  color: "#004959" },
            { cx: 140, cy: 300, n: 2, done: false, color: "#004959" },
            { cx: 280, cy: 380, n: 3, done: false, color: "#004959" },
          ].map((m) => (
            <div key={`e-${m.n}`} className="absolute flex items-center justify-center" style={{ left: m.cx - 14, top: m.cy - 14 }}>
              <div className="w-7 h-7 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-xs font-extrabold text-white" style={{ background: m.done ? m.color : `${m.color}80` }}>
                {m.done ? "✓" : m.n}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow space-y-2">
            {routes.map((r) => (
              <div key={r.tech} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full text-[9px] font-extrabold flex items-center justify-center ${r.color}`}>
                  {r.tech.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-on-surface">{r.tech}</span>
                <span className="text-xs text-outline">{r.stops.length} stops</span>
              </div>
            ))}
          </div>

          {/* Map controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {["add", "remove", "my_location"].map((icon) => (
              <button key={icon} className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-base">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Route stop lists */}
        <div className="lg:col-span-5 space-y-4 overflow-y-auto max-h-[480px] pr-1">
          {routes.map((route) => (
            <div key={route.tech} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-outline-variant/10">
                <div className={`w-8 h-8 rounded-full text-sm font-extrabold flex items-center justify-center ${route.color}`}>
                  {route.tech.charAt(0)}
                </div>
                <p className="font-bold text-sm text-on-surface">{route.tech}</p>
                <span className="ml-auto text-xs text-outline">{route.stops.filter(s => s.done).length}/{route.stops.length} done</span>
              </div>
              <div className="divide-y divide-outline-variant/10">
                {route.stops.map((stop) => (
                  <div key={stop.order} className={`flex items-center gap-3 px-4 py-3 ${stop.done ? "opacity-60" : ""}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-extrabold border-2 flex-shrink-0 ${stop.done ? "bg-tertiary border-tertiary text-white" : "border-outline-variant text-outline"}`}>
                      {stop.done ? "✓" : stop.order}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-on-surface truncate">{stop.customer}</p>
                      <p className="text-[10px] text-outline truncate">{stop.address}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[10px] font-bold text-primary">{stop.time}</p>
                      <p className="text-[10px] text-outline">{stop.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
