import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { SpecializedCarousel } from "@/components/shared/SpecializedCarousel";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <SpecializedSection />
      <FeatureSection />
      <AuditCta />
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="px-8 md:px-24 pt-40 pb-16 bg-surface">
      <div className="max-w-4xl">
        <span className="editorial-caps text-secondary text-xs font-bold mb-4 block">
          Bespoke Maintenance
        </span>
        <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight -tracking-wide mb-8">
          The Art of <br />
          <span className="italic font-normal">Pristine Clarity.</span>
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed">
          Our services transcend standard maintenance. We treat every pool as a living ecosystem
          and a structural masterpiece requiring surgical precision and a concierge&apos;s touch.
        </p>
      </div>
    </section>
  );
}

// ── Packages Bento ────────────────────────────────────────────────────────────

function PackagesSection() {
  const [weekly, chemical, filter, repair, seasonal] = brand.services;

  return (
    <section className="px-8 md:px-24 py-24 bg-surface">
      <h2 className="font-headline text-3xl text-primary mb-12 border-l-4 border-secondary pl-6">
        Signature Care Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large featured card */}
        <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-xl flex flex-col justify-between group transition-all hover:border-b-4 hover:border-secondary border-b-4 border-transparent">
          <div>
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="editorial-caps text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <h3 className="font-headline text-4xl text-primary mt-4">{chemical.name}</h3>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary-container">{chemical.icon}</span>
            </div>
            <p className="text-on-surface-variant mb-8 text-lg font-light leading-relaxed">{chemical.description}</p>
            {chemical.features.length > 0 && (
              <ul className="space-y-3 mb-10">
                {chemical.features.map((f) => (
                  <li key={f} className="flex items-center text-sm font-medium text-primary">
                    <span className="material-symbols-outlined mr-3 text-secondary text-base filled">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
            {chemical.price && (
              <p className="text-2xl font-extrabold text-primary">
                ${chemical.price}
                <span className="text-base font-normal text-on-surface-variant">{chemical.priceLabel}</span>
              </p>
            )}
          </div>
          <Link
            href="/booking"
            className="w-fit border-b-2 border-secondary pb-1 text-primary editorial-caps text-xs font-bold hover:text-secondary transition-colors mt-6 block"
          >
            Book This Service
          </Link>
        </div>

        {/* Image */}
        <div className="md:col-span-5 min-h-[400px] rounded-xl overflow-hidden relative">
          <Image
            src={brand.images.services}
            alt="Professional pool service"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        {/* Dark seasonal card */}
        <div className="md:col-span-5 bg-primary-container text-white p-12 rounded-xl flex flex-col justify-between">
          <div>
            <span className="editorial-caps text-[10px] font-bold text-on-primary-container">Seasonal</span>
            <h3 className="font-headline text-4xl mt-4 mb-6">{seasonal.name}</h3>
            <p className="text-on-primary-container mb-8 font-light italic">{seasonal.description}</p>
          </div>
          <div className="space-y-5">
            <div className="border-t border-white/10 pt-5">
              <h4 className="editorial-caps text-xs font-bold text-secondary-fixed mb-2">Spring Opening</h4>
              <p className="text-sm text-on-primary-container">Chemical revival and system hardware diagnostics.</p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <h4 className="editorial-caps text-xs font-bold text-secondary-fixed mb-2">Winter Closing</h4>
              <p className="text-sm text-on-primary-container">Full winterization and protective covering.</p>
            </div>
            {seasonal.price && (
              <p className="text-xl font-extrabold text-white pt-2">${seasonal.price}<span className="text-sm font-normal text-on-primary-container">{seasonal.priceLabel}</span></p>
            )}
          </div>
        </div>

        {/* Remaining services */}
        <div className="md:col-span-7 bg-surface-container-low p-12 rounded-xl">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <span className="editorial-caps text-[10px] font-bold text-on-surface-variant">Core Services</span>
              <h3 className="font-headline text-3xl text-primary mt-4 mb-5">All Service Plans</h3>
              <div className="space-y-4 mb-8">
                {[weekly, filter, repair].map((s) => (
                  <div key={s.id} className="flex items-center justify-between py-3 border-b border-outline-variant/20 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-base">{s.icon}</span>
                      <span className="font-medium text-sm text-on-surface">{s.name}</span>
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {s.price ? `$${s.price}${s.priceLabel}` : s.priceLabel}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/booking"
                className="bg-secondary text-white px-8 py-3 rounded-lg editorial-caps text-xs font-bold tracking-widest hover:opacity-90 transition-all inline-block"
              >
                Select a Plan
              </Link>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden relative">
              <Image
                src={brand.images.tech}
                alt={brand.images.techAlt}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Specialized carousel ──────────────────────────────────────────────────────

function SpecializedSection() {
  return (
    <section className="px-8 md:px-24 py-24 bg-surface overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-8">
        <div className="max-w-xl">
          <h2 className="font-headline text-5xl text-primary mb-5">Specialized Care</h2>
          <p className="text-on-surface-variant font-light">
            Beyond the surface. Our technicians are trained in molecular chemistry and hydraulic
            engineering for unique aquatic environments.
          </p>
        </div>
      </div>
      <SpecializedCarousel />
    </section>
  );
}

// ── Dark feature section with waves ───────────────────────────────────────────

function FeatureSection() {
  return (
    <>
      {/* Wave in */}
      <div className="wave-container bg-surface">
        <svg className="h-16 md:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L0 60C240 120 480 0 720 60C960 120 1200 0 1440 60L1440 0Z" fill="#000d22" fillOpacity="0.15" />
          <path d="M0 0L0 80C240 120 480 40 720 80C960 120 1200 40 1440 80L1440 0Z" fill="#000d22" fillOpacity="0.3" />
          <path d="M0 0L0 100C240 120 480 70 720 100C960 130 1200 70 1440 100L1440 0Z" fill="#000d22" />
        </svg>
      </div>

      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto relative z-10">
          <div className="rounded-xl overflow-hidden shadow-2xl relative aspect-[4/3]">
            <Image
              src={brand.images.gallery[3].src}
              alt="Resort pool"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <span className="editorial-caps text-xs font-bold text-secondary-fixed mb-6 block">The {brand.name} Standard</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">
              Mastering Every<br />
              <span className="italic font-normal">Season with Precision.</span>
            </h2>
            <p className="text-on-primary-container text-lg mb-10 font-light leading-relaxed">
              Our opening and closing procedures are a ritual of preservation. From pressure plumbing
              purging to custom safety covers, we ensure your pool survives every condition perfectly balanced.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {brand.stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <h4 className="font-headline text-3xl text-white mb-1">{s.value}</h4>
                  <p className="editorial-caps text-[10px] text-on-primary-container">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-secondary px-10 py-4 rounded-lg text-white editorial-caps text-xs font-bold tracking-widest hover:opacity-90 transition-all inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Wave out */}
      <div className="wave-container bg-surface transform rotate-180">
        <svg className="h-16 md:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L0 60C240 120 480 0 720 60C960 120 1200 0 1440 60L1440 0Z" fill="#000d22" fillOpacity="0.15" />
          <path d="M0 0L0 80C240 120 480 40 720 80C960 120 1200 40 1440 80L1440 0Z" fill="#000d22" fillOpacity="0.3" />
          <path d="M0 0L0 100C240 120 480 70 720 100C960 130 1200 70 1440 100L1440 0Z" fill="#000d22" />
        </svg>
      </div>
    </>
  );
}

// ── Audit CTA ─────────────────────────────────────────────────────────────────

function AuditCta() {
  return (
    <section className="px-8 md:px-24 py-32 bg-surface text-center">
      <div className="max-w-3xl mx-auto">
        <span className="material-symbols-outlined text-5xl text-secondary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
        <h2 className="font-headline text-5xl text-primary mb-8">
          Ready for a Refined<br />
          <span className="italic font-normal">Reflection?</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-10 font-light">
          Allow our experts to tailor a maintenance curriculum that perfectly aligns with your estate&apos;s needs.
        </p>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <Link
            href="/contact"
            className="liquid-gradient px-12 py-5 text-white rounded-lg editorial-caps text-sm font-bold tracking-widest shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Request a Private Quote
          </Link>
          <Link
            href="/gallery"
            className="px-12 py-5 border-2 border-outline text-primary rounded-lg editorial-caps text-sm font-bold tracking-widest hover:bg-surface-container-low transition-all"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
