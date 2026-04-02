"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

interface TopBarProps {
  variant?: "marketing" | "portal";
}

export function TopBar({ variant = "marketing" }: TopBarProps) {
  const pathname = usePathname();
  const navItems = variant === "portal" ? brand.portalNav.slice(0, 4) : brand.marketingNav;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl glass flex justify-between items-center px-6 md:px-8 h-16 md:h-20 border-b border-outline-variant/10">
      {/* Logo */}
      <Link href="/" className="group">
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
      <div className="flex items-center gap-3">
        {variant === "portal" && (
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        )}
        {variant === "marketing" && (
          <Link
            href="/booking"
            className="liquid-gradient text-on-primary px-5 py-2.5 rounded-lg editorial-caps text-xs font-bold tracking-widest hover:opacity-90 active:scale-95 transition-all"
          >
            {brand.hero.ctaPrimary}
          </Link>
        )}
      </div>
    </header>
  );
}
