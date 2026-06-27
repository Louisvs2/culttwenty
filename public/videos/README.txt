Lege hier die finale Showreel-Datei als "showreel.mp4" ab.

Empfohlene Spezifikation:
- Format: MP4 (H.264), 1920x1080 oder größer
- Dauer: 15–40 Sekunden, nahtlos loopbar
- Dateigröße: optimiert für Web (Ziel < 8 MB), z. B. via Handbrake oder ffmpeg
- Kein Ton erforderlich (Hero-Video startet stumm), optionaler Ton wird über den Mute-Toggle steuerbar

Beispiel-Komprimierung mit ffmpeg:
ffmpeg -i showreel-master.mov -vcodec h264 -crf 23 -preset slow -movflags +faststart showreel.mp4

Referenziert in: components/sections/VideoHero.tsx (src="/videos/showreel.mp4")
