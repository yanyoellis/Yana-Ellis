# Case File #371 - The Blackwood Earrings

Desktop-first noir portfolio project built with vanilla HTML, CSS, and JavaScript.

The repository contains two connected pages:

- `index.html` - the one-page interactive detective desk experience.
- `case-study.html` - a vertical UX case study explaining the UX logic, design decisions, interaction model, visual system, and technical structure behind the project.

The interactive project itself is English-only. The UX case study page includes a language switcher for English, Russian, Polish, and Ukrainian while preserving the same structure and typography.

## Run locally

Open `index.html` directly, or serve this folder with any static server:

```powershell
python -m http.server 4317
```

Then open:

- `http://127.0.0.1:4317/index.html`
- `http://127.0.0.1:4317/case-study.html`

## Narrative interaction path

1. Open the folder.
2. Read the report and optionally enlarge either photograph.
3. Close the file.
4. Turn over any three suspect photographs.
5. Move the coffee cup.
6. Choose the thief.
7. Restart the case from the final report.

All generated imagery used by the pages is stored under `assets/`.
