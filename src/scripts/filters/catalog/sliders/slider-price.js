import wNumb from 'wnumb';
import noUiSlider from 'nouislider';

import { DOM, FILTER_SLIDERS } from '../../../constants';
import fixTooltips from './fix-tooltips';

function createSliderPrice() {
  if (!DOM.filtersSliderPrice) return;

  noUiSlider.create(DOM.filtersSliderPrice, {
    start: FILTER_SLIDERS.price.initValue,
    connect: true,
    tooltips: wNumb({ decimals: 0 }),
    step: 50,
    range: {
      min: [0],
      max: [1000]
    }
  });

  DOM.filtersSliderPrice.noUiSlider.on('update', function () {
    fixTooltips.call(this, DOM.filtersSliderPrice, -20);
  });
}

export default createSliderPrice;
