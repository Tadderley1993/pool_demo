import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <BentoSection />
      <CtaSection />
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative h-[82vh] min-h-[560px] flex items-center overflow-hidden pt-20">
      {/* Full-bleed image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={brand.images.hero}
          alt={brand.images.heroAlt}
          fill
          className="object-cover grayscale-[15%]"
          style={{ objectPosition: "50% 80%" }}
          priority
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          <span className="editorial-caps text-xs sm:text-sm mb-4 sm:mb-6 block font-semibold" style={{ color: "#4dd9e0" }}>
            {brand.hero.badge}
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] -tracking-wide mb-6 sm:mb-8">
            {brand.hero.headline.split("\n")[0]}{" "}
            <br />
            <span className="italic font-normal">{brand.hero.headline.split("\n")[1]}</span>
          </h1>
          <p className="text-white/80 text-base sm:text-xl font-light mb-8 sm:mb-12 max-w-xl leading-relaxed">
            {brand.hero.subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/booking"
              className="bg-secondary text-white px-8 py-4 rounded-lg editorial-caps text-sm font-bold tracking-widest shadow-xl hover:-translate-y-0.5 transition-all text-center"
            >
              {brand.hero.ctaPrimary}
            </Link>
            <Link
              href="/services"
              className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-lg editorial-caps text-sm font-bold tracking-widest hover:bg-white hover:text-primary transition-all text-center"
            >
              {brand.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Wave transition out of hero */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, zIndex: 20, lineHeight: 0, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "clamp(40px, 6vw, 80px)" }}>
          <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 44C840 56 960 72 1080 72C1200 72 1320 56 1380 48L1440 40V80H0Z" fill="#f8f9fa" />
        </svg>
      </div>
    </section>
  );
}

// ── Philosophy ────────────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section className="py-16 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 sm:space-y-5">
              <span className="editorial-caps text-secondary text-xs font-semibold">Our Philosophy</span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                A curated reflection of <br />
                <span className="italic font-normal">your standards.</span>
              </h2>
              <div className="w-24 h-px bg-secondary-container" />
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-light">
              {brand.description}
            </p>
            <div className="space-y-8">
              {brand.features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0 mt-0.5">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{f.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric image pair */}
          <div className="relative h-[560px] hidden lg:block">
            <div className="absolute top-0 right-0 w-2/3 h-4/5 overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={brand.images.hero}
                alt={brand.images.heroAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-3/5 overflow-hidden rounded-lg shadow-2xl border-[12px] border-surface">
              <Image
                src={brand.images.about}
                alt={brand.images.aboutAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave out */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, lineHeight: 0, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "clamp(36px, 5vw, 70px)" }}>
          <path d="M0 40L60 48C120 56 240 72 360 72C480 72 600 56 720 48C840 40 960 40 1080 48C1200 56 1320 72 1380 80L1440 88V80H0Z" fill="#e8eaed" />
        </svg>
      </div>
    </section>
  );
}

// ── Bento ─────────────────────────────────────────────────────────────────────

function BentoSection() {
  return (
    <section className="py-16 md:py-32 bg-[#e8eaed] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 md:mb-20 space-y-3">
          <span className="editorial-caps text-secondary text-xs font-semibold">Excellence Defined</span>
          <h2 className="font-headline text-4xl text-primary">{brand.name} Standard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large card */}
          <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-10 rounded-xl flex flex-col justify-between min-h-[280px] md:min-h-[380px] hover:border-b-4 hover:border-secondary border-b-4 border-transparent transition-all group">
            <div className="space-y-5">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                {brand.features[0].icon}
              </span>
              <h3 className="font-headline text-3xl text-primary">{brand.stats[0].value} {brand.stats[0].label}</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-md font-light">
                {brand.features[0].description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Link href="/services" className="editorial-caps text-xs text-secondary font-bold hover:underline underline-offset-4">
                Explore Services
              </Link>
              <span className="material-symbols-outlined text-sm text-secondary">arrow_forward</span>
            </div>
          </div>

          {/* Dark card */}
          <div className="liquid-gradient p-6 md:p-10 rounded-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-2xl mb-4">24/7 Priority<br />Support</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                {brand.stats[3].value} {brand.stats[3].label}. Emergency response when it matters most.
              </p>
            </div>
            <span className="material-symbols-outlined text-5xl opacity-20 self-end">support_agent</span>
          </div>

          {/* Feature card */}
          <div className="bg-surface-container-lowest p-6 md:p-10 rounded-xl flex flex-col">
            <span className="material-symbols-outlined text-4xl text-secondary mb-5">
              {brand.features[1].icon}
            </span>
            <h3 className="font-headline text-2xl text-primary mb-3">{brand.features[1].title}</h3>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed">
              {brand.features[1].description}
            </p>
          </div>

          {/* Image + text card */}
          <div className="md:col-span-2 bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm">
            <div className="w-full md:w-1/2 relative min-h-[240px]">
              <Image
                src={brand.images.services}
                alt="Premium pool service"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center space-y-4 md:space-y-5">
              <h3 className="font-headline text-2xl text-primary">Portfolio of Perfection</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                Every pool we service is treated as an architectural masterpiece. Explore our gallery of aquatic transformations.
              </p>
              <Link
                href="/gallery"
                className="border-b-2 border-primary/10 self-start pb-1 editorial-caps text-xs text-primary font-bold hover:border-secondary hover:text-secondary transition-all"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Wave out */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, lineHeight: 0, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%", height: "clamp(36px, 5vw, 70px)" }}>
          <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 36C840 48 960 64 1080 68C1200 72 1320 64 1380 60L1440 56V80H0Z" fill="#000d22" />
        </svg>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative wave inside */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-8 md:space-y-10 relative z-10">
        <span className="material-symbols-outlined text-5xl text-secondary block" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
        <h2 className="font-headline text-4xl md:text-5xl text-white leading-tight">
          {brand.finalCta.headline.split(".")[0]}. <br />
          <span className="italic font-normal">Ready for a refined reflection?</span>
        </h2>
        <p className="text-on-primary-container text-lg font-light max-w-2xl mx-auto">
          {brand.finalCta.subline}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
          <Link
            href="/contact"
            className="bg-secondary text-white px-12 py-5 rounded-lg editorial-caps text-sm font-bold tracking-widest shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {brand.finalCta.button}
          </Link>
          <Link
            href="/services"
            className="border-2 border-outline text-white/80 px-12 py-5 rounded-lg editorial-caps text-sm font-bold tracking-widest hover:bg-white/10 transition-all"
          >
            View Services
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {brand.stats.map((s) => (
            <div key={s.label}>
              <p className="font-headline text-3xl text-white">{s.value}</p>
              <p className="editorial-caps text-[10px] text-on-primary-container mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
