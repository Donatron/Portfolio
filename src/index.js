require("./index.html")

// Import Legacy CSS and JS files
require("./js/site.js")
require('./js/animations');
require("./mountain.js")
require("./mountain.css")

// Import Custom js
const {
  cover,
  navbarCollapse,
  navbarLi,
  wrapper
} = require('./js/DOMElements')

// Import custom CSS
require("./style.css");

// Remove cover and show wrapper on document loaded:
document.addEventListener("DOMContentLoaded", () => cover.parentElement.removeChild(cover));
document.addEventListener("DOMContentLoaded", () => wrapper.style.visibility = "visible");

// Sort nav-bar collapse show/hide on click
navbarLi.forEach(element => {
  addEventListener("click", e => {
    if (navbarCollapse.classList.contains("in")) {
      navbarCollapse.classList.remove("in");
    }
  });
});
