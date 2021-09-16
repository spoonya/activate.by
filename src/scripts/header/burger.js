import { CLASSES, DOM } from '../constants';
import { isMediaBreakpoint } from '../helpers';

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const menuLinks = menu.querySelectorAll('a');

function isBurgerOpened() {
  if (!burger.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}

function toggleBurger() {
  burger.addEventListener('click', () => {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    DOM.overlay.classList.toggle(CLASSES.active);
    burger.classList.toggle(CLASSES.active);
    menu.classList.toggle(CLASSES.active);
  });
}

function closeBurger() {
  DOM.body.classList.remove(CLASSES.scrollHidden);
  burger.classList.remove(CLASSES.active);
  menu.classList.remove(CLASSES.active);

  if (isMediaBreakpoint()) {
    DOM.overlay.classList.remove(CLASSES.active);
  }
}

function closeBurgerOnMedia() {
  if (!isMediaBreakpoint()) closeBurger();
}

function controlBurger() {
  toggleBurger();

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });
}

DOM.overlay.addEventListener('click', () => {
  if (isBurgerOpened()) {
    closeBurger();
  }
});

window.addEventListener('resize', closeBurgerOnMedia);

export default controlBurger;
export { isBurgerOpened, closeBurger };
