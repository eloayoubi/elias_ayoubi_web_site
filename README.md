# Elias Ayoubi – Portfolio

Persönliche Portfolio-Website von **Elias Ayoubi** – Senior IT-Berater & Lead Flutter Developer aus Darmstadt.

**Live:** https://eliasayoubi.de

## Tech-Stack

- **Angular 22** (Standalone Components, Signals, native Control Flow)
- **Angular Material 22** (Material-3-Theming mit `mat.theme()`, hell/dunkel via `color-scheme`)
- **SCSS** mit CSS-Custom-Properties (`--mat-sys-*` System-Variablen)
- **Vitest** für Unit-Tests
- **GitHub Actions** → automatisches Deployment auf **GitHub Pages** bei jedem Push auf `main`

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `src/app/data/resume.ts` | Zentrales, typisiertes Datenmodell – sämtliche Inhalte aus dem Lebenslauf |
| `src/app/sections/` | Sektionen: Hero, Über mich, Werdegang, Projekte, Skills, Bildung, Kontakt |
| `src/app/layout/` | Header (Navigation + Theme-Toggle) und Footer |
| `src/app/shared/reveal.directive.ts` | Scroll-Reveal-Animationen via IntersectionObserver |
| `src/app/core/theme.service.ts` | Hell/Dunkel-Modus mit `localStorage`-Persistenz |
| `.github/workflows/deploy.yml` | CI/CD-Pipeline (Build, Tests, Pages-Deployment) |

## Barrierefreiheit

- Semantisches HTML (Landmarks, Überschriften-Hierarchie, Listen)
- Skip-Link, sichtbarer Tastatur-Fokus, ARIA-Labels
- `prefers-reduced-motion` deaktiviert alle Animationen
- Farbschema respektiert `prefers-color-scheme`

## Lokal entwickeln

```bash
npm ci
npm start        # Dev-Server auf http://localhost:4200
npm test         # Unit-Tests (Vitest)
npm run build    # Produktions-Build nach dist/
```

## Deployment

Jeder Push auf `main` löst den Workflow aus: `npm ci` → Tests → `ng build --base-href /` → Deployment des `dist`-Outputs auf GitHub Pages (inkl. SPA-Fallback über `404.html`).
