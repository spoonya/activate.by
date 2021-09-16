import controlAccordion from './accordion';
import * as sliders from './sliders';
import {
  selectActiveFilter,
  createFilterSlider,
  resetFiltersOnClick,
  calcActiveFilters
} from './filters';

controlAccordion();
selectActiveFilter();
createFilterSlider();
resetFiltersOnClick();
calcActiveFilters();
