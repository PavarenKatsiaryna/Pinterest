import { createElement, createButtonElement } from "./elements.js";
import { createModalAdd } from "./card-add-view.js";
import { createComplaintWindow } from "./complaint-view.js";
import { getRandomArrayElement } from "./utils.js";
import { Boards } from './boards.js'


const heights = [200, 260, 280, 300, 240];

function createCardView(cardObj) {
  const card = createElement({
    tag: "div",
    className: ["card"],
  });

  //карточки с рандомной высотой

  const height = getRandomArrayElement(heights);

  const image = createElement({
    tag: "img",
    className: ["card-picture"],
    attribute: {
      src: cardObj.data.picture + "?random=" + cardObj.data.id,
      height: height + "px",
      width: "640px",
    },
    place: card,
  });

  const content = createElement({
    tag: "div",
    className: ["card-content"],
    place: card,
  });

  const avatarElement = createElement({
    tag: "img",
    className: ["card-avatar"],
    attribute: { src: cardObj.data.avatar },
    place: content,
  });
  const hashtagElement = createElement({
    tag: "div",
    className: ["card-hashtag"],
    text: `#${cardObj.data.hashtag}`,
    place: content,
  });
  return card;
}

function createPinView(cardObj) {
  const pin = createElement({
    tag: "div",
    className: ["pin-menu"],
    place: cardObj.view,
  });
  const boards = Boards;
  const card = cardObj;
  const bid = Boards.getActive();

  const buttonAdd = createButtonElement(
    "Добавить на доску",
    "pin-menu__button",
    "button-add",
    pin
  );
  const buttonComplain = createButtonElement(
    "Пожаловаться",
    "pin-menu__button",
    "button-complain",
    pin
  );
  const buttonDelete = createButtonElement(
    "Удалить с доски",
    "pin-menu__button",
    "button-delete",
    pin
  );
 // Проверяем, является ли текущая доска одной из целевых (1, 2 или 3)
 if ([1, 2, 3].includes(bid)) {
  // Если это одна из целевых досок, меняем местами кнопки
  buttonAdd.style.display = 'none';
  buttonDelete.style.display = 'block';
} else {
  // В противном случае оставляем стандартное поведение
  buttonAdd.style.display = 'block';
  buttonDelete.style.display = 'none';
}
  
  //--------- Открытие окна добавления карточки ---------
  buttonAdd.addEventListener("click", () => {
    createModalAdd(document.querySelector("#root"), cardObj);
  });

  //----------- Открытие окна жалоб -----------
  buttonComplain.addEventListener("click", () => {
    createComplaintWindow(document.querySelector("#root"));
  });
  //----------- Удаление карточки с доски -----------
  buttonDelete.addEventListener("click", () => {
    boards.removeCardFromBoard(card, bid)
  });

  cardObj.view.addEventListener("mouseover", function () {
    pin.style.display = "flex";
  });

  cardObj.view.addEventListener("mouseout", function () {
    pin.style.display = "none";
  });
  
}

export { createCardView, createPinView };
