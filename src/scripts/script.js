import { Boards } from "./boards.js";
import { getCards } from "./remote.js";
import { createHeader, createCardsGrid } from "./header.js";

createHeader();
Boards.getFromLocalStorage();

if (Boards.getMainBoard().length == 0) {
  getCards().then((cards) => {
    createCardsGrid(cards);
    Boards.setToLocalStorage(cards, "cardArray");
    Boards.setMainBoard(cards);
  });
} else {
  createCardsGrid(Boards.getMainBoard());
}
//Данный код проверяет наличие данных (карточек) на основной доске.
// Если данных нет, он загружает их асинхронно, отображает и сохраняет
// их в локальное хранилище. Если данные уже есть, он просто отображает их.