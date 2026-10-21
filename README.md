# ITIL® 4 Foundation Practice Exam

A browser-based trainer that simulates the ITIL 4 Foundation exam. Each attempt draws 40
questions at random from a bank of 364 original questions, weighted to match the official
syllabus. You get feedback after every answer and a pass or fail result at the end.

## Running it

No build step and no dependencies. Either:

- open `index.html` in a browser (double-click works), or
- serve the folder: `python3 -m http.server 8000`, then visit <http://localhost:8000>.

## Exam format

Checked against the PeopleCert *ITIL 4 Foundation Candidate Syllabus* v4.2.0 (March 2025):

| | |
|---|---|
| Questions | 40 multiple choice, 1 mark each, options A–D |
| Duration | 60 minutes (75 if sitting in a non-native language) |
| Pass mark | **26 / 40 (65%)** |
| Negative marking | None |
| Question styles | Standard, List, Missing word(s), Negative |

All four question styles are single-answer, as in the real exam:

- **Standard:** a question with four options.
- **List:** four numbered statements, two of them correct. You choose the option that names the
  correct pair, such as "B. 2 and 3". The real exam has no checkbox questions.
- **Missing word(s):** choose the word(s) that complete a sentence.
- **Negative:** worded with **NOT**. The syllabus says these are used "as an exception", so
  each attempt has at most two.

## How questions are chosen

Marks per learning outcome follow the official weighting:

| Learning outcome | Marks | Weight | Bank size |
|---|---|---|---|
| LO1 Key concepts of service management | 5 | 12.5% | 48 |
| LO2 The ITIL guiding principles | 6 | 15% | 59 |
| LO3 The four dimensions of service management | 2 | 5% | 25 |
| LO4 The ITIL service value system | 1 | 2.5% | 13 |
| LO5 The service value chain | 2 | 5% | 24 |
| LO6 Purpose and key terms of 15 ITIL practices | 7 | 17.5% | 66 |
| LO7 Seven ITIL practices in detail | 17 | 42.5% | 129 |

The syllabus does not split marks below the learning-outcome level, so within each outcome:

- every assessment criterion is examined at least once (for example, LO6 is 5 practice purposes
  plus 2 key terms);
- the remaining marks go to the least-covered topics, so the seven LO7 practices each get 2–3
  questions and LO2 covers five different principles;
- questions used in your last four attempts are avoided where possible;
- answer options, and the order of list statements, are shuffled on every attempt.

## Features

- Submit each answer to see a correct or incorrect result. Wrong answers show the correct answer,
  an explanation, and why your choice was wrong (or, for list questions, why each false
  statement is false).
- A running score out of 40, with a progress track and a "needed to pass" hint.
- A soft 60-minute countdown. You can keep going past it, and the time taken is reported.
- A results screen with your grade, pass or fail, a score breakdown by learning outcome, and a
  review of every question you got wrong.
- Progress is saved in the browser, so a refresh or "Save & exit" lets you resume.
- Keyboard support: <kbd>A</kbd>–<kbd>D</kbd> to choose, arrow keys to move, <kbd>Enter</kbd> to
  submit and move on.
- Light and dark themes, a responsive layout, and support for reduced motion.

## Adding questions

Questions live in `js/questions/`, one file per learning outcome (LO7 has one file per practice).
Each file calls `ITIL.add(criterion, topic, [...])`. The format is documented at the top of
`js/bank.js`. In short, put the correct option **first** in `o`, or for list questions put the
two true statements **first** in `s`. The app shuffles them for display.

After editing, run the checks:

```sh
npm test        # or: node scripts/validate.js
```

The validator checks every question's structure and simulates 5,000 exams. It confirms each
exam matches the blueprint, respects the caps on negative and list questions, and always marks
the right answer.

## Notes

- PeopleCert released **ITIL Foundation (Version 5)** in February 2026 with a different syllabus,
  and plans to retire ITIL 4 exams on 31 December 2027. This trainer covers **ITIL 4** only.
- This is an unofficial study aid, not affiliated with or endorsed by PeopleCert or AXELOS.
  ITIL® is a registered trademark of PeopleCert. All questions are original practice items
  written to the published syllabus. They are not real exam questions.
