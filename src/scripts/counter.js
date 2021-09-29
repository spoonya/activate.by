import wNumb from 'wnumb';

import { DOM } from './constants';

const moneyFormat = wNumb({ decimals: 2, suffix: ' BYN' });

function setCost(priceEl, countEl, priceInitValue) {
  priceEl.textContent = moneyFormat.to(+countEl.value * priceInitValue);
}

function setCostTotal() {
  const priceTotalEl = DOM.cart.querySelector('#cart-price-total');

  const productsCosts = [
    ...DOM.cart.querySelectorAll('.product-counter__price')
  ].map((el) => parseFloat(el.textContent));

  const total = productsCosts.reduce((sum, current) => sum + current, 0);

  priceTotalEl.textContent = moneyFormat.to(total);
}

function subtract(countEl, priceEl, priceInitValue) {
  if (+countEl.value > 1) {
    countEl.value -= 1;
    setCost(priceEl, countEl, priceInitValue);
  }
}

function add(countEl, priceEl, priceInitValue) {
  countEl.value = +countEl.value + 1;
  setCost(priceEl, countEl, priceInitValue);
}

function countProductOnPage() {
  const minus = document.querySelector('#product-minus');

  if (!minus) return;

  const countEl = document.querySelector('#product-count');
  const plusEl = document.querySelector('#product-plus');
  const productVersionsItem = document.querySelectorAll(
    '.product__versions-item'
  );
  const priceEl = document.querySelector('#product-price');
  const priceInitValue = parseFloat(priceEl.textContent);

  countEl.addEventListener('input', () =>
    setCost(priceEl, countEl, priceInitValue)
  );

  minus.addEventListener('click', () =>
    subtract(countEl, priceEl, priceInitValue)
  );

  plusEl.addEventListener('click', () => add(countEl, priceEl, priceInitValue));

  productVersionsItem.forEach((el) => {
    el.addEventListener('click', () => {
      countEl.value = el.querySelector('input').value;
      setCost(priceEl, countEl, priceInitValue);
    });
  });
}

function handleEvent(e) {
  if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') return;

  const productEl = e.target.closest('.cart__order-item');
  const minusEl = productEl.querySelector('.product-counter__control.minus');
  const plusEl = productEl.querySelector('.product-counter__control.plus');
  const countEl = productEl.querySelector('.product-counter__count.count');
  const countValue = +countEl.value;
  const priceEl = productEl.querySelector('.product-counter__price');
  const priceValue = parseFloat(priceEl.textContent);
  const priceInitValue = priceValue > 1 ? priceValue / countValue : priceValue;

  if (countEl.getAttribute('listener') !== 'true') {
    countEl.addEventListener('input', () => {
      setCost(priceEl, countEl, priceInitValue);
      setCostTotal();
      countEl.setAttribute('listener', 'true');
    });
  }

  switch (e.target) {
    case minusEl:
      subtract(countEl, priceEl, priceInitValue);
      setCostTotal();
      break;

    case plusEl:
      add(countEl, priceEl, priceInitValue);
      setCostTotal();
      break;

    default:
      break;
  }
}

function countProductOnCart() {
  const cartOrderList = DOM.cart.querySelector('#cart-order-list');

  if (!cartOrderList) return;

  const config = { childList: true };

  const observer = new MutationObserver((mutationsList) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        setCostTotal();
      }
    }
  });

  observer.observe(cartOrderList, config);

  setCostTotal();

  cartOrderList.addEventListener('click', (e) => handleEvent(e));
  cartOrderList.addEventListener('focus', (e) => handleEvent(e));
}

export { countProductOnPage, countProductOnCart };
