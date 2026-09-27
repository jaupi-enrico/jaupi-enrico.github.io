# jaupi-enrico.github.io

Personal homepage, served with GitHub Pages straight from this repo's `main` branch (no build step).

## Structure

- `index.html`, `about.html`, `projects.html`, `gallery.html`, `contact.html` — the pages
- `assets/style.css` — shared styles
- `assets/main.js` — mobile nav, cursor glow, scroll reveal, card tilt
- `assets/gallery.js` — gallery lightbox
- `assets/avatar.svg` — avatar
- `assets/cv/` — downloadable CV
- `assets/gallery/` — photos and certificates

## Local preview

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Deploy

Push to `main`. GitHub Pages serves this repo automatically at `https://jaupi-enrico.github.io` (Settings → Pages should show the source as the `main` branch, root).
