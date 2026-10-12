# Immersive Studio CDA — Design System

A full-scale projection studio in downtown Coeur d'Alene, Idaho. Architects, builders,
designers, realtors and developers bring their drawings; the floor plan is projected on
the floor at true 1:1 scale and the elevations go up on the wall, so a client can walk
the project before it is framed.

The brand promise is **Full Scale. Full Clarity.**

This design system holds the brand's real assets, its color and type foundations, the
voice rules from the messaging guide, a set of reusable UI primitives, and a recreation
of the live marketing site.

---

## Sources

Everything here was built from materials supplied by the studio plus the live site.
None of it was invented; where something is a derivation rather than a brand-supplied
value it is flagged inline.

| Source | Where it went |
| --- | --- |
| `Brand Voice & Messaging Guide IS.pdf` (22 pp, 2026) | Content fundamentals, `guidelines/source/` |
| `Immersive Studio Color Palette.pdf` (pp. 6–8) | `tokens/colors.css`, `guidelines/source/` |
| `Immersive Studio Full Brand Kit.pdf` | Duplicate of the voice guide — no additional pages |
| Hanken Grotesk, 17 static TTFs (9 weights + italics) | `assets/fonts/`, `tokens/fonts.css` |
| Logo suite: 6 SVG + 8 PNG (lockup, mark, wordmark; glow / no-glow; black / white / off-white) | `assets/logo/` |
| `front.png` / `back.png` / `1.svg` / `2.svg` — business card artwork | `assets/brand/` |
| https://immersivestudiocda.com — live "coming soon" site | `ui_kits/website/`, all site copy |
| Instagram: https://www.instagram.com/immersivestudiocda/ | Referenced in site footer |
| Waitlist form: https://tally.so/r/b5yBV0 | Referenced in site CTAs |

Brand and creative by re•world llc. Owner: Jeremy Decker · contact@immersivestudiocda.com · 208-755-2696.

**Not supplied, and therefore absent here:** a typography specification sheet (no size
scale, no assigned weights per role), an icon library, photography, and any product
UI beyond the marketing site. The type scale and the icon approach below are
reasoned from the artifacts that do exist; see the flags in each section.

---

## Products & surfaces

There is one live digital surface today.

1. **Marketing site** (`ui_kits/website/`) — a single-page "coming soon" site, dark,
   full-bleed, with a waitlist as the only conversion. Sections: hero, what happens
   here, how a session works (5 numbered steps), proof stats, FAQ, use cases, closing
   CTA, footer.
2. **Print & environmental** — business cards exist (`assets/brand/`). The palette
   sheet explicitly reserves Beige and Black Olive for print, signage, environmental
   graphics and merchandise.

---

## Content fundamentals

Taken verbatim from the Brand Voice & Messaging Guide unless noted.

**Voice in one sentence (their words):** "We speak with the clarity of an experienced
professional, the care of a thoughtful host, and the confidence of a studio that knows
the value of seeing something at full scale."

**The brand is** premium (intentional, considered, elevated — care, precision, quality,
calm confidence, professional hospitality, attention to detail), grounded (practical,
connected to the realities of design and construction; never a technology demonstration
searching for a purpose), and expert (knowledgeable without sounding technical or
self-important — the brand does not need to announce that it is innovative).

**It must never sound** overly promotional, futuristic for the sake of it, loud,
gimmicky, tech-obsessed, or corporate and impersonal.

### Rules that change how you write

- **Lead with the human benefit.** Never open with projectors, software, resolution or
  specs unless the audience asks. Begin with what becomes possible.
- **Connect experience to decisions.** Every description of the capability eventually
  answers "why does experiencing this at full scale matter?" — it reveals spatial
  relationships, surfaces questions earlier, supports more confident approvals, reduces
  late-stage changes.
- **Name the money.** Cost of a change is the argument, not the technology.
  "$5K to $25K — typical cost of one field change order." "While changes are still
  inexpensive."
- **Naming.** Use *Immersive Studio CDA* in full on first mention, in headlines, press
  and proposals. After that: *Immersive Studio*, *the studio*, or *our space*. The
  wordmark lowercases *cda*: "Immersive Studio cda".
- **Person.** Second person to the reader ("your floor plan", "your client"), first
  person plural for the studio ("we handle the projection-ready prep"). Never
  third-person corporate ("Immersive Studio provides…").
- **Casing.** Sentence case for headlines and body. ALL CAPS only for eyebrow labels
  and the letterspaced card treatment `F U L L  S C A L E  |  F U L L  C L A R I T Y`.
  Never title case.
- **Emoji: never.** None appear in any supplied material or on the site.
- **Numerals.** Zero-padded ordinals for sequences (`01`–`05`). Numbers stay numerals
  in stats: `1:1`, `2,800± sq ft`, `$5K to $25K`, `Seven founding spots`.
- **Sentence shape.** Short declaratives, often a fragment used as a full stop.
  Contrast pairs carry the meaning: before/after, drawings/space, now/framing.
- **Punctuation.** Middle dot `·` as a separator in captions and footers
  ("Concept render · the studio floor at 1:1"). Em dashes are rare. No exclamation marks.

### Signature language — use these lines, don't paraphrase

> "Full Scale. Full Clarity."
> "Experience it before you build it."
> "Clarity before construction."
> "Step inside the plan."
> "A space that makes important decisions easier to make."

**Message pillars:** 1. Experience before commitment — *step inside the project before the
project becomes permanent.* 2. Clarity before construction — *make important decisions
while they are still easy to change.* 3. Shared understanding — *bring the entire team
inside the same vision.*

**Live copy, for tone calibration:**

> Step inside your project **before it exists.**
> A projection studio in downtown Coeur d'Alene. Your floor plan is projected at
> **true 1:1 scale**, your elevations on the wall, and your client walking the design
> with you when changes are still inexpensive.

> 01 Upload — Send your drawings. We handle the projection-ready prep.
> 02 Project — The plan is projected on the floor. Elevations take the wall.
> 03 Walk — Your client stands in the space and feels the design.
> 04 Refine — Changes marked in the room, while they're still inexpensive.
> 05 Confirm — Decisions made before construction, not during.

> The room does the talking. **Be there first.**

**Conversation tone in sales:** curious, consultative, practical, low-pressure, expert.
Answer "what do you do?" with a question: "are you familiar with those spaces that let
you experience your floor plans at full scale?"

---

## Visual foundations

### Color

Five brand colors, from the palette sheet. "Inspired by steel, concrete, stone, and the
landscape of the Northwest… a clean, understated system that feels both architectural
and approachable."

| Name | Hex | Role |
| --- | --- | --- |
| Onyx | `#262626` | Primary. Type on light, ground on print |
| Off White | `#F7F7F3` | Primary. Page ground, type on dark |
| Dove | `#A5A194` | Primary support. Secondary type, hairlines |
| Beige | `#D4CFC5` | Secondary. Print, environmental, signage, merch |
| Black Olive | `#868269` | Secondary. Print, environmental, signage, merch |

Plus **Void `#0A0A0A`** — the near-black the website actually ships (`theme-color`), one
step below Onyx. Onyx is the ink; Void is the room with the lights off.

The restraint is the point: "this restrained palette allows imagery, architecture, and
immersive experiences to introduce color, texture, and depth." Color comes from the
photograph, not from the interface. **There is no brand accent hue and none should be
introduced.** Emphasis is carried by weight, size and contrast.

Signal colors (`--signal-*`) are a derivation, not brand-supplied: low-chroma greens,
ochres and clays kept inside the stone range so an error state never looks like a
different brand. Use only where a status genuinely must be encoded.

Two themes ship: light (`:root`, off-white paper — print, documents, proposals) and dark
(`[data-theme="dark"]`, Void — the site, the studio, social). Dark is the brand's
public face; light is its paper.

### Type

**Hanken Grotesk only.** A geometric grotesk with a tall x-height and single-storey `a`
in the light weights — it is the logotype's own face, so the interface and the mark
never disagree. Nine weights plus italics are supplied.

- **Display** — Light (300) at 64–112px, tracking `-0.03em`, leading 1.02. Headlines run
  long and wrap; the *last clause goes Bold (700)* inside the same line:
  "Step inside your project **before it exists.**" That weight jump is the brand's one
  typographic flourish. Use it once per screen.
- **Headings** — Regular (400) or Light (300), tracking `-0.02em`.
- **Body** — Regular 17px, leading 1.55, measure capped at 62ch. Secondary body drops to
  Dove rather than to a smaller size.
- **Eyebrow** — 12px, Medium (500), uppercase, tracking `0.18em`. Sits above every
  section as a quiet label: "What happens here", "How a session works".
- **Card treatment** — tracking `0.42em`, uppercase, Light: `F U L L  S C A L E  |  F U L L  C L A R I T Y`.
- **Numerals** — Light and large. Step numbers `01`–`05`, stats `1:1`, `$5K to $25K`.
- **Never italic** for emphasis; use weight. Italics are available but unused in every
  supplied artifact.

*Flag: no typographic specification sheet was supplied. The scale, leading and tracking
values above are reasoned from the logo lockup, the business card and the live site.
If a type spec exists, send it and this section should be replaced by it.*

### The mark and its motif

The mark is a plane of dots drawn in one-point perspective — a projection surface seen
at an angle, dots tightening toward a hard, lit edge. It exists in glow and no-glow
variants, black / white / off-white. Everything visual in this brand is downstream of it:

- **Dot grid.** `--grid-dot` / `--grid-dot-size` reproduce it as a background. Use at
  low opacity behind dark sections, never as decoration on light paper.
- **Perspective.** Content aligns to one strong left edge and recedes right, the way the
  mark does. Full-bleed sections with a single left column beat centered layouts.
- **The lit edge.** `--glow-edge` / `--glow-soft` are the only glow effects in the
  system, reserved for the mark, for a hero edge, and for the projected-plane graphic.
  They do not go on buttons or cards.

### Backgrounds & imagery

Full-bleed, dark, and photographic where photography exists. The one supplied render is
a concept render of the studio floor — desaturated, cool, architectural, a warm point
light in a dark room. **Imagery is cool and low-saturation, never warm-filtered, never
grainy, never duotoned.** Where a photo is missing, use Void with the dot grid at 4–8%
rather than a gradient. No aggressive gradients anywhere; the only gradients in the
system are the projection falloff and the two protection gradients used to keep type
legible over imagery.

### Surfaces & cards

Cards are flat: `--surface-raised`, a 1px hairline, `--radius-md` (4px), no shadow.
Depth is a hairline and a change of ground, not elevation. Shadow (`--shadow-overlay`)
is reserved for true overlays — dialogs and menus. Radii top out at 6px; buttons, inputs
and cards all sit at 3–4px. Pills (`--radius-pill`) appear only on small status/tag
chips. Square corners are always acceptable; rounded corners above 6px are not.

### Interaction

- **Hover** — on solid surfaces, one step lighter/darker (`--accent-hover`); on ghost
  and text controls, the hairline goes to `--border-strong`. Never an opacity fade,
  never a scale-up.
- **Press** — color deepens to `--accent-press` and nothing moves. No shrink, no bounce.
- **Focus** — a 2px `--focus-ring` outline at 3px offset (Black Olive on light, Dove on
  dark). Always visible; never removed.
- **Disabled** — 40% opacity, no pointer.
- **Motion** — `--ease-standard` `cubic-bezier(.22,.61,.36,1)`; 160ms for state changes,
  260ms for movement, 900ms for a reveal. Fades and short upward translations only.
  Nothing overshoots, nothing bounces, nothing loops. Reduced-motion is honored globally
  in `tokens/base.css`.

### Transparency & blur

Blur is used in exactly two places: fixed chrome (a header) sitting over imagery
(`--blur-chrome`, 14px, with a translucent Void ground), and the scrim behind a dialog
(`--blur-scrim`). Translucent panels over photography use a protection gradient rather
than a flat wash where the type is bottom- or top-anchored.

### Layout

- Containers: 720 / 1040 / 1280 / 1440px. Site sections run 1280.
- Vertical rhythm: `--section-y` 128px between sections, 192px around the hero and the
  closing CTA. Air is the luxury signal.
- One left edge. Eyebrow, headline, body and CTA all start on it.
- The header is fixed and translucent; nothing else is fixed.
- Rules (1px hairlines) separate sections and list rows in place of boxes.

---

## Iconography

**The brand supplies no icon set, no icon font, and no icon SVGs.** The only vector
artwork in the kit is the logo suite in `assets/logo/`. The live site uses no icon
library either — its only glyphs are typographic: `↓` and `→` (U+2193, U+2192) in
buttons and links, `·` as a separator, and zero-padded numerals as the step "icons".

The system follows that:

1. **Prefer typography over icons.** A number, a rule, or a word is the brand's default
   where another system would reach for a glyph.
2. **Unicode arrows are sanctioned:** `↓` `→` `↑` `←`, set in Hanken Grotesk at the
   surrounding weight.
3. **Emoji are never used.**
4. **When a real icon is unavoidable** (a close X, a chevron, a projector), use the
   **icon kit** in `components/icons/` — 46 Lucide glyphs, geometry unmodified, with
   the stroke re-weighted from Lucide's default 2 to **1.5** so the line matches the
   mark's thin, precise geometry. Sizes 16 / 20 / 24, round caps, `currentColor`.
   Standalone SVGs live in `assets/icons/` for print and environmental work; the ISC
   licence is `assets/icons/LICENSE`. Source: `github.com/lucide-icons/lucide@main`.
   **This is a substitution and is flagged as such.** The studio supplied no icon set.
   If one is adopted, replace `components/icons/Icon.jsx` and `assets/icons/`.
5. Icons never carry color of their own; they inherit `currentColor` and sit at the
   optical weight of the text beside them. Never fill them, never tint them, never pair
   one with a step numeral.

What the 46 cover: navigation (`arrow-*`, `chevron-*`, `menu`, `x`, `external-link`),
process (`upload`, `projector`, `footprints`, `pencil-ruler`, `circle-check`), space and
drawing (`ruler`, `scan`, `frame`, `grid-2x2`, `square-dashed`, `maximize`, `move-3d`,
`layers`, `blend`, `box`, `compass`), building (`house`, `building-2`, `door-open`,
`hard-hat`, `sofa`, `lamp`), and contact / general (`mail`, `phone`, `map-pin`,
`calendar`, `clock`, `users`, `message-square`, `file-text`, `presentation`, `eye`,
`play`, `search`, `check`, `plus`, `minus`).

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills wrapper.
- `readme.md` — this file.

**Tokens** (`tokens/`) — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`effects.css`, `base.css`.

**Assets** (`assets/`)
- `fonts/` — 17 Hanken Grotesk TTFs.
- `logo/` — `logo-lockup-glow.svg` (primary), `logo-lockup-black.svg`,
  `mark-black.svg` / `mark-offwhite.svg` (mark alone), `wordmark-black.svg` /
  `wordmark-white.svg` (type alone), PNG equivalents in white / off-white / black with
  and without glow, `social-icon.png` (1080², square, dark).
- `brand/` — business card front & back (PNG + SVG).
- `icons/` — 46 line icons at stroke 1.5, plus the Lucide ISC licence.

**Guidelines** (`guidelines/`) — foundation specimen cards, one per sub-concept, plus
`source/` holding the original PDFs.

**Components** (`components/`)
- `core/` — Button, Eyebrow, Stat, Tag
- `layout/` — Section, Rule, DotField, LogoLockup
- `content/` — Card, StepItem, Accordion, Field
- `icons/` — Icon (46 glyphs, `Icon.names` / `IconNames` list)

**UI kits** (`ui_kits/`)
- `website/` — recreation of immersivestudiocda.com.

### Intentional additions

The brand supplied no component inventory, so the primitives above are authored from
scratch, sized to what the marketing site and print materials actually need. Two are
worth calling out: **DotField** (the mark's dot grid as a reusable background) and
**Eyebrow** (the letterspaced section label) exist because both appear on every supplied
artifact and would otherwise be re-hand-rolled every time. **Icon** is the third: the
brand ships no glyphs, so the kit substitutes Lucide at a re-weighted stroke rather than
leaving every consumer to pick their own set.

---

## Added for the studio build (re•world, September 2026)

These folders were added after the Claude Design export. They hold work made for the studio itself.

| Folder | What's inside |
| --- | --- |
| `diagrams/` | The studio diagrams: the space by zone (`space-web/`), the five-step session flow as panels and as SVG, the 2D plan and wall base drawings, and the wireframe and labeled zones. |
| `motion/logo-animation/` | The approved logo animation (Aug 13) as MP4 in 16:9, 1:1 and 9:16, a WebM with transparency, the source render page and its README. The ProRes 4444 masters are too big for GitHub and live in the brand kit folder on Drive. |
| `motion/logo-animation-snap/` · `motion/loader-animation/` | Two alternate cuts of the logo animation. |
| `motion/loader.js` | The dot mark built live on a canvas: dots build into the line, hold, dissolve. Use it on screens and web pages. |
| `motion/jeremy-studio-reveal-loop.gif` | Studio reveal loop. |
| `assets/logo/mark-variations/` | Dot-mark variants: confirmed mark, no-glow, dots-and-line only, cut solid black, on Onyx, lockups. |
| `projector/` | The projector player: every scene the studio's projectors show (mark loop, words, typewriter, dot field, floating-names screensaver). See `projector/README.md`. |

---

## Making scenes for the room

See [ROOM-SCENES.md](ROOM-SCENES.md): the three screens' pixel sizes, where media files go (the library folder in Drive), and the small scene file that puts a loop on all three screens from the desk, no developer in the loop.
