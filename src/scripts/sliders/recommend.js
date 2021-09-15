const swiperRecommend = new Swiper('#swiper-recommend', {
  slidesPerColumnFill: 'row',

  spaceBetween: 20,

  resizeObserver: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.recommend__controllers-next',
    prevEl: '.recommend__controllers-prev'
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
      slidesPerView: 4
    }
  }
});

export default swiperRecommend;
