import 'core-js';
import 'regenerator-runtime/runtime';

import controlAccordion from './accordion';
// eslint-disable-next-line no-unused-vars
import * as sliders from './sliders';
import {
  selectActiveFilter,
  createFilterSlider,
  resetFiltersOnClick,
  calcActiveFilters,
  controlFiltersBurger,
  selectCurrentCategory
} from './filters';
import { validateFormCart } from './forms';
import controlModal from './modal';
import { controlHeaderBurger } from './header';

controlAccordion();

selectActiveFilter();
createFilterSlider();
resetFiltersOnClick();
calcActiveFilters();
selectCurrentCategory();

validateFormCart();

controlModal();
controlHeaderBurger();
controlFiltersBurger();
