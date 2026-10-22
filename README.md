# Lucas McLaren | Engineering Portfolio

Static portfolio site (plain HTML + CSS) served with GitHub Pages.

## Pages
- `index.html`: Home (hero, stats, about, skills, contact)
- `experience.html`: Southland Industries internship, SAE Baja, education
- `projects.html`: Capstone, RC car, go-kart, moped, VW Jetta
- `goals.html`: Graduate school and career goals
- `style.css`: shared styles
- `carousel.js`: photo carousel (arrow buttons, swipe, keyboard; videos stay muted)
- `assets/Lucas_McLaren_Resume_2026.pdf`: downloadable resume

## Adding photos
Drop images into `images/` with these exact names and they appear automatically
(until then, a labeled placeholder frame shows):

| File | Where it shows |
|---|---|
| `images/headshot.jpg` | Home page hero |
| `images/intern/*` | Experience, Southland internship carousel (photos + muted .mp4 clips) |
| `images/baja/*` | Experience, SAE Baja carousel |
| `images/capstone.jpg` | Projects, flaw inspection system |
| `images/rc-car.jpg` | Projects, RC car |
| `images/go-kart.jpg` | Projects, go-kart |
| `images/moped.jpg` | Projects, moped |
| `images/jetta.jpg` | Projects, VW Jetta |

Landscape photos (about 16:10) work best for projects; a portrait photo for the headshot.

## Publishing
Live at https://lucasgmclaren.github.io/ (repo must be named `lucasgmclaren.github.io`; Settings → Pages → Deploy from branch `main`, `/ (root)`).
