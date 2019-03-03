require("./index.html");
// Import Legacy CSS and JS files
require("./mountain.js");
require("./mountain.css");

// Import custom CSS
require("./style.css");

// Remove cover on document loading:
document.addEventListener("DOMContentLoaded", () => {
  const cover = document.querySelector("#cover");
  cover.parentElement.removeChild(cover);
});

// Show wrapper on document loading:
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.visibility = "visible";
});

// Import Dependencies
import jump from "jump.js";
import { CSSPlugin, TimelineMax, Back, Power2 } from "gsap/all";

const plugins = [CSSPlugin];

// Declare DOM element variables for greensock animation
const nameSpan = document.querySelector("#name-span");
const profileImage = document.querySelector(".navbar-logo-img");
const title = document.querySelector("#title");
const subTitle = document.querySelector("#sub-title");
const aboutLink = document.querySelector("#about-link");
const portfolioLink = document.querySelector("#portfolio-link");
const contactLink = document.querySelector("#contact-link");
const navLinks = document.querySelectorAll(".nav li a");

// Create greensock timeline
const tl = new TimelineMax();

// Get Greensock working

tl.fromTo(
  nameSpan,
  0.5,
  { x: -500, y: -40, autoAlpha: 0 },
  { x: 80, y: -40, autoAlpha: 1 },
  "+=0.2"
)
  .fromTo(profileImage, 0.5, { y: -200 }, { y: 0, ease: Power2.easeInOut })
  .fromTo(title, 0.75, { y: -1000 }, { y: 0 })
  .fromTo(subTitle, 0.5, { scale: 0 }, { scale: 1 })
  .staggerFrom(navLinks, 0.75, { y: -200, ease: Power2.easeOut }, "+=0.85")
  .fromTo(
    contactLink,
    0.5,
    { scale: 2.5, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, ease: Power2.easeInOut },
    "+=0.15"
  );

/*
 ** Create smooth scrolling for nav links
 */

aboutLink.addEventListener("click", e => {
  e.preventDefault();

  const target = e.path[0].hash;

  jump(target, {
    duration: 500,
    offset: -100
  });
});

portfolioLink.addEventListener("click", e => {
  e.preventDefault();

  const target = e.path[0].hash;

  jump(target, {
    duration: 500,
    offset: -100
  });
});

contactLink.addEventListener("click", e => {
  e.preventDefault();

  const target = e.path[0].hash;

  jump(target, {
    duration: 500,
    offset: -100
  });
});

/*
 ** End smooth scrolling
 */
