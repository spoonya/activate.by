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

function controlFilter() {
  if (!DOM.filter) return;

  let activeBtn = DOM.filter.querySelector('ul button');

  if (!activeBtn) {
    activeBtn = DOM.filter.querySelector('[data-tabby-default]');
  }

  activeBtn.classList.add(CLASSES.active);

  DOM.filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);

      activeBtn.classList.remove(CLASSES.active);

      activeBtn = e.target;

      filterFAQ(activeBtn);
    }
  });
}

export default controlFilter;
