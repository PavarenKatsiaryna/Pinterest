import {createElement} from './elements';

// Кнопка наверх для прокрутки страницы сайта в начало
function buttonScrolling(parent) {
    const rootDiv = document.createElement("div");
    rootDiv.className = "button-scroll";
    parent.append(rootDiv);
    
    const buttonScrContainer = createElement({
      tag: "div",
      className: ["btn-up", "btn-up_hide"],
      place: rootDiv,
    });
  
    const btnUp = {
      el: buttonScrContainer, // Используем созданный элемент
      show() {
        this.el.classList.remove('btn-up_hide');
      },
      hide() {
        this.el.classList.add('btn-up_hide');
      },
      addEventListener() {
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          scrollY > 200 ? this.show() : this.hide();
        });
        
        this.el.onclick = () => { 
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
    btnUp.addEventListener();
  }

  export {buttonScrolling};