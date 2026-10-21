/*
 * Exam assembly and grading. Pure functions with no DOM access, so the same code runs in the
 * page and in scripts/validate.js.
 */
(function (root) {
  'use strict';

  // The six ways to choose two of four list statements, as the numbers shown on screen.
  const PAIRS = [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];

  function shuffle(list, rng) {
    const out = list.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function pick(list, rng) {
    return list[Math.floor(rng() * list.length)];
  }

  // Prefer the least-used topic so marks spread evenly (for example, each of the seven LO7
  // practices gets two or three questions), then prefer questions not seen in recent attempts.
  function choose(candidates, topicCount, recent, rng) {
    const least = Math.min(...candidates.map((q) => topicCount.get(q.topic) || 0));
    let options = candidates.filter((q) => (topicCount.get(q.topic) || 0) === least);
    const fresh = options.filter((q) => !recent.has(q.id));
    if (fresh.length) options = fresh;
    return pick(options, rng);
  }

  function drawSection(pool, section, recent, rng) {
    const picked = new Set();
    const topicCount = new Map();
    const take = (candidates) => {
      if (!candidates.length) return false;
      const q = choose(candidates, topicCount, recent, rng);
      picked.add(q);
      topicCount.set(q.topic, (topicCount.get(q.topic) || 0) + 1);
      return true;
    };

    for (const [criterion, count] of Object.entries(section.min)) {
      for (let i = 0; i < count; i++) take(pool.filter((q) => q.ac === criterion && !picked.has(q)));
    }
    while (picked.size < section.marks) {
      if (!take(pool.filter((q) => !picked.has(q)))) break;
    }
    return Array.from(picked);
  }

  // Swap questions of a capped type for uncapped ones from the same criterion (and topic, when
  // possible), so the per-outcome weighting is unchanged.
  function applyCaps(chosen, bank, caps, recent, rng) {
    const result = chosen.slice();
    for (const [type, max] of Object.entries(caps)) {
      const excess = shuffle(result.filter((q) => q.type === type), rng).slice(max);
      for (const q of excess) {
        const used = new Set(result.map((r) => r.id));
        const swaps = bank.filter((r) => r.ac === q.ac && !used.has(r.id) && !(r.type in caps));
        if (!swaps.length) continue;
        const sameTopic = swaps.filter((r) => r.topic === q.topic);
        const pool = sameTopic.length ? sameTopic : swaps;
        const fresh = pool.filter((r) => !recent.has(r.id));
        result[result.indexOf(q)] = pick(fresh.length ? fresh : pool, rng);
      }
    }
    return result;
  }

  // Decide how a question is shown. For list questions, `order[i]` is the statement displayed
  // as number i + 1, and `pairs` are the four answer options ("1 and 2", ...), one of which
  // names the two true statements. `answer` is the index (0-3, i.e. A-D) of the correct option.
  function present(q, rng) {
    const order = shuffle([0, 1, 2, 3], rng);
    if (q.type !== 'list') return { id: q.id, order, answer: order.indexOf(0) };

    const truePair = [order.indexOf(0) + 1, order.indexOf(1) + 1].sort((a, b) => a - b);
    const isTrue = (p) => p[0] === truePair[0] && p[1] === truePair[1];
    const pairs = [truePair, ...shuffle(PAIRS.filter((p) => !isTrue(p)), rng).slice(0, 3)]
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return { id: q.id, order, pairs, answer: pairs.findIndex(isTrue) };
  }

  function buildExam({ bank, blueprint, caps = {}, recent = [], rng = Math.random }) {
    const seen = new Set(recent);
    let chosen = [];
    for (const section of blueprint) {
      chosen = chosen.concat(drawSection(bank.filter((q) => q.lo === section.lo), section, seen, rng));
    }
    return shuffle(applyCaps(chosen, bank, caps, seen, rng), rng).map((q) => present(q, rng));
  }

  function countCorrect(items, answers) {
    return answers.reduce((n, a, i) => n + (a === items[i].answer ? 1 : 0), 0);
  }

  function breakdown(items, answers, byId, blueprint) {
    return blueprint.map((section) => {
      let total = 0;
      let correct = 0;
      items.forEach((item, i) => {
        if (byId.get(item.id).lo !== section.lo) return;
        total += 1;
        if (answers[i] === item.answer) correct += 1;
      });
      return { lo: section.lo, title: section.title, total, correct };
    });
  }

  (root.ITIL = root.ITIL || {}).engine = { PAIRS, shuffle, present, buildExam, countCorrect, breakdown };
})(globalThis);
