import Link from "next/link";
import { brand } from "@/config/brand";

const adminNav = [
  { label: "Dashboard",   href: "/admin",            icon: "dashboard"   },
  { label: "Customers",   href: "/admin/customers",  icon: "people"      },
  { label: "Schedule",    href: "/admin/schedule",   icon: "calendar_month" },
  { label: "Routes",      href: "/admin/routes",     icon: "route"       },
  { label: "Payments",    href: "/admin/payments",   icon: "payments"    },
  { label: "Analytics",   href: "/admin/analytics",  icon: "bar_chart"   },
  { label: "Messages",    href: "/admin/messages",   icon: "chat"        },
  { label: "Inventory",   href: "/admin/inventory",  icon: "inventory_2" },
  { label: "Settings",    href: "/admin/settings",   icon: "settings"    },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-container-low">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-surface-container-lowest border-r border-outline-variant/20 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 border-b border-outline-variant/20">
          <Link href="/admin" className="flex flex-col">
            <p className="font-headline text-lg italic text-primary">{brand.name}</p>
            <p className="text-[10px] text-outline uppercase tracking-widest">Admin Portal</p>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all group font-medium text-sm"
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-sm">person</span>
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Admin</p>
              <p className="text-xs text-outline">{brand.contact.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
