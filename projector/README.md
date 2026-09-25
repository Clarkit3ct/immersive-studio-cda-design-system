# Projector player

The page the studio's three projectors run (west wall, east wall, floor). Everything is drawn live in the browser in the brand's type and colors: the dot mark, the words, the dot field.

Open `index.html` from a local web server (for example `python3 -m http.server`, then visit `/projector/`).

## URL options

| Option | What it does |
| --- | --- |
| `?mode=loop` | The default loop: power-on, the mark N times, a variation, the mark again, and so on |
| `?mode=mark` | The brand mark loop alone (the same animation as `motion/loader.js`) |
| `?mode=poweron` `poweroff` `gridripple` `corridor` `plotter` `figure` `typewriter` `breathe` | Each variation, looping alone |
| `?mode=words&lines=A\|B\|C` | Large words, one line at a time |
| `?mode=thanks` / `?mode=thanks2` | Thank-you cards / the floating-names screensaver (reads `names.json`) |
| `?mode=grid` | The dot field |
| `?s=west\|east\|floor` | Which surface this window is |
| `?f=x,y,w,h` | The projector frame in window pixels |
| `&n=7 &hold=45` | Mark cycles between variations; seconds per hold |

Keys: `F` fullscreen · `H` hide the label · `Space` pause · `Esc` black.

## Files

- `deck.json`, `decks/intro.json` show a slide deck spread across the three surfaces.
- `cues.json` and `flows/` hold the running order from the two opening events. They refer to video files that aren't in this repo, and each cue falls back to the mark when its video is missing.
- `names.json` holds sample names. Replace them with real guest names.
- `calibration.json` holds the room's measured size in feet.

In the studio, a separate control page drives this player. That page isn't included here: this copy is for the design (the motion, type and layout), not the room control.
