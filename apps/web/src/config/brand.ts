// =============================================================================
//  BRAND CONFIGURATION — Single source of truth for all client customization
//
//  To demo for a different pool service company:
//    1. Update every value in this file
//    2. Swap images in /public/imgs/ for the client's photos
//    3. Run `npm run dev` — done.
//
//  Nothing else in the codebase needs to change for a basic rebrand.
// =============================================================================

export const brand = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name:        "AquaCare",
  tagline:     "Because the first dive should feel amazing",
  description: "Professional pool maintenance meets architectural luxury for the ultimate aquatic retreat.",
  logoIcon:    "waves",   // Any Material Symbol icon name

  // ── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    phone:       "(555) 123-4567",
    email:       "clarity@aquacare.com",
    address:     "Greater Boston Metropolitan Area, Massachusetts",
    hours:       "Mon–Fri: 8am – 6pm",
    coordinates: { lat: 42.3601, lng: -71.0589 }, // Used for map marker
  },

  // ── Social ──────────────────────────────────────────────────────────────────
  social: {
    facebook:  "#",
    instagram: "#",
    linkedin:  "#",
  },

  // ── Navigation ──────────────────────────────────────────────────────────────
  marketingNav: [
    { label: "Home",       href: "/"        },
    { label: "Services",   href: "/services"  },
    { label: "Gallery",    href: "/gallery"   },
    { label: "Contact Us", href: "/contact"   },
  ],

  portalNav: [
    { label: "Dashboard",     href: "/dashboard", icon: "home"            },
    { label: "Book Services", href: "/booking",   icon: "calendar_add_on" },
    { label: "Live Tracker",  href: "/tracker",   icon: "explore"         },
    { label: "Rewards",       href: "/rewards",   icon: "stars"           },
  ],

  // ── Hero / CTA Copy ─────────────────────────────────────────────────────────
  hero: {
    badge:    "Boston Pool Opening Season",
    headline: "Because the first dive\nshould feel amazing",
    subline:  "Spring is here — open your pool with confidence. AquaCare's full-service seasonal opening gets your pool ready faster, cleaner, and chemistry-perfect for the first swim of the season.",
    ctaPrimary:   "Book Now",
    ctaSecondary: "View Our Services",
  },

  finalCta: {
    headline: "Your Clear Blue Paradise Awaits.",
    subline:  "Join over 500 premium households enjoying the AquaCare standard.",
    button:   "Claim Your Free Audit",
  },

  // ── Stats (shown on home page) ──────────────────────────────────────────────
  stats: [
    { value: "500+", label: "Premium Households"       },
    { value: "15+",  label: "Years of Excellence"      },
    { value: "5.0",  label: "Avg Rating"               },
    { value: "100%", label: "Satisfaction Guaranteed"  },
  ],

  // ── Why Choose Us ───────────────────────────────────────────────────────────
  features: [
    {
      icon:        "verified_user",
      title:       "Unyielding Trust",
      description: "Certified technicians with over 15 years of excellence. Your sanctuary is in safe, professional hands.",
      highlighted: false,
    },
    {
      icon:        "water_drop",
      title:       "Obsessive Purity",
      description: "We use hospital-grade filtration monitoring and eco-friendly chemistries for water so clear it looks invisible.",
      highlighted: true,   // Shows with primary background color
    },
    {
      icon:        "calendar_month",
      title:       "Effortless Ease",
      description: "Automated scheduling, digital reporting, and seamless payments. We handle the science, you handle the swim.",
      highlighted: false,
    },
  ],

  // ── Services ────────────────────────────────────────────────────────────────
  services: [
    {
      id:          "weekly",
      name:        "Weekly Maintenance",
      icon:        "calendar_today",
      description: "Consistency is the key to clarity. Our recurring program includes skimming, vacuuming, and complete wall brushing.",
      price:       85,
      priceLabel:  "/visit",
      popular:     false,
      features:    [],
    },
    {
      id:          "chemical",
      name:        "Chemical Balancing",
      icon:        "science",
      description: "Advanced laboratory-grade testing to ensure perfect pH, alkalinity, and sanitizer levels. Protect your equipment and your skin.",
      price:       65,
      priceLabel:  "/visit",
      popular:     true,
      features:    ["Phosphate Treatment", "Mineral Stabilization", "Detailed Analysis Report"],
    },
    {
      id:          "filter",
      name:        "Filter Cleaning",
      icon:        "filter_alt",
      description: "Prevent backpressure and system strain. We handle DE, sand, and cartridge filter deep-cleans for optimal flow.",
      price:       120,
      priceLabel:  "/service",
      popular:     false,
      features:    [],
    },
    {
      id:          "repair",
      name:        "Equipment Repairs",
      icon:        "build",
      description: "Expert diagnostics for pumps, heaters, and automation. Certified technicians using only OEM components.",
      price:       null,
      priceLabel:  "Quote on request",
      popular:     false,
      features:    [],
    },
    {
      id:          "seasonal",
      name:        "Seasonal Opening",
      icon:        "wb_sunny",
      description: "Complete spring startup or winterization services to protect your investment during the off-season.",
      price:       250,
      priceLabel:  "/service",
      popular:     false,
      features:    [],
    },
  ],

  // ── Testimonials ────────────────────────────────────────────────────────────
  testimonials: [
    {
      quote:  "AquaCare transformed our pool from a constant headache into a literal backyard oasis. The level of detail is unlike any other service we've used.",
      name:   "Julianne Varkey",
      role:   "Estate Owner",
      avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg",
    },
    {
      quote:  "Their digital reports give me peace of mind even when I'm traveling. I can literally see the chemical balance and proof of service in my inbox.",
      name:   "Marcus Chen",
      role:   "Architectural Developer",
      avatar: "/imgs/pexels-vince-2233366.jpg",
    },
    {
      quote:  "Crystalline clarity isn't just a marketing slogan—it's what I wake up to every single morning. Best decision we made for our home.",
      name:   "Elena Rodriguez",
      role:   "Hospitality Executive",
      avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg",
    },
  ],

  // ── Images ──────────────────────────────────────────────────────────────────
  // All paths relative to /public — swap these for client photos
  images: {
    hero:     "/imgs/yianni-mathioudakis-rVZm7CWnAvk-unsplash.jpg",
    heroAlt:  "Pool splash on a sunny summer day",
    about:    "/imgs/grant-davies-FdGXZUlOG9o-unsplash.jpg",
    aboutAlt: "Child in an inflatable ring enjoying a crystal clear pool",
    tech:       "/imgs/osama-alrowhani-LDNTUB4fjCQ-unsplash.jpg",
    techAlt:    "Pool technician cleaning a resort pool with a long pole",
    contact:    "/imgs/bruce-christianson-86AN3JFiBsY-unsplash.jpg",
    contactAlt: "Woman relaxing on a float in a crystal clear pool",
    services: "/imgs/clark-tai-nq18MYhxdGs-unsplash.jpg",
    gallery: [
      { src: "/imgs/nick-shandra-bBqZ9Lom3WA-unsplash.jpg",          alt: "Curved pool with diving board and terracotta tiles", label: "The Sapphire Horizon" },
      { src: "/imgs/pexels-almir-reis-1982745319-29029178.jpg",     alt: "Modern pool with clean lines",      label: "Desert Oasis"         },
      { src: "/imgs/pexels-bertellifotografia-9056671.jpg",         alt: "Pool with tropical landscaping",    label: "The Emerald Garden"   },
      { src: "/imgs/milin-john-aN8xxs9iSxo-unsplash.jpg",          alt: "Infinity pool at sunset with lounge chairs",         label: "Azure Retreat"        },
      { src: "/imgs/pexels-dmitry93-28665147.jpg",                  alt: "Clear turquoise water",             label: "Crystal Cove"         },
      { src: "/imgs/pexels-mauroignaciotorres-8839767.jpg",         alt: "Luxury pool at night",              label: "Midnight Blue"        },
      { src: "/imgs/vita-vilcina-KtOid0FLjqU-unsplash.jpg",        alt: "Oval pool at night with Spanish villa",              label: "The Clean Slate"      },
      { src: "/imgs/joana-guarda-Ozx_cdGDCA4-unsplash.jpg",         alt: "Woman reading by a pristine backyard pool",          label: "Total Transformation" },
    ],
  },

  // ── Booking ─────────────────────────────────────────────────────────────────
  booking: {
    frequencies: [
      { id: "once",    label: "One-time", sublabel: "Deep Clean",   icon: "event"          },
      { id: "weekly",  label: "Weekly",   sublabel: "Maintenance",  icon: "rebase_edit"    },
      { id: "monthly", label: "Monthly",  sublabel: "Check-up",     icon: "calendar_month" },
    ],
    addons: [
      { id: "chemicals",  label: "Chemical Balance Report", price: 0,  included: true  },
      { id: "photos",     label: "Before/After Photos",     price: 0,  included: true  },
      { id: "equipment",  label: "Equipment Inspection",    price: 25, included: false },
      { id: "brush",      label: "Tile & Wall Brushing",    price: 15, included: false },
    ],
    guarantee: "Your satisfaction is guaranteed. Reschedule for free up to 24 hours before your slot.",
  },

  // ── Loyalty / Rewards ───────────────────────────────────────────────────────
  rewards: {
    programName:    "AquaRewards",
    pointsPerDollar: 10,
    referralPoints:  500,
    tiers: [
      { name: "Deep Blue",       minPoints: 0    },
      { name: "Sapphire Elite",  minPoints: 3000 },
      { name: "Crystal Diamond", minPoints: 7500 },
    ],
    redeemable: [
      { name: "Free Chemical Balance",    points: 800,  icon: "science",           locked: false },
      { name: "15% Off Next Visit",       points: 1200, icon: "percent",           locked: false },
      { name: "Filter Cleaning",          points: 2000, icon: "filter_vintage",    locked: false },
      { name: "Free Monthly Maintenance", points: 5000, icon: "cleaning_services", locked: true  },
    ],
  },

  // ── Customer App (mobile) ───────────────────────────────────────────────────
  customerApp: {
    aiAssistantName:  "Tony",
    aiWelcomeMessage: "Hi! I'm Tony, your 24/7 pool assistant. Ask me anything about your pool chemistry, upcoming services, or maintenance tips.",
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

  // ── Admin Dashboard ──────────────────────────────────────────────────────────
  // Labels, column names, and status values used in the admin UI
  admin: {
    jobStatuses: ["Scheduled", "En Route", "In Progress", "Completed", "Issue Reported"],
    customerStatuses: ["Active", "Inactive", "Pending"],
    roles: ["Admin", "Manager", "Driver"],
  },
};

export type Brand = typeof brand;
