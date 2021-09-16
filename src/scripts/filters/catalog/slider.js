import noUiSlider from 'nouislider';

const slider = document.querySelector('#filter-slider');

function createFilterSlider() {
  if (!slider) return;

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
