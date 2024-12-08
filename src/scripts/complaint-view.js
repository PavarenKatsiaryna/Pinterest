import { createElement } from "./elements.js";

//Модальное окно пожаловаться

// Создает окно жалобы
function createComplaintWindow(parent) {
  const rootDiv = document.createElement("div");
  rootDiv.className = "modal";
  parent.append(rootDiv);

  const body = createElement({
    tag: "div",
    className: ["modal_body"],
    place: rootDiv,
  });

  const content = createElement({
    tag: "div",
    className: ["modal_content"],
    place: body,
  });

  const title = createElement({
    tag: "div",
    className: ["modal_title"],
    text: "Жалоба на пин",
    place: content,
  });

  //чекбоксы с оберткой
  const text = createElement({
    tag: "div",
    className: ["modal_text"],
    place: content,
  });

  const arrText = [
    "Спам",
    "Членовредительство",
    "Ложная информация",
    "Агрессивные действия",
    "Опасные товары",
    "Преследование или критика",
    "Сцены насилия",
    "Нарушение конфиденциальности",
  ];
  for (let i = 0; i <= arrText.length - 1; i++) {
    const label = createElement({
      tag: "label",
      className: ["modal_label"],
      text: arrText[i],
      place: text,
    });

    createElement({
      tag: "input",
      className: ["modal_checkbox"],
      attribute: {
        type: "checkbox",
      },
      place: label,
    });

    createElement({
      tag: "span",
      className: ["modal_span"],
      place: label,
    });
  }

  const footer = createElement({
    tag: "div",
    className: ["modal_footer"],
    place: content,
  });

  const buttonClose = createElement({
    tag: "button",
    className: ["modal_close"],
    text: "Отмена",
    place: footer,
  });

  const buttonSubmit = createElement({
    tag: "button",
    className: ["modal_submit", "disabled"],
    text: "Отправить",
    place: footer,
  });
  buttonSubmit.disabled = "true";

  const buttonSubmitSpinner = createElement({
    tag: "span",
    className: ["spinner"],
    place: buttonSubmit,
  });
  //При нажатии на чекбокс кнопка отправить становиться активной
  const checkboxes = document.querySelectorAll(".modal_checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Проверяем, есть ли хотя бы один выбранный чекбокс
      const isChecked = Array.from(checkboxes).some(
        (checkbox) => checkbox.checked
      );
      buttonSubmit.disabled = !isChecked; // Активируем/деактивируем кнопку
      buttonSubmit.classList.toggle("disabled", !isChecked); // Меняем класс для стилей
    });
  });

  // При нажатии на кнопку "отмена", закрыть и удалить модальное окно
  buttonClose.addEventListener("click", () => {
    rootDiv.remove();
  });

  // При нажатии на кнопку"отправить",срабатывает спиннер +
  // закрывается модальное окно + срабатывает alert для экранов >=1024
  buttonSubmit.addEventListener("click", () => {
    buttonSubmit.style.display = "block";
    buttonSubmitSpinner.style.display = "flex";
    buttonSubmitSpinner.classList.add("spin");
    setTimeout(() => {
      buttonSubmitSpinner.style.display = "none";
      rootDiv.remove();

      setTimeout(() => {
        if (window.innerWidth >= 1024) {
          alert("Ваша жалоба отправлена!");
        }
      }, 700);
    }, 1500);
  });

  //Окраска текста при клике на чекбокс
  const selectors = rootDiv.querySelectorAll(".modal_label");
  for (const selector of selectors) {
    selector.addEventListener("click", (e) => {
      const container = e.currentTarget;
      if (container.firstElementChild.checked) {
        container.style.color = "red";
      } else {
        container.style.color = "black";
      }
    });
  }
}

export { createComplaintWindow };
