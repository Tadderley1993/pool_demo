import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Book Services" };

const { booking, services } = brand;
const selected = services[1]; // Chemical Balancing pre-selected

const serviceIcons: Record<string, string> = {
  weekly:   "calendar_today",
  chemical: "science",
  filter:   "filter_alt",
  repair:   "build",
  seasonal: "wb_sunny",
};

export default function BookServicesPage() {
  return (
    <div className="px-6 max-w-5xl mx-auto pb-12 space-y-10">

      {/* Header */}
      <div>
        <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Book Services</h1>
        <p className="text-on-surface-variant mt-1">Select a service, pick a date, and we&apos;ll take care of the rest.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ── Left column ── */}
        <div className="lg:col-span-8 space-y-10">

          {/* ── Step 1: Choose a Service ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <h2 className="text-xl font-bold text-on-surface">Choose a Service</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => {
                const isSelected = s.id === selected.id;
                return (
                  <button
                    key={s.id}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? "bg-primary-container border-primary shadow-sm"
                        : "bg-surface-container-low border-transparent hover:bg-surface-container-high"
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-primary text-on-primary" : "bg-surface-container text-secondary"
                    }`}>
                      <span className="material-symbols-outlined text-lg">{serviceIcons[s.id] ?? "waves"}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className={`font-bold text-sm ${isSelected ? "text-on-primary-container" : "text-on-surface"}`}>{s.name}</p>
                        {s.popular && (
                          <span className="text-[9px] font-bold bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full editorial-caps">Popular</span>
                        )}
                      </div>
                      <p className={`text-xs mt-0.5 font-semibold ${isSelected ? "text-primary" : "text-secondary"}`}>
                        {s.price ? `$${s.price}${s.priceLabel}` : s.priceLabel}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Step 2: Frequency ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <h2 className="text-xl font-bold text-on-surface">Select Frequency</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {booking.frequencies.map((freq, i) => (
                <button
                  key={freq.id}
                  className={`flex flex-col items-center justify-center p-5 border-2 rounded-xl transition-all ${
                    i === 1
                      ? "bg-primary-container border-primary shadow-sm"
                      : "bg-surface-container-low border-transparent hover:bg-surface-container-high"
                  }`}
                >
                  <span className={`material-symbols-outlined text-2xl mb-2 ${i === 1 ? "text-primary filled" : "text-secondary"}`}>
                    {freq.icon}
                  </span>
                  <span className={`font-bold text-sm ${i === 1 ? "text-on-primary-container" : ""}`}>{freq.label}</span>
                  <span className={`text-[10px] uppercase mt-1 tracking-wider ${i === 1 ? "text-on-primary-container/80" : "text-on-surface-variant"}`}>
                    {freq.sublabel}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* ── Step 3: Date & Time ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <h2 className="text-xl font-bold text-on-surface">Choose Date &amp; Time</h2>
            </div>
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="font-extrabold text-lg">October 2024</span>
                <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-6">
                {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d) => (
                  <div key={d} className="text-[10px] font-bold text-outline uppercase pb-2">{d}</div>
                ))}
                {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((day, i) => (
                  <button
                    key={i}
                    disabled={!day}
                    className={`aspect-square flex items-center justify-center text-sm rounded-xl transition-colors ${
                      !day ? "text-outline/30 cursor-default"
                      : day === 8 ? "font-bold bg-primary text-on-primary shadow-sm"
                      : "font-medium hover:bg-surface-container"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-outline">Available Slots</p>
                <div className="flex flex-wrap gap-2">
                  {["09:00 AM","10:30 AM","01:00 PM","03:30 PM"].map((slot, i) => (
                    <button
                      key={slot}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                        i === 1
                          ? "bg-secondary-container text-on-secondary-container"
                          : "border border-outline-variant hover:border-primary hover:text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Step 4: Add-ons ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <h2 className="text-xl font-bold text-on-surface">Add-ons</h2>
            </div>
            <div className="space-y-3">
              {booking.addons.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${addon.included ? "bg-primary" : "border-2 border-outline-variant"}`}>
                      {addon.included && (
                        <span className="material-symbols-outlined filled text-on-primary text-xs">check</span>
                      )}
                    </div>
                    <span className="font-medium text-sm">{addon.label}</span>
                    {addon.included && (
                      <span className="text-[10px] bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full font-bold">Included</span>
                    )}
                  </div>
                  {!addon.included && (
                    <span className="font-bold text-sm text-primary">+${addon.price}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right: Summary ── */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 p-7 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-on-surface">Booking Summary</h3>

            {/* Selected service preview */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 relative">
                <Image src={brand.images.services} alt={selected.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-sm text-on-surface">{selected.name}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Weekly · Oct 8 · 10:30 AM</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-outline-variant/10">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Service Fee</span>
                <span className="font-semibold">${selected.price}.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Chemical Report</span>
                <span className="font-semibold text-tertiary">Included</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Before/After Photos</span>
                <span className="font-semibold text-tertiary">Included</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-outline-variant/10">
                <span className="font-bold text-on-surface">Total</span>
                <span className="text-2xl font-extrabold text-primary">${selected.price}.00</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-primary/5 rounded-2xl p-4 flex gap-3 items-start">
              <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">verified_user</span>
              <p className="text-[11px] leading-relaxed text-on-surface-variant">{booking.guarantee}</p>
            </div>

            <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-2xl shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Confirm Booking
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>

          {/* Tony tip */}
          <div className="bg-surface-container-low rounded-2xl p-4 flex gap-3 items-start">
            <span className="text-xl">🎧</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Not sure which service you need?{" "}
              <Link href="/dashboard" className="text-primary font-semibold hover:underline">
                Ask Tony
              </Link>{" "}
              from your dashboard for a recommendation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
