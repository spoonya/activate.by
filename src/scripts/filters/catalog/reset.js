import { DOM, FILTER_SLIDERS } from '../../constants';

function resetFiltersOnClick() {
  if (!DOM.catalogFilters.length) return;

  const resetButton = document.querySelector('#filters-reset');

  resetButton.addEventListener('click', () => {
    DOM.filtersResetCount.innerText = 0;

    DOM.filtersSliderPeriod.noUiSlider.reset();
    DOM.filtersSliderPrice.noUiSlider.reset();

    FILTER_SLIDERS.filtersSliderPeriod.isActive = [false];
    FILTER_SLIDERS.filtersSliderPrice.isActive = [false];
  });
}

export default resetFiltersOnClick;
