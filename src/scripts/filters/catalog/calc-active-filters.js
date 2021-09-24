import { DOM, FILTER_SLIDERS } from '../../constants';
import { isArraysEquals } from '../../helpers';

let count = 0;

function getResetCount() {
  count = parseInt(DOM.filtersResetCount.textContent, 10);
}

function setResetCount() {
  DOM.filtersResetCount.textContent = count;
}

function calcActiveSliders(slider, initValue, isActive) {
  getResetCount();

  if (!isArraysEquals(slider.get(), initValue) && !isActive[0]) {
    count += 1;
    isActive[0] = true;
  } else if (isArraysEquals(slider.get(), initValue) && isActive[0]) {
    count -= 1;
    isActive[0] = false;
  }

  setResetCount();
}

function calcActiveFilters() {
  if (!DOM.catalogFilters.length) return;

  DOM.filtersSliderPeriod.noUiSlider.on('change', function () {
    calcActiveSliders(
      this,
      FILTER_SLIDERS.period.initValue,
      FILTER_SLIDERS.period.isActive
    );
  });

  DOM.filtersSliderPrice.noUiSlider.on('change', function () {
    calcActiveSliders(
      this,
      FILTER_SLIDERS.price.initValue,
      FILTER_SLIDERS.price.isActive
    );
  });

  DOM.catalogFilters.forEach((el) => {
    el.addEventListener('change', () => {
      getResetCount();

      if (el.checked) {
        count += 1;
      } else {
        count -= 1;
      }

      setResetCount();
    });
  });
}

export default calcActiveFilters;
