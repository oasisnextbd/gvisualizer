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

## Topic builder (`engine.js`, `topics/`)

The **Topic builder** tab writes questions instead of storing them. A topic file (`topics/hsc-math1-ch1.js`)
describes one chapter as:

- **families**: creative-question types. Each makes its own numbers from a seed, a stem, and several
  alternative *angles* for each of the parts ক (2), খ (4), গ (4). A new seed gives the same question with new
  numbers; another angle asks something different about the same data.
- **mcqs**: multiple-choice makers that return the right answer and three wrong answers built from the usual
  mistakes.

`engine.js` supplies exact integer and fraction arithmetic, matrix operations and the LaTeX writers, so a mark
scheme is always computed, never typed. Maths is written between `$...$` and typeset by KaTeX
(`vendor/katex/`, MIT licence, kept in the repository so the page needs no CDN).

Rules for a new topic file:

1. Write the scope at the top: what the syllabus teaches for the chapter and what is deliberately left out.
   Use nothing outside it, even if a method would be shorter.
2. Write the questions yourself. Textbooks and guide books are a reference for scope and difficulty only;
   their questions are not copied, with or without changed numbers.
3. Reject awkward numbers with `until(...)` instead of patching them afterwards.
4. Register the file in `topics/index.js`, then sweep it: build every family, every angle and every MCQ for a
   few hundred seeds, check each family's own invariants (for example A·A⁻¹ = I), and render every formula.
5. Have a subject tutor read one example of every angle before tutors use it.

A generated question carries a small `gen` record (topic, type, seed, angles), which is what lets
**New numbers** and **Make Set B** re-roll it later from the bank or the exam paper.

## What is public and what is not

The page's code (layout, the "new numbers" formulas, print styles) is in this public repository, so anyone can
read it. The question bank is not. Access is checked by the database, not by the page.

## Files

- `index.html`: the page. `tutor.js`: all behaviour (an ES module). `engine.js` and `topics/`: the topic builder.
- `tutor.css`: **built** from `tutor.src.css` with Tailwind. After changing class names in the HTML/JS or the
  source stylesheet, rebuild from the repository root:

  ```
  npx tailwindcss@3.4.17 -i tutor/tutor.src.css -o tutor/tutor.css --content "tutor/*.{html,js},tutor/topics/*.js" --minify
  ```

  and bump the `?v=` on the two links in `index.html`.

## Testing locally

Start the emulators as in `firebase/README.md`, serve the repository root (`python3 -m http.server`), and open
`/tutor/?emu=1` and `/team/?emu=1#tutors`.
