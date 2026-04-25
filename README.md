# FocusTube

A simple Chrome extension that removes YouTube distractions and leaves only the video.

## What it does

- Hide everything – Clears away comments, recommendations, sidebar, and all other clutter.
- Just the video – Only the video player remains visible, even the video durations and controls are hidden. Pure immersion.
- Restore – Brings everything back with one click.

## Installation

### From source (Developer mode)

1. Download or clone this repository (soon available in the chrome store)
2. Open Chrome and go to chrome://extensions/
3. Enable Developer mode (toggle in top right)
4. Click Load unpacked
5. Select the folder containing the extension files
6. The extension icon should appear in your toolbar

## How to use

1. Go to any YouTube video page
2. Pin the extension.
3. Click the FocusTube icon in your browser toolbar
4. Click "Hide All Distractions" – only the video remains
5. Click "Restore" – everything comes back

## Tree  
```
FocusTube  
├── app  
│   ├── app.js  
│   ├── icons  
│   │   ├── yt_focus_icon_lg.png  
│   │   ├── yt_focus_icon.png  
│   │   └── yt_focus_icon_sm.png  
│   ├── manifest.json  
│   ├── popup.html  
│   └── popup.js  
├── FocusTubeScrn.png  
├── FocusTubeScrn_rszd.png  
└── LICENSE  
```
  
## Technical details

- Built with Manifest V3
- Only runs on YouTube pages
- Minimal permissions (only activeTab)

## Known quirks
- You can click on the video or press the spacebar to play/stop the video
- Commands with keys: "J": 10 sec back, "K": stop/play, "L":10 sec next, "F": fullscreen mode toggle.
- Clicking buttons on non-YouTube pages does nothing (and shows a harmless console warning)

## License

MIT LICENSE

---

Enjoy distraction-free YouTube watching!
