// ======================================================
// -- Preloader Functionalities
// ======================================================

$(window).on("load", function () {
  "use strict";

  // Preloader Fadeout
  $("#preloader").delay(350).fadeOut("slow");
});


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