function countProductOnPage() {
  const minus = document.querySelector('#product-minus');
  const count = document.querySelector('#product-count');
  const plus = document.querySelector('#product-plus');
  const productVersionsItem = document.querySelectorAll(
    '.product__versions-item'
  );

  minus.addEventListener('click', () => {
    if (+count.textContent > 1) {
      count.textContent -= 1;
    }
  });

  plus.addEventListener('click', () => {
    count.textContent = +count.textContent + 1;
  });

  productVersionsItem.forEach((el) => {
    el.addEventListener('click', () => {
      count.textContent = el.querySelector('input').value;
    });
  });
}

export default countProductOnPage;
