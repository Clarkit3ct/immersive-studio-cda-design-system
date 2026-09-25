# Immersive Studio — logo animation (APPROVED)

```
project:  2605-CDA-ImmersiveStudio (re•world studio)
date:     2026-08-13
status:   APPROVED — this is the one. Roger picked v3.2 from four variants.
runtime:  4.23s · 30fps · 127 frames
source:   the site's own loader.js, driven frame-by-frame. Not a screen recording.
```

## What happens

The mark builds left to right into the bright line — the real site loader, at 1.45× speed.
A white bar then sweeps in from off-frame right, revealing the wordmark behind it as it
travels, so the letters surface right to left. The bar is dimensioned from the mark's own
bright line (same height, same weight, derived from the same constants), so when it
arrives it reads as rejoining the logo rather than hitting it. On contact it vanishes, the
mark flashes and recoils a few pixels, and a wave runs right to left through the dot field.
The dots keep a faint breath at rest.

## Files

| File | Use |
|---|---|
| `immersive-lockup_ALPHA-ProRes4444_1920x1080.mov` | **Master.** True alpha channel. For editing/compositing over footage |
| `immersive-lockup_ALPHA-ProRes4444_1080x1080.mov` | Square master with alpha |
| `immersive-lockup_ALPHA.webm` | VP9 + alpha, 1.2 MB. The web-friendly transparent format |
| `immersive-lockup_1920x1080.mp4` | Landscape, on brand background |
| `immersive-lockup_1080x1080.mp4` | Square, for feed posts |
| `immersive-lockup_1080x1920.mp4` | Vertical, for stories/reels |
| `final-frame-reference.png` | The resting frame, for checking against the brand kit |
| `_source_render.html` | Regenerates the whole thing. Edit and re-run rather than re-record |

## Brand accuracy

The resting lockup was measured against `BRAND KIT/Logos/Immersive Studio Full no glow
white.png`, not eyeballed: wordmark height to mark height within **0.3%** of spec, gap
within **1 pixel**, vertical centring effectively exact. The wordmark is the brand kit's
own `logo font white .svg` (outlined vector), so the letterforms are the real ones.

The loader's ambient bloom and shadow-blur decay to near zero as the lockup resolves, so
the final frame matches the static no-glow logo. The bleed gradient and rail fade are kept
because they are part of the mark in the brand SVG.

## Tuning

All in `_source_render.html`: `BAR_DUR` 0.58s (bar travel), the `p^2.15` acceleration
curve, `RIP_DUR` 0.74s (wave speed), the flash width `0.095`, and the 4px mark recoil.

Earlier variants kept for reference in `../26-0813-LOGO-ANIMATION-TESTS/` (v3, v3.2, v4,
v4.1), plus `../26-0813-LOGO-ANIMATION-FINAL/` (the calm no-snap version) and
`../26-0813-LOGO-ANIMATION-SNAP/` (superseded overshoot version).
