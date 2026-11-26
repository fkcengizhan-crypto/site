/* AÖL Türk Dili ve Edebiyatı 6 — test mantığı */
(function () {
  "use strict";

  const ALL = window.QUESTIONS.slice();
  const BEST_KEY = "tded6_best_score_v1";
  const THEME_KEY = "tded6_theme_v1";
  const LETTERS = ["A", "B", "C", "D"];

  const state = {
    mode: "50",
    topic: "all",
    source: "all",
    quiz: [],
    index: 0,
    answers: [],
    answered: false,
    lastCustomPool: null,
    previousScreen: "start"
  };

  const $ = (id) => document.getElementById(id);
  const screens = {
    start: $("screen-start"),
    quiz: $("screen-quiz"),
    result: $("screen-result"),
    notes: $("screen-notes")
  };

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  };

  function shuffle(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function prepare(raw) {
    const options = raw.options.map((text, i) => ({ text, correct: i === raw.answer }));
    const shuffled = shuffle(options);
    return Object.assign({}, raw, {
      shuffledOptions: shuffled,
      correctIndex: shuffled.findIndex((o) => o.correct)
    });
  }

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].classList.toggle("active", key === name);
    });
    if (name !== "notes") state.previousScreen = name;
    if (name === "start") updateStartSummary();
    const h = screens[name].querySelector("h1, h2");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (h) {
      h.setAttribute("tabindex", "-1");
      window.setTimeout(() => h.focus({ preventScroll: true }), 50);
    }
  }

  function toast(message) {
    const box = $("toast");
    box.textContent = message;
    box.classList.add("show");
    window.clearTimeout(toast._timer);
    toast._timer = window.setTimeout(() => box.classList.remove("show"), 2200);
  }

  /* ---------- Tema ---------- */
  function applyTheme(theme, announce) {
    const next = theme === "light" ? "light" : "dark";
    const dark = next === "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;

    const btn = $("themeBtn");
    if (btn) {
      const label = dark ? "Aydınlık moda geç" : "Karanlık moda geç";
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#110e0a" : "#f3eee3");

    try { window.localStorage.setItem(THEME_KEY, next); } catch (err) { /* depolama kapalı olabilir */ }
    if (announce) toast(dark ? "Karanlık mod açık" : "Aydınlık mod açık");
  }

  function initTheme() {
    let saved = null;
    try { saved = window.localStorage.getItem(THEME_KEY); } catch (err) { /* depolama kapalı olabilir */ }
    applyTheme(saved === "light" ? "light" : "dark", false);

    const btn = $("themeBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        applyTheme(current === "dark" ? "light" : "dark", true);
      });
    }
  }

  /* ---------- Sayaçlar ---------- */
  function syncCounts() {
    const total = ALL.length;
    const official = ALL.filter((q) => q.source === "official").length;
    const extra = total - official;
    document.querySelectorAll("[data-count-total]").forEach((node) => { node.textContent = total; });
    document.querySelectorAll("[data-count-official]").forEach((node) => { node.textContent = official; });

    const allOption = $("sourceAllOption");
    const officialOption = $("sourceOfficialOption");
    const extraOption = $("sourceExtraOption");
    if (allOption) allOption.textContent = `Tüm sorular (${total})`;
    if (officialOption) officialOption.textContent = `MEB çalışma soruları (${official})`;
    if (extraOption) extraOption.textContent = `Ek / muhtemel sorular (${extra})`;
  }

  /* ---------- Start screen ---------- */
  function populateTopics() {
    const select = $("topicSelect");
    const topics = [];
    ALL.forEach((q) => { if (!topics.includes(q.topic)) topics.push(q.topic); });
    topics.forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      select.appendChild(option);
    });
  }

  function poolForFilters() {
    return ALL.filter((q) =>
      (state.topic === "all" || q.topic === state.topic) &&
      (state.source === "all" || q.source === state.source)
    );
  }

  function targetCount(available) {
    if (state.mode === "all") return available;
    return Math.min(parseInt(state.mode, 10), available);
  }

  function updateStartSummary() {
    const available = poolForFilters().length;
    const count = targetCount(available);
    const btn = $("startBtn");
    const hint = $("startHint");
    const best = loadBest();

    if (available === 0) {
      btn.disabled = true;
      btn.textContent = "Bu filtrede soru yok";
      hint.textContent = "Farklı bir konu veya kaynak seçin.";
    } else {
      btn.disabled = false;
      btn.textContent = `Teste Başla · ${count} soru`;
      const topicText = state.topic === "all" ? "tüm konular" : state.topic;
      const sourceText = state.source === "official" ? "MEB soruları" : state.source === "extra" ? "ek sorular" : "tüm kaynaklar";
      hint.textContent = `${count} soru • ${topicText} • ${sourceText} • her açılışta karışık`;
    }

    $("bestScore").innerHTML = best
      ? `En iyi skorun: <strong>%${best.pct}</strong> (${best.correct}/${best.total})`
      : "Henüz kayıtlı bir skorun yok. İlk testini çöz!";
  }

  function bindStart() {
    document.querySelectorAll(".seg-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        document.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b === btn));
        updateStartSummary();
      });
    });
    $("topicSelect").addEventListener("change", (e) => {
      state.topic = e.target.value;
      updateStartSummary();
    });
    $("sourceSelect").addEventListener("change", (e) => {
      state.source = e.target.value;
      updateStartSummary();
    });
    $("startBtn").addEventListener("click", () => startQuiz());
    $("homeBtn").addEventListener("click", () => showScreen("start"));
    $("quitBtn").addEventListener("click", () => {
      if (state.answers.length && !window.confirm("Testten çıkmak istediğine emin misin? İlerlemen kaybolacak.")) return;
      showScreen("start");
    });
    $("retryBtn").addEventListener("click", () => {
      if (state.lastCustomPool) startQuiz(state.lastCustomPool, true);
      else startQuiz();
    });
    $("reviewWrongBtn").addEventListener("click", () => {
      const wrong = state.answers.filter((a) => !a.correct).map((a) => a.q);
      if (wrong.length) startQuiz(wrong, true);
    });
    $("nextBtn").addEventListener("click", nextQuestion);
    $("notesBtn").addEventListener("click", () => {
      if (screens.notes.classList.contains("active")) {
        showScreen(state.previousScreen === "notes" ? "start" : state.previousScreen);
      } else {
        showScreen("notes");
      }
    });
    $("notesBackBtn").addEventListener("click", () => {
      showScreen(state.previousScreen === "notes" ? "start" : state.previousScreen);
    });
    $("notesFromStart").addEventListener("click", (e) => {
      e.preventDefault();
      showScreen("notes");
    });
  }

  /* ---------- Quiz ---------- */
  function startQuiz(customPool, isCustom) {
    const rawPool = customPool ? customPool.slice() : poolForFilters();
    if (!rawPool.length) {
      toast("Bu seçimde soru bulunmuyor.");
      return;
    }
    const count = customPool ? rawPool.length : targetCount(rawPool.length);
    const selected = shuffle(rawPool).slice(0, count);

    state.quiz = selected.map(prepare);
    state.index = 0;
    state.answers = [];
    state.answered = false;
    state.lastCustomPool = isCustom ? rawPool : null;

    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.quiz[state.index];
    state.answered = false;

    $("qCurrent").textContent = String(state.index + 1);
    $("qTotal").textContent = String(state.quiz.length);
    $("progressFill").style.width = `${((state.index + 1) / state.quiz.length) * 100}%`;
    $("liveScore").textContent = String(state.answers.filter((a) => a.correct).length);

    const meta = $("questionMeta");
    meta.textContent = "";
    meta.appendChild(el("span", "badge badge-topic", q.topic));
    meta.appendChild(el("span", q.source === "official" ? "badge badge-official" : "badge badge-extra",
      q.source === "official" ? "MEB çalışma sorusu" : "Ek soru"));

    const body = $("questionBody");
    body.textContent = "";
    if (q.passage) body.appendChild(el("div", "passage", q.passage));
    body.appendChild(el("div", null, q.q));

    const optionsBox = $("options");
    optionsBox.textContent = "";
    q.shuffledOptions.forEach((option, i) => {
      const btn = el("button", "option");
      btn.type = "button";
      btn.dataset.index = String(i);
      btn.setAttribute("aria-label", `${LETTERS[i]}) ${option.text}`);
      btn.appendChild(el("span", "option-letter", LETTERS[i]));
      btn.appendChild(el("span", "option-text", option.text));
      btn.addEventListener("click", () => chooseAnswer(i));
      optionsBox.appendChild(btn);
    });

    const feedback = $("feedback");
    feedback.textContent = "";
    feedback.className = "feedback";
    feedback.hidden = true;

    $("nextBtn").hidden = true;
    $("nextBtn").textContent = state.index === state.quiz.length - 1 ? "Sonucu Gör" : "Sonraki Soru";
    $("quizHint").textContent = "Klavye: 1-4 ile seç, Enter ile ilerle";
  }

  function chooseAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = state.quiz[state.index];
    const isCorrect = selectedIndex === q.correctIndex;
    state.answers.push({ q, selected: selectedIndex, correct: isCorrect });

    document.querySelectorAll("#options .option").forEach((btn, i) => {
      btn.classList.add("disabled");
      btn.setAttribute("disabled", "disabled");
      if (i === q.correctIndex) btn.classList.add("correct");
      else if (i === selectedIndex) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    $("liveScore").textContent = String(state.answers.filter((a) => a.correct).length);
    renderFeedback(q, selectedIndex, isCorrect);
    $("nextBtn").hidden = false;
    $("quizHint").textContent = "Bilgi notunu okuduktan sonra devam edebilirsin.";
  }

  function renderFeedback(q, selectedIndex, isCorrect) {
    const box = $("feedback");
    box.textContent = "";
    box.hidden = false;
    box.className = `feedback ${isCorrect ? "correct-box" : "wrong-box"}`;

    const head = el("div", "feedback-head");
    head.appendChild(el("span", null, isCorrect ? "✓" : "✕"));
    head.appendChild(el("span", null, isCorrect ? "Doğru cevap!" : "Yanlış cevap"));
    box.appendChild(head);

    if (!isCorrect) {
      const p = el("p");
      p.appendChild(el("span", "your", `Senin cevabın: ${LETTERS[selectedIndex]}) `));
      p.appendChild(document.createTextNode(q.shuffledOptions[selectedIndex].text));
      box.appendChild(p);
    }

    const answerLine = el("p", "answer-line",
      `Doğru cevap: ${LETTERS[q.correctIndex]}) ${q.shuffledOptions[q.correctIndex].text}`);
    box.appendChild(answerLine);
    box.appendChild(el("p", null, q.explanation));

    if (q.tip) {
      const tip = el("div", "tip-box");
      const tipTitle = el("b", null, "Bilgi notu");
      tip.appendChild(tipTitle);
      tip.appendChild(el("span", null, q.tip));
      box.appendChild(tip);
    }

    const noteLink = el("button", "note-link", "İlgili konu notunu aç →");
    noteLink.type = "button";
    noteLink.addEventListener("click", () => openTopicNote(q.topic));
    box.appendChild(noteLink);
  }

  function openTopicNote(topic) {
    const order = ["Roman", "Tiyatro", "Şiir", "Makale, Eleştiri, Mülakat", "Anlatım Bozuklukları", "Yazım ve Noktalama", "Edebi Dönemler"];
    const index = order.indexOf(topic);
    const items = Array.from(document.querySelectorAll(".acc-item"));
    if (index < 0 || !items[index]) return;
    showScreen("notes");
    items.forEach((item, i) => {
      const open = i === index;
      item.classList.toggle("open", open);
      const head = item.querySelector(".acc-head");
      if (head) head.setAttribute("aria-expanded", open ? "true" : "false");
    });
    items[index].scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index >= state.quiz.length - 1) {
      showResults();
      return;
    }
    state.index += 1;
    renderQuestion();
  }

  /* ---------- Results ---------- */
  function showResults() {
    const total = state.quiz.length;
    const correct = state.answers.filter((a) => a.correct).length;
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);
    const ring = $("scoreRing");

    ring.style.setProperty("--pct", String(pct));
    ring.style.setProperty("--ring-color", pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--gold)" : "var(--red)");
    $("resultPct").textContent = `${pct}%`;
    $("resultFraction").textContent = `${correct} / ${total}`;

    let title;
    let message;
    if (pct >= 90) {
      title = "Bu iş tamam!";
      message = "Konulara hâkimsin. Şimdi yanlışlarını gözden geçirip eksik kalan ayrıntıları pekiştirebilirsin.";
    } else if (pct >= 70) {
      title = "Çok iyi bir sonuç.";
      message = "Temelin sağlam. Aşağıdaki konu karnesinden eksik kaldığın başlıklara odaklanarak bir üst seviyeye çıkabilirsin.";
    } else if (pct >= 50) {
      title = "İyi bir başlangıç.";
      message = "Yarısından fazlasını doğru yaptın. Bilgi notlarını okuyup yanlışlarını tekrar çözmek puanını hızla yükseltir.";
    } else {
      title = "Tekrara ihtiyacın var.";
      message = "Sorun değil; bu test öğrenmek için var. Konu notlarını okuduktan sonra yanlışlarını yeniden çözerek başla.";
    }
    $("resultTitle").textContent = title;
    $("resultMsg").textContent = message;

    const stats = $("resultStats");
    stats.textContent = "";
    [["ok", `${correct} doğru`], ["nok", `${wrong} yanlış`], ["pct", `%${pct} başarı`]].forEach(([kind, text]) => {
      const chip = el("span", `mini-stat ${kind}`);
      chip.appendChild(el("i"));
      chip.appendChild(document.createTextNode(text));
      stats.appendChild(chip);
    });

    renderTopicBreakdown();
    renderReview(wrong);

    const btn = $("reviewWrongBtn");
    btn.hidden = wrong === 0;
    btn.textContent = `Yanlışları Çöz (${wrong})`;

    const best = updateBest(pct, correct, total);
    if (best.isNew && pct === 0) {
      $("resultBest").innerHTML = "İlk skorun kaydedildi. Sorun değil; konu notlarına göz atıp tekrar denemek için iyi bir fırsat.";
    } else {
      $("resultBest").innerHTML = best.isNew
        ? `<strong>Yeni en iyi skorun!</strong> %${pct} ile rekorunu geliştirdin.`
        : (best.data ? `En iyi skorun: <strong>%${best.data.pct}</strong> (${best.data.correct}/${best.data.total})` : "");
    }

    showScreen("result");
  }

  function renderTopicBreakdown() {
    const box = $("topicBreakdown");
    box.textContent = "";
    const map = new Map();
    state.answers.forEach((a) => {
      const entry = map.get(a.q.topic) || { correct: 0, total: 0 };
      entry.total += 1;
      if (a.correct) entry.correct += 1;
      map.set(a.q.topic, entry);
    });

    Array.from(map.entries())
      .sort((a, b) => b[1].total - a[1].total)
      .forEach(([topic, entry]) => {
        const pct = Math.round((entry.correct / entry.total) * 100);
        const row = el("div", "topic-row");
        const top = el("div", "topic-row-top");
        top.appendChild(el("b", null, topic));
        top.appendChild(el("span", null, `${entry.correct}/${entry.total} • %${pct}`));
        row.appendChild(top);
        const bar = el("div", "topic-bar");
        const fill = el("i");
        fill.style.width = `${pct}%`;
        if (pct < 50) fill.style.background = "linear-gradient(90deg, var(--red), #c97a70)";
        else if (pct < 75) fill.style.background = "linear-gradient(90deg, var(--gold), #cfa96a)";
        bar.appendChild(fill);
        row.appendChild(bar);
        box.appendChild(row);
      });
  }

  function renderReview(wrongCount) {
    const list = $("reviewList");
    list.textContent = "";
    const wrongs = state.answers.filter((a) => !a.correct);

    if (!wrongs.length) {
      const p = el("p", null, "Tüm soruları doğru cevapladın. Yanlış yok, gözden geçirilecek bir şey de yok. Böyle devam!");
      p.style.margin = "0";
      p.style.color = "var(--green)";
      p.style.fontWeight = "600";
      list.appendChild(p);
      return;
    }

    wrongs.forEach((answer) => {
      const q = answer.q;
      const details = el("details", "review-item");
      const summary = el("summary");
      summary.appendChild(el("span", "q-no", String(state.answers.indexOf(answer) + 1)));
      summary.appendChild(el("span", null, q.q));
      details.appendChild(summary);

      const body = el("div", "review-body");
      if (q.passage) body.appendChild(el("p", "review-passage", q.passage));

      const yours = el("p");
      yours.appendChild(el("span", "your", "Senin cevabın: "));
      yours.appendChild(document.createTextNode(`${LETTERS[answer.selected]}) ${q.shuffledOptions[answer.selected].text}`));
      body.appendChild(yours);

      const right = el("p");
      right.appendChild(el("span", "ans", "Doğru cevap: "));
      right.appendChild(document.createTextNode(`${LETTERS[q.correctIndex]}) ${q.shuffledOptions[q.correctIndex].text}`));
      body.appendChild(right);

      body.appendChild(el("p", null, q.explanation));
      if (q.tip) {
        const tip = el("p");
        tip.style.color = "var(--muted)";
        tip.style.fontSize = "12.5px";
        tip.textContent = `Bilgi notu: ${q.tip}`;
        body.appendChild(tip);
      }
      details.appendChild(body);
      list.appendChild(details);
    });
  }

  function loadBest() {
    try {
      const raw = window.localStorage.getItem(BEST_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  }

  function updateBest(pct, correct, total) {
    const previous = loadBest();
    const isNew = !previous || pct > previous.pct || (pct === previous.pct && correct > previous.correct);
    if (isNew) {
      const data = { pct, correct, total, date: new Date().toISOString() };
      try { window.localStorage.setItem(BEST_KEY, JSON.stringify(data)); } catch (err) { /* depolama kapalı olabilir */ }
      return { isNew: true, data };
    }
    return { isNew: false, data: previous };
  }

  /* ---------- Notes accordion ---------- */
  function bindNotes() {
    document.querySelectorAll(".acc-head").forEach((head) => {
      head.addEventListener("click", () => {
        const item = head.closest(".acc-item");
        const open = item.classList.toggle("open");
        head.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- Keyboard ---------- */
  function bindKeyboard() {
    document.addEventListener("keydown", (e) => {
      if (!screens.quiz.classList.contains("active")) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "SELECT" || tag === "INPUT" || tag === "TEXTAREA") return;

      if (!state.answered) {
        const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
        const key = e.key.toLowerCase();
        if (Object.prototype.hasOwnProperty.call(map, key)) {
          e.preventDefault();
          chooseAnswer(map[key]);
        }
      } else if (e.key === "Enter") {
        const active = document.activeElement;
        if (active === $("nextBtn")) return;
        if (active && active.closest && active.closest("button, a") && !active.classList.contains("option")) return;
        e.preventDefault();
        nextQuestion();
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    syncCounts();
    initTheme();
    populateTopics();
    bindStart();
    bindNotes();
    bindKeyboard();
    updateStartSummary();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
