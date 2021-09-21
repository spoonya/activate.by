import { CLASSES, DOM } from '../constants';

function filterContent(activeFilter, items) {
  items.forEach((el) => {
    const { filter } = el.dataset;
    const { filterTarget } = activeFilter.dataset;

    if (el.classList.contains(CLASSES.hidden)) {
      el.classList.remove(CLASSES.hidden);
    }

    if (filter !== filterTarget && filterTarget !== 'all') {
      el.classList.add(CLASSES.hidden);
    }
  });
}

function filterFAQ(activeFilter) {
  if (!DOM.details.length) return;

  filterContent(activeFilter, DOM.details);
}

function filterProductsPreview(activeFilter) {
  const productsItems = document.querySelectorAll('.products__item');

  if (!productsItems.length) return;

  filterContent(activeFilter, productsItems);
}

function controlFilter() {
  if (!DOM.filter) return;

  let activeBtn = DOM.filter.querySelector('ul button');
  activeBtn.classList.add(CLASSES.active);

  DOM.filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);

      activeBtn.classList.remove(CLASSES.active);

      activeBtn = e.target;

      filterFAQ(activeBtn);
      // filterProductsPreview(activeBtn);
    }
  });
}

export default controlFilter;
