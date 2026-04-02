import type { Metadata } from "next";

export const metadata: Metadata = { title: "Inventory" };

const items = [
  { id: "INV-01", name: "Chlorine Tablets (50lb)",    category: "Chemicals",  stock: 2,  par: 8,  unit: "bags",    cost: 89,  icon: "science",        status: "critical" },
  { id: "INV-02", name: "pH Increaser (10lb)",         category: "Chemicals",  stock: 5,  par: 6,  unit: "bottles", cost: 24,  icon: "arrow_upward",   status: "low"      },
  { id: "INV-03", name: "pH Decreaser (10lb)",         category: "Chemicals",  stock: 7,  par: 6,  unit: "bottles", cost: 22,  icon: "arrow_downward", status: "ok"       },
  { id: "INV-04", name: "Algaecide (1 gal)",           category: "Chemicals",  stock: 4,  par: 4,  unit: "jugs",    cost: 35,  icon: "water_drop",     status: "ok"       },
  { id: "INV-05", name: "Pool Test Strips",            category: "Testing",    stock: 12, par: 10, unit: "packs",   cost: 14,  icon: "biotech",        status: "ok"       },
  { id: "INV-06", name: "Digital Test Kit",            category: "Testing",    stock: 3,  par: 3,  unit: "kits",    cost: 120, icon: "lab_panel",      status: "ok"       },
  { id: "INV-07", name: "Pool Brush (18 inch)",        category: "Equipment",  stock: 6,  par: 5,  unit: "units",   cost: 28,  icon: "brush",          status: "ok"       },
  { id: "INV-08", name: "Leaf Skimmer Net",            category: "Equipment",  stock: 3,  par: 5,  unit: "units",   cost: 32,  icon: "waves",          status: "low"      },
  { id: "INV-09", name: "Cartridge Filter (C-7468)",  category: "Equipment",  stock: 2,  par: 4,  unit: "units",   cost: 68,  icon: "filter_alt",     status: "low"      },
  { id: "INV-10", name: "Pool Vacuum Head",            category: "Equipment",  stock: 4,  par: 3,  unit: "units",   cost: 55,  icon: "cleaning_bucket",status: "ok"       },
  { id: "INV-11", name: "O-Ring Assortment Kit",       category: "Parts",      stock: 8,  par: 5,  unit: "kits",    cost: 19,  icon: "settings",       status: "ok"       },
  { id: "INV-12", name: "Pump Impeller (1HP)",         category: "Parts",      stock: 1,  par: 3,  unit: "units",   cost: 145, icon: "rotate_right",   status: "critical" },
];

const statusStyle: Record<string, { badge: string; bar: string; label: string }> = {
  ok:       { badge: "bg-tertiary-container text-on-tertiary-container",     bar: "bg-tertiary",   label: "In Stock"  },
  low:      { badge: "bg-secondary-container text-on-secondary-container",   bar: "bg-secondary",  label: "Low Stock" },
  critical: { badge: "bg-error-container text-on-error-container",           bar: "bg-error",      label: "Critical"  },
};

const categories = ["All", "Chemicals", "Testing", "Equipment", "Parts"];

export default function InventoryPage() {
  const criticalCount = items.filter((i) => i.status === "critical").length;
  const lowCount = items.filter((i) => i.status === "low").length;
  const totalValue = items.reduce((sum, i) => sum + i.stock * i.cost, 0);

  return (
    <div className="p-6 md:p-10 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Inventory</h1>
          <p className="text-secondary mt-1">{items.length} items · ${totalValue.toLocaleString()} estimated value</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-lowest border border-outline-variant/20 px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-surface-container">
            <span className="material-symbols-outlined text-sm text-primary">download</span>
            Export
          </button>
          <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            Add Item
          </button>
        </div>
      </div>

      {/* Alerts */}
      {(criticalCount > 0 || lowCount > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {criticalCount > 0 && (
            <div className="bg-error-container rounded-2xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-error text-xl">warning</span>
              <div className="flex-1">
                <p className="font-bold text-on-error-container">{criticalCount} item{criticalCount > 1 ? "s" : ""} critically low</p>
                <p className="text-xs text-on-error-container/70">Reorder needed before next service week</p>
              </div>
              <button className="bg-error text-on-error px-4 py-2 rounded-xl text-xs font-bold">Reorder</button>
            </div>
          )}
          {lowCount > 0 && (
            <div className="bg-secondary-container rounded-2xl p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">inventory_2</span>
              <div>
                <p className="font-bold text-on-secondary-container">{lowCount} item{lowCount > 1 ? "s" : ""} running low</p>
                <p className="text-xs text-on-secondary-container/70">At or below par level</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat, i) => (
          <button key={cat} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${i === 0 ? "bg-primary text-on-primary" : "bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Inventory table */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-bold uppercase tracking-widest text-outline bg-surface-container-low">
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock Level</th>
                <th className="px-6 py-4">Par</th>
                <th className="px-6 py-4">Unit Cost</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => {
                const s = statusStyle[item.status];
                const pct = Math.min(100, Math.round((item.stock / item.par) * 100));
                return (
                  <tr key={item.id} className={`hover:bg-surface-container-low transition-colors ${i < items.length - 1 ? "border-b border-outline-variant/10" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-primary text-base">{item.icon}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-on-surface">{item.name}</p>
                          <p className="text-xs text-outline">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{item.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-on-surface w-8">{item.stock}</span>
                        <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{item.par} {item.unit}</td>
                    <td className="px-6 py-4 font-semibold text-on-surface">${item.cost}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.badge}`}>{s.label}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1">
                        <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-colors" title="Adjust stock">
                          <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                        {item.status !== "ok" && (
                          <button className="p-2 hover:bg-surface-container rounded-lg text-error hover:bg-error-container transition-colors" title="Reorder">
                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
