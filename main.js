// Card data
const cardData = {
  tarot: [
    // Major Arcana
    { name: '0. 바보(The Fool)', img: '/images/thefool.jpeg' },
    { name: '1. 마법사(The Magician)', img: '/images/themagician.jpeg' },
    { name: '2. 여사제(The High Priestess)', img: '/images/thehighpriestess.jpeg' },
    { name: '3. 여황제(The Empress)', img: '/images/theempress.jpeg' },
    { name: '4. 황제(The Emperor)', img: '/images/theemperor.jpeg' },
    { name: '5. 교황(The Hierophant)', img: '/images/thehierophant.jpeg' },
    { name: '6. 연인(The Lovers)', img: '/images/thelovers.jpeg' },
    { name: '7. 전차(The Chariot)', img: '/images/thechariot.jpeg' },
    { name: '8. 힘(Strength)', img: '/images/thestrength.jpeg' },
    { name: '9. 은둔자(The Hermit)', img: '/images/thehermit.jpeg' },
    { name: '10. 운명의 수레바퀴(Wheel of Fortune)', img: '/images/wheeloffortune.jpeg' },
    { name: '11. 정의(Justice)', img: '/images/justice.jpeg' },
    { name: '12. 매달린 사람(The Hanged Man)', img: '/images/thehangedman.jpeg' },
    { name: '13. 죽음(Death)', img: '/images/death.jpeg' },
    { name: '14. 절제(Temperance)', img: '/images/temperance.jpeg' },
    { name: '15. 악마(The Devil)', img: '/images/thedevil.jpeg' },
    { name: '16. 탑(The Tower)', img: '/images/thetower.jpeg' },
    { name: '17. 별(The Star)', img: '/images/thestar.jpeg' },
    { name: '18. 달(The Moon)', img: '/images/themoon.jpeg' },
    { name: '19. 태양(The Sun)', img: '/images/thesun.jpeg' },
    { name: '20. 심판(Judgement)', img: '/images/judgement.jpeg' },
    { name: '21. 세계(The World)', img: '/images/theworld.jpeg' },
    // Wands
    { name: '완드 에이스', img: '/images/aceofwands.jpeg' },
    { name: '완드 2', img: '/images/twoofwands.jpeg' },
    { name: '완드 3', img: '/images/threeofwands.jpeg' },
    { name: '완드 4', img: '/images/fourofwands.jpeg' },
    { name: '완드 5', img: '/images/fiveofwands.jpeg' },
    { name: '완드 6', img: '/images/sixofwands.jpeg' },
    { name: '완드 7', img: '/images/sevenofwands.jpeg' },
    { name: '완드 8', img: '/images/eightofwands.jpeg' },
    { name: '완드 9', img: '/images/nineofwands.jpeg' },
    { name: '완드 10', img: '/images/tenofwands.jpeg' },
    { name: '완드 페이지', img: '/images/pageofwands.jpeg' },
    { name: '완드 나이트', img: '/images/knightofwands.jpeg' },
    { name: '완드 퀸', img: '/images/queenofwands.jpeg' },
    { name: '완드 킹', img: '/images/kingofwands.jpeg' },
    // Cups
    { name: '컵 에이스', img: '/images/aceofcups.jpeg' },
    { name: '컵 2', img: '/images/twoofcups.jpeg' },
    { name: '컵 3', img: '/images/threeofcups.jpeg' },
    { name: '컵 4', img: '/images/fourofcups.jpeg' },
    { name: '컵 5', img: '/images/fiveofcups.jpeg' },
    { name: '컵 6', img: '/images/sixofcups.jpeg' },
    { name: '컵 7', img: '/images/sevenofcups.jpeg' },
    { name: '컵 8', img: '/images/eightofcups.jpeg' },
    { name: '컵 9', img: '/images/nineofcups.jpeg' },
    { name: '컵 10', img: '/images/tenofcups.jpeg' },
    { name: '컵 페이지', img: '/images/pageofcups.jpeg' },
    { name: '컵 나이트', img: '/images/knightofcups.jpeg' },
    { name: '컵 퀸', img: '/images/queenofcups.jpeg' },
    { name: '컵 킹', img: '/images/kingofcups.jpeg' },
    // Swords
    { name: '소드 에이스', img: '/images/aceofswords.jpeg' },
    { name: '소드 2', img: '/images/twoofswords.jpeg' },
    { name: '소드 3', img: '/images/threeofswords.jpeg' },
    { name: '소드 4', img: '/images/fourofswords.jpeg' },
    { name: '소드 5', img: '/images/fiveofswords.jpeg' },
    { name: '소드 6', img: '/images/sixofswords.jpeg' },
    { name: '소드 7', img: '/images/sevenofswords.jpeg' },
    { name: '소드 8', img: '/images/eightofswords.jpeg' },
    { name: '소드 9', img: '/images/nineofswords.jpeg' },
    { name: '소드 10', img: '/images/tenofswords.jpeg' },
    { name: '소드 페이지', img: '/images/pageofswords.jpeg' },
    { name: '소드 나이트', img: '/images/knightofswords.jpeg' },
    { name: '소드 퀸', img: '/images/queenofswords.jpeg' },
    { name: '소드 킹', img: '/images/kingofswords.jpeg' },
    // Pentacles
    { name: '펜타클 에이스', img: '/images/aceofpentacles.jpeg' },
    { name: '펜타클 2', img: '/images/twoofpentacles.jpeg' },
    { name: '펜타클 3', img: '/images/threeofpentacles.jpeg' },
    { name: '펜타클 4', img: '/images/fourofpentacles.jpeg' },
    { name: '펜타클 5', img: '/images/fiveofpentacles.jpeg' },
    { name: '펜타클 6', img: '/images/sixofpentacles.jpeg' },
    { name: '펜타클 7', img: '/images/sevenofpentacles.jpeg' },
    { name: '펜타클 8', img: '/images/eightofpentacles.jpeg' },
    { name: '펜타클 9', img: '/images/nineofpentacles.jpeg' },
    { name: '펜타클 10', img: '/images/tenofpentacles.jpeg' },
    { name: '펜타클 페이지', img: '/images/pageofpentacles.jpeg' },
    { name: '펜타클 나이트', img: '/images/knightofpentacles.jpeg' },
    { name: '펜타클 퀸', img: '/images/queenofpentacles.jpeg' },
    { name: '펜타클 킹', img: '/images/kingofpentacles.jpeg' }
  ],
  lenormand: [
    { name: '1. 기수(Rider)', emoji: '🏇' },
    { name: '2. 클로버(Clover)', emoji: '🍀' },
    { name: '3. 배(Ship)', emoji: '⛵' },
    { name: '4. 집(House)', emoji: '🏠' },
    { name: '5. 나무(Tree)', emoji: '🌳' },
    { name: '6. 구름(Clouds)', emoji: '☁️' },
    { name: '7. 뱀(Snake)', emoji: '🐍' },
    { name: '8. 관(Coffin)', emoji: '⚰️' },
    { name: '9. 꽃다발(Bouquet)', emoji: '💐' },
    { name: '10. 낫(Scythe)', emoji: '⚔️' },
    { name: '11. 채찍(Whip)', emoji: '🔱' },
    { name: '12. 새(Birds)', emoji: '🐦' },
    { name: '13. 아이(Child)', emoji: '👶' },
    { name: '14. 여우(Fox)', emoji: '🦊' },
    { name: '15. 곰(Bear)', emoji: '🐻' },
    { name: '16. 별(Stars)', emoji: '⭐' },
    { name: '17. 황새(Stork)', emoji: '🦩' },
    { name: '18. 개(Dog)', emoji: '🐕' },
    { name: '19. 탑(Tower)', emoji: '🗼' },
    { name: '20. 정원(Garden)', emoji: '🌷' },
    { name: '21. 산(Mountain)', emoji: '⛰️' },
    { name: '22. 갈림길(Crossroad)', emoji: '🛤️' },
    { name: '23. 쥐(Mice)', emoji: '🐭' },
    { name: '24. 하트(Heart)', emoji: '❤️' },
    { name: '25. 반지(Ring)', emoji: '💍' },
    { name: '26. 책(Book)', emoji: '📖' },
    { name: '27. 편지(Letter)', emoji: '✉️' },
    { name: '28. 남자(Man)', emoji: '👨' },
    { name: '29. 여자(Woman)', emoji: '👩' },
    { name: '30. 백합(Lily)', emoji: '🌺' },
    { name: '31. 태양(Sun)', emoji: '☀️' },
    { name: '32. 달(Moon)', emoji: '🌙' },
    { name: '33. 열쇠(Key)', emoji: '🔑' },
    { name: '34. 물고기(Fish)', emoji: '🐟' },
    { name: '35. 닻(Anchor)', emoji: '⚓' },
    { name: '36. 십자가(Cross)', emoji: '✝️' }
  ],
  color: [
    { name: 'Red', color: '#EF4444' },
    { name: 'Orange', color: '#F97316' },
    { name: 'Yellow', color: '#EAB308' },
    { name: 'Yellow Green', color: '#84CC16' },
    { name: 'Green', color: '#22C55E' },
    { name: 'Turquoise', color: '#14B8A6' },
    { name: 'Sky Blue', color: '#38BDF8' },
    { name: 'Blue', color: '#3B82F6' },
    { name: 'Indigo', color: '#4F46E5' },
    { name: 'Purple', color: '#A855F7' },
    { name: 'Violet', color: '#8B5CF6' },
    { name: 'Pink', color: '#EC4899' },
    { name: 'White', color: '#F3F4F6' },
    { name: 'Gray', color: '#6B7280' },
    { name: 'Black', color: '#1F2937' },
    { name: 'Gold', color: '#F59E0B' },
    { name: 'Silver', color: '#9CA3AF' },
    { name: 'Brown', color: '#92400E' }
  ]
};

// State
let selectedType = 'tarot';
let selectedCount = 1;
let cardIdCounter = 0;
let cardHierarchy = {}; // Track parent-child relationships and add counts

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});

function setupEventListeners() {
  const typeButtons = document.querySelectorAll('.type-btn');
  const countButtons = document.querySelectorAll('.count-btn');

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      typeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.dataset.type;
    });
  });

  countButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      countButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCount = parseInt(btn.dataset.count);
    });
  });

  document.getElementById('drawBtn').addEventListener('click', drawInitialCards);
}

function drawInitialCards() {
  const cards = getRandomCards(selectedType, selectedCount);
  cardHierarchy = {}; // Reset hierarchy
  cardIdCounter = 0;

  // Assign IDs and track in hierarchy
  cards.forEach(card => {
    card.id = `card-${cardIdCounter++}`;
    cardHierarchy[card.id] = {
      card: card,
      children: [],
      addCount: 0,
      parentId: null
    };
  });

  displayCards(cards);
}

function getRandomCards(type, count) {
  const deck = [...cardData[type]];
  const selected = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const cardTemplate = deck[randomIndex];

    const card = {
      name: cardTemplate.name,
      type: type,
      img: cardTemplate.img,
      emoji: cardTemplate.emoji,
      color: cardTemplate.color
    };

    selected.push(card);
    deck.splice(randomIndex, 1);
  }

  return selected;
}

function displayCards(cards) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  cards.forEach(card => {
    const cardElement = createCardElement(card, 0);
    resultsDiv.appendChild(cardElement);
  });
}

function createCardElement(card, depth) {
  const wrapper = document.createElement('div');
  wrapper.className = 'card-wrapper';
  wrapper.dataset.cardId = card.id;

  const cardMain = document.createElement('div');
  cardMain.className = 'card-main';
  cardMain.dataset.depth = depth;

  let cardHTML = '';

  // Display tarot cards with images
  if (card.type === 'tarot' && card.img) {
    cardHTML = `
      <div class="card tarot-card" style="animation-delay: ${depth * 0.05}s;">
        <img src="${card.img}" alt="${card.name}" class="card-image">
        <div class="card-name-overlay">${card.name}</div>
      </div>
    `;
  }
  // Display lenormand cards with emoji
  else if (card.type === 'lenormand' && card.emoji) {
    cardHTML = `
      <div class="card lenormand-card" style="animation-delay: ${depth * 0.05}s;">
        <div class="card-content">
          <div class="card-emoji">${card.emoji}</div>
          <div class="card-name">${card.name}</div>
        </div>
      </div>
    `;
  }
  // Display color cards with simple color and English name
  else if (card.type === 'color' && card.color) {
    const textColor = shouldUseWhiteText(card.color) ? '#FFFFFF' : '#000000';
    cardHTML = `
      <div class="card color-card" style="background-color: ${card.color}; animation-delay: ${depth * 0.05}s;">
        <div class="card-content" style="color: ${textColor};">
          <div class="color-name">${card.name}</div>
        </div>
      </div>
    `;
  }

  cardMain.innerHTML = cardHTML;

  // Add button section (only for depth 0 and 1)
  const cardInfo = cardHierarchy[card.id];
  if (cardInfo && cardInfo.addCount < 2 && depth < 2) {
    const addSection = document.createElement('div');
    addSection.className = 'card-add-section';
    addSection.innerHTML = `
      <div class="add-controls">
        <div class="add-type-btns">
          <button class="mini-btn active" data-type="tarot">타로</button>
          <button class="mini-btn" data-type="lenormand">레노먼드</button>
          <button class="mini-btn" data-type="color">컬러</button>
        </div>
        <div class="add-count-btns">
          <button class="mini-btn active" data-count="1">1</button>
          <button class="mini-btn" data-count="3">3</button>
        </div>
        <button class="add-card-btn">
          추가
        </button>
      </div>
    `;

    // Setup event listeners for this card's add controls
    setupAddControls(addSection, card.id);
    cardMain.appendChild(addSection);
  }

  wrapper.appendChild(cardMain);

  // Container for child cards
  const childrenContainer = document.createElement('div');
  childrenContainer.className = 'children-container';
  childrenContainer.id = `children-${card.id}`;
  wrapper.appendChild(childrenContainer);

  return wrapper;
}

function setupAddControls(addSection, parentCardId) {
  const typeBtns = addSection.querySelectorAll('.add-type-btns .mini-btn');
  const countBtns = addSection.querySelectorAll('.add-count-btns .mini-btn');
  const addBtn = addSection.querySelector('.add-card-btn');

  let selectedType = 'tarot';
  let selectedCount = 1;

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.dataset.type;
    });
  });

  countBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      countBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCount = parseInt(btn.dataset.count);
    });
  });

  addBtn.addEventListener('click', () => {
    addCardsToParent(parentCardId, selectedType, selectedCount);
  });
}

function addCardsToParent(parentCardId, type, count) {
  const parentInfo = cardHierarchy[parentCardId];
  if (!parentInfo || parentInfo.addCount >= 2) return;

  const newCards = getRandomCards(type, count);
  const parentWrapper = document.querySelector(`[data-card-id="${parentCardId}"]`);
  const parentDepth = parseInt(parentWrapper.querySelector('.card-main').dataset.depth);

  // Assign IDs and add to hierarchy
  newCards.forEach(card => {
    card.id = `card-${cardIdCounter++}`;
    cardHierarchy[card.id] = {
      card: card,
      children: [],
      addCount: 0,
      parentId: parentCardId
    };
    parentInfo.children.push(card.id);
  });

  // Update parent's add count
  parentInfo.addCount++;

  // Render new cards
  const childrenContainer = document.getElementById(`children-${parentCardId}`);
  newCards.forEach(card => {
    const cardElement = createCardElement(card, parentDepth + 1);
    childrenContainer.appendChild(cardElement);
  });

  // Update add button
  const cardMain = parentWrapper.querySelector('.card-main');
  const addSection = cardMain.querySelector('.card-add-section');

  if (parentInfo.addCount >= 2) {
    addSection.remove();
  }
}

function shouldUseWhiteText(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}
