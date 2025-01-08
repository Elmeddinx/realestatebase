const visibleNumber = document.getElementById('number-visible');
const hiddenNumber = document.getElementById('number-hidden');
const mainThumbsItems = document.querySelectorAll('.thumbs-img'); // Ana thumbnail öğeleri
const modalThumbsSlides = document.querySelectorAll(".thumbSwiper .swiper-slide"); // Modal thumbnail slaytları
const modalElement = document.getElementById("exampleModal");

let mainSwiper;
let modalSwiper;
let modalThumbsSwiper;
let mainThumbsSwiper;

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

    // Bootstrap Modal'ı Yönetme (Bootstrap 5 için Vanilla JS)
    const bootstrapModal = new bootstrap.Modal(document.getElementById('exampleModal'));

    let isLooping = false;

    // 1. Main Swiper'ı Oluşturma
    mainSwiper = new Swiper("#mainSwiper", {
        slidesPerView: 1,
        speed: 1,
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
                    modalSwiper.slideTo(this.realIndex); // 'realIndex' kullanarak doğru slayta kaydırma
                }
                // Ana thumbnail'larda active sınıfını güncelle
                updateMainThumbsActiveClass(this.realIndex);
            },
            // Click olayını ekliyoruz
            click: function (swiper, e) {
                const clickedIndex = swiper.realIndex;
                // Modal Swiper'ı senkronize et
                modalSwiper.slideTo(clickedIndex);
                // Modal thumbnail'larda active sınıfını güncelle
                updateModalThumbsActiveClass(clickedIndex);
                // Modalı aç
                bootstrapModal.show();
            },
        },
    });

    // 2. Modal Swiper'ı Oluşturma
    modalSwiper = new Swiper("#modalSwiper", {
        slidesPerView: 1,
        loop: false, // Senkronizasyon için loop olmamalı
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
                // mainSwiper.slideTo(this.activeIndex); // Bu satırı kaldırıyoruz
                // Modal thumbnail'larda active sınıfını güncelle
                updateModalThumbsActiveClass(this.activeIndex);
            },
        },
    });

    // 3. Modal Thumbs Swiper'ı Oluşturma
    modalThumbsSwiper = new Swiper(".thumbSwiper", {
        spaceBetween: 5,
        slidesPerView: 3,
        loop: false,
        breakpoints: {
            360: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 7,
            },
            1024: {
                slidesPerView: 8,
            },
            1200: {
                slidesPerView: 10,
            },
            1400: {
                slidesPerView: 12,
            }
        },
        freeMode: true,
        pagination: {
        },
    });

    // 4. Main Thumbs Swiper'ı Oluşturma
    mainThumbsSwiper = new Swiper(".mainThumbsSwiper", {
        slidesPerView: 6,
        spaceBetween: 12,
        freeMode: true,
        loop: false,
        allowTouchMove: false,
    });

    // 5. Modal Thumbnail'larda Hover İşlemleri (Tekrar Eden Dinleyicileri Önlemek için)
    modalThumbsSlides.forEach((slide, index) => {
        slide.addEventListener("mouseenter", function () {
            modalSwiper.slideTo(index);
            updateModalThumbsActiveClass(index);
        });
    });

    // 6. Modal Açıldığında Senkronizasyon
    modalElement?.addEventListener("shown.bs.modal", function () {
        if (modalSwiper && mainSwiper) {
            modalSwiper.slideTo(mainSwiper.realIndex);
            modalSwiper.update(); // Swiper'ı güncelle
            updateModalThumbsActiveClass(mainSwiper.realIndex);
        }
    });

    // 7. Main Swiper'da Slide Change Olayı
    mainSwiper.on("slideChange", function () {
        const currentIndex = mainSwiper.realIndex;
        updateMainThumbsActiveClass(currentIndex);
    });

    // 8. Main Thumbs Swiper'da Hover Olayı
    mainThumbsItems.forEach((thumb, index) => {
        thumb.addEventListener("mouseenter", function () {
            mainSwiper.slideTo(index);
        });
    });

    // 9. Modal Swiper'da Slide Change Olayı
    modalSwiper.on("slideChange", function () {
        const currentIndex = modalSwiper.activeIndex;
        updateModalThumbsActiveClass(currentIndex);
    });

    // 10. İlk Slayta Active Sınıfını Ekleme
    updateMainThumbsActiveClass(mainSwiper.realIndex);
    updateModalThumbsActiveClass(modalSwiper.activeIndex);

});