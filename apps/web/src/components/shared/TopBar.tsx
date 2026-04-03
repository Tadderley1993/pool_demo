"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

interface TopBarProps {
  variant?: "marketing" | "portal";
}

export function TopBar({ variant = "marketing" }: TopBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = variant === "portal" ? brand.portalNav.slice(0, 4) : brand.marketingNav;

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl glass flex justify-between items-center px-5 md:px-8 h-16 md:h-20 border-b border-outline-variant/10">
        {/* Logo */}
        <Link href="/" className="group" onClick={() => setMobileOpen(false)}>
          <span className="font-headline text-xl tracking-tighter text-primary italic">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "editorial-caps text-xs font-semibold transition-all",
                  isActive
                    ? "text-secondary border-b-2 border-secondary pb-0.5"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {variant === "portal" && (
            <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          )}
          {variant === "marketing" && (
            <Link
              href="/booking"
              className="hidden md:inline-flex liquid-gradient text-on-primary px-5 py-2.5 rounded-lg editorial-caps text-xs font-bold tracking-widest hover:opacity-90 active:scale-95 transition-all"
            >
              {brand.hero.ctaPrimary}
            </Link>
          )}
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 text-primary rounded-lg hover:bg-surface-container-low transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
          <nav
            className="absolute top-16 left-0 right-0 bg-white border-b border-outline-variant/10 shadow-xl px-5 py-5 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl editorial-caps text-xs font-bold transition-all",
                    isActive
                      ? "bg-primary text-on-primary"
                      : "text-on-surface hover:bg-surface-container-low"
                  )}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
                </Link>
              );
            })}
            {variant === "marketing" && (
              <Link
                href="/booking"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full liquid-gradient text-white px-4 py-3.5 rounded-xl editorial-caps text-xs font-bold tracking-widest mt-3"
              >
                {brand.hero.ctaPrimary}
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
