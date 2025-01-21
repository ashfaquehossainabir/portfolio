// ======================================================
// -- Preloader Functionalities
// ======================================================

$(window).on("load", function () {
  "use strict";

  $("#preloader").delay(350).fadeOut("slow");
  // Because only Chrome supports offset-path, feGaussianBlur for now
  var isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  if (!isChrome) {
    document.getElementsByClassName("infinityChrome")[0].style.display = "none";
    document.getElementsByClassName("infinity")[0].style.display = "block";
}});


// =======================================================
// -- Shrink Navbar Functionality
// =======================================================

const navbar = document.querySelector("header");

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    navbar.style.padding = "10px 0";
  } else {
    navbar.style.padding = "20px 0";
  }
}


// =======================================================
// -- Theme Button Functionality
// =======================================================

const themeBtn = document.querySelectorAll(".theme-btn");

for(let i = 0; i < themeBtn.length; i++) {
  const currentMode = localStorage.getItem('mode') || 'light-theme';
  document.body.classList.add(currentMode);

  themeBtn[i].addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const newMode = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('mode', newMode);
  })
}


// =======================================================
// -- Mobile Nav Menu Functionality
// =======================================================

const navMenu = document.querySelector(".mobile-nav-menu");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const closeMenuBtn = document.querySelector(".nav-close-btn");

// Nav Toggle Function
const navToggleFunc = () => {
    navMenu.classList.toggle("active");
};


// =======================================================
// -- Hero Section Typing Functionality
// =======================================================

// var typed = new Typed(".typing", {
//   strings: ["a programmer", "a web expert", "Abir"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: false
// });


// =======================================================
// -- About Section Availability Status
// =======================================================

const activeStatus = document.querySelector(".active-status");
const availabilityText = document.querySelector(".availability-status");

activeStatus.style.backgroundColor = "var(--active-status-red)"
availabilityText.innerHTML = "Not Available";


// =======================================================
// -- Get Author's Age
// =======================================================

const age = new Date().getFullYear() - 2000;
document.getElementById('age').innerHTML = age;


// =======================================================
// -- SCROLL REVEAL ANIMATION
// =======================================================

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.project-card', { interval: 200});


// ==========================================================
// -- Testimonial Slider
// ==========================================================

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: true,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      840: {
          slidesPerView: 2,
      },
      1210: {
          slidesPerView: 3,
      },
  },
});


// ==========================================================
// -- Copy Button Functionality
// ==========================================================

const emailBtn = $(".email-btn");
emailBtn.on("click", function () {
    alert("✓ You successfully copied my email address!");
    var copiedValue = "ashfaquehossain300@gmail.com";
    var copiedValueElement = $('<input type=" hidden" id="myhidden">').val(copiedValue).appendTo('body').select()
    document.execCommand('copy')
    $('#myhidden').remove();
});

const cellBtn = $(".cell-btn");
cellBtn.on("click", function () {
    alert("✓ You successfully copied my mobile number!");
    var copiedValue = "+8801577073020";
    var copiedValueElement = $('<input type=" hidden" id="myhidden">').val(copiedValue).appendTo('body').select()
    document.execCommand('copy')
    $('#myhidden').remove();
});


// ==========================================================
// -- Get Year
// ==========================================================

const date = new Date();
const yearText = document.getElementById("year");

let year = date.getFullYear();
yearText.innerHTML = year;