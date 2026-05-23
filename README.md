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

## Deploying

The app is a single static file — drop it on any static host (Vercel, Netlify, GitHub Pages, etc.).

```bash
# Vercel one-liner
vercel --prod
```

No build step, no dependencies, no server required.
