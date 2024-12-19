var swiper = new Swiper(".mySwiper", {
  spaceBetween: 28,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 8
    },
    480: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,

    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: true,
});