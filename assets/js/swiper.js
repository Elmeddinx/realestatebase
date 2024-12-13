var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 3,
    loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1.2
        },
        768: {
          slidesPerView: 1.6,
        },
        1024: {
          slidesPerView: 2.2,
        },
        1200: {
          slidesPerView: 2.6,
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
    },
    mousewheel: true,
    keyboard: true,
  });