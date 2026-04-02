import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Live Tracker" };

const technician = {
  name:     "Marcus Jennings",
  rating:   4.9,
  reviews:  120,
  vehicle:  "White Ford Transit · AQUA-402",
  eta:      "15 mins away",
  distance: "2.4 miles",
  avatar:   "/imgs/pexels-petra-nesti-1766376-36676392.jpg",
};

const steps = [
  { label: "Service Dispatched", time: "09:15 AM",                active: true,  done: true  },
  { label: "In Transit",         time: "Est. Arrival: 09:45 AM",  active: true,  done: false },
  { label: "Arrival & Service",  time: "Expected Duration: 45 min", active: false, done: false },
];

export default function TrackerPage() {
  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <section className="z-10 w-full md:w-96 flex flex-col p-6 md:p-8 bg-surface/40 backdrop-blur-md border-r border-outline-variant/10 overflow-y-auto">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
            Live Tracking
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface leading-tight">
            Technician is <br />
            <span className="text-primary">En Route</span>
          </h2>
          <p className="mt-4 text-on-surface-variant leading-relaxed">
            Your service expert is currently navigating to your location.
          </p>
        </div>

        {/* Progress steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.done
                      ? "bg-primary text-on-primary"
                      : step.active
                      ? "bg-secondary-container text-on-secondary-container animate-pulse"
                      : "bg-surface-container-high text-on-surface-variant opacity-40"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg filled">
                    {step.done ? "check_circle" : step.active ? "local_shipping" : "home"}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-0.5 h-12 ${step.done ? "bg-outline-variant/50" : "border-l-2 border-dashed border-outline-variant/30"}`} />
                )}
              </div>
              <div className={step.active && !step.done ? "" : step.done ? "" : "opacity-40"}>
                <p className={`text-sm font-bold ${step.active && !step.done ? "text-primary" : "text-on-surface"}`}>
                  {step.label}
                </p>
                <p className="text-xs text-on-surface-variant">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map area */}
      <section className="flex-1 relative min-h-[400px] overflow-hidden">

        {/* ── Realistic Boston Back Bay street map ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 900 620"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base */}
          <rect width="900" height="620" fill="#ede8df"/>

          {/* Charles River */}
          <path d="M0 0 L900 0 L900 96 Q760 74 620 88 Q460 104 300 80 Q160 60 0 86 Z" fill="#b8d4e8"/>
          <path d="M0 0 L900 0 L900 52 Q680 42 460 56 Q240 70 0 50 Z" fill="#cce4ef"/>
          <text x="430" y="46" fill="#78aac8" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle" letterSpacing="5">Charles  River</text>

          {/* Public Garden */}
          <rect x="0" y="84" width="164" height="338" fill="#c6d89e"/>
          <ellipse cx="82" cy="212" rx="50" ry="36" fill="#b4ca8c" opacity="0.8"/>
          <circle cx="38" cy="138" r="13" fill="#a8be80" opacity="0.7"/>
          <circle cx="118" cy="148" r="11" fill="#a8be80" opacity="0.7"/>
          <circle cx="55" cy="295" r="15" fill="#a8be80" opacity="0.7"/>
          <circle cx="128" cy="315" r="10" fill="#a8be80" opacity="0.7"/>
          <circle cx="85" cy="360" r="12" fill="#a8be80" opacity="0.7"/>
          <text x="82" y="208" fill="#4a6e2a" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">PUBLIC</text>
          <text x="82" y="220" fill="#4a6e2a" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">GARDEN</text>

          {/* City blocks — Back Bay grid */}
          {/* Row: Beacon→Marlborough */}
          {[166,256,346,436,526,616,706,776].map((x,i) => <rect key={`r1${i}`} x={x+1} y={135} width={i<6?87:64} height={41} fill="#e4ddd4" rx="1"/>)}
          {/* Row: Marlborough→Commonwealth */}
          {[166,256,346,436,526,616,706,776].map((x,i) => <rect key={`r2${i}`} x={x+1} y={178} width={i<6?87:64} height={44} fill="#e4ddd4" rx="1"/>)}
          {/* Row: Commonwealth median→Newbury */}
          {[166,256,346,436,526,616,706,776].map((x,i) => <rect key={`r3${i}`} x={x+1} y={238} width={i<6?87:64} height={31} fill="#e4ddd4" rx="1"/>)}
          {/* Row: Newbury→Boylston */}
          {[166,256,346,436,526,616,706].map((x,i) => <rect key={`r4${i}`} x={x+1} y={271} width={87} height={44} fill="#e4ddd4" rx="1"/>)}
          {/* Row: Boylston→St James (special blocks) */}
          {[166,256].map((x,i) => <rect key={`r5${i}`} x={x+1} y={317} width={87} height={62} fill="#e4ddd4" rx="1"/>)}
          <rect x="347" y="317" width="87" height="62" fill="#d8d3c8" rx="1"/>
          {[436,526,616,706].map((x,i) => <rect key={`r5b${i}`} x={x+1} y={317} width={87} height={62} fill="#e4ddd4" rx="1"/>)}
          {/* Row: lower blocks */}
          {[166,256,346,436,526,616].map((x,i) => <rect key={`r6${i}`} x={x+1} y={381} width={87} height={82} fill="#e4ddd4" rx="1"/>)}
          {[166,256,346,436,526,616].map((x,i) => <rect key={`r7${i}`} x={x+1} y={475} width={87} height={70} fill="#e4ddd4" rx="1"/>)}

          {/* Back Bay Fens */}
          <path d="M808 224 Q858 246 882 298 Q902 358 872 402 Q848 432 812 422 Q780 412 770 380 Q754 344 768 300 Q782 258 808 224Z" fill="#c6d89e"/>
          <circle cx="840" cy="315" r="9" fill="#a8be80" opacity="0.7"/>
          <circle cx="818" cy="355" r="6" fill="#a8be80" opacity="0.7"/>
          <text x="818" y="306" fill="#4a6e2a" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">BACK BAY</text>
          <text x="818" y="317" fill="#4a6e2a" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">FENS</text>

          {/* === Streets === */}
          {/* Commonwealth Ave median strip */}
          <rect x="164" y="226" width="684" height="3" fill="#d0c9be"/>

          {/* E-W streets */}
          <line x1="0"   y1="133" x2="900" y2="133" stroke="white" strokeWidth="9"/>
          <line x1="164" y1="177" x2="848" y2="177" stroke="white" strokeWidth="6"/>
          <line x1="0"   y1="225" x2="900" y2="225" stroke="white" strokeWidth="16"/>
          <line x1="164" y1="271" x2="848" y2="271" stroke="white" strokeWidth="7"/>
          <line x1="0"   y1="317" x2="900" y2="317" stroke="white" strokeWidth="11"/>
          <line x1="164" y1="381" x2="900" y2="381" stroke="white" strokeWidth="6.5"/>
          <line x1="0"   y1="463" x2="900" y2="463" stroke="white" strokeWidth="10"/>
          <line x1="0"   y1="545" x2="900" y2="545" stroke="white" strokeWidth="6.5"/>
          {/* Huntington Ave diagonal */}
          <line x1="0" y1="530" x2="768" y2="271" stroke="white" strokeWidth="11"/>

          {/* N-S streets */}
          <line x1="164" y1="84"  x2="164" y2="620" stroke="white" strokeWidth="10"/>
          <line x1="254" y1="84"  x2="254" y2="490" stroke="white" strokeWidth="7"/>
          <line x1="344" y1="84"  x2="344" y2="490" stroke="white" strokeWidth="7"/>
          <line x1="434" y1="84"  x2="434" y2="490" stroke="white" strokeWidth="10"/>
          <line x1="524" y1="84"  x2="524" y2="490" stroke="white" strokeWidth="7"/>
          <line x1="614" y1="84"  x2="614" y2="490" stroke="white" strokeWidth="7"/>
          <line x1="704" y1="84"  x2="704" y2="430" stroke="white" strokeWidth="7"/>
          <line x1="774" y1="84"  x2="774" y2="430" stroke="white" strokeWidth="6"/>
          <line x1="844" y1="84"  x2="844" y2="620" stroke="white" strokeWidth="13"/>

          {/* === Street labels === */}
          <text x="176" y="128" fill="#8a8480" fontSize="9"  fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8">BEACON ST</text>
          <text x="176" y="172" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">MARLBOROUGH ST</text>
          <text x="176" y="220" fill="#8a8480" fontSize="9"  fontFamily="sans-serif" fontWeight="700" letterSpacing="0.6">COMMONWEALTH AVE</text>
          <text x="176" y="266" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600">NEWBURY ST</text>
          <text x="176" y="312" fill="#8a8480" fontSize="9"  fontFamily="sans-serif" fontWeight="700" letterSpacing="0.6">BOYLSTON ST</text>

          <text x="157" y="455" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" transform="rotate(-90 157 455)">ARLINGTON</text>
          <text x="247" y="460" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90 247 460)">BERKELEY</text>
          <text x="337" y="460" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90 337 460)">CLARENDON</text>
          <text x="427" y="460" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" transform="rotate(-90 427 460)">DARTMOUTH</text>
          <text x="517" y="460" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90 517 460)">EXETER ST</text>
          <text x="607" y="455" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90 607 455)">FAIRFIELD</text>
          <text x="697" y="420" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="600" transform="rotate(-90 697 420)">GLOUCESTER</text>
          <text x="837" y="455" fill="#8a8480" fontSize="7.5" fontFamily="sans-serif" fontWeight="700" transform="rotate(-90 837 455)">MASS AVE</text>

          {/* Landmark labels */}
          <text x="389" y="350" fill="#6a6460" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">COPLEY SQ</text>
          <text x="569" y="348" fill="#6a6460" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">PRUDENTIAL</text>

          {/* === Route === */}
          {/* Upcoming dashed path: tech → Dartmouth/Commonwealth → Dartmouth/Beacon */}
          <path d="M 660,225 C 560,225 490,225 434,225 L 434,133" fill="none" stroke="#b8b2aa" strokeWidth="5" strokeDasharray="10,7" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Completed solid segment */}
          <path d="M 760,225 L 660,225" fill="none" stroke="#000d22" strokeWidth="7" strokeLinecap="round"/>
          {/* Directional dots */}
          <circle cx="710" cy="225" r="3.5" fill="#000d22" opacity="0.5"/>
          <circle cx="680" cy="225" r="3.5" fill="#000d22" opacity="0.5"/>

          {/* === Destination marker (Dartmouth & Beacon) === */}
          <circle cx="434" cy="133" r="20" fill="#775a19" opacity="0.15">
            <animate attributeName="r" values="14;22;14" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.18;0.04;0.18" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          {/* Pin shape */}
          <path d="M434 118 C426 118 420 124 420 132 C420 142 434 152 434 152 C434 152 448 142 448 132 C448 124 442 118 434 118Z" fill="#775a19"/>
          <circle cx="434" cy="131" r="5" fill="white"/>
          {/* Label */}
          <rect x="408" y="154" width="52" height="16" rx="8" fill="white" opacity="0.92"/>
          <text x="434" y="165" fill="#775a19" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">YOUR HOME</text>

          {/* === Technician marker === */}
          <circle cx="760" cy="225" r="24" fill="#000d22" opacity="0.1">
            <animate attributeName="r" values="18;30;18" dur="1.6s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.18;0.03;0.18" dur="1.6s" repeatCount="indefinite"/>
          </circle>
          <circle cx="760" cy="225" r="18" fill="#000d22" opacity="0.08"/>
          <circle cx="760" cy="225" r="13" fill="#000d22"/>
          <text x="760" y="229" fill="white" fontSize="11" textAnchor="middle" fontFamily="sans-serif">🚐</text>
          {/* ETA chip */}
          <rect x="716" y="196" width="88" height="20" rx="10" fill="white" opacity="0.95"/>
          <text x="760" y="210" fill="#000d22" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="700">15 min away</text>
        </svg>

        {/* Map controls */}
        <div className="absolute top-6 right-6 flex flex-col gap-2">
          {["add", "remove", "my_location"].map((icon) => (
            <button
              key={icon}
              className="w-12 h-12 rounded-xl bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined">{icon}</span>
            </button>
          ))}
        </div>

        {/* Technician card */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] max-w-full">
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-white/40">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] overflow-hidden border-4 border-primary/10 relative">
                <Image src={technician.avatar} alt={technician.name} fill className="object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-on-surface">{technician.name}</h3>
                <div className="flex items-center justify-center md:justify-start gap-1">
                  <span className="material-symbols-outlined filled text-amber-400 text-sm">star</span>
                  <span className="text-sm font-bold text-on-surface">{technician.rating}</span>
                  <span className="text-xs text-on-surface-variant">({technician.reviews} services)</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm font-medium mb-3 flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined text-base">directions_car</span>
                {technician.vehicle}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="px-4 py-2 bg-primary/5 rounded-2xl">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Est. Arrival</p>
                  <p className="text-lg font-extrabold text-primary">{technician.eta}</p>
                </div>
                <div className="h-10 w-px bg-outline-variant/30" />
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Distance</p>
                  <p className="text-lg font-extrabold text-on-surface">{technician.distance}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
              <button className="flex-1 md:w-36 py-3 md:py-4 bg-primary text-on-primary rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-lg">chat_bubble</span>
                Message
              </button>
              <button className="flex-1 md:w-36 py-3 md:py-4 bg-secondary-container text-on-secondary-container rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-80 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-lg">call</span>
                Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
