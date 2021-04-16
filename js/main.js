$(document).ready(function(){
    setTimeout(function(){
        window.scrollTo(0, 0);
    }, 1);
});

$(document).ready(function (){
    $('#app').vide({
    mp4: 'video/video.mp4',
    webm: 'video/video.webm',
    ogv: 'video/video.ogv',
    poster: 'img/moldova_landscape1.jpg'
    });
});

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
    });