function selectCurrentCategory() {
  const activeCategory = document.querySelectorAll(
    `a[href='${window.location.pathname}']`
  );

  if (!activeCategory.length) return;

  activeCategory.forEach((category) => category.classList.add('current'));
}

export default selectCurrentCategory;
