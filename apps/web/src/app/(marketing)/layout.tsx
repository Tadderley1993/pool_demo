import { TopBar } from "@/components/shared/TopBar";
import { brand } from "@/config/brand";
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar variant="marketing" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 w-full py-16 px-8 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <p className="font-headline text-2xl italic tracking-tighter">{brand.name}</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
            {brand.tagline}. Professional pool care for the most discerning clients.
          </p>
          <div className="flex gap-3 pt-2">
            {Object.entries(brand.social).map(([platform]) => (
              <div key={platform} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all cursor-pointer">
                <span className="material-symbols-outlined text-sm">link</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="editorial-caps text-xs font-bold mb-5 text-white/50 tracking-widest">Services</h5>
            <ul className="space-y-3">
              {brand.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="editorial-caps text-xs font-bold mb-5 text-white/50 tracking-widest">Company</h5>
            <ul className="space-y-3">
              {brand.marketingNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-5">
          <h5 className="editorial-caps text-xs font-bold text-white/50 tracking-widest">Newsletter</h5>
          <p className="text-slate-400 text-sm italic">
            Seasonal care insights and estate management tips, delivered privately.
          </p>
          <div className="flex border-b border-slate-700 py-2 gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none text-white text-sm w-full focus:ring-0 focus:outline-none placeholder:text-slate-600"
            />
            <button className="editorial-caps text-[10px] font-bold text-secondary hover:text-secondary-container transition-colors flex-shrink-0">
              Join
            </button>
          </div>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>{brand.contact.phone}</li>
            <li>{brand.contact.email}</li>
            <li>{brand.contact.address}</li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="editorial-caps text-[10px] text-slate-600 tracking-widest">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <div className="flex gap-8 editorial-caps text-[10px] text-slate-600">
          <Link href="/contact" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
