import noUiSlider from 'nouislider';

import { DOM, FILTER_SLIDERS } from '../../constants';

const tooltipValues = {
  0: '1 месяц',
  0.5: '6 месяцев',
  1: '1 год',
  2: '2 года'
};

function createSliderPeriod() {
  if (!DOM.filtersSliderPeriod) return;

  noUiSlider.create(DOM.filtersSliderPeriod, {
    start: FILTER_SLIDERS.filtersSliderPeriod.initValue,
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
      max: 2
    }
  });

  const upperTooltip = DOM.filtersSliderPeriod.querySelector(
    '.noUi-handle-upper > .noUi-tooltip'
  );

  DOM.filtersSliderPeriod.noUiSlider.on('slide', function () {
    if (this.get(true)[1] === this.options.range.max) {
      upperTooltip.style.left = '-30px';
    } else {
      upperTooltip.style.left = '0';
    }
  });
}

export default createSliderPeriod;
