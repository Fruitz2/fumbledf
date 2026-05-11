# $FUMBLED — landing page

> two guys. one roulette account. zero plan.
>
> the ball is loose. scoop it.

This is a Vite + React + Tailwind landing page built to deploy to Vercel.

---

## 1. Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. Hot reload is on.

## 2. Build

```bash
npm run build
```

Output goes to `dist/`.

## 3. Deploy to Vercel

Easiest path:

```bash
npm i -g vercel
vercel deploy
```

Or push the repo to GitHub and import it on https://vercel.com — Vercel auto-detects Vite, no config needed.

---

## 4. Customize before launch

A few spots you'll want to edit:

| Where | What |
|---|---|
| `src/components/Hero.tsx` | The contract address strip — paste your real CA. |
| `src/components/Hero.tsx` | The "Recover the Fumble" button — link it to your pump.fun coin url. |
| `src/components/ScoopSteps.tsx` | The big bottom CTA `href` — same pump.fun url. |
| `src/components/StreamEmbed.tsx` | Replace `src="about:blank"` with `https://pump.fun/coin/<your-ca>`. |
| `src/components/Footer.tsx` | Twitter/X, Telegram, pump.fun links. |
| `src/components/TickerTape.tsx` | The `STATS` array — write your own dumb ticker lines. |
| `src/components/DevsSection.tsx` | Names, scouting reports, stat lines (BRETT and KEVIN are placeholders). |

Tone rule: **never break character on the page**. Anything that sounds aspirational, professional, or
"web3-y" should be replaced with something dumber. The whole bit lives or dies on commitment.

---

## 5. What's already in the page

- Sticky **score bug** at the top, broadcast style. House score climbs on its own.
- Bottom **scrolling ticker** with stupid stats — the most clipped element on these sites.
- **Football cursor** that follows the mouse and tumbles when you move fast.
- **Fumble-O-Meter** with a live LED counter and a Generational Wealth thermometer (currently 0.04%).
- **Coach's Playbook** — a chalkboard X's-and-O's diagram that replaces the tokenomics section.
- **Adopt-a-Fumbler** — the sad-piano sponsor parody.
- **Stream embed** with a TV frame and corner channel bug — drop your pump.fun coin url in.
- **Air horn button** + **stadium crowd noise toggle** — both synthesized via the Web Audio API,
  no audio files needed (smaller bundle, no licensing).
- TV grain + scanlines overlay on top of everything.

## 6. Type system

Tailwind tokens defined in `tailwind.config.js`:

- `turf` `#0d6e2a` — astroturf green
- `chalk` `#f5f1e3` — broadcast white
- `ref` `#101010` — ref-stripe black
- `espn` `#cc0000` — accent red
- `bug` `#ffd400` — score-bug yellow
- `rust` `#a23b1f` — football brown

Fonts (Google Fonts, loaded in `index.html`):

- `font-display` — Anton (chunky condensed sportscast type)
- `font-marker` — Permanent Marker (telestrator scribbles)
- `font-ticker` — VT323 (LED-style monospace)
- `font-body` — DM Mono (regular monospace)

## 7. Streaming setup (Fedora)

1. `flatpak install flathub com.obsproject.Studio`
2. `sudo dnf install pavucontrol qpwgraph`
3. In OBS → Settings → Stream → Service: **Custom**. Get the RTMP server + stream key from pump.fun
   ("Start Livestream" → choose RTMP) and paste them in.
4. Sources: Audio Input Capture (your mic), Window Capture (PipeWire) for the casino tab,
   Application Audio Capture (PipeWire) for music routed via `pavucontrol` to a separate sink.
5. Test record locally for 30s before going live. Don't skip this.

---

## 8. Notes on bundle size

The site uses zero image assets — every visual is SVG, CSS gradients, or text. Every audio sound
is synthesized in the browser. Cold-load is well under 100 KB compressed.
