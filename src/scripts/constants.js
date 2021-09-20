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
  details: [...document.querySelectorAll('#accordion > details')],
  filter: document.querySelector('#filter'),
  filtersResetCount: document.querySelector('#filters-reset-count'),
  filtersSlider: document.querySelector('#filters-slider'),
  overlay: document.querySelector('#overlay')
};

export { CLASSES, DOM };
