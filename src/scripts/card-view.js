import { createElement, createButtonElement } from "./elements.js";
import { createModalAdd } from "./card-add-view.js";
import { createComplaintWindow } from "./complaint-view.js";
import { getRandomArrayElement } from "./utils.js";

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

  //--------- Открытие окна добавления карточки ---------
  buttonAdd.addEventListener("click", () => {
    createModalAdd(document.querySelector("#root"), cardObj);
  });

  //----------- Открытие окна жалоб -----------
  buttonComplain.addEventListener("click", () => {
    createComplaintWindow(document.querySelector("#root"));
  });

  cardObj.view.addEventListener("mouseover", function () {
    pin.style.display = "flex";
  });

  cardObj.view.addEventListener("mouseout", function () {
    pin.style.display = "none";
  });
}

export { createCardView, createPinView };
