import { DOM } from '../../constants';

function calcActiveFilters() {
  if (!DOM.catalogFilters.length) return;

  let count = 0;

  DOM.catalogFilters.forEach((el) => {
    el.addEventListener('change', () => {
      count = parseInt(DOM.filtersResetCount.textContent, 10);

      if (el.checked) {
        count += 1;
      } else {
        count -= 1;
      }

      DOM.filtersResetCount.textContent = count;
    });
  });
}

export default calcActiveFilters;
