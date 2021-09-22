import wNumb from 'wnumb';

const moneyFormat = wNumb({ decimals: 2, suffix: ' BYN' });

function setCost(priceEl, countEl, priceInitValue) {
  priceEl.textContent = moneyFormat.to(+countEl.textContent * priceInitValue);
}

function subtract(countEl, priceEl, priceInitValue) {
  if (+countEl.textContent > 1) {
    countEl.textContent -= 1;
    setCost(priceEl, countEl, priceInitValue);
  }
}

function add(countEl, priceEl, priceInitValue) {
  countEl.textContent = +countEl.textContent + 1;
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

  minus.addEventListener('click', () =>
    subtract(countEl, priceEl, priceInitValue)
  );

  plusEl.addEventListener('click', () => add(countEl, priceEl, priceInitValue));

  productVersionsItem.forEach((el) => {
    el.addEventListener('click', () => {
      countEl.textContent = el.querySelector('input').value;
      setCost(priceEl, countEl, priceInitValue);
    });
  });
}

function countProductOnCart() {
  const cart = document.querySelector('#cart');
  const orderedItems = cart.querySelectorAll('.cart__order-item');
  const priceTotalEl = cart.querySelector('#cart-price-total');

  if (!orderedItems.length) return;

  function setCostTotal() {
    const productsCosts = [
      ...cart.querySelectorAll('.product-counter__price')
    ].map((el) => parseFloat(el.textContent));

    const total = productsCosts.reduce((sum, current) => sum + current, 0);

    priceTotalEl.textContent = moneyFormat.to(total);
  }

  setCostTotal();

  orderedItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') return;

      const minusEl = el.querySelector('.product-counter__control.minus');
      const plusEl = el.querySelector('.product-counter__control.plus');
      const countEl = el.querySelector('.product-counter__count.count');
      const countValue = +countEl.textContent;
      const priceEl = el.querySelector('.product-counter__price');
      const priceValue = parseFloat(priceEl.textContent);
      const priceInitValue =
        priceValue > 1 ? priceValue / countValue : priceValue;

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
    });
  });
}

export { countProductOnPage, countProductOnCart };
