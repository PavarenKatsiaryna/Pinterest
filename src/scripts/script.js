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
