# AquaCare — Pool Service SaaS Demo

## Quick Start

### 1. Install dependencies
```bash
# From the project root
npm install

# Install web app deps
cd apps/web && npm install

# Install mobile app deps
cd ../mobile && npm install
```

### 2. Run the web app
```bash
cd apps/web
npm run dev
# Open http://localhost:3000
```

### 3. Run the mobile app
```bash
cd apps/mobile
npx expo start
# Scan QR code with Expo Go app on your phone
# Or press 'w' for web preview
```

---

## Project Structure

```
pool/
├── apps/
│   ├── web/                  ← Next.js 14 (marketing + portal + admin)
│   │   └── src/
│   │       ├── app/
│   │       │   ├── (marketing)/   ← Public website (Home, Services, Gallery, Contact)
│   │       │   ├── (portal)/      ← Customer portal (Dashboard, Booking, Tracker, Rewards)
│   │       │   └── (admin)/       ← Admin dashboard
│   │       └── config/
│   │           └── brand.ts  ← ⭐ EDIT THIS to rebrand for a new client
│   └── mobile/               ← Expo React Native (Driver app)
│       └── src/config/
│           └── brand.ts      ← ⭐ EDIT THIS to rebrand mobile app
└── imgs/                     ← Original stock photos (copied to apps/web/public/imgs/)
```

---

## To Demo for a New Client

1. Open `apps/web/src/config/brand.ts`
2. Update: company name, tagline, contact info, services, pricing, images
3. Replace photos in `apps/web/public/imgs/` with the client's photos
4. Run `npm run dev` — everything updates automatically

---

## Deploy to Vercel (Free)

1. Push to GitHub: `git init && git add . && git commit -m "init"`
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Set **Root Directory** to `apps/web`
4. Click Deploy — live URL in ~60 seconds

### Vercel Environment Variables (add in project settings)
```
# Required for full features (leave empty for demo)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=
STRIPE_SECRET_KEY=
OPENAI_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Page Routes

| URL                  | Page                    |
|----------------------|-------------------------|
| `/`                  | Marketing Home          |
| `/services`          | Services catalog        |
| `/gallery`           | Photo gallery           |
| `/contact`           | Contact + FAQ           |
| `/dashboard`         | Customer dashboard      |
| `/booking`           | Book a service          |
| `/tracker`           | Live driver tracker     |
| `/rewards`           | AquaRewards loyalty     |
| `/admin/dashboard`   | Admin dashboard         |
| `/api/health`        | API health check        |

---

## Mobile App Screens (Expo)

| Screen  | Description                          |
|---------|--------------------------------------|
| Home    | Driver greeting + today's jobs       |
| My Jobs | Job list with status + chem log      |
| Route   | Map + optimized route stops          |
| Profile | Driver stats + settings              |
