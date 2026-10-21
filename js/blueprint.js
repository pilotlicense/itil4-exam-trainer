/*
 * Exam rules and blueprint, from the PeopleCert ITIL 4 Foundation candidate syllabus
 * v4.2.0 (March 2025): 40 questions worth 1 mark each, 60 minutes, pass mark 26 (65%).
 */
(function (root) {
  'use strict';

  const ITIL = root.ITIL;

  ITIL.exam = {
    questions: 40,
    passMark: 26,
    minutes: 60,
    // The syllabus says negative questions are used only "as an exception", and list
    // questions are a minority of the paper, so cap how many of each one exam can contain.
    caps: { negative: 2, list: 8 },
  };

  // Marks per learning outcome are the official weighting. The syllabus does not split marks
  // between the assessment criteria inside an outcome, so `min` makes sure every criterion is
  // examined; any remaining marks go to the least-covered topics (see engine.js).
  ITIL.blueprint = [
    { lo: 1, marks: 5, title: 'Key concepts of service management', min: { '1.1': 1, '1.2': 1, '1.3': 1 } },
    { lo: 2, marks: 6, title: 'The ITIL guiding principles', min: { '2.1': 1, '2.2': 4 } },
    { lo: 3, marks: 2, title: 'The four dimensions of service management', min: { '3.1': 2 } },
    { lo: 4, marks: 1, title: 'The ITIL service value system', min: { '4.1': 1 } },
    { lo: 5, marks: 2, title: 'The service value chain', min: { '5.1': 1, '5.2': 1 } },
    { lo: 6, marks: 7, title: 'Purpose and key terms of 15 ITIL practices', min: { '6.1': 5, '6.2': 2 } },
    { lo: 7, marks: 17, title: 'Seven ITIL practices in detail', min: { '7.1': 17 } },
  ];
})(globalThis);
