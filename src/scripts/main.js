import controlAccordion from './accordion';

import * as sliders from './sliders';

import {
  selectActiveFilter,
  createFilterSlider,
  resetFiltersOnClick,
  calcActiveFilters
} from './filters';

import { validateFormCart } from './forms';
import controlModal from './modal';

controlAccordion();
selectActiveFilter();
createFilterSlider();
resetFiltersOnClick();
calcActiveFilters();

validateFormCart();

controlModal();
