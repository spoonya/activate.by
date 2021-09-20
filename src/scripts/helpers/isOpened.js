import { CLASSES } from '../constants';

function isOpened(element) {
  if (!element.classList.contains(CLASSES.active)) {
    return false;
  }

  return true;
}
export default isOpened;
