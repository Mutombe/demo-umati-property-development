# Umati — Typographic Hierarchy (Golden Ratio φ = 1.618)

One scale for everything: **website, social, digital, and print**. Every size is
mathematically related to the one next to it by the golden ratio (1.618), and
**weight descends as size descends** — big type is Black/Bold, body copy is Regular.

Typeface: **Averta Std** (all weights self-hosted on the site).

---

## The scale

Each step is the one below it **× 1.618** (or the one above it **÷ 1.618**),
anchored on a 16px body so paragraphs stay readable.

| Role        | Web size (desktop) | Weight        | Use it for                              |
|-------------|--------------------|---------------|-----------------------------------------|
| **Hero**    | 110 px             | Black (900)   | Page-opening headline, one per screen   |
| **H1**      | 68 px              | Black (900)   | Major statement / big CTA headline      |
| **H2**      | 42 px              | Black (900)   | Section headings                        |
| **Subhead** | 26 px              | Bold (700)    | Card titles, sidebar titles             |
| **Lead**    | 20 px              | Regular (400) | Intro paragraph under a heading         |
| **Body**    | 16 px              | Regular (400) | Standard paragraphs                     |
| **Small**   | 14 px              | Regular (400) | Captions, fine print                    |
| **Eyebrow** | 12 px              | Semibold (600)| UPPERCASE kicker label, +0.18em tracking|

> The four core tiers are pure golden ratio: 16 → 26 → 42 → 68 → 110, each ×1.618.
> Lead (20) and Eyebrow (12) are supporting sizes that sit between the steps.

---

## How to build it for an ad (any size)

You don't memorise pixels — you pick **one heading size**, then divide by 1.618
to get each level down. Denford's rule:

```
Heading      = H
Subheading   = H ÷ 1.618
Body copy    = Subheading ÷ 1.618
Caption      = Body ÷ 1.618
```

### Worked examples

**A4 / poster — heading 96pt**

| Level      | Size            | Weight   |
|------------|-----------------|----------|
| Heading    | 96 pt           | Black    |
| Subheading | 59 pt (96÷1.618)| Bold     |
| Body       | 37 pt (59÷1.618)| Regular  |
| Caption    | 23 pt (37÷1.618)| Regular  |

**Instagram post (1080×1080) — heading 130px**

| Level      | Size              | Weight   |
|------------|-------------------|----------|
| Heading    | 130 px            | Black    |
| Subheading | 80 px (130÷1.618) | Bold     |
| Body       | 50 px (80÷1.618)  | Regular  |
| Caption    | 31 px (50÷1.618)  | Regular  |

**Business card — heading 18pt**

| Level   | Size             | Weight   |
|---------|------------------|----------|
| Name    | 18 pt            | Black    |
| Title   | 11 pt (18÷1.618) | Bold     |
| Details | 7 pt  (11÷1.618) | Regular  |

---

## Rules of thumb

1. **One ratio, no guessing.** Going down a level = ÷1.618. Going up = ×1.618.
2. **Weight follows size.** Headline Black → Subhead Bold → Body Regular. Never
   set body copy in a heavy weight, and never set a headline in Regular.
3. **Tighten big, open small.** Big headings use tight negative letter-spacing
   (≈ −0.03 to −0.045em); body copy stays at normal spacing.
4. **Two-to-three sizes per layout.** An ad rarely needs all eight — pick the
   heading, the body, and maybe one of (subhead / caption). Skipping a step is
   fine; inventing a size that isn't on the ladder is not.
5. **Brand colour:** Umati Orange `#E87722` for accents; Onyx `#111111` and warm
   Ivory `#FDFCFA` for the canvas.

---

## On the website (for developers)

The scale lives in `src/main.css` as `.type-*` utility classes — apply one class
and size, weight, line-height and letter-spacing all come together:

`.type-hero` · `.type-h1` · `.type-h2` · `.type-sub` · `.type-lead` ·
`.type-body` · `.type-small` · `.eyebrow`

All sizes are responsive (they scale down smoothly on mobile via `clamp()`), so
the same class works on phone and desktop. Never hand-set a font size again —
reach for the matching `.type-*` class.
