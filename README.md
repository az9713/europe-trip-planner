# London & Paris — Trip Companion

**Live:** https://london-paris-2026.vercel.app

A calm, mobile-first progressive web app (PWA) for a 10-day trip to London and Paris (May 22–31, 2026).

## Background

Original trip research and design were produced by **Codex**. That design was then imported into **Claude Design** and adapted for mobile as a single-file static PWA.

## What's Inside

### Four screens

| Tab | Contents |
|-----|----------|
| **Days** | Day-by-day itinerary feed with a scrollable date rail, photo header, morning/afternoon/evening timeline, and expandable notes (comfort, safety, food) plus Google Maps deep-links for each day |
| **Eat** | Curated dining shortlist for London and Paris — filterable by city, with neighbourhood, mood, and reservation notes |
| **Safety** | Tap-to-call emergency numbers (999, 112, U.S. embassies), city-specific safety tips, and a pre-departure checklist |
| **List** | Pre-flight checklist (ETA, passports, Eurostar, timed tickets, reservations, transit, packing) with persistent tick state |

### Trip at a glance

- **Flights:** UA901 SFO → LHR (May 22) · UA949 LHR → SFO (May 31)
- **London days:** May 23–25 — arrival/recovery, Westminster & Thames, Tower of London
- **Travel day:** May 26 — Eurostar London St Pancras → Paris Gare du Nord
- **Paris days:** May 27–29 — Louvre, Eiffel/Left Bank, Versailles option
- **Return:** May 30 Eurostar back to London, May 31 fly home

### App features

- **PWA / installable** — service worker caches all assets; works offline after first load
- **Three themes** — Light, Sepia, Dark (with auto system-preference detection)
- **Density & font-size controls** — Compact / Standard / Airy spacing; Small / Default / Large text
- **Gentle pace mode** — toggle to hide the full plan and show a lighter alternative for each day
- **"Today" awareness** — current day is highlighted in the date rail and auto-scrolled into view; a floating FAB jumps back to today when scrolled away
- **No accounts, no analytics, no live location** — all preferences and checklist state live in `localStorage` only

## File Layout

```
index.html              Main app (self-contained — all data and logic inline)
data/trip.js            Trip data as a standalone JS module (deploy-safe duplicate)
variations/
  pocket-book.html      Alternative layout explorations
  stack-browse.html
  today-pane.html
shared/                 Design tokens, base styles, font imports
manifest.webmanifest    PWA manifest
sw.js                   Service worker (cache-first strategy)
icon-*.png              PWA icons (192, 512, maskable, Apple touch)
vercel.json             Static deployment config
```

## Deploying to Vercel

This is a plain static site — no build step, no dependencies, no server required. The steps below cover everything from zero to a live public URL.

### Prerequisites

- A [GitHub](https://github.com) account (free)
- A [Vercel](https://vercel.com) account (free Hobby plan is enough)
- [Node.js](https://nodejs.org) installed (any recent LTS version)

---

### Step 1 — Push the code to GitHub

If the repo doesn't exist yet, create it on GitHub and push:

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create <your-username>/<repo-name> --public --source . --remote origin --push
```

> `gh` is the [GitHub CLI](https://cli.github.com). Alternatively, create the repo manually on github.com and follow the push instructions it gives you.

---

### Step 2 — Install the Vercel CLI

```bash
npm install -g vercel
```

Then log in:

```bash
vercel login
```

This opens a browser window — authenticate with your Vercel account.

---

### Step 3 — Deploy

From inside the project folder:

```bash
vercel --prod
```

Vercel will ask a few questions the first time (project name, which account/team). After that it uploads the files, builds (nothing to build here), and prints a live URL.

---

### Step 4 — Choose a clean URL (optional)

Vercel auto-generates a URL like `your-project-name-abc123.vercel.app`. If the plain `your-project-name.vercel.app` subdomain is already taken by another user globally, rename the Vercel project to something unique:

```bash
# Via the Vercel dashboard:
# vercel.com → your project → Settings → General → Project Name → rename
```

After renaming, redeploy once to pick up the new alias:

```bash
vercel --prod
```

---

### Step 5 — Make the site publicly accessible

By default Vercel may ask visitors to log in with a Vercel account. To make the site fully public (no login required for anyone):

1. Go to your project on **vercel.com**
2. Click **Settings** → **Deployment Protection**
3. Make sure **"Require Log In"** under *Vercel Authentication* is **Off**
4. Click **Save**

Test in an incognito/private browser window to confirm no login is required.

---

### Redeploying after changes

Every time you push to the `main` branch on GitHub, Vercel automatically redeploys. You can also trigger a manual redeploy at any time:

```bash
vercel --prod
```

---

### Current live deployment

| | |
|---|---|
| **URL** | https://london-paris-2026.vercel.app |
| **GitHub repo** | https://github.com/az9713/europe-trip-planner |
| **Vercel project** | london-paris-2026 |
