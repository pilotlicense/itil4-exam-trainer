#!/usr/bin/env node
/*
 * Checks the question bank and simulates exam assembly.
 * Usage: node scripts/validate.js
 *
 * Loads the same scripts as index.html (except the DOM controller), so what is checked here
 * is exactly what the page uses.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]).filter((src) => !src.endsWith('app.js'));
for (const src of scripts) {
  vm.runInThisContext(fs.readFileSync(path.join(root, src), 'utf8'), { filename: src });
}

const { bank, blueprint, exam, engine } = globalThis.ITIL;
const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

// ---------- Static checks on every question ----------

const stems = new Map();
for (const q of bank) {
  if (!q.type) fail(q.id, 'unknown type');
  if (!q.q || !q.e) fail(q.id, 'missing stem or explanation');

  const items = q.type === 'list' ? q.s : q.o;
  if (!Array.isArray(items) || items.length !== 4) fail(q.id, `needs exactly 4 ${q.type === 'list' ? 'statements' : 'options'}`);
  else if (new Set(items.map((s) => s.toLowerCase().trim())).size !== 4) fail(q.id, 'duplicate options');
  if (q.type === 'list' && q.o) fail(q.id, 'list questions use s, not o');
  if (q.type !== 'list' && q.s) fail(q.id, 'only list questions use s');

  const expectedNotes = q.type === 'list' ? 2 : 3;
  if (q.w.length && q.w.length !== expectedNotes) fail(q.id, `needs ${expectedNotes} why-not notes, has ${q.w.length}`);

  const blanks = (q.q.match(/\[\?\]/g) || []).length;
  if (q.type === 'missing' && blanks !== 1) fail(q.id, 'missing-word stems need exactly one [?]');
  if (q.type !== 'missing' && blanks) fail(q.id, '[?] used outside a missing-word question');
  if (q.type === 'negative' && !/\bNOT\b/.test(q.q)) fail(q.id, 'negative stems must contain NOT');
  if (q.type !== 'negative' && /\bNOT\b/.test(q.q)) fail(q.id, 'NOT used outside a negative question');
  if (q.type === 'list' && !/\bTWO\b/.test(q.q)) fail(q.id, 'list stems must ask for TWO');

  if (!blueprint.some((s) => s.lo === q.lo && q.ac in s.min)) fail(q.id, `criterion ${q.ac} is not in the blueprint`);

  const key = q.q.toLowerCase();
  if (stems.has(key)) fail(q.id, `same stem as ${stems.get(key)}`);
  else stems.set(key, q.id);
}

if (new Set(bank.map((q) => q.id)).size !== bank.length) fail('bank', 'duplicate question ids');
const marks = blueprint.reduce((n, s) => n + s.marks, 0);
if (marks !== exam.questions) fail('blueprint', `marks add up to ${marks}, expected ${exam.questions}`);

for (const s of blueprint) {
  const pool = bank.filter((q) => q.lo === s.lo);
  if (pool.length < s.marks * 3) fail(`LO${s.lo}`, `only ${pool.length} questions for ${s.marks} marks (want at least 3x)`);
  for (const [ac, min] of Object.entries(s.min)) {
    const n = pool.filter((q) => q.ac === ac).length;
    if (n < min * 3) fail(`criterion ${ac}`, `only ${n} questions for a minimum of ${min} (want at least 3x)`);
  }
}

// ---------- Simulated exams ----------

function mulberry32(seed) {
  return function rng() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const byId = new Map(bank.map((q) => [q.id, q]));
const RUNS = 5000;
const rng = mulberry32(20261021);
const seen = new Set();
const typeTotals = { standard: 0, list: 0, missing: 0, negative: 0 };
const lo7Spread = new Map();
let recent = [];
let overlapTotal = 0;

for (let run = 0; run < RUNS; run++) {
  const items = engine.buildExam({ bank, blueprint, caps: exam.caps, recent: recent.flat(), rng });
  const where = `exam #${run + 1}`;
  if (items.length !== exam.questions) fail(where, `has ${items.length} questions`);
  if (new Set(items.map((i) => i.id)).size !== items.length) fail(where, 'repeats a question');

  const qs = items.map((i) => byId.get(i.id));
  for (const s of blueprint) {
    const inLo = qs.filter((q) => q.lo === s.lo);
    if (inLo.length !== s.marks) fail(where, `LO${s.lo} has ${inLo.length} questions, expected ${s.marks}`);
    for (const [ac, min] of Object.entries(s.min)) {
      if (inLo.filter((q) => q.ac === ac).length < min) fail(where, `criterion ${ac} below its minimum of ${min}`);
    }
  }
  for (const [type, max] of Object.entries(exam.caps)) {
    const n = qs.filter((q) => q.type === type).length;
    if (n > max) fail(where, `${n} ${type} questions (cap ${max})`);
  }

  items.forEach((item, i) => {
    const q = qs[i];
    if (!(item.answer >= 0 && item.answer < 4)) fail(`${where} ${q.id}`, 'answer index out of range');
    if ([...item.order].sort().join() !== '0,1,2,3') fail(`${where} ${q.id}`, 'bad option order');
    if (q.type === 'list') {
      const truth = [item.order.indexOf(0) + 1, item.order.indexOf(1) + 1].sort().join();
      const keys = item.pairs.map((p) => p.join());
      if (new Set(keys).size !== 4) fail(`${where} ${q.id}`, 'duplicate pairs');
      if (keys[item.answer] !== truth) fail(`${where} ${q.id}`, 'answer pair does not name the true statements');
      if (keys.filter((k) => k === truth).length !== 1) fail(`${where} ${q.id}`, 'true pair missing or repeated');
    } else if (item.order[item.answer] !== 0) {
      fail(`${where} ${q.id}`, 'answer does not point at the correct option');
    }
    seen.add(q.id);
    typeTotals[q.type] += 1;
  });

  const lo7 = new Map();
  qs.filter((q) => q.lo === 7).forEach((q) => lo7.set(q.topic, (lo7.get(q.topic) || 0) + 1));
  for (const n of lo7.values()) lo7Spread.set(n, (lo7Spread.get(n) || 0) + 1);

  if (recent.length) overlapTotal += items.filter((i) => recent[0].includes(i.id)).length;
  recent = [items.map((i) => i.id), ...recent].slice(0, 4);
}

// ---------- Report ----------

const pad = (s, n) => String(s).padEnd(n);
console.log(`Question bank: ${bank.length} questions\n`);
console.log(pad('Learning outcome', 50) + pad('Marks', 8) + pad('Pool', 8) + 'Types (std/list/missing/neg)');
for (const s of blueprint) {
  const pool = bank.filter((q) => q.lo === s.lo);
  const count = (t) => pool.filter((q) => q.type === t).length;
  console.log(
    pad(`LO${s.lo} ${s.title}`, 50) + pad(s.marks, 8) + pad(pool.length, 8) +
    [count('standard'), count('list'), count('missing'), count('negative')].join(' / ')
  );
}
const avg = (n) => (n / RUNS).toFixed(1);
console.log(`\nSimulated ${RUNS} exams:`);
console.log(`  average mix per exam: ${avg(typeTotals.standard)} standard, ${avg(typeTotals.list)} list, ${avg(typeTotals.missing)} missing word, ${avg(typeTotals.negative)} negative`);
console.log(`  LO7 questions per practice: ${[...lo7Spread.entries()].sort((a, b) => a[0] - b[0]).map(([n, c]) => `${n} (${c}x)`).join(', ')}`);
console.log(`  questions used at least once: ${seen.size} of ${bank.length}`);
console.log(`  average overlap with the previous exam: ${(overlapTotal / (RUNS - 1)).toFixed(1)} of ${exam.questions}`);

if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  errors.slice(0, 50).forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
console.log('\nAll checks passed.');
