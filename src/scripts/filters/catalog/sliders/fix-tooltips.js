function fixTooltips(slider, leftShift) {
  const upperTooltip = slider.querySelector(
    '.noUi-handle-upper > .noUi-tooltip'
  );
  const lowerTooltip = slider.querySelector(
    '.noUi-handle-lower > .noUi-tooltip'
  );

  const arrayValues = this.get(true);
  const lowerValue = arrayValues[0];
  const upperValue = arrayValues[1];
  const maxValue = this.options.range.max[0];
  const gap = upperValue - lowerValue;

  if (upperValue === maxValue) {
    upperTooltip.style.left = `${leftShift}px`;
  } else {
    upperTooltip.style.left = '0';
  }

  if (lowerValue === 0) {
    lowerTooltip.style.left = '0';
    return;
  }

  if ((upperValue === lowerValue + gap && gap > 0) || lowerValue === maxValue) {
    lowerTooltip.style.left = `${leftShift}px`;

    return;
  }

  if (upperValue === lowerValue && lowerValue !== 0) {
    lowerTooltip.style.left = '0';
  }
}

export default fixTooltips;
