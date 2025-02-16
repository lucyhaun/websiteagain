const swiperContainer = document.querySelector('.swiper');
const firstImage = swiperContainer.querySelector('.swiper-slide img');

function adjustSwiperHeight() {
    if (firstImage.complete) {
        swiperContainer.style.height = firstImage.offsetHeight + 'px';
    } else {
        firstImage.onload = () => {
            swiperContainer.style.height = firstImage.offsetHeight + 'px';
        };
    }
    }
var swiper = new Swiper(".swiper", {
    grabCursor: true,
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    on: {
        init: adjustSwiperHeight,
        slideChangeTransitionStart: adjustSwiperHeight,
    },
    freeMode:true,
    on: {
        click() {
            swiper.slideTo(this.clickedIndex);
        },
    },
    breakpoints: {
        600:{
        slidesPerView: 2
        },
        1300:{
            slidesPerView: 3
    }}
});