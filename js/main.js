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

const menuButton = document.querySelector('.menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector("body");

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    burgerMenu.classList.toggle('visible');
    body.classList.toggle("fixed-page");
});

document.addEventListener('click', function(event) {
    const target = event.target;
    const its_menu = target == burgerMenu || burgerMenu.contains(target);
    const its_btnMenu = target == menuButton;
    const menu_is_active = burgerMenu.classList.contains('visible');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        burgerMenu.classList.toggle('visible');
        body.classList.toggle("fixed-page");
    };
});

$(document).keyup(function(e) {
    if (burgerMenu.classList.contains('visible') && e.keyCode === 27) {
        burgerMenu.classList.toggle('visible');
        body.classList.toggle("fixed-page");
    };
});