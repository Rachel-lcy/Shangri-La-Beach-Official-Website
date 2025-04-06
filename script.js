const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    preEl: '.swiper-button-prev'
  },
  slidePerView: 1,
  spaceBetween: 30,
  speed: 800
})