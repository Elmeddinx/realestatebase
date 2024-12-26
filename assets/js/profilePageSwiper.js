var swiper = new Swiper('.swiper', {
    spaceBwtween: 5,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

