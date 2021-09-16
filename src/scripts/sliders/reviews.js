const swiperReviews = new Swiper('#swiper-reviews', {
  slidesPerColumnFill: 'row',

  spaceBetween: 40,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 1
    },
    992: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 2
    },
    1200: {
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      slidesPerView: 3
    }
  }
});

export default swiperReviews;
