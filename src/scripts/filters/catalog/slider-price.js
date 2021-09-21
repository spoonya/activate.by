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
      min: [0],
      max: [1000]
    }
  });

  const upperTooltip = DOM.filtersSliderPrice.querySelector(
    '.noUi-handle-upper > .noUi-tooltip'
  );

  DOM.filtersSliderPrice.noUiSlider.on('update', function () {
    if (this.get(true)[1] === this.options.range.max[0]) {
      upperTooltip.style.left = '-20px';
    } else {
      upperTooltip.style.left = '0';
    }
  });
}

export default createSliderPrice;
