import { CLASSES, DOM } from '../constants';
import { isMediaBreakpoint, isOpened } from '../helpers';

const menu = document.querySelector('#menu');
const menuLinks = menu.querySelectorAll('a');
const menuArrows = document.querySelectorAll('.header__menu-arrow');
const menuSublinks = document.querySelectorAll('.header__menu-sublink');

function setMenuArrowsBehaviour() {
  menuArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const subMenu = arrow.nextElementSibling;
      const currentArrow = arrow;

      if (subMenu.classList.contains(CLASSES.active)) {
        subMenu.classList.remove(CLASSES.active);
        currentArrow.classList.remove(CLASSES.active);
      } else {
        subMenu.classList.add(CLASSES.active);
        currentArrow.classList.add(CLASSES.active);
      }
    });
  });
}

function toggleBurger() {
  DOM.burger.addEventListener('click', () => {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    DOM.overlay.classList.toggle(CLASSES.active);
    DOM.burger.classList.toggle(CLASSES.active);
    menu.classList.toggle(CLASSES.active);
  });
}

function closeBurger() {
  DOM.body.classList.remove(CLASSES.scrollHidden);
  DOM.burger.classList.remove(CLASSES.active);
  menu.classList.remove(CLASSES.active);

  if (
    isMediaBreakpoint() ||
    (!isMediaBreakpoint() && !isOpened(document.querySelector('.cart.modal')))
  ) {
    DOM.overlay.classList.remove(CLASSES.active);
  }
}

function closeBurgerOnMedia() {
  if (!isMediaBreakpoint()) closeBurger();
}

function controlHeaderBurger() {
  toggleBurger();
  setMenuArrowsBehaviour();

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });

  menuSublinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });
}

DOM.overlay.addEventListener('click', () => {
  if (isOpened(DOM.burger)) {
    closeBurger();
  }
});

window.addEventListener('resize', closeBurgerOnMedia);

export default controlHeaderBurger;
export { closeBurger };
