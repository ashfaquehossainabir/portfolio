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
    themeBtn[i].addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
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
// -- Hero Section Availability Status
// =======================================================

const heroAvailabilityText = document.getElementById("availability-status");

heroAvailabilityText.innerHTML = "Not available for new projects";


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

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2000,
//   delay: 200,
// //     reset: true
// });

// sr.reveal('.project-card', { interval: 200});



// =======================================================
// -- Wow JS
// =======================================================

$(window).on("load", function () {
  /*=========================================================================
    Wow Initialize
  =========================================================================*/
  // Here will be the WoW Js implementation.
  setTimeout(function () {
    new WOW().init();
  }, 0);

  var dynamicDelay = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
  var fallbackValue = "200ms";

})


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


// ==========================================================
// -- Set url attribute in image
// ==========================================================

const projectImageOne = document.getElementById("project-img-one")
const projectLinkOne = document.getElementById("project-link-one")
const projectTextOne = document.getElementById("project-text-one")

const projectImageTwo = document.getElementById("project-img-two")
const projectLinkTwo = document.getElementById("project-link-two")
const projectTextTwo = document.getElementById("project-text-two")

const projectImageThree = document.getElementById("project-img-three")
const projectLinkThree = document.getElementById("project-link-three")
const projectTextThree = document.getElementById("project-text-three")

const projectImageFour = document.getElementById("project-img-four")
const projectLinkFour = document.getElementById("project-link-four")
const projectTextFour = document.getElementById("project-text-four")

const projectImageFive = document.getElementById("project-img-five")
const projectLinkFive = document.getElementById("project-link-five")
const projectTextFive = document.getElementById("project-text-five")

const projectImageSix = document.getElementById("project-img-six")
const projectLinkSix = document.getElementById("project-link-six")
const projectTextSix = document.getElementById("project-text-six")


const labelContentOne = document.getElementById("label-content-one")
const thumbnailHeadlineOne = document.getElementById("thumbnail-headline-one")

const labelContentTwo = document.getElementById("label-content-two")
const thumbnailHeadlineTwo = document.getElementById("thumbnail-headline-two")

const labelContentThree = document.getElementById("label-content-three")
const thumbnailHeadlineThree = document.getElementById("thumbnail-headline-three")

const labelContentFour = document.getElementById("label-content-four")
const thumbnailHeadlineFour = document.getElementById("thumbnail-headline-four")

const labelContentFive = document.getElementById("label-content-five")
const thumbnailHeadlineFive = document.getElementById("thumbnail-headline-five")

const labelContentSix = document.getElementById("label-content-six")
const thumbnailHeadlineSix = document.getElementById("thumbnail-headline-six")



// Project 1
projectImageOne.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkOne.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextOne.innerHTML = "Coming Soon"

labelContentOne.innerHTML = "Website"
thumbnailHeadlineOne.innerHTML = "Project Coming Soon"


// Project 2
projectImageTwo.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkTwo.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextTwo.innerHTML = "Coming Soon"

labelContentTwo.innerHTML = "Website"
thumbnailHeadlineTwo.innerHTML = "Project Coming Soon"


// Project 3
projectImageThree.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkThree.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextThree.innerHTML = "Coming Soon"

labelContentThree.innerHTML = "Website"
thumbnailHeadlineThree.innerHTML = "Project Coming Soon"


// Project 4
projectImageFour.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkFour.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextFour.innerHTML = "Coming Soon"

labelContentFour.innerHTML = "Website"
thumbnailHeadlineFour.innerHTML = "Project Coming Soon"


// Project 5
projectImageFive.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkFive.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextFive.innerHTML = "Coming Soon"

labelContentFive.innerHTML = "Website"
thumbnailHeadlineFive.innerHTML = "Project Coming Soon"


// Project 6
projectImageSix.setAttribute('src', './images/project-images/thumbnail.png')
projectLinkSix.setAttribute('href', 'https://ashfaquertc.github.io/coming-soon')
projectTextSix.innerHTML = "Coming Soon"

labelContentSix.innerHTML = "Website"
thumbnailHeadlineSix.innerHTML = "Project Coming Soon"