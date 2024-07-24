window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

document.querySelector(".header__menu-btn").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("open");
  document.body.classList.toggle("lock");
  document.querySelector("header").classList.toggle("active"); // Add this line
});


var swiper = new Swiper(".team__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review__slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});