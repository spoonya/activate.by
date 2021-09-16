import { DOM } from '../../constants';

function calcActiveFilters() {
  if (!DOM.catalogFilters.length) return;

  let count = 0;

  DOM.catalogFilters.forEach((el) => {
    el.addEventListener('change', () => {
      if (el.checked) {
        count += 1;

        DOM.filtersResetCount.textContent = count;
      }
    });
  });
}

export default calcActiveFilters;
