// =======================================
//  GLOBAL SEÇİCİLER ve DEĞİŞKENLER
// =======================================
const visibleNumber = document.getElementById('number-visible');
const hiddenNumber  = document.getElementById('number-hidden');
const thumbsItems   = document.querySelectorAll('.thumbs-img');
const slides        = document.querySelectorAll(".thumbSwiper .swiper-slide");
const modalElement  = document.getElementById("exampleModal");

// Swiper değişkenleri
let mainSwiper;
let modalSwiper;
let modalThumbsSwiper;

// =======================================
//  FONKSİYON: Thumbs'a .active ekleyip kaldırma
// =======================================
function updateThumbsActiveClass(activeIndex) {
  // Tüm slaytlardan .active'ı kaldır
  slides.forEach(slide => slide.classList.remove("active"));
  // İlgili indeks varsa .active ekle
  if (slides[activeIndex]) {
    slides[activeIndex].classList.add("active");
  }
}

// =======================================
//  NUMARA GÖSTER/GİZLE
// =======================================
if (hiddenNumber) {
  hiddenNumber.addEventListener('click', () => {
    hiddenNumber.style.display = 'none';
    if (visibleNumber) {
      visibleNumber.style.display = 'flex';
    }
  });
}

// =======================================
//  DOMContentLoaded
// =======================================
document.addEventListener("DOMContentLoaded", function () {
  
  // ---------------------------
  //  1) MAIN SWIPER OLUŞTURMA
  // ---------------------------
  mainSwiper = new Swiper("#mainSwiper", {
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: "#mainSwiper .swiper-button-next",
      prevEl: "#mainSwiper .swiper-button-prev",
    },
    // pagination: {
    //   el: "#mainSwiper .swiper-pagination",
    //   clickable: true,
    // },
    on: {
      slideChange: function () {
        // Ana slider değişince modalSwiper varsa senkronize et
        if (modalSwiper) {
          modalSwiper.slideTo(this.activeIndex);
        }
      },
    },
  });

  // ----------------------------
  //  2) MODAL SWIPER (BÜYÜK)
  // ----------------------------
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
        // Modal slider değiştiğinde ana slider'ı eşitle
        mainSwiper.slideTo(this.activeIndex);
      },
    },
  });

  // ----------------------------
  //  3) MODAL THUMBS SWIPER
  // ----------------------------
  modalThumbsSwiper = new Swiper(".thumbSwiper", {
    slidesPerView: 15,
    spaceBetween: 10,
    freeMode: true,
    // pagination boş bırakılmış, isterseniz ekleyebilirsiniz
    pagination: {
      // el: ".thumbSwiper .swiper-pagination",
      // clickable: true,
    },
  });


  // ---------------------------------------
  //  4) MODAL AÇILDIĞINDA SENKRON VE HOVER
  // ---------------------------------------
  modalElement?.addEventListener("shown.bs.modal", function () {
    // Modal açılınca, modalSwiper'ı mainSwiper'ın aktif indeksiyle başlat
    modalSwiper.slideTo(mainSwiper.activeIndex);

    // Alttaki thumbs'ta .active ver
    updateThumbsActiveClass(mainSwiper.activeIndex);

    // Her bir küçük slayta hover ekleyip büyük slider'ı yönlendirme
    const thumbSlides = document.querySelectorAll(".thumbSwiper .swiper-slide");
    thumbSlides.forEach((slide, index) => {
      slide.addEventListener("mouseenter", function() {
        modalSwiper.slideTo(index);
        updateThumbsActiveClass(index);
      });
    });
  });


  // -------------------------------------
  //  5) ANA SLIDER'DAKİ THUMBS (thumbs-img)
  // -------------------------------------
  // Ana slider değişince .thumbs-img'ye .active ekle/kaldır
  mainSwiper.on("slideChange", function () {
    const currentIndex = mainSwiper.activeIndex;
    thumbsItems.forEach((thumb) => thumb.classList.remove("active"));
    if (thumbsItems[currentIndex]) {
      thumbsItems[currentIndex].classList.add("active");
    }
  });

  // Thumbs'a hover ekleyip ana slider'ı yönlendirme
  thumbsItems.forEach((thumb, index) => {
    thumb.addEventListener("mouseenter", function () {
      mainSwiper.slideTo(index);
    });
  });

  // Sayfa ilk yüklendiğinde ana slider'ın aktifine .active
  thumbsItems[ mainSwiper.activeIndex ]?.classList.add("active");

});
