"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-6 bg-white/90 backdrop-blur-lg z-50 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {brand.portalNav.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all active:scale-90",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="editorial-caps text-[9px] font-bold mt-1 truncate max-w-[72px] text-center leading-tight">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
