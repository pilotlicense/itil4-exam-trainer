/*
 * ITIL 4 Foundation practice exam: UI controller.
 * Depends on bank.js, the question files, blueprint.js and engine.js (loaded by index.html).
 */
(function () {
  'use strict';

  const ITIL = window.ITIL;
  const { bank, blueprint, engine } = ITIL;
  const EXAM = ITIL.exam;
  const byId = new Map(bank.map((q) => [q.id, q]));
  const LETTERS = ['A', 'B', 'C', 'D'];
  const KEYS = {
    exam: 'itil4-trainer:exam',
    history: 'itil4-trainer:history',
    recent: 'itil4-trainer:recent',
    theme: 'itil4-trainer:theme',
  };
  const RECENT_ATTEMPTS = 4; // prefer questions not used in this many previous exams
  const BANK_VERSION = hash(bank.map((q) => q.id + q.q).join('|'));
  const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE = 'cubic-bezier(.22, .8, .24, 1)';
  const RING = 2 * Math.PI * 52;

  const ICON = {
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  };

  // ---------- Storage (best effort: private windows can block it) ----------

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (err) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        /* storage unavailable: progress simply isn't kept */
      }
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch (err) {
        /* ignore */
      }
    },
  };

  const storedList = (key) => {
    const value = store.get(key, []);
    return Array.isArray(value) ? value : [];
  };

  // ---------- Helpers ----------

  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  function hash(text) {
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }

  function esc(text) {
    return String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }

  // Exam stems capitalize key words such as NOT and TWO; make them stand out.
  function emphasize(text) {
    return esc(text).replace(/\b(NOT|TWO|MOST|BEST|CORRECT|FIRST|NEXT|PRIMARY)\b/g, '<strong>$1</strong>');
  }

  function missingHTML(text) {
    return esc(text).replace('[?]', '<span class="blank">[ ? ]</span>');
  }

  function clock(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function percent(n, d) {
    return d ? Math.round((n / d) * 1000) / 10 : 0;
  }

  function fmtPct(value) {
    return (Number.isInteger(value) ? value : value.toFixed(1)) + '%';
  }

  function animate(el, keyframes, options) {
    if (!motion || !el || !el.animate) return Promise.resolve(null);
    const anim = el.animate(keyframes, { duration: 300, easing: EASE, ...options });
    return anim.finished.then(() => anim, () => anim);
  }

  function countUp(el, to, duration, format) {
    const from = Number(el.dataset.value || 0);
    el.dataset.value = to;
    if (!motion || from === to) {
      el.textContent = format(to, true);
      return;
    }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = format(from + (to - from) * (1 - Math.pow(1 - t, 3)), t === 1);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Animate an element open from zero height.
  function expand(el) {
    if (!motion) return;
    el.style.overflow = 'hidden';
    animate(el, [{ height: '0px', opacity: 0 }, { height: el.scrollHeight + 'px', opacity: 1 }], { duration: 360 }).then(() => {
      el.style.overflow = '';
    });
  }

  function stagger(elements, delay, step) {
    elements.forEach((el, i) => {
      animate(el, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], {
        duration: 360,
        delay: delay + Math.min(i, 10) * step,
        fill: 'backwards',
      });
    });
  }

  function growBars(bars, delay) {
    bars.forEach((bar, i) => {
      animate(bar, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 800, delay: delay + i * 70, fill: 'backwards' });
    });
  }

  // ---------- Views ----------

  const views = { home: $('#view-home'), exam: $('#view-exam'), results: $('#view-results') };
  let view = 'home';

  function show(name) {
    const from = views[view];
    const to = views[name];
    view = name;
    document.body.dataset.view = name;
    if (from === to) return Promise.resolve();

    return new Promise((resolve) => {
      const swap = (anim) => {
        from.hidden = true;
        if (anim) anim.cancel();
        to.hidden = false;
        window.scrollTo(0, 0);
        animate(to, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 450 });
        resolve();
      };
      if (motion) {
        animate(from, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(-6px)' }], { duration: 160, easing: 'ease-in', fill: 'forwards' }).then(swap);
      } else {
        swap(null);
      }
    });
  }

  // ---------- Home ----------

  function renderHome() {
    $('#stat-bank').textContent = bank.length;

    const max = Math.max(...blueprint.map((s) => s.marks));
    $('#weights').innerHTML = blueprint
      .map((s) => `
        <li>
          <div class="weight-top">
            <span class="lo-chip">LO${s.lo}</span>
            <span class="weight-name">${esc(s.title)}</span>
            <span class="weight-marks">${s.marks}<small>${fmtPct(percent(s.marks, EXAM.questions))}</small></span>
          </div>
          <div class="weight-bar"><span style="--w:${(s.marks / max) * 100}%"></span></div>
        </li>`)
      .join('');
    growBars($$('#weights .weight-bar span'), 200);

    renderResume();
    renderHistory();
  }

  function renderResume() {
    if (!exam) {
      $('#resume').hidden = true;
      $('#btn-start').textContent = 'Start exam';
      return;
    }
    const answered = exam.answers.length;
    const correct = engine.countCorrect(exam.items, exam.answers);
    $('#resume-text').textContent = `Question ${answered + 1} of ${EXAM.questions} · ${correct} correct so far · ${clock(exam.elapsed)} elapsed`;
    $('#btn-start').textContent = 'Start a new exam';
    $('#resume').hidden = false;
  }

  function renderHistory() {
    const history = storedList(KEYS.history);
    const date = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    $('#history').hidden = !history.length;
    $('#history-list').innerHTML = history
      .slice(0, 6)
      .map((r) => `
        <li>
          <span class="h-date">${esc(date.format(new Date(r.date)))}</span>
          <span class="h-score">${r.correct}/${r.total} · ${fmtPct(percent(r.correct, r.total))}</span>
          <span class="chip ${r.passed ? 'chip-pass' : 'chip-fail'}">${r.passed ? 'Pass' : 'Fail'}</span>
        </li>`)
      .join('');
  }

  // ---------- Exam ----------

  let exam = null; // { v, items, answers, elapsed } — persisted so a refresh can resume
  let current = 0; // index of the question on screen
  let selection = null; // option chosen but not yet submitted
  let timer = null;

  const isAnswered = () => exam.answers.length > current;

  function loadSaved() {
    const saved = store.get(KEYS.exam, null);
    const valid = Boolean(saved) && saved.v === BANK_VERSION
      && Array.isArray(saved.items) && Array.isArray(saved.answers)
      && saved.items.length === EXAM.questions && saved.answers.length < EXAM.questions
      && saved.items.every((item) => byId.has(item.id));
    if (!valid) store.remove(KEYS.exam);
    return valid ? saved : null;
  }

  function save() {
    if (exam) store.set(KEYS.exam, exam);
  }

  function startExam() {
    exam = {
      v: BANK_VERSION,
      items: engine.buildExam({ bank, blueprint, caps: EXAM.caps, recent: storedList(KEYS.recent).flat() }),
      answers: [],
      elapsed: 0,
    };
    save();
    enterExam();
  }

  function enterExam() {
    current = exam.answers.length;
    $('#track').innerHTML = exam.items.map(() => '<span class="seg"><i></i></span>').join('');
    $('#stage').innerHTML = '';
    updateScore(false);
    updateProgress();
    paintTimer();
    show('exam').then(() => {
      renderQuestion();
      startTimer();
    });
  }

  function optionLabels(item, q) {
    return q.type === 'list' ? item.pairs.map(([a, b]) => `${a} and ${b}`) : item.order.map((i) => q.o[i]);
  }

  function statementsHTML(item, q, marked) {
    const rows = item.order.map((s, i) => {
      const isTrue = s < 2;
      const cls = marked ? (isTrue ? 'is-true' : 'is-false') : '';
      const icon = marked ? (isTrue ? ICON.check : ICON.cross) : '';
      return `<li class="${cls}" data-s="${s}"><span class="num">${i + 1}.</span><span>${esc(q.s[s])}</span><span class="truth">${icon}</span></li>`;
    });
    return `<ol class="statements">${rows.join('')}</ol>`;
  }

  function questionHTML(item, q) {
    const stem = q.type === 'missing'
      ? `<h2 class="q-stem" id="q-stem" tabindex="-1">Identify the missing word(s) in the following sentence.</h2>
         <p class="q-sentence">${missingHTML(q.q)}</p>`
      : `<h2 class="q-stem" id="q-stem" tabindex="-1">${emphasize(q.q)}</h2>`;
    const options = optionLabels(item, q)
      .map((label, i) => `
        <button type="button" class="option" role="radio" aria-checked="false" data-i="${i}">
          <span class="letter">${LETTERS[i]}</span>
          <span class="option-text">${esc(label)}</span>
          <span class="mark"></span>
        </button>`)
      .join('');
    return `
      <article class="card qcard" data-type="${q.type}">
        <div class="q-top">
          <span class="eyebrow">Question ${current + 1}</span>
          <span class="q-topic" hidden></span>
        </div>
        ${stem}
        ${q.type === 'list' ? statementsHTML(item, q, false) : ''}
        <div class="options" role="radiogroup" aria-labelledby="q-stem">${options}</div>
        <div class="feedback-slot" aria-live="polite"></div>
        <div class="q-actions">
          <span class="kbd-hint">Press <kbd>A</kbd>–<kbd>D</kbd> to choose, <kbd>Enter</kbd> to submit</span>
          <button type="button" class="btn btn-primary" id="action" disabled>Submit</button>
        </div>
      </article>`;
  }

  function renderQuestion() {
    current = exam.answers.length;
    selection = null;
    const item = exam.items[current];
    const q = byId.get(item.id);
    const stage = $('#stage');
    const old = stage.firstElementChild;

    const mount = () => {
      stage.innerHTML = questionHTML(item, q);
      const card = stage.firstElementChild;
      $('.options', card).addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) choose(Number(option.dataset.i));
      });
      $('#action', card).addEventListener('click', primaryAction);
      animate(card, [{ opacity: 0, transform: 'translateX(28px)' }, { opacity: 1, transform: 'none' }], { duration: 420 });
      stagger($$('.statements li, .option', card), 90, 40);
      $('#q-stem', card).focus({ preventScroll: true });
    };

    updateProgress();
    if (old && motion) {
      animate(old, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-28px)' }], { duration: 200, easing: 'ease-in', fill: 'forwards' }).then(mount);
    } else {
      mount();
    }
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: motion ? 'smooth' : 'auto' });
  }

  function choose(i) {
    if (isAnswered()) return;
    selection = i;
    const options = $$('#stage .option');
    options.forEach((el, j) => el.setAttribute('aria-checked', String(j === i)));
    animate($('.letter', options[i]), [{ transform: 'scale(.8)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }], { duration: 280 });
    $('#action').disabled = false;
  }

  function primaryAction() {
    if (isAnswered()) next();
    else if (selection !== null) submit();
  }

  function submit() {
    const item = exam.items[current];
    const q = byId.get(item.id);
    const chosen = selection;
    const correct = chosen === item.answer;
    exam.answers.push(chosen);
    save();

    const card = $('#stage .qcard');
    card.classList.add('is-answered');
    $$('.option', card).forEach((el, i) => {
      el.setAttribute('aria-disabled', 'true');
      if (i === item.answer) {
        el.classList.add('is-correct');
        $('.mark', el).innerHTML = ICON.check;
      } else if (i === chosen) {
        el.classList.add('is-wrong');
        $('.mark', el).innerHTML = ICON.cross;
        animate(el, [{ transform: 'none' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(3px)' }, { transform: 'none' }], { duration: 320, easing: 'ease-out' });
      } else {
        el.classList.add('is-dim');
      }
    });
    if (q.type === 'list') {
      $$('.statements li', card).forEach((li) => {
        const isTrue = Number(li.dataset.s) < 2;
        li.classList.add(isTrue ? 'is-true' : 'is-false');
        $('.truth', li).innerHTML = isTrue ? ICON.check : ICON.cross;
      });
    }

    const topic = $('.q-topic', card);
    topic.textContent = `LO${q.lo} · ${q.topic}`;
    topic.hidden = false;
    animate(topic, [{ opacity: 0 }, { opacity: 1 }], { duration: 400 });

    const slot = $('.feedback-slot', card);
    slot.innerHTML = feedbackHTML(item, q, chosen, correct);
    expand(slot);
    const more = $('.fb-more', slot);
    if (more) {
      more.addEventListener('click', () => {
        const detail = $('.fb-detail', slot);
        const open = detail.hidden;
        detail.hidden = !open;
        more.setAttribute('aria-expanded', String(open));
        more.textContent = open ? 'Hide' : 'Why?';
        if (open) expand(detail);
      });
    }

    const last = exam.answers.length === EXAM.questions;
    const action = $('#action', card);
    action.innerHTML = (last ? 'See results' : 'Next question') + ICON.arrow;
    action.focus({ preventScroll: true });
    $('.kbd-hint', card).innerHTML = `Press <kbd>Enter</kbd> ${last ? 'to see your results' : 'for the next question'}`;

    updateScore(true);
    updateProgress();
    if (correct) flash($('#score'));
    revealBelowFold(slot, action);
  }

  // On small screens the feedback can land below the fold: scroll just enough to show the
  // Next button without pushing the start of the feedback under the sticky header.
  function revealBelowFold(slot, action) {
    setTimeout(() => {
      const overflow = action.getBoundingClientRect().bottom - window.innerHeight + 16;
      const room = slot.getBoundingClientRect().top - 140;
      const by = Math.min(overflow, Math.max(0, room));
      if (by > 0) window.scrollBy({ top: by, behavior: motion ? 'smooth' : 'auto' });
    }, motion ? 380 : 0);
  }

  function feedbackHTML(item, q, chosen, correct) {
    if (correct) {
      return `
        <div class="feedback is-correct">
          <span class="fb-icon">${ICON.check}</span>
          <div class="fb-body">
            <div class="fb-head">
              <p class="fb-title">Correct</p>
              <button type="button" class="fb-more" aria-expanded="false">Why?</button>
            </div>
            <div class="fb-detail" hidden>${explainHTML(item, q, chosen)}</div>
          </div>
        </div>`;
    }
    const answer = optionLabels(item, q)[item.answer];
    return `
      <div class="feedback is-wrong">
        <span class="fb-icon">${ICON.cross}</span>
        <div class="fb-body">
          <div class="fb-head"><p class="fb-title">Incorrect</p></div>
          <p class="fb-answer">The correct answer is <strong>${LETTERS[item.answer]}. ${esc(answer)}</strong></p>
          ${explainHTML(item, q, chosen)}
        </div>
      </div>`;
  }

  // The explanation, plus why the chosen option is wrong (for list questions: why each false
  // statement is false).
  function explainHTML(item, q, chosen) {
    let html = `<p class="fb-explain">${esc(q.e)}</p>`;
    if (q.type === 'list') {
      const notes = item.order
        .map((s, i) => (s >= 2 && q.w[s - 2] ? `<li><strong>Statement ${i + 1} is false.</strong> ${esc(q.w[s - 2])}</li>` : ''))
        .join('');
      if (notes) html += `<ul class="fb-notes">${notes}</ul>`;
    } else if (chosen !== item.answer) {
      const note = q.w[item.order[chosen] - 1];
      if (note) html += `<p class="fb-why"><strong>Why not ${LETTERS[chosen]}?</strong> ${esc(note)}</p>`;
    }
    return html;
  }

  function next() {
    if (exam.answers.length >= EXAM.questions) finish();
    else renderQuestion();
  }

  function updateScore(animated) {
    const answered = exam.answers.length;
    const correct = engine.countCorrect(exam.items, exam.answers);
    const el = $('#score-correct');
    if (animated) {
      countUp(el, correct, 450, (v) => String(Math.round(v)));
    } else {
      el.dataset.value = correct;
      el.textContent = correct;
    }
    $('#score-pct').textContent = fmtPct(percent(correct, EXAM.questions));
    $('#score').title = answered
      ? `${correct} correct out of ${EXAM.questions} (accuracy on the ${answered} answered so far: ${fmtPct(percent(correct, answered))})`
      : `Correct answers out of ${EXAM.questions}`;
  }

  function flash(el) {
    el.classList.add('flash-ok');
    animate(el, [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], { duration: 420 });
    setTimeout(() => el.classList.remove('flash-ok'), 900);
  }

  function updateProgress() {
    const answered = exam.answers.length;
    $('#q-count').innerHTML = `Question <strong>${current + 1}</strong> of ${EXAM.questions}`;
    $$('#track .seg').forEach((seg, i) => {
      const a = exam.answers[i];
      const state = a === undefined ? '' : a === exam.items[i].answer ? ' ok' : ' bad';
      seg.className = 'seg' + state + (i === current && !isAnswered() ? ' current' : '');
    });

    const correct = engine.countCorrect(exam.items, exam.answers);
    const left = EXAM.questions - answered;
    const needed = EXAM.passMark - correct;
    const hint = $('#pass-hint');
    if (needed <= 0) {
      hint.className = 'pass-hint ok';
      hint.textContent = `Pass mark reached with ${correct} correct. Keep going to raise your score.`;
    } else if (needed > left) {
      hint.className = 'pass-hint bad';
      hint.textContent = `The pass mark of ${EXAM.passMark} is now out of reach on this attempt. Use the remaining questions as practice.`;
    } else {
      hint.className = 'pass-hint';
      hint.textContent = `Pass mark ${EXAM.passMark}/${EXAM.questions}: ${needed} more correct needed from ${left} remaining.`;
    }
  }

  // ---------- Timer (a soft limit: the exam carries on past 60 minutes) ----------

  function startTimer() {
    stopTimer();
    let last = Date.now();
    paintTimer();
    timer = setInterval(() => {
      const now = Date.now();
      exam.elapsed += (now - last) / 1000;
      last = now;
      paintTimer();
      save();
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function paintTimer() {
    const remaining = EXAM.minutes * 60 - exam.elapsed;
    const pill = $('#timer');
    $('#timer-text').textContent = remaining >= 0 ? clock(remaining) : '+' + clock(-remaining);
    pill.classList.toggle('warn', remaining >= 0 && remaining < 10 * 60);
    pill.classList.toggle('over', remaining < 0);
    pill.title = remaining >= 0
      ? `Time remaining of the ${EXAM.minutes}-minute limit`
      : `Over the ${EXAM.minutes}-minute limit. The real exam would have ended; keep going for practice.`;
  }

  // ---------- Results ----------

  function finish() {
    stopTimer();
    const correct = engine.countCorrect(exam.items, exam.answers);
    const result = {
      date: Date.now(),
      correct,
      total: EXAM.questions,
      passed: correct >= EXAM.passMark,
      elapsed: Math.round(exam.elapsed),
    };
    store.set(KEYS.history, [result, ...storedList(KEYS.history)].slice(0, 20));
    store.set(KEYS.recent, [exam.items.map((item) => item.id), ...storedList(KEYS.recent)].slice(0, RECENT_ATTEMPTS));
    const done = exam;
    exam = null;
    store.remove(KEYS.exam);
    renderResults(done, result);
    show('results');
  }

  function renderResults(done, result) {
    const pct = percent(result.correct, result.total);
    const margin = result.correct - EXAM.passMark;

    const verdict = $('#r-verdict');
    verdict.textContent = result.passed ? 'Pass' : 'Fail';
    verdict.className = 'verdict ' + (result.passed ? 'pass' : 'fail');
    $('#r-title').textContent = result.passed ? 'Congratulations, you passed' : 'Not a pass this time';
    if (!result.passed) {
      $('#r-sub').textContent = `You answered ${result.correct} of ${result.total} correctly. You needed ${-margin} more to reach the pass mark of ${EXAM.passMark}.`;
    } else if (margin === 0) {
      $('#r-sub').textContent = `You answered ${result.correct} of ${result.total} correctly, exactly the pass mark.`;
    } else {
      $('#r-sub').textContent = `You answered ${result.correct} of ${result.total} correctly, ${margin} above the pass mark of ${EXAM.passMark}.`;
    }
    $('#r-score').textContent = `${result.correct}/${result.total} (${fmtPct(pct)})`;
    $('#r-time').textContent = clock(result.elapsed) + (result.elapsed > EXAM.minutes * 60 ? ' (over the limit)' : '');
    $('#r-count').textContent = `${result.correct} of ${result.total}`;

    const fill = $('#ring-fill');
    const target = RING * (1 - pct / 100);
    fill.classList.toggle('pass', result.passed);
    fill.classList.toggle('fail', !result.passed);
    fill.style.strokeDasharray = RING;
    fill.style.strokeDashoffset = RING;
    placePassMark();
    const pctEl = $('#r-pct');
    pctEl.dataset.value = 0;
    pctEl.textContent = '0%';
    setTimeout(() => {
      if (motion) fill.animate([{ strokeDashoffset: RING }, { strokeDashoffset: target }], { duration: 1300, easing: EASE });
      fill.style.strokeDashoffset = target;
      countUp(pctEl, pct, 1300, (v, end) => (end ? fmtPct(pct) : Math.round(v) + '%'));
      animate(verdict, [{ opacity: 0, transform: 'scale(.85)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 1000, fill: 'backwards' });
    }, motion ? 350 : 0);

    $('#r-breakdown').innerHTML = engine
      .breakdown(done.items, done.answers, byId, blueprint)
      .map((r) => {
        const p = percent(r.correct, r.total);
        const tone = p >= 65 ? 'good' : p >= 40 ? 'fair' : 'poor';
        return `
          <li>
            <div class="bd-top">
              <span class="lo-chip">LO${r.lo}</span>
              <span class="bd-name">${esc(r.title)}</span>
              <span class="bd-score">${r.correct}/${r.total}</span>
            </div>
            <div class="bd-bar"><span class="${tone}" style="--w:${p}%"></span></div>
          </li>`;
      })
      .join('');
    growBars($$('#r-breakdown .bd-bar span'), 600);

    renderReview(done);
  }

  // A tick on the score ring at the pass mark (65%).
  function placePassMark() {
    const angle = (EXAM.passMark / EXAM.questions) * 2 * Math.PI;
    const mark = $('#ring-mark');
    [[44, 'x1', 'y1'], [61, 'x2', 'y2']].forEach(([r, x, y]) => {
      mark.setAttribute(x, (60 + r * Math.sin(angle)).toFixed(2));
      mark.setAttribute(y, (60 - r * Math.cos(angle)).toFixed(2));
    });
  }

  function renderReview(done) {
    const wrong = done.items
      .map((item, i) => ({ item, q: byId.get(item.id), chosen: done.answers[i], n: i + 1 }))
      .filter((r) => r.chosen !== r.item.answer);
    const toggle = $('#review-toggle');
    const list = $('#review-list');
    list.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.disabled = !wrong.length;
    $('#review-label').textContent = wrong.length
      ? `Review incorrect answers (${wrong.length})`
      : 'A perfect score: there are no incorrect answers to review';

    list.innerHTML = wrong
      .map(({ item, q, chosen, n }) => {
        const labels = optionLabels(item, q);
        const stem = q.type === 'missing'
          ? `<p class="ri-stem">Identify the missing word(s) in the following sentence.</p><p class="ri-sentence">${missingHTML(q.q)}</p>`
          : `<p class="ri-stem">${emphasize(q.q)}</p>`;
        return `
          <article class="review-item">
            <div class="ri-top"><span class="eyebrow">Question ${n}</span><span class="q-topic">LO${q.lo} · ${esc(q.topic)}</span></div>
            ${stem}
            ${q.type === 'list' ? statementsHTML(item, q, true) : ''}
            <div class="ri-answers">
              <p class="ri-answer yours"><span>Your answer</span><span>${LETTERS[chosen]}. ${esc(labels[chosen])}</span></p>
              <p class="ri-answer right"><span>Correct answer</span><span>${LETTERS[item.answer]}. ${esc(labels[item.answer])}</span></p>
            </div>
            ${explainHTML(item, q, chosen)}
          </article>`;
      })
      .join('');
  }

  // ---------- Dialog ----------

  function confirmDialog({ title, text, ok }) {
    const modal = $('#modal');
    const okBtn = $('#modal-ok');
    const cancelBtn = $('#modal-cancel');
    const opener = document.activeElement;
    $('#modal-title').textContent = title;
    $('#modal-text').textContent = text;
    okBtn.textContent = ok;
    modal.hidden = false;
    animate(modal, [{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
    animate($('.modal', modal), [{ opacity: 0, transform: 'translateY(10px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 280 });
    cancelBtn.focus();

    return new Promise((resolve) => {
      const close = (value) => {
        modal.removeEventListener('click', onClick);
        modal.removeEventListener('keydown', onKey);
        animate(modal, [{ opacity: 1 }, { opacity: 0 }], { duration: 150, fill: 'forwards' }).then((anim) => {
          modal.hidden = true;
          if (anim) anim.cancel();
          if (opener && opener.focus) opener.focus({ preventScroll: true });
          resolve(value);
        });
      };
      const onClick = (e) => {
        if (e.target === okBtn) close(true);
        else if (e.target === cancelBtn || e.target === modal) close(false);
      };
      const onKey = (e) => {
        if (e.key === 'Escape') close(false);
        if (e.key === 'Tab') {
          // Two buttons: keep focus inside the dialog.
          e.preventDefault();
          (document.activeElement === okBtn ? cancelBtn : okBtn).focus();
        }
      };
      modal.addEventListener('click', onClick);
      modal.addEventListener('keydown', onKey);
    });
  }

  // ---------- Events ----------

  $('#btn-start').addEventListener('click', async () => {
    if (exam && exam.answers.length) {
      const ok = await confirmDialog({
        title: 'Start a new exam?',
        text: `Your exam in progress (question ${exam.answers.length + 1} of ${EXAM.questions}) will be discarded.`,
        ok: 'Discard and start new',
      });
      if (!ok) return;
    }
    startExam();
  });

  $('#btn-resume').addEventListener('click', enterExam);

  $('#btn-exit').addEventListener('click', () => {
    stopTimer();
    save();
    renderHome();
    show('home');
  });

  $('#btn-again').addEventListener('click', startExam);

  $('#btn-home').addEventListener('click', () => {
    renderHome();
    show('home');
  });

  $('#review-toggle').addEventListener('click', () => {
    const list = $('#review-list');
    const open = list.hidden;
    list.hidden = !open;
    $('#review-toggle').setAttribute('aria-expanded', String(open));
    if (open) {
      expand(list);
      stagger($$('.review-item', list), 60, 40);
    }
  });

  $('#btn-theme').addEventListener('click', () => {
    const set = document.documentElement.dataset.theme;
    const dark = set ? set === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    store.set(KEYS.theme, theme);
    animate($('#btn-theme'), [{ transform: 'rotate(-40deg) scale(.9)' }, { transform: 'none' }], { duration: 380 });
  });

  // Keyboard: A-D choose, arrows move between options, Enter submits / moves on.
  document.addEventListener('keydown', (e) => {
    if (view !== 'exam' || !exam || !$('#modal').hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    const key = e.key.toLowerCase();
    const option = e.target.closest ? e.target.closest('.option') : null;
    const letter = key.length === 1 ? LETTERS.indexOf(key.toUpperCase()) : -1;

    if (letter !== -1) {
      if (isAnswered()) return;
      e.preventDefault();
      choose(letter);
      $$('#stage .option')[letter].focus({ preventScroll: true });
    } else if (option && !isAnswered() && ['arrowdown', 'arrowright', 'arrowup', 'arrowleft'].includes(key)) {
      e.preventDefault();
      const i = (Number(option.dataset.i) + (key === 'arrowdown' || key === 'arrowright' ? 1 : 3)) % 4;
      choose(i);
      $$('#stage .option')[i].focus();
    } else if (key === 'enter' && !e.repeat) {
      if (option) {
        e.preventDefault();
        const i = Number(option.dataset.i);
        if (isAnswered() || selection === i) primaryAction();
        else choose(i);
      } else if (!(e.target.closest && e.target.closest('button, a, input, textarea, select'))) {
        // Focused buttons handle Enter themselves.
        e.preventDefault();
        primaryAction();
      }
    }
  });

  document.addEventListener('visibilitychange', save);
  window.addEventListener('pagehide', save);

  // ---------- Start ----------

  exam = loadSaved();
  renderHome();
  animate($('.hero', views.home), [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 550 });
  stagger($$('.fact, .home-grid > *', views.home), 120, 70);
})();
