const swiperIntro = new Swiper('#swiper-intro', {
  slidesPerColumnFill: 'row',

  loop: true,

  spaceBetween: 20,

  autoplay: {
    delay: 4000
  },

  grabCursor: true,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

export default swiperIntro;
