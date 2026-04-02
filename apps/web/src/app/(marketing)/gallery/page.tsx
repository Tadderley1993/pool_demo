import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  const [featured, second, ...rest] = brand.images.gallery;

  return (
    <>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 pt-40 pb-16">
        <span className="editorial-caps text-secondary text-xs font-bold mb-4 block">Portfolio</span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary leading-tight tracking-tight mb-6">
          A Legacy of{" "}
          <span className="italic font-normal">Crystalline</span>{" "}
          Excellence
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-light">
          From neglected waters to luxury backyard sanctuaries — witness the precision of {brand.name}.
        </p>
        <div className="w-24 h-px bg-secondary-container mt-8" />
      </section>

      {/* Featured pair */}
      <section className="max-w-7xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl aspect-[16/9]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div className="text-white">
                <p className="editorial-caps text-xs font-bold mb-1 text-secondary-fixed">Featured</p>
                <h3 className="font-headline text-2xl">{featured.label}</h3>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl aspect-square">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-5xl">zoom_in</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="font-headline text-white text-lg">{second.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rest.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface-container-low"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-end p-4">
                <p className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow editorial-caps">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="liquid-gradient rounded-xl p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
              <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z" fill="#ffffff" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-6 leading-tight">
              Get Your Dream Pool<br />
              <span className="italic font-normal">Ready Today.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 font-light">
              Join {brand.stats[0].value} {brand.stats[0].label.toLowerCase()} who trust {brand.name} for their aquatic sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-4 rounded-lg editorial-caps font-bold text-sm hover:shadow-xl transition-all active:scale-95"
              >
                Request Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-lg editorial-caps font-bold text-sm hover:bg-white/10 transition-all active:scale-95"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
