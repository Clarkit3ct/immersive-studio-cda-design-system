# UI kit — immersivestudiocda.com

A recreation of the live marketing site (fetched August 2026). One page, dark ground,
waitlist as the only conversion. All copy is verbatim from the live site.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Mounts the whole site. Open this. |
| `Website.jsx` | Composes every section and owns the waitlist dialog state. |
| `SiteHeader.jsx` | Sticky translucent header: lockup, one nav link, small solid CTA. |
| `SiteHero.jsx` | Glow lockup on a dot field with the lit projection edge, subhead, primary CTA, `↓` scroll link. |
| `SiteWhat.jsx` | "Step inside your project **before it exists.**" plus the render figure. |
| `SiteProcess.jsx` | Steps `01`–`05`, hairline-separated. |
| `SiteProof.jsx` | Three stats: `1:1`, `Any size`, `$5K to $25K`. |
| `SiteFaq.jsx` | Three-item accordion. |
| `SiteUseCases.jsx` | Seven uses as a numbered hairline list; hover raises a row to full contrast. |
| `SiteCta.jsx` | "The room does the talking. **Be there first.**" |
| `SiteFooter.jsx` | Wordmark, email, location. |
| `WaitlistDialog.jsx` | Fake waitlist form → confirmation state. Stands in for the Tally form. |

## Interactions

- **Join the list** (header, hero, closing) opens `WaitlistDialog`; submit shows the
  confirmation panel; click the scrim or Cancel to dismiss.
- **FAQ** opens one panel at a time, first open on load.
- **What happens here** jumps to `#what`.
- **Use cases** raise to full contrast on hover.

## Known gaps

- **`studio-render.jpg` was not supplied.** The figure renders a labelled placeholder
  rather than an invented image. Drop the real render into `assets/` and swap the
  `DotField` in `SiteWhat.jsx` for an `<img>`.
- The real waitlist posts to `https://tally.so/r/b5yBV0`; this dialog is local only.
- The live site's exact section paddings and hero height were not read from its
  stylesheet — the source was the rendered page, not its CSS. Rhythm here follows the
  design system's `--section-y` tokens, which the site's proportions are consistent with.
