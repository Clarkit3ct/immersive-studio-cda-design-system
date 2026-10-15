# Event packs

An event pack is one folder that carries an event's visuals: a video or picture for each screen, scene by scene, and one small scene file that says what plays where and for how long. The desk reads it from the library. Nothing in the software changes when an event comes in, and nothing is left behind when it goes. How to write the scene file itself is in [ROOM-SCENES.md](ROOM-SCENES.md); this page is the routine around it.

The first one is Castle After Dark, NextWave's Halloween night: nine scenes, about nine minutes a loop, plus a doors moment and a photo moment.

## The routine

| When | What | Who |
| --- | --- | --- |
| At booking | The brief: a mood board or a few lines, logos as vector files (SVG or PDF) or PNGs at least 1000 px wide, any words the host wants on the walls, and the confirmed date and time. | The host |
| 2 weeks out | Scenes made at the room's shapes (below). Words on the walls come only from the host's approved lines. | re•world, or the host's designer |
| 3 days out | The folder goes into the library. Show tab → File loader → refresh. It appears under Immersive → yours and in Shows with a 📁. | Whoever made it, then Jeremy |
| Test night | Play the whole set once on the real walls at show brightness, with the room dark. | Jeremy, with the maker if possible |
| The night | Shows → the event → ▶ play. Hold a scene for photos with "hold here". | Jeremy |
| The day after | Move the folder out of the library into the event's archive, then press refresh. It is gone from the desk. | Jeremy |

## The shapes

| Screen | Make it | Notes |
| --- | --- | --- |
| West and east walls | 4 : 1, for example 3456 × 864 | One file can serve both walls with `"fit": "cover"`. The east wall is slightly wider for its height, so keep the top and bottom 3% free of anything important. |
| Floor | 7 : 4, for example 1920 × 1096 | People walk and dance on it: keep motion slow and local, never the whole floor sliding or spinning. |

Video: MP4 (H.264), 24 or 30 frames a second, 20 to 60 seconds, **under 45 MB each**, no sound (the DJ or the house system carries sound). A file that the desk will cut away from should fade in and out over its first and last second, so every cue change lands on dark.

## The folder

```
castle-after-dark/
  castle-after-dark.json      ← the scene file
  01-doors/   wall.mp4  floor.mp4
  02-crypt/   wall.mp4  floor.mp4
  ...
  09-figure/  wall.mp4  floor.mp4
```

- The folder is named for the event, the sub-folders are numbered in playing order, and the files are named for the screen.
- One scene file per event. Put a set for the whole night first (`"loop": true`), then one-scene sets for moments the host will ask for by name: the doors, the photo moment, a toast.
- Keep anything else (drafts, sources, the brief) out of this folder. Every `.json` with `sets` in the library shows on the desk.

## Checks on test night

- Nothing is stretched: the walls show 4 : 1, the floor 7 : 4.
- Words read from the far side of the floor: letters at least 6 inches tall on the wall (40 px).
- Dark scenes still have a shape you can see. A projector cannot make black, so test with the room dark.
- No light flashes more than three times a second. No fast motion across the whole floor.
- The logos are the host's real files, and the date and time on any screen match what the host confirmed.

## Who owns what

Who owns the host's logos, words and the finished scenes, and whether the studio may show them again, is set in each event's agreement with the host.

## What makes a good pack

- One world at a time: the same picture on both walls, and the floor shows that world's ground (stone under the crypt, water under the cemetery). Three different things at once reads as noise.
- A still photograph where one thing moves (a candle, fog, a curtain) reads as film. Drawn shapes over a picture read as a toy.
- About a minute a scene, so a guest who walks in at any moment sees a whole picture.
- One or two moments that are only for that event: the doors opening on the host's name, the poster at wall size for photos.
