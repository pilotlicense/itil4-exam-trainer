/*
 * Question bank registry. Each file in js/questions calls:
 *
 *   ITIL.add(criterion, topic, [ ...questions ])
 *
 * where criterion is a syllabus assessment criterion such as '7.1', and each question is:
 *
 *   t  type: 's' standard, 'n' negative, 'm' missing word(s), 'l' list
 *   q  stem. Missing-word stems mark the gap with [?].
 *   o  four options, CORRECT ANSWER FIRST (options are shuffled when displayed). Not used by list questions.
 *   s  list questions only: four statements, the TWO TRUE STATEMENTS FIRST.
 *   e  explanation of the correct answer
 *   w  optional "why not" notes: one per wrong option (o[1..3]) or per false statement (s[2..3])
 */
(function (root) {
  'use strict';

  const TYPES = { s: 'standard', n: 'negative', m: 'missing', l: 'list' };
  const ITIL = root.ITIL || (root.ITIL = {});
  const counters = {};

  ITIL.bank = [];

  ITIL.add = function add(criterion, topic, questions) {
    const lo = Number(criterion.split('.')[0]);
    const prefix = criterion + '-' + topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    questions.forEach((item) => {
      counters[prefix] = (counters[prefix] || 0) + 1;
      ITIL.bank.push({
        id: prefix + '-' + counters[prefix],
        lo,
        ac: criterion,
        topic,
        type: TYPES[item.t],
        q: item.q,
        o: item.o,
        s: item.s,
        e: item.e,
        w: item.w || [],
      });
    });
  };
})(globalThis);
