const visibleNumber = document.getElementById('number-visible');
const hiddenNumber = document.getElementById('number-hidden');
const thumbsItems = document.querySelectorAll('.thumbs-img');
const slides = document.querySelectorAll(".thumbSwiper .swiper-slide");
const modalElement = document.getElementById("exampleModal");

let mainSwiper;
let modalSwiper;
let modalThumbsSwiper;

function updateThumbsActiveClass(activeIndex) {
  slides.forEach(slide => slide.classList.remove("active"));
  if (slides[activeIndex]) {
    slides[activeIndex].classList.add("active");
  }
}

if (hiddenNumber) {
  hiddenNumber.addEventListener('click', () => {
    hiddenNumber.style.display = 'none';
    if (visibleNumber) {
      visibleNumber.style.display = 'flex';
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {

  mainSwiper = new Swiper("#mainSwiper", {
    slidesPerView: 1,
    loop: false,
    preventClicksPropagation: false,
    navigation: {
      nextEl: "#mainSwiper .swiper-button-next",
      prevEl: "#mainSwiper .swiper-button-prev",
    },
    pagination: {
      el: ".pagination div",
      type: "fraction",
    },
    on: {
      slideChange: function () {
        if (modalSwiper) {
          modalSwiper.slideTo(this.activeIndex);
        }
      },
    },
  });

  modalSwiper = new Swiper("#modalSwiper", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: "#modalSwiper .swiper-button-next",
      prevEl: "#modalSwiper .swiper-button-prev",
    },
    pagination: {
      el: "#modalSwiper .swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        mainSwiper.slideTo(this.activeIndex);
      },
    },
  });

  modalThumbsSwiper = new Swiper(".thumbSwiper", {
    spaceBetween: 5,
    slidesPerView: 15,
    breakpoints: {
      360: {
        slidesPerView: 15,
      },
      480: {
      },
      768: {
      },
      1200: {
      },
      1400: {
        slidesPerView: 15,
      }
    },
    freeMode: true,
    pagination: {
    },
  });

  mainThumbsSwiper = new Swiper(".mainThumbsSwiper", {
    slidesPerView: 6,
    spaceBetween: 12,
    freeMode: true,
    allowTouchMove: false
  });


  modalElement?.addEventListener("shown.bs.modal", function () {
    modalSwiper.slideTo(mainSwiper.activeIndex);

    updateThumbsActiveClass(mainSwiper.activeIndex);

    const thumbSlides = document.querySelectorAll(".thumbSwiper .swiper-slide");
    thumbSlides.forEach((slide, index) => {
      slide.addEventListener("mouseenter", function () {
        modalSwiper.slideTo(index);
        updateThumbsActiveClass(index);
      });
    });
  });


  mainSwiper.on("slideChange", function () {
    const currentIndex = mainSwiper.activeIndex;
    thumbsItems.forEach((thumb) => thumb.classList.remove("active"));
    if (thumbsItems[currentIndex]) {
      thumbsItems[currentIndex].classList.add("active");
    }
  });

  thumbsItems.forEach((thumb, index) => {
    thumb.addEventListener("mouseenter", function () {
      mainSwiper.slideTo(index);
    });
  });

  thumbsItems[mainSwiper.activeIndex]?.classList.add("active");

});
