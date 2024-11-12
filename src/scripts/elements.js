// Создает элемент с указанными свойствами
function createElement({ tag, className, place, text, attribute }) {
  const someElem = document.createElement(tag);
  className.forEach((element) => {
    someElem.classList.add(element);
  });
  if (text) {
    someElem.innerText = text;
  }
  if (attribute) {
    for (key in attribute) {
      someElem.setAttribute(`${key}`, `${attribute[key]}`);
    }
  }

  if (place) {
    place.append(someElem);
  }

  return someElem;
}

function createButtonElement(label, klass, id, parent) {
  const button = createElement({
    tag: "button",
    className: [klass],
    attribute: {
      id: [id],
    },
    place: parent,
    text: label,
  });

  return button;
}

export { createElement, createButtonElement };
