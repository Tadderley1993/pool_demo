"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS = [
  {
    group: "Marketing Site",
    icon: "public",
    accent: "text-tertiary",
    links: [
      { label: "Home",     href: "/"         },
      { label: "Services", href: "/services" },
      { label: "Gallery",  href: "/gallery"  },
      { label: "Contact",  href: "/contact"  },
    ],
  },
  {
    group: "Customer Portal",
    icon: "person",
    accent: "text-secondary",
    links: [
      { label: "Dashboard",    href: "/dashboard" },
      { label: "Book Service", href: "/booking"   },
      { label: "Live Tracker", href: "/tracker"   },
      { label: "Rewards",      href: "/rewards"   },
    ],
  },
  {
    group: "Admin Dashboard",
    icon: "admin_panel_settings",
    accent: "text-primary",
    links: [
      { label: "Admin Overview", href: "/admin/dashboard" },
    ],
  },
  {
    group: "Mobile App",
    icon: "smartphone",
    accent: "text-on-tertiary-container",
    links: [
      { label: "Driver App Demo",   href: "/demo/mobile"          },
      { label: "Customer App Demo", href: "/demo/mobile/customer" },
    ],
  },
];

export default function DemoBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded navigator panel */}
      {open && (
        <div className="bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/20 p-6 w-72 max-h-[72vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              Demo Navigator
            </p>
            <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
              Preview
            </span>
          </div>

          <div className="space-y-5">
            {SECTIONS.map((section) => (
              <div key={section.group}>
                <div className={`flex items-center gap-1.5 mb-2 ${section.accent}`}>
                  <span className="material-symbols-outlined text-base leading-none">
                    {section.icon}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider">
                    {section.group}
                  </p>
                </div>
                <div className="space-y-0.5">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary text-on-primary"
                          : "text-on-surface hover:bg-surface-container"
                      }`}
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-base opacity-50">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 font-bold text-sm"
        aria-label="Toggle demo navigator"
      >
        <span className="material-symbols-outlined text-lg leading-none">
          {open ? "close" : "explore"}
        </span>
        Demo
      </button>
    </div>
  );
}
