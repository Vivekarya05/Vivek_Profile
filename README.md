# Vivek Bharadwaj Aryasomayajula: profile site

Static site with two role profiles and a front page that points to each.

| Page | For |
| --- | --- |
| `index.html` | Front page: choose a profile |
| `energy-analyst.html` | Energy market analyst roles (AEMO / NEM data, constraints, forecasting, BESS) |
| `ict-business-analyst.html` | ICT business analyst roles (requirements, process, CRM/ERP, UAT, reporting) |

Each profile opens with a diagram drawn in its own field's notation: a single-line
diagram of the NEM's five regions and six interconnectors on the energy page, and a
BPMN process from need to go-live on the BA page. Both are interactive: select a
region, interconnector or step to read about it.

## Structure

- All content is plain HTML, so it shows in link previews, search results and with JavaScript off.
- `styles.css` holds everything visual. Colours are tokens at the top, with a dark theme.
- `app.js` only handles the theme switch, the mobile menu and the diagram captions.
- Fonts: Schibsted Grotesk (text) and Barlow Condensed (name, headings, diagram labels), from Google Fonts.
- `assets/og-*.png` are the link-preview images used by LinkedIn and others.

## Keeping it current

- Job titles must match the CV and LinkedIn exactly. Check the Western Sydney University title in particular.
- Add a one-line finding to each project once you have one, such as "SA1 separated from VIC1 in X% of intervals in 2025, mostly when Heywood was binding". Findings are what hiring managers remember.
- Add links for the forecasting projects when the code or write-ups are public, and change "Notes on request" to "Source code".
- A BA-focused CV (`assets/Vivek_Bharadwaj_CV_BA.pdf`) should replace the CV link on the BA page.
- Update "Updated" in the contact block when you change content.

## Publishing

GitHub Pages serves this repo. Keep the root and `docs/` folders identical, or set
Pages to one folder (Settings, Pages) and delete the other copy.
