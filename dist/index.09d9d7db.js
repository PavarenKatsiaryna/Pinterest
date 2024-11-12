//=====================
// Переменные
let cardArray = [];
let cardArrayBoard1 = [];
let cardArrayBoard2 = [];
let cardArrayBoard3 = [];
const boards = {
    0: cardArrayBoard1,
    1: cardArrayBoard2,
    2: cardArrayBoard3
};
let activeBoardIndex = -1;
//=====================
// Методы
async function getCards() {
    const response = await fetch("https://65d85342c96fbb24c1bb40ab.mockapi.io/api/pintrest/PinterestClone");
    return await response.json();
}
function getFromLocalStorage() {
    if (localStorage.getItem("cardArray")) {
        cardArray = JSON.parse(localStorage.getItem("cardArray"));
        createCardsGrid(cardArray);
    }
    if (localStorage.getItem("cardArrayBoard1")) boards[0] = cardArrayBoard1 = JSON.parse(localStorage.getItem("cardArrayBoard1"));
    if (localStorage.getItem("cardArrayBoard2")) boards[1] = cardArrayBoard2 = JSON.parse(localStorage.getItem("cardArrayBoard2"));
    if (localStorage.getItem("cardArrayBoard3")) boards[2] = cardArrayBoard3 = JSON.parse(localStorage.getItem("cardArrayBoard3"));
}
function setToLocalStorage(array, name) {
    localStorage.setItem(name, JSON.stringify(array));
}
// Создает элемент с указанными свойствами
function createElement({ tag, className, place, text, attribute }) {
    const someElem = document.createElement(tag);
    className.forEach((element)=>{
        someElem.classList.add(element);
    });
    if (text) someElem.innerText = text;
    if (attribute) for(key in attribute)someElem.setAttribute(`${key}`, `${attribute[key]}`);
    place.append(someElem);
    return someElem;
}
//=================================
// Заголовок страницы
function searchByLetters(searchTerm, cards) {
    return cards.filter((card)=>card.hashtag.toLowerCase().includes(searchTerm));
}
function updateSearchResults(results) {
    // console.log("Обновление отображения результатов: ", results);
    let main = document.querySelector("main");
    main.remove();
    createCardsGrid(results);
}
// Создает строку поиска
function createSearchBar(parent) {
    const inputNav = createElement({
        tag: "input",
        className: [
            "navigation__input"
        ],
        text: undefined,
        attribute: {
            type: "search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A..."
        },
        place: parent
    });
    inputNav.addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        // поиск и отображение результатов
        const board = activeBoardIndex != -1 ? boards[activeBoardIndex] : cardArray;
        const searchResults = searchByLetters(searchTerm, board);
        updateSearchResults(searchResults);
    });
}
// Создает элементы выпадающего списка досок
function createBoardsDropdownOptions(dropdown) {
    const nameBoards = [
        "\u0414\u043E\u0441\u043A\u0430 1",
        "\u0414\u043E\u0441\u043A\u0430 2",
        "\u0414\u043E\u0441\u043A\u0430 3"
    ];
    for(let j = 0; j < nameBoards.length; j++){
        const linkBoard = createElement({
            tag: "a",
            className: [
                "Boards__item"
            ],
            text: nameBoards[j],
            place: dropdown
        });
        linkBoard.addEventListener("click", function(event) {
            console.log("\u0412\u044B\u0431\u0440\u0430\u043D\u0430 \u0434\u043E\u0441\u043A\u0430:", nameBoards[j]);
            let main = document.querySelector("main");
            main.innerHTML = "";
            activeBoardIndex = j;
            createCardsGrid(boards[j]);
        });
    }
}
// Создает выпадающие список досок
function createBoardsDropdown(parent) {
    const dropdownMenu = createElement({
        tag: "div",
        className: [
            "Boards__menu"
        ],
        place: parent
    });
    createBoardsDropdownOptions(dropdownMenu);
    return dropdownMenu;
}
// Создает заголовок страницы
function createHeader() {
    const header = createElement({
        tag: "header",
        className: [
            "header"
        ],
        place: root
    });
    const headerContainer = createElement({
        tag: "div",
        className: [
            "header__container"
        ],
        place: header
    });
    const navBlock = createElement({
        tag: "nav",
        className: [
            "navigation"
        ],
        place: headerContainer
    });
    const linkNav = createElement({
        tag: "div",
        className: [
            "link__nav"
        ],
        place: navBlock
    });
    // Банер страницы
    const imgLink = createElement({
        tag: "img",
        className: [
            "link__img"
        ],
        attribute: {
            src: "https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",
            alt: "Pinterest logo"
        },
        place: linkNav
    });
    // при загружает грид с главной страницы
    imgLink.addEventListener("click", function() {
        activeBoardIndex = -1;
        createCardsGrid(cardArray);
    });
    const divInput = createElement({
        tag: "div",
        className: [
            "div__input-icon",
            "div__input-icon_search"
        ],
        place: navBlock
    });
    createSearchBar(divInput);
    const divButton = createElement({
        tag: "div",
        className: [
            "div__button"
        ],
        place: divInput
    });
    const buttonBoards = createElement({
        tag: "a",
        attribute: {
            href: "#"
        },
        className: [
            "button-boards"
        ],
        place: divButton
    });
    const spanButton = createElement({
        tag: "span",
        className: [
            "button-boards_span"
        ],
        text: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443",
        place: buttonBoards
    });
    createBoardsDropdown(divButton);
}
/**
 * Добавляет карточку на выбранную доску
 */ function addCardToBoard(cardData, boardIndex) {
    switch(boardIndex){
        case 0:
            cardArrayBoard1.push(cardData);
            setToLocalStorage(cardArray, "cardArray");
            setToLocalStorage(cardArrayBoard1, "cardArrayBoard1");
            break;
        case 1:
            cardArrayBoard2.push(cardData);
            setToLocalStorage(cardArray, "cardArray");
            setToLocalStorage(cardArrayBoard2, "cardArrayBoard2");
            break;
        case 2:
            cardArrayBoard3.push(cardData);
            setToLocalStorage(cardArray, "cardArray");
            setToLocalStorage(cardArrayBoard3, "cardArrayBoard3");
            break;
    }
    // Для проверки добавления. Потом надо убрать
    console.log(`\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{43A}\u{430}\u{440}\u{442}\u{44B} \u{43D}\u{430} \u{434}\u{43E}\u{441}\u{43A}\u{443} ${boardIndex}:`, cardData);
}
/**
 * Создает список доступных досок
 */ function createBoardsOptions(parent, cardData, nameBoards) {
    for(let j = 0; j < nameBoards.length; j++){
        const linkBoard = createElement({
            tag: "a",
            className: [
                "list__item"
            ],
            attribute: {
                href: "#"
            },
            text: nameBoards[j],
            place: parent
        });
        linkBoard.addEventListener("click", function() {
            const index = cardArray.findIndex((item)=>item.id === cardData.id);
            if (index !== -1) {
                cardArray.splice(index, 1);
                addCardToBoard(cardData, j);
            }
            cardData.view.remove();
            cardData.view = null;
        });
    }
}
//===========================
// Меню карточки
// Создаем кнопку для меню карточки
function createPinMenuButton(parent, buttonText, id) {
    const button = createElement({
        tag: "button",
        className: [
            "pin-menu__button"
        ],
        attribute: {
            id: [
                id
            ]
        },
        place: parent,
        text: buttonText
    });
    return button;
}
// Создает меню карточки
function createPinMenu(cardData, parent) {
    const pinMenu = createElement({
        tag: "div",
        className: [
            "pin-menu"
        ],
        place: parent
    });
    const buttonAdd = createPinMenuButton(pinMenu, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443", "button-add");
    const buttonComplain = createPinMenuButton(pinMenu, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F", "button-complain");
    // Открытие окна добавления карточки
    buttonAdd.addEventListener("click", ()=>{
        createModalAdd(pinMenu, cardData);
    });
    // Открытие окна жалоб
    buttonComplain.addEventListener("click", ()=>{
        createComplaintWindow(pinMenu);
    });
    return pinMenu;
}
//===========================
// Окно добавления на доску
/** 
 * Создает модальное окно для добавления карточки на доску
 */ function createModalAdd(parent, cardData) {
    const modalAdd = document.createElement("div");
    modalAdd.className = "modal-add";
    parent.append(modalAdd);
    const modalAddContainer = createElement({
        tag: "div",
        className: [
            "modal-add__container"
        ],
        place: modalAdd
    });
    const modalAddBoards = createElement({
        teg: "div",
        className: [
            "modal-add__boards"
        ],
        place: modalAddContainer
    });
    const modalAddTitle = createElement({
        tag: "div",
        className: [
            "modal-add__title"
        ],
        text: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u0434\u043E\u0441\u043A\u0443",
        place: modalAddBoards
    });
    //доски с оберткой
    const modalAddList = createElement({
        tag: "div",
        className: [
            "modal-add__list"
        ],
        place: modalAddBoards
    });
    createBoardsOptions(modalAddList, cardData, [
        "\u0414\u043E\u0441\u043A\u0430 1",
        "\u0414\u043E\u0441\u043A\u0430 2",
        "\u0414\u043E\u0441\u043A\u0430 3"
    ]);
    const modalAddFooter = createElement({
        tag: "div",
        className: [
            "modal-add__footer"
        ],
        place: modalAddBoards
    });
    const modalAddClose = createElement({
        tag: "button",
        className: [
            "modal-add__close"
        ],
        text: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        place: modalAddFooter
    });
    //Закрытие и удаление модального окна "Добавить на доску"
    modalAddClose.addEventListener("click", ()=>{
        modalAdd.remove();
    });
}
//===========================
//Модальное окно пожаловаться
// Создает окно жалобы
function createComplaintWindow(parent) {
    const rootDiv = document.createElement("div");
    rootDiv.className = "modal";
    parent.append(rootDiv);
    const body = createElement({
        tag: "div",
        className: [
            "modal_body"
        ],
        place: rootDiv
    });
    const content = createElement({
        teg: "div",
        className: [
            "modal_content"
        ],
        place: body
    });
    const title = createElement({
        tag: "div",
        className: [
            "modal_title"
        ],
        text: "\u0416\u0430\u043B\u043E\u0431\u0430 \u043D\u0430 \u043F\u0438\u043D",
        place: content
    });
    //чекбоксы с оберткой
    const text = createElement({
        tag: "div",
        className: [
            "modal_text"
        ],
        place: content
    });
    const arrText = [
        "\u0421\u043F\u0430\u043C",
        "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0431\u043D\u0430\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0430, \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u0438\u043B\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430",
        "\u0427\u043B\u0435\u043D\u043E\u0432\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E",
        "\u041B\u043E\u0436\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        "\u0410\u0433\u0440\u0435\u0441\u0441\u0438\u0432\u043D\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
        "\u041E\u043F\u0430\u0441\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B",
        "\u041F\u0440\u0435\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u043A\u0440\u0438\u0442\u0438\u043A\u0430",
        "\u0421\u0446\u0435\u043D\u044B \u043D\u0430\u0441\u0438\u043B\u0438\u044F",
        "\u041D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
        "\u042D\u0442\u043E \u043C\u043E\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C"
    ];
    for(let i = 0; i <= arrText.length - 1; i++){
        const label = createElement({
            tag: "label",
            className: [
                "modal_label"
            ],
            text: arrText[i],
            place: text
        });
        createElement({
            tag: "input",
            className: [
                "modal_checkbox"
            ],
            attribute: {
                type: "checkbox"
            },
            place: label
        });
        createElement({
            tag: "span",
            className: [
                "modal_span"
            ],
            place: label
        });
    }
    const footer = createElement({
        tag: "div",
        className: [
            "modal_footer"
        ],
        place: content
    });
    const buttonClose = createElement({
        tag: "button",
        className: [
            "modal_close"
        ],
        text: "\u041E\u0442\u043C\u0435\u043D\u0430",
        place: footer
    });
    const buttonSubmit = createElement({
        tag: "button",
        className: [
            "modal_submit"
        ],
        text: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        place: footer
    });
    // Закрытие и удаление модального окна 
    buttonClose.addEventListener("click", ()=>{
        rootDiv.remove();
    });
    // Отправить форму и закрыть модальное окно
    buttonSubmit.addEventListener("click", ()=>{
        rootDiv.remove();
        window.setTimeout(showAlert, 500);
        function showAlert() {
            alert("\u0412\u0430\u0448\u0430 \u0436\u0430\u043B\u043E\u0431\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!");
        }
    });
    //Окраска текста при клике на чекбокс
    const selectors = rootDiv.querySelectorAll(".modal_label");
    for (const selector of selectors)selector.addEventListener("click", (e)=>{
        const container = e.currentTarget;
        if (container.firstElementChild.checked) container.style.color = "red";
        else container.style.color = "black";
    });
}
//===========================
// Область карточек
// Создает элемент карточки
function createCard(cardData, parent) {
    const cardContainer = createElement({
        tag: "div",
        className: [
            "card"
        ],
        place: parent
    });
    const pictureElement = createElement({
        tag: "img",
        className: [
            "card-picture"
        ],
        attribute: {
            src: cardData.picture + "?random=" + cardData.id
        },
        place: cardContainer
    });
    const cardContent = createElement({
        tag: "div",
        className: [
            "card-content"
        ],
        place: cardContainer
    });
    const hashtagElement = createElement({
        tag: "div",
        className: [
            "card-hashtag"
        ],
        text: `#${cardData.hashtag}`,
        place: cardContent
    });
    const avatarElement = createElement({
        tag: "img",
        className: [
            "card-avatar"
        ],
        attribute: {
            src: cardData.avatar
        },
        place: cardContent
    });
    return cardContainer;
}
// Создает сетку карточек
function createCardsGrid(cards) {
    const oldMain = document.querySelector("main");
    if (oldMain) oldMain.remove();
    const main = createElement({
        tag: "main",
        className: [
            "main"
        ],
        place: root
    });
    cards.forEach((cardData)=>{
        const card = createCard(cardData, main);
        cardData.view = card;
        // Меню карточки
        const cardPinMenu = createPinMenu(cardData, card);
        card.addEventListener("mouseover", function() {
            cardPinMenu.style.display = "flex";
        });
        card.addEventListener("mouseout", function() {
            cardPinMenu.style.display = "none";
        });
    });
}
//===========================
createHeader();
getFromLocalStorage();
if (cardArray.length == 0) getCards().then((cards)=>{
    createCardsGrid(cards);
    setToLocalStorage(cards, "cardArray");
    cardArray = cards;
});

//# sourceMappingURL=index.09d9d7db.js.map
