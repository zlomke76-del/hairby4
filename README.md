# Hair by Four Salon — website demo

A complete, dependency-free salon website concept. Warm editorial design, responsive navigation, filterable services and hairstyle gallery, accessible inspiration dialogs, location and hours, FAQs, and a three-step appointment demonstration.

## Run

Requires Node.js 20 or newer. No install step, API keys, database, or paid services.

```sh
npm run dev
```

Open http://localhost:3000. To check and prepare for hosting:

```sh
npm test
npm run build
```

Serve `dist/` with any static web host. A `vercel.json` is included for a standalone Vercel import. The Sites manifest is specific to the private demonstration deployment; remove `.openai/` when using another host.

## What works

- Responsive mobile menu and navigation
- Service category filters and service-specific demo entry points
- Hairstyle category filters, enlarged look views, and preselected inspiration
- Appointment walkthrough: service → date/example time and fictional details → review → explicit demo completion
- Opening-hour checks, Sunday closure, duration-based closing cutoff, and removal of past example times
- Keyboard-native modal focus handling, Escape dismissal, labeled controls, and focus indicators
- Telephone and directions links, FAQs, and privacy disclosure

## Demo boundaries

No availability API, real reservation, payment, email, SMS, contact submission, cookies, analytics, or browser storage. Appointment information stays in memory and clears when the dialog closes. Use fictional information. The production site is marked `noindex` until approved as an official site. Dates/times use the visitor browser's local calendar; a live booking implementation should explicitly use America/Chicago and the salon's actual scheduling rules.

## Customize

- `dist/data.js`: business details, opening hours, service descriptions, illustrative durations and gallery metadata
- `dist/index.html`: salon copy, hours presentation, FAQs and page structure
- `dist/styles.css`: branding, responsive layout and image composition
- `dist/app.js`: filters, dialog interactions and appointment walkthrough
- `dist/assets/editorial-hair.jpg`: original generated contact sheet; CSS selects its six individual panels

Hours appear both in `data.js` and the human-readable visit section; keep both in sync. Current pricing is deliberately not invented. No staff bios, fake reviews, fictional ratings or fake client portfolio are used. Editorial photos are explicitly labeled as AI-generated inspiration.

See `docs/RESEARCH.md` for evidence and outstanding confirmations, and `docs/IMAGE-PROMPT.md` for the original imagery brief.

## Before official launch

Confirm ownership permission, current name/address/phone/hours, service menu and pricing, team and salon-approved photos. Replace the proposal disclosure and noindex tag only after approval. If adding real booking, implement the salon's actual availability, durations, timezone, policies, consent and confirmation flow; do not reinterpret demo completion as a reservation.

## Source reuse

This source was prepared for the commissioned demo. Third-party business names remain their owners' property. Logo SVGs are a faithful web refinement of the salon business card supplied by the user; the navy lettering, scissors motif and Family Salon wording are retained. Original editorial imagery was generated for this concept and does not depict the salon's staff, customers or premises. Verify usage permission for any replacement photos or branding.
