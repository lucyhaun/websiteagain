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
var swiper = new Swiper(".swiper",{
    grabCursor: true,
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 50,
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
});