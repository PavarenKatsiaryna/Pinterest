import { buttonScrolling } from "./button-scroll";

const getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
//вызов кнопки scroll
buttonScrolling (document.querySelector("#root"));

export { getRandomArrayElement };
