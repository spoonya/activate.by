import 'core-js/es6/promise';
import 'regenerator-runtime/runtime';
import lazyLoadObserver from './lazyload';

import controlAccordion from './accordion';
// eslint-disable-next-line no-unused-vars
import * as sliders from './sliders';
import {
  controlFilter,
  createSliderPeriod,
  createSliderPrice,
  resetFiltersOnClick,
  calcActiveFilters,
  controlFiltersBurger,
  selectCurrentCategory
} from './filters';
import { validateFormCart } from './forms';
import controlModal from './modal';
import { controlHeaderBurger } from './header';
import { countProductOnCart, countProductOnPage } from './counter';
import initTabs from './tabs';

lazyLoadObserver.observe();

controlAccordion();

initTabs();

controlFilter();

createSliderPeriod();
createSliderPrice();
resetFiltersOnClick();
calcActiveFilters();
selectCurrentCategory();

validateFormCart();

controlModal();
controlHeaderBurger();
controlFiltersBurger();

countProductOnPage();
countProductOnCart();
