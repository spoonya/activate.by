import { CLASSES, DOM } from '../../constants';
import { isMediaBreakpoint } from '../../helpers';

const filtersBurger = document.querySelector('#filters-burger');
const filters = document.querySelector('#filters-catalog');
const closeFiltersButton = document.querySelector('#filters-close');
const menuArrows = document.querySelectorAll('.header__menu-arrow');
const menuLinks = document.querySelectorAll('.header__menu-link');
const menuSublinks = document.querySelectorAll('.header__menu-sublink');

function toggleBurger() {
  filtersBurger.addEventListener('click', () => {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    filters.classList.toggle(CLASSES.active);
  });
}

function closeBurger() {
  DOM.body.classList.remove(CLASSES.scrollHidden);
  filters.classList.remove(CLASSES.active);
}

function closeBurgerOnMedia() {
  if (!isMediaBreakpoint(991.98)) closeBurger();
}

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

function controlFiltersBurger() {
  if (!filtersBurger) return;

  toggleBurger();
  setMenuArrowsBehaviour();

  closeFiltersButton.addEventListener('click', closeBurger);

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });

  menuSublinks.forEach((link) => {
    link.addEventListener('click', closeBurger);
  });

  window.addEventListener('resize', closeBurgerOnMedia);
}

export default controlFiltersBurger;
