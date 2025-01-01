var swiper = new Swiper(".swiper",{
    grabCursor: true,
    initialSlide: 4,
    centeredSlides: true,
    slidesPerView:"auto",
    spaceBetween: 14,
    freeMode:false,
    on: {
        click() {
            swiper.slideTo(this.clickedIndex);
        },
    },
});