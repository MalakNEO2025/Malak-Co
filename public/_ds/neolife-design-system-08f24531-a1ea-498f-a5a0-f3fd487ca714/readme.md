# NEOLIFE Design System

**NEOLIFE** (by **Malak&Co** — *"Fast Prototyping Products"*) is a platform that spins up a **tailored guest-experience app for any kind of venue**. An operator picks their business category — Restaurants & Coffee, Hotels, Clinics, Gym & Fitness, Food Trucks, Retail — and NEOLIFE delivers an in-venue tablet/phone app designed for that industry.

This design system captures the platform brand plus the three fully built-out verticals, so any new screen, deck or prototype can be assembled on-brand in minutes.

## Products represented
| Surface | Tenant in the file | Theme | What it does |
|---|---|---|---|
| **NEOLIFE Landing** | NEOLIFE platform | teal | Venue-category selection / marketing entry |
| **Restaurants** | *Rola* (Italian restaurant) | green | Table-side menu browse → cart → pay → confirm, game hub |
| **Clinics** | *Andalus Medical Center, Riyadh* | blue | Patient check-in journey, services, appointments |
| **Hotels** | *Villa Igiea, Palermo* | luxury dark | In-room controls, dining, loyalty |

One set of primitives re-skins across all of them: each vertical is just a `.theme-*` scope that overrides `--brand` and surface tokens.

## Sources
- **Figma:** `RMS SNB.fig` (attached) — pages: *Landing / Presentation Page*, *RMS SNB – Restaurants*, *RMS SNB – Hotels*, *RMS SNB – Medical*, *Components*. All token values, screens and the NEOLIFE/Rola logos were extracted from this file (the source of truth).
- **GitHub:** [MalakNEO2025/Malak-Co](https://github.com/MalakNEO2025/Malak-Co) — currently a stub repo ("Fast Prototyping Products"). Explore it for any future production code.

---

## CONTENT FUNDAMENTALS
How NEOLIFE writes copy:

- **Warm, second-person, concierge tone.** The app speaks *to the guest*: "Good morning, Sami", "Your trusted healthcare partner", "Collect points on this stay". First-person is reserved for the brand voice on marketing ("our 14th-floor rooftop").
- **Title Case for section headers** ("Choose by category", "Our Menu", "Care & Facilities", "Our Services"). Sentence case for descriptions and helper text.
- **Short, concrete, benefit-led.** Descriptions are one line, no fluff: *"Layers of pasta, slow-cooked beef ragu, bechamel, parmesan."* *"Luxury stays, boutique properties, and resort experiences."*
- **Numbers are confident and rounded** with a `+` prefix in marketing: "+10k Happy customers", "+50 Successful partners". Prices are bold and plain ("$40.2", "$68").
- **Personal context is always surfaced**: table number ("Table N°12"), room ("Room 412 · Executive Suite", "Room 308 · Dr. Al-Rashid"), date. The guest always knows where they are.
- **No emoji.** Iconography carries visual meaning instead. Occasional refined typographic touches (the `N°` in "Table N°12", `·` separators between facts).
- **CTAs are direct verbs**: "Reserve a table", "Pay now", "Send code", "Discover the venue", "Back to menu".

---

## VISUAL FOUNDATIONS

**Brand idea.** One flexible chassis, many venue personalities. The NEOLIFE platform itself is **teal** (`#3B969A → #035256` gradient); each generated app adopts an industry palette.

**Color.**
- Platform accent: teal `#3B969A`, deep `#035256`, near-black ink `#14110F`.
- Shared warm neutrals: text black `#1E1E1E`, **warm taupe** secondary text `#6E6161` (very characteristic — not a cold grey), cream surface `#FFFAFA`, sand `#F0EAE2`.
- Restaurant: garden green `#4D701F` + bright `#77AB33` on mint `#EAF5F0`.
- Clinic: clinical blue `#0369A1` + slate `#0F172A` on `#F8FAFC`, green `#00C590` for completed steps.
- Hotel: after-dark `#181818`/`#232020` with maroon/red `#8B1A1A`/`#C0392B` and sand sheets.
- Status: error `#D5373B`/`#FF5555`, warning amber `#E39D16`/`#FFA800`, success `#00C590`.

**Type.** Inter is the workhorse (UI + body). Character faces layer per vertical: **Darker Grotesque** (heavy, condensed) for restaurant section headings, **Georama** (semi-serif) for hotel elegance and big numerals, **Alexandria** for the NEOLIFE wordmark, **Geist Mono** for payment numerals. Most text is set at `line-height:100%` (tight). Scale runs 48 (display) → 32 → 25 → 20 (section title) → 15 (body) → 12 (descriptions) → 10 (micro labels).

**Shape & radius.** Pills everywhere — buttons, chips, badges, the floating nav, the "Table N°12" tag are all fully rounded. Cards use 10–16px radius; hero images use a generous **50px** corner; bottom sheets `28px` top corners.

**Backgrounds.** Solid tinted canvases (mint, slate-50, ink) — **no busy gradients on page backgrounds**. Imagery is full-bleed and rich: food shot top-down on marble, warm candle-lit spa/hotel interiors, clinical photography. A consistent **bottom protection gradient** (`rgba(20,17,15,…)`) sits under text over photos.

**Elevation.** Soft, warm shadows (`rgba(110,97,97,.05–.08)`) on cards. The signature move is the **floating pill nav** with a wide soft glow (`0 0 20px 5px rgba(0,0,0,.3)`). Hotel sheets get a strong upward shadow.

**Borders.** Hairline `rgba(110,97,97,.2)` dividers; `.5px–1px` strokes. Selected/active states fill with `--brand` and a matching 1px border.

**Motion.** Restrained and smooth. `cubic-bezier(.22,1,.36,1)` ease-out, 140–360ms. Buttons scale to `0.97` on press and brighten ~6% on hover; tiles lift `-2px`. Bottom sheets slide. No bounce, no decorative looping.

**States.** Hover = brightness/elevation; press = slight shrink; selected = brand fill + white text; disabled = 45% opacity. Focus = brand ring (`0 0 0 3px brand-soft`).

**Layout.** Apps are designed at a **744px tablet width**. Generous 20–32px gutters, content in a single scrolling column with edge-to-edge hero, then padded sections.

---

## ICONOGRAPHY
- **Lucide** line icons throughout the Figma file (house, utensils, shopping-cart, search, chevrons-right, star, chef-hat, trash, bell, calendar, message, user, phone, etc.) — **1.6–1.8px stroke, round caps/joins**, monochrome, inheriting `currentColor`.
- In this system, icons are written as small inline Lucide-style SVGs inside each UI kit's `screens.jsx` (consistent 24×24 viewBox, `stroke-width≈1.8`). If you need the full set, link Lucide from CDN (`lucide-static`) — it matches exactly.
- **Logos** are stored as single-path `currentColor` SVGs in `assets/logos/` (`neolife-mark.svg`, `rola-mark.svg`) — tint them by setting `color` or via CSS `mask`. The Villa Igiea logotype is set in Georama as a stand-in.
- **No emoji, no unicode-as-icon.** Status is shown with color + Lucide glyphs (e.g. green check in the stepper).

---

## INDEX / MANIFEST
**Root**
- `styles.css` — global entry (imports only). Link this one file.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill wrapper.

**Tokens** (`tokens/`)
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css` (Google Fonts) · `figma/fig-tokens.css` (extracted Figma Variables) · `figma/fig-assets.css`.

**Components** (`window.NEOLIFEDesignSystem_…`)
- `components/core/` — Button, Badge, Avatar, Chip, Card
- `components/forms/` — Input, Checkbox
- `components/navigation/` — BottomNav (pill + bar), Stepper
- `components/patterns/` — MenuCard, ServiceTile, StatCard, VenueCard, SummaryCard

**Foundation cards** (`guidelines/foundations/`) — Colors, Type, Spacing, Brand specimens (Design System tab).

**UI kits** (`ui_kits/`)
- `landing/` — NEOLIFE venue selection (links to the three apps)
- `restaurant/` — Rola ordering app · `medical/` — Andalus clinic · `hotel/` — Villa Igiea

**Assets** (`assets/`) — `logos/` (NEOLIFE, Rola marks), `images/` (hero & dish photography).
