const visibleNumber = document.getElementById('number-visible');
const hiddenNumber = document.getElementById('number-hidden');
const mainThumbsItems = document.querySelectorAll('.thumbs-img'); // Ana thumbnail öğeleri
const modalThumbsSlides = document.querySelectorAll(".thumbSwiper .swiper-slide"); // Modal thumbnail slaytları
const modalElement = document.getElementById("exampleModal");


let mainSwiper;
let modalSwiper;
let modalThumbsSwiper;
let mainThumbsSwiper;

// mainSliderItems.addEventListener('click', ()=>{
//   galleryModal.show()
// })

// Ana thumbnail'larda active sınıfını güncelleme fonksiyonu
function updateMainThumbsActiveClass(activeIndex) {
    mainThumbsItems.forEach(thumb => thumb.classList.remove("active"));
    if (mainThumbsItems[activeIndex]) {
        mainThumbsItems[activeIndex].classList.add("active");
    }
}

// Modal thumbnail'larda active sınıfını güncelleme fonksiyonu
function updateModalThumbsActiveClass(activeIndex) {
    modalThumbsSlides.forEach(slide => slide.classList.remove("active"));
    if (modalThumbsSlides[activeIndex]) {
        modalThumbsSlides[activeIndex].classList.add("active");
    }
}

// Gizli numara butonuna tıklanma olayı
if (hiddenNumber) {
    hiddenNumber.addEventListener('click', () => {
        hiddenNumber.style.display = 'none';
        if (visibleNumber) {
            visibleNumber.style.display = 'flex';
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // 1. Main Swiper'ı Oluşturma
    mainSwiper = new Swiper("#mainSwiper", {
        slidesPerView: 1,
        loop: true,
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
                // Ana thumbnail'larda active sınıfını güncelle
                updateMainThumbsActiveClass(this.activeIndex);
            },
        },
    });

    // 2. Modal Swiper'ı Oluşturma
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
                // Modal thumbnail'larda active sınıfını güncelle
                updateModalThumbsActiveClass(this.activeIndex);
            },
        },
    });

    // 3. Modal Thumbs Swiper'ı Oluşturma
    modalThumbsSwiper = new Swiper(".thumbSwiper", {
        spaceBetween: 5,
        slidesPerView: 8,
        loop: true,
        breakpoints: {
            360: {
                slidesPerView: 12,
            },
            480: {
                slidesPerView: 10,
            },
            768: {
                slidesPerView: 12,
            },
            1200: {
                slidesPerView: 15,
            },
            1400: {
                slidesPerView: 15,
            }
        },
        freeMode: true,
        pagination: {
        },
        // Modal Thumbs Swiper'ı modalSwiper ile ilişkilendirmek için thumbs parametresi ekleyebilirsiniz
        // Ancak burada özel bir işlevsellik eklemek istiyoruz
    });

    // 4. Main Thumbs Swiper'ı Oluşturma
    mainThumbsSwiper = new Swiper(".mainThumbsSwiper", {
        slidesPerView: 6,
        spaceBetween: 12,
        freeMode: true,
        allowTouchMove: false
    });

    // 5. Modal Açıldığında Senkronizasyon ve Hover İşlemleri
    modalElement?.addEventListener("shown.bs.modal", function () {
        modalSwiper.slideTo(mainSwiper.activeIndex);

        // Modal thumbnail'larda active sınıfını güncelle
        updateModalThumbsActiveClass(mainSwiper.activeIndex);

        const thumbSlides = document.querySelectorAll(".thumbSwiper .swiper-slide");
        thumbSlides.forEach((slide, index) => {
            slide.addEventListener("mouseenter", function () {
                modalSwiper.slideTo(index);
                updateModalThumbsActiveClass(index);
            });
        });
    });

    // 6. Main Swiper'da Slide Change Olayı
    mainSwiper.on("slideChange", function () {
        const currentIndex = mainSwiper.activeIndex;
        updateMainThumbsActiveClass(currentIndex);
    });

    // 7. Main Thumbs Swiper'da Hover Olayı
    mainThumbsItems.forEach((thumb, index) => {
        thumb.addEventListener("mouseenter", function () {
            mainSwiper.slideTo(index);
        });
    });

    // 8. İlk Slayta Active Sınıfını Ekleme
    updateMainThumbsActiveClass(mainSwiper.activeIndex);
});

