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

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const testimonial_swiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.testimonial-nav-next',
    preEl: '.testimonial-nav-pre'
  },
  slidePerView: 1,
  spaceBetween: 30,
  speed: 800
})


function openService(evt, serviceName) {
  const tabcontents = document.querySelectorAll(".tabcontent");
  tabcontents.forEach(content => content.classList.remove("show"));


  const tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach(link => link.classList.remove("active"));


  document.getElementById(serviceName).classList.add("show");
  evt.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("defaultOpen").click();
});