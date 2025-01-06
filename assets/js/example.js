var swiper = new Swiper(".announcementSwiper", {
    loop: false,                     // Sonsuz döngü kapalı
    slidesPerView: 6,                // Sadece 6 slayt göster
    spaceBetween: 10,                // Slaytlar arasındaki boşluk
    watchSlidesProgress: true,       // Slayt izleme etkin
    allowTouchMove: false,           // Kaydırma hareketini devre dışı bırak
});

var swiper2 = new Swiper(".announcementSwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
