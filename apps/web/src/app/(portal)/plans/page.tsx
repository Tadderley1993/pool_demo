import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Our Services" };

export default function PlansPage() {
  return (
    <div className="px-6 max-w-2xl mx-auto pb-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">
          Our Services
        </h1>
        <p className="text-on-surface-variant mt-1">
          Choose a service and book directly from your portal.
        </p>
      </div>

      {/* Service cards */}
      <div className="space-y-4">
        {brand.services.map((s) => (
          <div
            key={s.id}
            className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/10 flex flex-col sm:flex-row sm:items-center gap-5"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl">{s.icon}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h2 className="font-bold text-on-surface text-base">{s.name}</h2>
                {s.popular && (
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full editorial-caps">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{s.description}</p>
              {s.features.length > 0 && (
                <ul className="space-y-1 mb-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-lg font-extrabold text-primary">
                {s.price ? `$${s.price}` : "—"}
                <span className="text-sm font-normal text-on-surface-variant ml-1">{s.priceLabel}</span>
              </p>
            </div>

            {/* CTA */}
            <Link
              href={`/booking?service=${s.id}`}
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all text-center flex-shrink-0"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      {/* Info strip */}
      <div className="bg-surface-container-low rounded-2xl p-5 flex items-start gap-4">
        <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0 mt-0.5">info</span>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          All services include a digital report emailed after completion. Equipment repair quotes are provided on-site. Questions?{" "}
          <Link href="/dashboard" className="text-primary font-semibold hover:underline">
            Chat with AquaBot
          </Link>{" "}
          from your dashboard.
        </p>
      </div>
    </div>
  );
}
