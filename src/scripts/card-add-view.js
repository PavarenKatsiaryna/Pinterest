import { createElement } from "./elements.js";
import { Boards } from "./boards.js";

//-----  Создает список доступных досок ------

function createBoardsOptions(parent, card, nameBoards) {
  for (let j = 1; j < nameBoards.length; j++) {
    const linkBoard = createElement({
      tag: "a",
      className: ["list__item"],
      attribute: { href: "#" },
      text: nameBoards[j],
      place: parent,
    });

    linkBoard.addEventListener("click", function () {
      const cards = Boards.getMainBoard();
      const index = cards.findIndex((item) => {
        return item.id === card.data.id;
      });

      if (index !== -1) {
        Boards.getMainBoard().splice(index, 1);
        Boards.addCardToBoard(card.data, j);
      }

    });
  }
}

// Окно добавления на доску

//-------- Создает модальное окно для добавления карточки на доску

function createModalAdd(parent, card) {
  const modalAdd = document.createElement("div");
  modalAdd.className = "modal-add";
  parent.append(modalAdd);

  const modalAddContainer = createElement({
    tag: "div",
    className: ["modal-add__container"],
    place: modalAdd,
  });

  const modalAddBoards = createElement({
    tag: "div",
    className: ["modal-add__boards"],
    place: modalAddContainer,
  });

  const modalAddTitle = createElement({
    tag: "div",
    className: ["modal-add__title"],
    text: "Добавить на доску",
    place: modalAddBoards,
  });

  //доски с оберткой
  const modalAddList = createElement({
    tag: "div",
    className: ["modal-add__list"],
    place: modalAddBoards,
  });

  createBoardsOptions(modalAddList, card, [
    "Доска 0",
    "Доска 1",
    "Доска 2",
    "Доска 3",
  ]);

  const modalAddFooter = createElement({
    tag: "div",
    className: ["modal-add__footer"],
    place: modalAddBoards,
  });

  const modalAddClose = createElement({
    tag: "button",
    className: ["modal-add__close"],
    text: "Закрыть",
    place: modalAddFooter,
  });

  //Закрытие и удаление модального окна "Добавить на доску"
  modalAddClose.addEventListener("click", () => {
    modalAdd.remove();
  });
}

export { createModalAdd };
