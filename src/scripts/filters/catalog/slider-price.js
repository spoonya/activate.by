import wNumb from 'wnumb';
import noUiSlider from 'nouislider';

import { DOM, FILTER_SLIDERS } from '../../constants';

function createSliderPrice() {
  if (!DOM.filtersSliderPrice) return;

  noUiSlider.create(DOM.filtersSliderPrice, {
    start: FILTER_SLIDERS.filtersSliderPrice.initValue,
    connect: true,
    tooltips: wNumb({ decimals: 0 }),
    step: 50,
    range: {
      min: 0,
      max: 1000
    }
  });

  const upperTooltip = DOM.filtersSliderPrice.querySelector(
    '.noUi-handle-upper > .noUi-tooltip'
  );

  DOM.filtersSliderPrice.noUiSlider.on('slide', function () {
    if (this.get(true)[1] === this.options.range.max) {
      upperTooltip.style.left = '-20px';
    } else {
      upperTooltip.style.left = '0';
    }

    console.log(this.get(true)[1] === this.options.range.max);
  });
}

export default createSliderPrice;
