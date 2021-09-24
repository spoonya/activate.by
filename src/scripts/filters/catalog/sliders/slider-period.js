import noUiSlider from 'nouislider';

import { DOM, FILTER_SLIDERS } from '../../../constants';
import fixTooltips from './fix-tooltips';

const tooltipValues = {
  0: '1 месяц',
  0.5: '6 месяцев',
  1: '1 год',
  2: '2 года'
};

function createSliderPeriod() {
  if (!DOM.filtersSliderPeriod) return;

  noUiSlider.create(DOM.filtersSliderPeriod, {
    start: FILTER_SLIDERS.period.initValue,
    connect: true,
    tooltips: {
      to(value) {
        return tooltipValues[value];
      },
      from(value) {
        return value;
      }
    },
    range: {
      min: [0, 0.5],
      '50%': [1, 2],
      max: [2]
    }
  });

  DOM.filtersSliderPeriod.noUiSlider.on('update', function () {
    fixTooltips.call(this, DOM.filtersSliderPeriod, -30);
  });
}
export default createSliderPeriod;
