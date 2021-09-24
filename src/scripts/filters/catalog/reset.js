import { DOM, FILTER_SLIDERS } from '../../constants';

function resetFiltersOnClick() {
  if (!DOM.catalogFilters.length) return;

  const resetButton = document.querySelector('#filters-reset');

  resetButton.addEventListener('click', () => {
    DOM.filtersResetCount.innerText = 0;

    DOM.filtersSliderPeriod.noUiSlider.reset();
    DOM.filtersSliderPrice.noUiSlider.reset();

    FILTER_SLIDERS.period.isActive = [false];
    FILTER_SLIDERS.price.isActive = [false];
  });
}

export default resetFiltersOnClick;
