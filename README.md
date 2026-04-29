# FocusTube

A simple Chrome extension that removes YouTube distractions and leaves only the video.

## What it does

- Hide everything – Clears away comments, recommendations, sidebar, and all other clutter.
- Just the video – Only the video player remains visible, even the video durations and controls are hidden. Pure immersion.
- Restore – Brings everything back with one click.

## Installation

### From source (Developer mode)  

1. [Install](https://chromewebstore.google.com/detail/kgocihicnnfpnghdglhgnnmpoiiinjfl?utm_source=item-share-cb)
2. The extension icon should appear in your extension list
3. Pin the extension in you toolbar.

## How to use

1. Go to any YouTube video page
2. Click the FocusTube icon in your browser toolbar
3. Click "Hide All Distractions" – only the video remains
4. Click "Restore" – everything comes back

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
