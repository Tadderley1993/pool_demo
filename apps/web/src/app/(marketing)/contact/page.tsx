import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <FormSection />
      <MapSection />
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="px-8 py-24 md:pt-36 md:pb-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="editorial-caps text-secondary font-bold text-xs mb-4 block">Personalized Care</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
            The First Step to <br />
            <span className="italic font-normal">Flawless Waters.</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed font-light">
            We don&apos;t just maintain pools; we curate experiences. Contact our team to schedule
            your private consultation and estate assessment.
          </p>
        </div>
        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-xl">
            <Image
              src={brand.images.contact}
              alt={brand.images.contactAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 max-w-xs shadow-sm rounded-xl">
            <p className="font-headline italic text-xl text-primary mb-2">
              &ldquo;Attention is the highest form of hospitality.&rdquo;
            </p>
            <p className="editorial-caps text-[10px] text-secondary tracking-widest font-bold">
              The {brand.name} Standard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Wave + Form ────────────────────────────────────────────────────────────────

function FormSection() {
  const faqs = [
    { q: "How fast can you visit?",     a: "We typically schedule within 24–48 hours." },
    { q: "Do you offer emergency care?", a: "Yes — rapid response for equipment failures or chemical spills." },
    { q: "What areas do you serve?",    a: `We cover the ${brand.contact.address}. Contact us to confirm your address.` },
    { q: "How is pricing determined?",  a: "Based on pool size, condition, and frequency. Get an instant quote via our booking form." },
  ];

  return (
    <>
      {/* Wave in */}
      <div className="wave-container bg-surface">
        <svg className="h-14" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f3f4f5" />
        </svg>
      </div>

      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-14">
              <div>
                <h3 className="editorial-caps text-xs font-bold text-primary mb-8">Reach Us</h3>
                <div className="space-y-7">
                  {[
                    { icon: "call",        label: "Direct Line",     value: brand.contact.phone   },
                    { icon: "mail",        label: "Electronic Mail", value: brand.contact.email   },
                    { icon: "location_on", label: "Service Area",    value: brand.contact.address },
                    { icon: "schedule",    label: "Hours",           value: brand.contact.hours   },
                  ].map((info) => (
                    <div key={info.icon} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-secondary">{info.icon}</span>
                      <div>
                        <p className="editorial-caps text-[10px] text-on-surface-variant mb-1">{info.label}</p>
                        <p className="text-lg font-medium text-primary">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark service area card */}
              <div className="bg-primary p-10 text-white rounded-xl relative overflow-hidden">
                <h3 className="font-headline text-2xl mb-3 italic relative z-10">Exclusive Service Area</h3>
                <p className="text-sm text-on-primary-container leading-relaxed mb-5 relative z-10 font-light">
                  Providing bespoke maintenance to estates in the {brand.contact.address} and surrounding communities.
                </p>
                {/* Mini Boston map */}
                <div className="relative h-36 w-full rounded-lg overflow-hidden">
                  <svg viewBox="0 0 280 144" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect width="280" height="144" fill="rgba(10,35,66,0.6)"/>
                    {/* Harbor */}
                    <path d="M228 0 L280 0 L280 144 L210 144 Q196 122 205 94 Q212 72 222 52 Q228 32 228 0Z" fill="rgba(158,202,225,0.22)"/>
                    {/* Charles River */}
                    <path d="M0 58 Q45 53 92 50 Q132 48 158 52 Q176 57 178 68 Q181 80 190 85 Q210 90 248 82 L280 76"
                      stroke="rgba(158,202,225,0.45)" strokeWidth="9" fill="none" strokeLinecap="round"/>
                    <path d="M0 58 Q45 53 92 50 Q132 48 158 52 Q176 57 178 68 Q181 80 190 85 Q210 90 248 82 L280 76"
                      stroke="rgba(179,217,238,0.35)" strokeWidth="5" fill="none" strokeLinecap="round"/>
                    {/* Route 128 arc */}
                    <path d="M100 5 Q65 20 48 55 Q36 88 52 118 Q65 136 90 142"
                      stroke="rgba(245,232,168,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    {/* I-90 */}
                    <line x1="0" y1="98" x2="215" y2="96" stroke="rgba(245,232,168,0.25)" strokeWidth="2.5"/>
                    {/* I-93 */}
                    <line x1="172" y1="0" x2="182" y2="144" stroke="rgba(245,232,168,0.25)" strokeWidth="2.5"/>
                    {/* Coverage rings */}
                    <ellipse cx="175" cy="90" rx="105" ry="72" fill="rgba(119,90,25,0.1)"/>
                    <ellipse cx="175" cy="87" rx="65" ry="45" fill="rgba(119,90,25,0.12)"/>
                    {/* Boston HQ pin */}
                    <circle cx="178" cy="78" r="16" fill="rgba(119,90,25,0.2)"/>
                    <circle cx="178" cy="72" r="8" fill="#775a19"/>
                    <polygon points="173,78 183,78 178,88" fill="#775a19"/>
                    <circle cx="178" cy="72" r="4" fill="#fff" opacity="0.95"/>
                    {/* Suburb dots */}
                    {([[118, 82],[148, 48],[100, 38],[210, 48],[200, 118]] as const).map(([x,y], i) => (
                      <circle key={i} cx={x} cy={y} r="3.5" fill="rgba(119,90,25,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                    ))}
                    {/* Label */}
                    <rect x="150" y="56" width="56" height="12" rx="6" fill="rgba(255,255,255,0.12)"/>
                    <text x="178" y="65.5" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="700" letterSpacing="0.5">BOSTON, MA</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-8 md:p-14 shadow-sm rounded-xl">
              <h2 className="font-headline text-3xl text-primary mb-2">Request an Assessment</h2>
              <p className="text-on-surface-variant mb-10 font-light">
                Submit your details and our lead curator will contact you within 24 hours.
              </p>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label className="editorial-caps text-[10px] font-bold text-primary">Full Name</label>
                    <input type="text" placeholder="Jane Sterling" className="ghost-input py-3 px-0 placeholder:text-outline/50 text-on-surface" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="editorial-caps text-[10px] font-bold text-primary">Email Address</label>
                    <input type="email" placeholder="jane@estate.com" className="ghost-input py-3 px-0 placeholder:text-outline/50 text-on-surface" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label className="editorial-caps text-[10px] font-bold text-primary">Service Interest</label>
                    <select className="ghost-input py-3 px-0 text-on-surface-variant focus:outline-none">
                      {brand.services.map((s) => (
                        <option key={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="editorial-caps text-[10px] font-bold text-primary">Phone</label>
                    <input type="tel" placeholder={brand.contact.phone} className="ghost-input py-3 px-0 placeholder:text-outline/50 text-on-surface" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="editorial-caps text-[10px] font-bold text-primary">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your pool's requirements..."
                    className="ghost-input py-3 px-0 placeholder:text-outline/50 text-on-surface resize-none"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                  <p className="text-[11px] text-on-surface-variant max-w-sm leading-relaxed italic">
                    By submitting, you agree to our privacy standards and consent to contact from our team.
                  </p>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-secondary text-white editorial-caps font-bold py-5 px-12 text-xs hover:opacity-90 transition-all shadow-md active:scale-95 rounded-lg"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* FAQ */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-8 bg-surface-container-lowest rounded-xl shadow-sm">
                <h4 className="font-bold text-on-surface mb-3 text-primary">{faq.q}</h4>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave out */}
      <div className="wave-container bg-surface-container-low">
        <svg className="h-14" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8f9fa" />
        </svg>
      </div>
    </>
  );
}

// ── Map section ───────────────────────────────────────────────────────────────

const SERVICE_PINS = [
  { cx: 632, cy: 242, label: "Back Bay",        primary: true  },
  { cx: 578, cy: 155, label: "Cambridge",       primary: false },
  { cx: 428, cy: 272, label: "Newton",          primary: false },
  { cx: 205, cy: 252, label: "Weston",          primary: false },
  { cx: 438, cy: 92,  label: "Lexington",       primary: false },
  { cx: 712, cy: 402, label: "South Shore",     primary: false },
];

function MapSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-8">
      <div className="flex flex-col items-center text-center mb-14">
        <span className="editorial-caps text-xs text-secondary font-bold mb-4">Our Territory</span>
        <h2 className="font-headline text-4xl text-primary mb-3">Servicing {brand.contact.address}</h2>
        <div className="w-24 h-px bg-secondary opacity-30" />
      </div>

      <div className="relative h-[520px] w-full overflow-hidden rounded-xl shadow-sm">
        <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="pinShadow" x="-60%" y="-60%" width="220%" height="220%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.22)"/>
            </filter>
            <radialGradient id="coverageGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000d22" stopOpacity="0.07"/>
              <stop offset="100%" stopColor="#000d22" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* ── Base terrain ── */}
          <rect width="1000" height="520" fill="#eae6df"/>

          {/* ── Boston Harbor / Atlantic Ocean ── */}
          <path d="M790 0 L1000 0 L1000 520 L790 520 Q758 495 740 455 Q722 415 732 375 Q742 342 755 316 Q768 292 778 265 Q790 238 788 208 Q786 175 792 145 Q800 112 808 78 Q820 40 790 0Z"
            fill="#9ecae1" opacity="0.75"/>
          <path d="M840 0 L1000 0 L1000 520 L840 520 Q820 490 815 450 Q812 415 822 382 Q832 352 842 325 Q852 300 855 272 Q858 242 855 212 Q852 178 858 148 Q866 115 875 82 Q888 42 840 0Z"
            fill="#b3d9ee" opacity="0.45"/>
          {/* Harbor shimmer */}
          <text x="910" y="300" textAnchor="middle" fill="#7ab8d4" fontSize="11" fontWeight="600" letterSpacing="2" opacity="0.6">BOSTON HARBOR</text>

          {/* ── Charles River ── */}
          <path d="M0 198 Q70 192 148 186 Q248 178 348 173 Q435 169 498 165 Q548 162 578 167 Q606 173 620 190 Q638 210 638 232 Q638 254 652 267 Q668 280 696 285 Q736 290 782 278 Q822 267 870 252 L1000 238"
            stroke="#9ecae1" strokeWidth="24" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M0 198 Q70 192 148 186 Q248 178 348 173 Q435 169 498 165 Q548 162 578 167 Q606 173 620 190 Q638 210 638 232 Q638 254 652 267 Q668 280 696 285 Q736 290 782 278 Q822 267 870 252 L1000 238"
            stroke="#b3d9ee" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.8"/>
          <text x="310" y="182" fill="#7ab8d4" fontSize="9" fontWeight="600" letterSpacing="2.5" opacity="0.8">CHARLES RIVER</text>

          {/* ── Parks & Green Spaces ── */}
          {/* Emerald Necklace / Fenway */}
          <path d="M522 305 Q535 288 548 283 Q566 280 574 293 Q582 308 574 326 Q562 344 544 342 Q526 338 522 322Z" fill="#b5d5a0" opacity="0.75"/>
          {/* Arnold Arboretum */}
          <ellipse cx="450" cy="372" rx="42" ry="28" fill="#b5d5a0" opacity="0.6"/>
          {/* Fresh Pond (Cambridge) */}
          <circle cx="502" cy="135" r="16" fill="#9ecae1" opacity="0.55"/>
          {/* Larz Anderson / Brookline */}
          <ellipse cx="402" cy="340" rx="28" ry="18" fill="#b5d5a0" opacity="0.5"/>
          {/* Great Meadows / Concord west */}
          <ellipse cx="115" cy="188" rx="35" ry="20" fill="#b5d5a0" opacity="0.4"/>
          {/* Middlesex Fells (north) */}
          <path d="M558 62 Q575 52 595 58 Q610 66 608 82 Q604 96 590 100 Q572 102 560 92 Q550 80 558 62Z" fill="#b5d5a0" opacity="0.5"/>

          {/* ── City blocks (Back Bay + surrounding neighborhoods) ── */}
          {Array.from({length: 9}).map((_,i) =>
            Array.from({length: 5}).map((_,j) => (
              <rect key={`bb-${i}-${j}`} x={540+i*22} y={218+j*18} width={18} height={14} fill="#d4cec2" rx="1" opacity="0.85"/>
            ))
          )}
          {/* Newton blocks */}
          {Array.from({length: 4}).map((_,i) =>
            Array.from({length: 3}).map((_,j) => (
              <rect key={`nw-${i}-${j}`} x={368+i*28} y={258+j*20} width={22} height={15} fill="#d4cec2" rx="1" opacity="0.55"/>
            ))
          )}
          {/* Cambridge blocks */}
          {Array.from({length: 5}).map((_,i) =>
            Array.from({length: 3}).map((_,j) => (
              <rect key={`cb-${i}-${j}`} x={530+i*22} y={148+j*16} width={18} height={12} fill="#d4cec2" rx="1" opacity="0.65"/>
            ))
          )}

          {/* ── Highways ── */}
          {/* Route 128 / I-95 beltway arc */}
          <path d="M382 12 Q248 32 158 118 Q78 198 82 322 Q88 420 168 474 Q258 515 402 500"
            stroke="#f0e4b8" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M382 12 Q248 32 158 118 Q78 198 82 322 Q88 420 168 474 Q258 515 402 500"
            stroke="#e0d098" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="14 5" opacity="0.6"/>
          {/* I-93 North–South */}
          <path d="M618 0 Q625 75 632 158 Q636 198 644 240 Q654 292 664 362 Q672 425 680 520"
            stroke="#f0e4b8" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M618 0 Q625 75 632 158 Q636 198 644 240 Q654 292 664 362 Q672 425 680 520"
            stroke="#e0d098" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="14 5" opacity="0.6"/>
          {/* I-90 Mass Pike East–West */}
          <path d="M0 318 Q95 312 198 308 Q335 303 448 301 Q558 299 648 304 Q718 308 788 320"
            stroke="#f0e4b8" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M0 318 Q95 312 198 308 Q335 303 448 301 Q558 299 648 304 Q718 308 788 320"
            stroke="#e0d098" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="14 5" opacity="0.6"/>
          {/* Route 9 */}
          <path d="M0 360 Q140 354 285 350 Q428 347 562 352 Q668 356 768 366"
            stroke="#e8dfc8" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.7"/>
          {/* Route 2 (NW corridor) */}
          <path d="M0 148 Q95 152 195 158 Q298 164 402 168"
            stroke="#e8dfc8" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.65"/>

          {/* Highway shields */}
          <rect x="76" y="232" width="30" height="15" rx="3" fill="#f0e4b8"/>
          <text x="91" y="243.5" textAnchor="middle" fill="#7a6028" fontSize="7.5" fontWeight="800">128</text>
          <rect x="625" y="298" width="28" height="15" rx="3" fill="#f0e4b8"/>
          <text x="639" y="309.5" textAnchor="middle" fill="#7a6028" fontSize="7.5" fontWeight="800">I-93</text>
          <rect x="435" y="286" width="30" height="15" rx="3" fill="#f0e4b8"/>
          <text x="450" y="297.5" textAnchor="middle" fill="#7a6028" fontSize="7.5" fontWeight="800">I-90</text>

          {/* ── Coverage zone (concentric rings) ── */}
          <ellipse cx="595" cy="278" rx="440" ry="310" fill="url(#coverageGlow)"/>
          <ellipse cx="595" cy="265" rx="305" ry="218" fill="#000d22" opacity="0.04"/>
          <ellipse cx="610" cy="255" rx="185" ry="138" fill="#000d22" opacity="0.04"/>

          {/* ── Service pins ── */}
          {SERVICE_PINS.map((pin) => (
            <g key={pin.label}>
              {/* Pulse ring for HQ */}
              {pin.primary && (
                <>
                  <circle cx={pin.cx} cy={pin.cy} r="30" fill="#000d22" opacity="0.06"/>
                  <circle cx={pin.cx} cy={pin.cy} r="20" fill="#000d22" opacity="0.08"/>
                </>
              )}
              {/* Pin drop */}
              <g transform={`translate(${pin.cx},${pin.cy})`} filter="url(#pinShadow)">
                <circle cy="-16" r={pin.primary ? 11 : 9} fill={pin.primary ? "#000d22" : "#775a19"}/>
                <polygon points={pin.primary ? "-7,-8 7,-8 0,8" : "-5,-6 5,-6 0,6"} fill={pin.primary ? "#000d22" : "#775a19"}/>
                <circle cy="-16" r={pin.primary ? 5.5 : 4.5} fill="#fff" opacity="0.92"/>
              </g>
              {/* Label chip */}
              <rect
                x={pin.cx - 38} y={pin.cy - 46}
                width="76" height="15" rx="7.5"
                fill={pin.primary ? "#000d22" : "#fff"}
                filter="url(#pinShadow)"
              />
              <text
                x={pin.cx} y={pin.cy - 35.5}
                textAnchor="middle"
                fill={pin.primary ? "#fff" : "#000d22"}
                fontSize="7.5" fontWeight="700" letterSpacing="0.8"
              >
                {pin.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>

        {/* Info overlay — bottom left */}
        <div className="absolute bottom-6 left-6 bg-surface-container-lowest/96 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-outline-variant/10 max-w-[240px]">
          <p className="editorial-caps text-[10px] text-secondary font-bold mb-4">Service Coverage</p>
          <div className="space-y-2.5 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"/>
              <p className="text-xs text-on-surface-variant">Central Operations — Back Bay</p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-secondary flex-shrink-0"/>
              <p className="text-xs text-on-surface-variant">Active Service Zones</p>
            </div>
          </div>
          <div className="pt-4 border-t border-outline-variant/10">
            <p className="editorial-caps text-[10px] text-primary font-bold">{brand.contact.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
