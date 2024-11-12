//=====================
// Переменные

const boards = {
  0: [], //CardArray
  1: [], //CardArrayBoard1
  2: [], //CardArrayBoard2
  3: [], //CardArrayBoard3
};

let activeBoardIndex = 0;

//=====================
// Методы

function getMainBoard() {
  return boards[0];
}

function setMainBoard(data) {
  boards[0] = data;
}

function getFromLocalStorage() {
  boards[0] = JSON.parse(localStorage.getItem("cardArray") ?? "[]");
  boards[1] = JSON.parse(localStorage.getItem("cardArrayBoard1") ?? "[]");
  boards[2] = JSON.parse(localStorage.getItem("cardArrayBoard2") ?? "[]");
  boards[3] = JSON.parse(localStorage.getItem("cardArrayBoard3") ?? "[]");
}

function setToLocalStorage(array, name) {
  localStorage.setItem(name, JSON.stringify(array));
}

/**
 * Добавляет карточку на выбранную доску
 */
function addCardToBoard(cardData, boardIndex) {
  boards[boardIndex].push(cardData);
  setToLocalStorage(boards[0], "cardArray");
  setToLocalStorage(boards[boardIndex], `cardArrayBoard${boardIndex}`);
}

function getActive() {
  return activeBoardIndex;
}

function setActive(index) {
  activeBoardIndex = index;
}

const Boards = {
  boards,
  getFromLocalStorage,
  setToLocalStorage,
  addCardToBoard,
  getActive,
  setActive,
  getMainBoard,
  setMainBoard,
};

export { Boards };
