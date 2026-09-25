Use `Icon` only where typography genuinely cannot do the job. This brand prefers a numeral, a rule or a word over a glyph, and its own artwork is the logo suite alone.

```jsx
<Icon name="arrow-right" size={20} />
<Icon name="projector" size={24} label="Projection session" />
<Icon name="x" size={20} style={{ color: 'var(--text-muted)' }} />
```

Sizes: 16 (inline with 13–15px text), 20 (default, inline with body), 24 (standalone). Stroke is fixed at 1.5 to match the mark's thin geometric line — Lucide's own default of 2 is too heavy for this brand. Icons inherit `currentColor` and never take a fill or a color of their own.

**This is a flagged substitution.** Immersive Studio supplied no icon set; these are Lucide (ISC licence, `assets/icons/LICENSE`) with the stroke re-weighted. The standalone SVGs are in `assets/icons/` for copying into print or environmental work. If the studio adopts a real set, replace both.

Groups in the kit: navigation (`arrow-*`, `chevron-*`, `menu`, `x`, `external-link`), process (`upload`, `projector`, `footprints`, `pencil-ruler`, `circle-check`), space and drawing (`ruler`, `scan`, `frame`, `grid-2x2`, `square-dashed`, `maximize`, `move-3d`, `layers`, `blend`, `box`, `compass`), building (`house`, `building-2`, `door-open`, `hard-hat`, `sofa`, `lamp`), and contact (`mail`, `phone`, `map-pin`, `calendar`, `clock`, `users`, `message-square`, `file-text`, `presentation`, `eye`, `play`, `search`, `check`, `plus`, `minus`).
