function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll('#accordion > details[open]').forEach((el) => {
      if (el === event.target) {
        return;
      }

      el.open = false;
    });
  }
}

function controlAccordion() {
  document
    .querySelectorAll('#accordion > details')
    .forEach((el) => el.addEventListener('toggle', onToggle));
}

export default controlAccordion;
