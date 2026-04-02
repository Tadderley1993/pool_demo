// ─────────────────────────────────────────────────────────────────────────────
// Mobile brand config — mirrors apps/web/src/config/brand.ts
// Keep these in sync when rebranding for a new client.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  name:    "AquaCare",
  tagline: "Crystalline Clarity for Your Lifestyle",
  logoIcon: "water",

  colors: {
    primary:          "#004473",
    primaryContainer: "#005c99",
    secondary:        "#466270",
    tertiary:         "#004959",
    background:       "#f6fafe",
    surface:          "#ffffff",
    onPrimary:        "#ffffff",
    onSurface:        "#171c1f",
  },

  contact: {
    phone: "(555) 123-4567",
    email: "clarity@aquacare.com",
  },

  jobStatuses: ["Arrived", "In Progress", "Completed"] as const,

  chemicalParams: [
    { id: "ph",         label: "pH",        unit: "",    min: 7.2, max: 7.8, ideal: 7.4 },
    { id: "chlorine",   label: "Chlorine",  unit: "ppm", min: 1,   max: 5,   ideal: 3   },
    { id: "alkalinity", label: "Alkalinity",unit: "ppm", min: 80,  max: 120, ideal: 100 },
    { id: "calcium",    label: "Calcium",   unit: "ppm", min: 200, max: 400, ideal: 300 },
  ],

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    { id: "weekly",   name: "Weekly Maintenance",  icon: "calendar",  price: 85,  priceLabel: "/visit"   },
    { id: "chemical", name: "Chemical Balancing",  icon: "flask",     price: 65,  priceLabel: "/visit"   },
    { id: "filter",   name: "Filter Cleaning",     icon: "filter",    price: 120, priceLabel: "/service" },
    { id: "repair",   name: "Equipment Repairs",   icon: "build",     price: null,priceLabel: "Quote"    },
    { id: "seasonal", name: "Seasonal Opening",    icon: "sunny",     price: 250, priceLabel: "/service" },
  ],

  // ── Booking ────────────────────────────────────────────────────────────────
  booking: {
    frequencies: [
      { id: "once",    label: "One-time", sublabel: "Deep Clean",  icon: "calendar-outline"       },
      { id: "weekly",  label: "Weekly",   sublabel: "Maintenance", icon: "repeat-outline"         },
      { id: "monthly", label: "Monthly",  sublabel: "Check-up",    icon: "calendar-number-outline" },
    ],
    addons: [
      { id: "chemicals", label: "Chemical Balance Report", price: 0,  included: true  },
      { id: "photos",    label: "Before/After Photos",     price: 0,  included: true  },
      { id: "equipment", label: "Equipment Inspection",    price: 25, included: false },
      { id: "brush",     label: "Tile & Wall Brushing",    price: 15, included: false },
    ],
    guarantee: "Reschedule free up to 24 hours before your slot.",
  },

  // ── Rewards ────────────────────────────────────────────────────────────────
  rewards: {
    programName:     "AquaRewards",
    pointsPerDollar: 10,
    referralPoints:  500,
    tiers: [
      { name: "Deep Blue",       minPoints: 0    },
      { name: "Sapphire Elite",  minPoints: 3000 },
      { name: "Crystal Diamond", minPoints: 7500 },
    ],
    redeemable: [
      { name: "Free Chemical Balance",    points: 800,  locked: false },
      { name: "15% Off Next Visit",       points: 1200, locked: false },
      { name: "Filter Cleaning",          points: 2000, locked: false },
      { name: "Free Monthly Maintenance", points: 5000, locked: true  },
    ],
  },

  // ── Customer App (mobile-only) ─────────────────────────────────────────────
  customerApp: {
    aiAssistantName:  "AquaBot",
    aiWelcomeMessage: "Hi! I'm AquaBot, your AI pool assistant. Ask me anything about your pool chemistry, upcoming services, or maintenance tips.",
    notificationDefaults: {
      serviceReminder:   true,
      technicianEnRoute: true,
      reportReady:       true,
      rewardsMilestone:  false,
    },
    issueCategories: [
      "Water Chemistry",
      "Equipment / Pump",
      "Algae / Discoloration",
      "Leak / Structural",
      "Other",
    ],
  },
};
