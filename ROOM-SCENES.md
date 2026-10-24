# Making scenes for the room

How to make something that plays on the studio's three screens without touching the software: a folder of media plus one small text file. Written for Jeremy and for the Claude he works with. Everything here is what the room software reads today (October 2026).

For a booked event (a party, a launch, a ticketed night), the routine around the scene file is in [EVENT-PACKS.md](EVENT-PACKS.md).

## The room, in numbers

Three screens, each a projector. The software draws inside the lit rectangle of each one. These are the lit sizes from the studio's saved calibration of 2026-10-06 (synced 2026-10-12); the desk's Setup → Screens lines show the live numbers. A scene made at these pixel sizes fills the screen exactly.

| Screen | Pixels (wide × tall) | Feet (across × up) | Pixels per foot |
| --- | --- | --- | --- |
| West wall | 3436 × 887 | 49.0 × 12.9 | 70 across, 69 up |
| Floor | 3348 × 1922 | 72.0 × 41.4 | 47 |
| East wall | 3325 × 814 | 50.4 × 12.4 | 66 |

The two walls are long and low (about 4 : 1). The floor is a wide rectangle (about 7 : 4). Make wall pictures at 3436 × 887 or any 4 : 1 size; floor pictures at 3348 × 1922 or any 7 : 4 size. Video the same shapes. If a file is a different shape, the software can **fit** it (whole picture, black bars) or **fill** it (covers the screen, edges cropped).

The brand font is Hanken Grotesk. The walls are dark by default; a white-ground scene reads calmer when people walk in. Keep words large: on a wall, letters under about 6 inches tall (40 px) cannot be read from the floor.

## Where files go

One folder in Google Drive on the studio PC is **the library**. The desk reads it (Show tab → File loader → pick the library folder, once). Put each scene in its own sub-folder:

```
Library/
  christmas/
    christmas.json        ← the scene file (see below)
    west.mp4
    floor.png
    east.mp4
  thanksgiving/
    thanksgiving.json
    ...
```

Rules for media files:

- Pictures: PNG or JPG. Videos: MP4 (H.264) or WebM. Under 45 MB each; a looping video of 20 to 60 seconds is plenty.
- Name files for the screen they are for (`west`, `floor`, `east`) so the scene file reads clearly.
- Nothing in the library is uploaded anywhere: the walls on the studio PC read the files straight from the folder.

## The scene file

A scene file is a flow: a list of cues, each cue saying what each screen shows and for how long. Save it as `.json` beside its media. The smallest useful one:

```json
{
  "id": "christmas",
  "title": "Christmas party",
  "sets": [
    {
      "id": "loop",
      "title": "Christmas · loops by itself",
      "kind": "loop",
      "loop": true,
      "cues": [
        {
          "t": "Snow",
          "dur": 120,
          "west":  { "video": "west.mp4",  "fit": "cover" },
          "floor": { "image": "floor.png", "fit": "cover" },
          "east":  { "video": "east.mp4",  "fit": "cover" }
        }
      ]
    }
  ]
}
```

What the fields mean:

- `id`: letters, numbers and dashes, unique among your scene files. `title`: what the desk shows.
- `sets`: usually one. `kind` is `"loop"`. `loop: true` plays the cues round and round; `false` stops after the last.
- `cues`: one or more. `t` is the cue's name on the desk. `dur` is seconds before the next cue.
- Each cue names the screens it changes: `west`, `floor`, `east`. A screen left out keeps what it had.
- A screen part is one of:
  - `{ "video": "file.mp4", "fit": "cover" }` — a video from this folder. `fit` is `"cover"` (fills, crops edges) or `"contain"` (whole picture, black bars).
  - `{ "image": "file.png", "fit": "contain" }` — a picture, same `fit` rule.
  - `{ "scene": "words", "params": { "lines": ["Merry Christmas", "from Immersive Studio"], "hold": 30 } }` — one of the software's own scenes. Useful ones:
    - `words` — one line at a time, large, with its real width in feet. `lines` (list), `hold` (seconds per line).
    - `mark` — the brand mark breathing. No params.
    - `ticker` — a word circling the floor's edge: `{ "word": "HAPPY THANKSGIVING" }`.
    - `grid` — the one-foot grid.
    - `black` — nothing.
    - Add `"invert": true` to any of these for white ground and black ink (the White room look).

- A soundtrack, on the set: `"sound": "track.mp3"` (a file in this folder; MP3 or M4A). It plays from the floor's window across the set's cues; the three wall windows share the studio PC's speakers. A cue can carry its own `"sound"` to change it there, or `"sound": false` for silence. A set without one stops it; ⏸ pause pauses it; black and power off end it. For a quieter track: `"sound": { "url": "track.mp3", "vol": 0.5 }`.

Media paths are relative to the scene file's folder (`west.mp4`, or `clips/west.mp4` for a sub-folder).

## Trying it on the desk

1. Save the folder into the library in Drive. Wait for Drive to sync on the studio PC.
2. On the desk: Show tab → File loader → **refresh**. The status line counts your scene files.
3. Your scene appears in two places: **Immersive → yours** (one button: puts the first cue on every screen that is not held) and **Shows → flow list** with a 📁 in front (the whole set, with ▶ play, ⏸ pause, prev, next). ⏸ pause stops all three screens where they are; press it again to carry on.
4. Change the file, press refresh, play again. No restart, nothing to install.

If a media file is named wrong, the status line under the File loader says what was not found, and that screen goes black for that cue.

## What a scene cannot do yet

- Reach the Mac's remote tiles as pictures (the Mac shows the file's name instead; the walls are right).
- Change a screen that is on **hold**. That is on purpose.

## Sending a fix to the software itself

For now: the idea box at the bottom of the desk's Setup tab, or a text to Roger with the file. Code changes go through a GitHub branch and a pull request once that is set up; the software is CCG's and the room runs the main branch, so nothing lands there without a review and the test run.
