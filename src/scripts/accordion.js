import { DOM } from './constants';

function onToggle(event) {
  const detailsOpened = DOM.details.filter((el) => el.hasAttribute('open'));

  if (!detailsOpened.length) return;

  if (event.target.open) {
    detailsOpened.forEach((el) => {
      if (el === event.target) {
        return;
      }

      el.open = false;
    });
  }
}

function controlAccordion() {
  if (!DOM.details.length) return;

  DOM.details.forEach((el) => el.addEventListener('toggle', onToggle));
}

export default controlAccordion;
