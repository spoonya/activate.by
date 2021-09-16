import noUiSlider from 'nouislider';

const slider = document.querySelector('#filter-slider');

function createFilterSlider() {
  noUiSlider.create(slider, {
    start: [1, 12],
    connect: true,
    step: 1,
    range: {
      min: [1],
      max: [24]
    }
  });
}

export default createFilterSlider;
