import { CLASSES, DOM } from '../constants';

function filterFAQ(activeFilter) {
  DOM.details.forEach((el) => {
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

function selectActiveFilter() {
  if (!DOM.filter) return;

  let activeBtn = DOM.filter.querySelector('ul button');
  activeBtn.classList.add(CLASSES.active);

  DOM.filter.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (!e.target.classList.contains(CLASSES.active)) {
      e.target.classList.add(CLASSES.active);

      activeBtn.classList.remove(CLASSES.active);

      activeBtn = e.target;

      if (DOM.details.length) filterFAQ(activeBtn);
    }
  });
}

export default selectActiveFilter;
