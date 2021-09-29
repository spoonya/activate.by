const CLASSES = {
  active: 'active',
  hidden: 'hidden',
  scrollHidden: 'scroll-hidden',
  modal: 'modal',
  topZindex: 'top-z'
};

const DOM = {
  body: document.querySelector('body'),
  burger: document.querySelector('#burger'),
  catalogFilters: document.querySelectorAll('.catalog__filters-checkbox'),
  cart: document.querySelector('#cart'),
  details: [...document.querySelectorAll('#accordion > details')],
  filter: document.querySelector('#filter'),
  filtersResetCount: document.querySelector('#filters-reset-count'),
  filtersSliderPeriod: document.querySelector('#filters-slider-period'),
  filtersSliderPrice: document.querySelector('#filters-slider-price'),
  overlay: document.querySelector('#overlay')
};

const FILTER_SLIDERS = {
  period: {
    initValue: [0, 0.5],
    isActive: [false]
  },
  price: {
    initValue: [0, 500],
    isActive: [false]
  }
};

export { CLASSES, DOM, FILTER_SLIDERS };
