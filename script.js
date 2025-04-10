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

window.addEventListener('DOMContentLoaded', ()=>{
  fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data
  });
  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
  console.log("JS loaded, attempting to inject nav and footer...");
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