import { DOM } from '../../constants';

function resetFiltersOnClick() {
  if (!DOM.catalogFilters.length) return;

  const resetButton = document.querySelector('#filters-reset');

  resetButton.addEventListener('click', () => {
    DOM.filtersResetCount.innerText = 0;
  });
}

export default resetFiltersOnClick;
