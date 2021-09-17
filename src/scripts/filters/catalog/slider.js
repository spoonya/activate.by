import noUiSlider from 'nouislider';

import { DOM } from '../../constants';

const tooltipValues = {
  0: '1 месяц',
  1: '1 год',
  2: '2 года'
};

function createFilterSlider() {
  if (!DOM.filtersSlider) return;

  noUiSlider.create(DOM.filtersSlider, {
    start: [0, 1],
    connect: true,
    tooltips: {
      to(value) {
        return tooltipValues[value];
      },
      from(value) {
        return value;
      }
    },
    step: 1,
    range: {
      min: [0],
      max: [2]
    }
  });
}

export default createFilterSlider;
