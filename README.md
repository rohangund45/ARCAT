# ARCAT — AI-Powered Rural Climate Alert Toolkit

Modern Next.js 15 demo showcasing AI-driven rural climate alerts with offline BitChat simulation, SMS-style alerts, charts, and a farmer dashboard.

## Tech
- Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
- Recharts, i18next, lucide-react
- LocalStorage-based mock data, BitChat offline simulation

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure
- `app/` — routes: home, features, architecture, dashboard, admin, login
- `components/` — UI: Navbar, Footer, AlertCard, WeatherChart, OfflineModeToggle, MitraAI, etc.
- `data/` — mock JSON: weather, farmers, alerts
- `lib/` — storage helpers, mock API, BitChat simulation

## Notes
- Authentication is mocked via a simple login that stores a user in localStorage.
- BitChat simulates Bluetooth mesh by writing messages to a shared localStorage queue and consuming when Offline Mode is enabled.
