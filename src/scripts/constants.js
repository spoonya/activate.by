const CLASSES = {
  active: 'active',
  hidden: 'hidden'
};

const DOM = {
  filter: document.querySelector('#filter'),
  details: [...document.querySelectorAll('#accordion > details')],
  catalogFilters: document.querySelectorAll('.catalog__filters-checkbox'),
  filtersResetCount: document.querySelector('#filters-reset-count')
};

export { CLASSES, DOM };
