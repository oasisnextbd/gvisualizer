# QForge tutor studio (`tutor/`)

An exam-paper builder for private tutors: filter a question bank by topic, add questions to a paper,
print it (A4) with its mark scheme. It is a separate product from the BUET term-final pages and shares
only the sign-in (`shared/fb.js`) and the team dashboard.

## Who gets in

Only people on the **tutors** list (team dashboard → **Tutors**, admins only) and the admins themselves.
The list is separate from the allowed students: a signed-in BUET student who is not on it sees
"Not available yet" and the database refuses them the questions (`firebase/firestore.rules`,
`tutors/{email}` and `tutorBank/{id}`).

Nothing links to this page from the rest of the site, and it asks search engines not to index it.

## Where the questions live

- **Shared bank**: in Firestore (`tutorBank/part-000`, …), uploaded from the dashboard's Tutors tab as one
  JSON file. **Never commit that file here**: this repository is public. Keep it on a private drive.
- **A tutor's own questions**, hidden bank questions, the current paper and the exam header: in that tutor's
  browser (`localStorage`, one set per account). They can download and import a backup on the
  *Syllabus & backup* tab.

A bank question is an object like this (only `id` and `stem` are required):

```json
{ "id": "q_hsc_phy1_vec1", "curriculum": "HSC", "subject": "HSC_PHY1", "chapter": "অধ্যায় ২: ভেক্টর (Vector)",
  "microTopic": "নদী ও স্রোত", "type": "CQ", "highYield": true, "source": "…", "stem": "…",
  "subparts": [{ "label": "ক", "text": "…", "marks": 1 }], "options": [], "marks": 10, "solution": "…",
  "clonableTemplate": "HSC_PHY_RIVER" }
```

`curriculum` is `HSC`, `IAL` or `IGCSE`; `subject` and `chapter` must match the syllabus list at the top of
`tutor.js` for the filters to find the question; `type` is `CQ`, `MCQ` or `STRUCTURED`.

## What is public and what is not

The page's code (layout, the "new numbers" formulas, print styles) is in this public repository, so anyone can
read it. The question bank is not. Access is checked by the database, not by the page.

## Files

- `index.html`: the page. `tutor.js`: all behaviour (an ES module). 
- `tutor.css`: **built** from `tutor.src.css` with Tailwind. After changing class names in the HTML/JS or the
  source stylesheet, rebuild from the repository root:

  ```
  npx tailwindcss@3.4.17 -i tutor/tutor.src.css -o tutor/tutor.css --content "tutor/*.{html,js}" --minify
  ```

  and bump the `?v=` on the two links in `index.html`.

## Testing locally

Start the emulators as in `firebase/README.md`, serve the repository root (`python3 -m http.server`), and open
`/tutor/?emu=1` and `/team/?emu=1#tutors`.
