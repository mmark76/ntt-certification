(() => {
  'use strict';

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const appendTextList = (parent, label, values) => {
    const p = el('p');
    const strong = el('strong', '', `${label}: `);
    p.append(strong, document.createTextNode(values.join(' · ')));
    parent.append(p);
  };

  const renderChapter = (chapter) => {
    const card = el('article', 'feature-card');
    card.append(
      el('span', 'feature-number', String(chapter.chapter).padStart(2, '0')),
      el('h3', '', chapter.title)
    );
    appendTextList(card, 'Τι να μάθεις', [chapter.learning_goal]);
    appendTextList(card, 'Βασικά σημεία', chapter.key_points);
    appendTextList(card, 'Όροι', chapter.important_terms);
    return card;
  };

  const renderFlashcard = (card, index) => {
    const article = el('article', 'flashcard');
    const slug = card.id.toLowerCase();
    const titleId = `title-${slug}`;
    const answerId = `answer-${slug}`;
    article.id = `card-${slug}`;
    article.dataset.flashcardId = card.id;
    article.setAttribute('aria-labelledby', titleId);

    const meta = el('div', 'flashcard__meta');
    const idSpan = el('span');
    idSpan.append(el('strong', '', card.id));
    meta.append(
      idSpan,
      el('span', '', `Κάρτα ${String(index + 1).padStart(2, '0')}`),
      el('span', '', card.keywords.join(' · '))
    );

    const question = el('h3', 'flashcard__question', card.question);
    question.id = titleId;

    const answer = el('div', 'flashcard__answer');
    answer.id = answerId;
    answer.dataset.flashcardAnswer = '';
    answer.hidden = true;
    const answerP = el('p');
    answerP.style.whiteSpace = 'pre-line';
    answerP.append(el('strong', '', 'Απάντηση: '), document.createTextNode(card.answer));
    answer.append(answerP);

    const source = el('p', 'flashcard__source');
    source.append(
      el('strong', '', 'NEEDS_VERIFICATION: '),
      document.createTextNode('εισαγόμενο study pack· δεν έχει ακόμη αντιστοιχιστεί σε συγκεκριμένο source-question ID / σελίδα του canonical PDF map.')
    );

    const actions = el('div', 'flashcard__actions');
    actions.setAttribute('role', 'group');
    actions.setAttribute('aria-label', `Χειριστήρια κάρτας ${card.id}`);

    const toggle = el('button', '', 'Εμφάνιση απάντησης');
    toggle.type = 'button';
    toggle.dataset.flashcardToggle = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', answerId);

    const known = el('button', '', 'Το γνωρίζω');
    known.type = 'button';
    known.dataset.confidence = 'known';
    known.setAttribute('aria-pressed', 'false');
    known.disabled = true;

    const review = el('button', '', 'Χρειάζεται επανάληψη');
    review.type = 'button';
    review.dataset.confidence = 'review';
    review.setAttribute('aria-pressed', 'false');
    review.disabled = true;

    actions.append(toggle, known, review);
    article.append(meta, question, answer, source, actions);
    return article;
  };

  const loadFlashcardInteractions = () => {
    const script = document.createElement('script');
    script.src = 'assets/flashcards.js';
    script.defer = true;
    document.head.append(script);
  };

  const dataFiles = [
    'data/study-pack-a-1.json',
    'data/study-pack-a-2.json',
    'data/study-pack-a-3.json',
    'data/study-pack-a-4.json',
    'data/study-pack-b-1.json',
    'data/study-pack-b-2.json',
    'data/study-pack-b-3.json',
    'data/study-pack-b-4.json'
  ];

  Promise.all(
    dataFiles.map((url) =>
      fetch(url, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
        return response.json();
      })
    )
  )
    .then((parts) => {
      const cards = parts.flat();
      [1, 2].forEach((chapterNumber) => {
        const grid = document.querySelector(`[data-study-pack-grid="${chapterNumber}"]`);
        if (!grid) return;
        const chapterCards = cards.filter((card) => card.chapter === chapterNumber);
        grid.replaceChildren(...chapterCards.map(renderFlashcard));
      });

      loadFlashcardInteractions();
    })
    .catch((error) => {
      document.querySelectorAll('[data-study-pack-grid]').forEach((root) => {
        root.replaceChildren(el('p', 'curriculum-message', 'Δεν ήταν δυνατή η φόρτωση της τράπεζας μελέτης.'));
      });
      console.error('Study pack load failed:', error);
    });
})();
