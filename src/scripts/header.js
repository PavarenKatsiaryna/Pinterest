import { Boards } from "./boards.js";
import { createElement } from "./elements.js";
import { Card } from "./card-view.js";
import { createCardView, createPinView } from "./card-view.js";

//=================================
// Заголовок страницы

function searchByLetters(searchTerm, cards) {
  return cards.filter((card) =>
    card.hashtag.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function updateSearchResults(results) {
  let main = document.querySelector("main");
  main.innerHTML = ""; // Очищаем содержимое main

  if (results.length === 0) {
    // Если результаты пусты, добавляем картинку
    let message = document.createElement("div");
    message.className = "not_found" 
    main.appendChild(message);
  } else {
    // Если есть результаты, создаем карточки
    createCardsGrid(results);
  }
}

// Создает строку поиска
function createSearchBar(parent) {
  const inputNav = createElement({
    tag: "input",
    className: ["navigation__input"],
    text: undefined,
    attribute: {
      type: "search",
      placeholder: "Поиск...",
    },
    place: parent,
  });

  inputNav.addEventListener("input", function (event) {
    const searchTerm = event.target.value.toLowerCase();

    // поиск и отображение результатов
    const boards = Boards.boards;
    const active = Boards.getActive();
    const board = active !== -1 ? boards[active] : Boards.getMainBoard();
    const searchResults = searchByLetters(searchTerm, board);
    updateSearchResults(searchResults);
  });
}

// Создает элементы выпадающего списка досок
function createBoardsDropdownOptions(dropdown) {
  const nameBoards = ["Доска 0", "Доска 1", "Доска 2", "Доска 3"];

  for (let j = 1; j < nameBoards.length; j++) {
    const linkBoard = createElement({
      tag: "a",
      className: ["Boards__item"],
      text: nameBoards[j],
      place: dropdown,
    });

    linkBoard.addEventListener("click", function (event) {
      console.log("Выбрана доска:", nameBoards[j]);
      let main = document.querySelector("main");
      main.innerHTML = "";

      Boards.setActive(j);
      createCardsGrid(Boards.boards[j]);
    });
  }
}

// Создает выпадающие список досок
function createBoardsDropdown(parent) {
  const dropdownMenu = createElement({
    tag: "div",
    className: ["Boards__menu"],
    place: parent,
  });

  createBoardsDropdownOptions(dropdownMenu);

  return dropdownMenu;
}

// Создает заголовок страницы
function createHeader() {
  const header = createElement({
    tag: "header",
    className: ["header"],
    place: root,
  });

  const headerContainer = createElement({
    tag: "div",
    className: ["header__container"],
    place: header,
  });

  const navBlock = createElement({
    tag: "nav",
    className: ["navigation"],
    place: headerContainer,
  });

  const linkNav = createElement({
    tag: "div",
    className: ["link__nav"],
    place: navBlock,
  });

  const linkNavSpan = createElement({
    tag: "span",
    className: ["link__nav-text"],
    text: "Pinterest",
    place: linkNav,
  });
  // Банер страницы
  const imgLink = createElement({
    tag: "img",
    className: ["link__img"],
    attribute: {
      src: "https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",
      alt: "Pinterest logo",
    },
    place: linkNav,
  });

  // при загружает грид с главной страницы
  imgLink.addEventListener("click", function () {
    Boards.setActive(0);
    createCardsGrid(Boards.getMainBoard());
  });

  const divInput = createElement({
    tag: "div",
    className: ["div__input-icon"],
    place: navBlock,
  });

  createSearchBar(divInput);

  const divButton = createElement({
    tag: "div",
    className: ["div__button"],
    place: divInput,
  });
  const buttonBoards = createElement({
    tag: "a",
    attribute: { href: "#" },
    className: ["button-boards"],
    place: divButton,
  });
  //при клике одновременно срабатывает бургер "Х" и выпадает меню досок
  //и при клике на любую из досок модальное окно закрывается и бургер
  //возвращается в исходное положение
  buttonBoards.addEventListener("click", () => {
    const dropdownMenu = divButton.querySelector(".Boards__menu");
    dropdownMenu.classList.toggle("active");
    buttonBoards.classList.toggle("active-burger");

    if (dropdownMenu.classList.contains("active")) {
      const allBoardsItems = dropdownMenu.querySelectorAll(".Boards__item");
      allBoardsItems.forEach((item) => {
        item.addEventListener("click", () => {
          dropdownMenu.classList.remove("active");
          buttonBoards.classList.remove("active-burger");
        });
      });
    }
  });

  const spanButton = createElement({
    tag: "span",
    className: ["button-boards_span"],
    text: "Выбрать доску",
    place: buttonBoards,
  });

  createBoardsDropdown(divButton);
}

// Создает список доступных досок
 
function createBoardsOptions(parent, cardData, nameBoards) {
  for (let j = 1; j <= nameBoards.length; j++) {
    const linkBoard = createElement({
      tag: "a",
      className: ["list__item"],
      attribute: { href: "#" },
      text: nameBoards[j],
      place: parent,
    });

    linkBoard.addEventListener("click", function () {
      const index = Boards.getMainBoard().findIndex(
        (item) => item.id === cardData.id
      );
      if (index !== -1) {
        Boards.getMainBoard().splice(index, 1);
        addCardToBoard(cardData, j);
      }
      cardData.view.remove();
      cardData.view = null;
    });
  }
}

// Создает сетку карточек
function createCardsGrid(cards) {
  const oldMain = document.querySelector("main");
  if (oldMain) {
    oldMain.remove();
  }
  const main = createElement({
    tag: "main",
    className: ["main"],
    place: root,
  });

  const mainContainer = createElement({
    tag: "div",
    className: ["main__container"],
    place: main,
  });
  
  for (const cardData of cards) {
    const card = { data: cardData };
    card.view = createCardView(card);
    card.pin = createPinView(card);
    mainContainer.append(card.view);
  }
}

export { createHeader, createCardsGrid };
