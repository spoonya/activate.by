import { CLASSES, DOM } from '../../constants';
import { isMediaBreakpoint } from '../../helpers';

const filtersBurger = document.querySelector('#filters-burger');
const filters = document.querySelector('#filters-catalog-wrapper');
const closeFiltersButton = document.querySelector('#filters-close');

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

function controlFiltersBurger() {
  if (!filtersBurger) return;

  toggleBurger();

  closeFiltersButton.addEventListener('click', closeBurger);

  window.addEventListener('resize', closeBurgerOnMedia);
}

export default controlFiltersBurger;
