require("./index.html")

// Import Legacy CSS and JS files
require("./mountain.js")
require("./mountain.css")

// Import Custom js
require("./js/site.js")
require('./js/animations');

// Import custom CSS
require("./style.css");

const {
  cover,
  modal,
  navbarCollapse,
  navbarLi,
  wrapper
} = require('./js/DOMElements')

// Remove cover and show wrapper on document loaded:
document.addEventListener("DOMContentLoaded", () => cover.parentElement.removeChild(cover));
document.addEventListener("DOMContentLoaded", () => wrapper.style.visibility = "visible");
document.addEventListener("DOMContentLoaded", () => modal.style.display = "none");

// Sort nav-bar collapse show/hide on click
navbarLi.forEach(element => {
  addEventListener("click", e => {
    if (navbarCollapse.classList.contains("in")) {
      navbarCollapse.classList.remove("in");
    }
  });
});
