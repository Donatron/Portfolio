const aboutLink = document.querySelector("#about-link");
const contactLink = document.querySelector("#contact-link");
const cover = document.querySelector("#cover");
const experience = document.getElementById('experience');
const modal = document.getElementById('portfolioDetailsModal');
const modalToggles = document.getElementsByClassName('modal-toggle');
const nameSpan = document.querySelector("#name-span");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navbarLi = document.querySelectorAll(".navbar-right li a");
const navLinks = document.querySelectorAll(".nav li a");
const portfolioLink = document.querySelector("#portfolio-link");
const profileImage = document.querySelector(".navbar-logo-img");
const subTitle = document.querySelector("#sub-title");
const techContainer = document.getElementById('techContainer');
const title = document.querySelector("#title");
const wrapper = document.querySelector(".wrapper");

module.exports = {
  aboutLink,
  contactLink,
  cover,
  experience,
  modal,
  modalToggles,
  nameSpan,
  navbarCollapse,
  navbarLi,
  navLinks,
  portfolioLink,
  profileImage,
  techContainer,
  title,
  subTitle,
  wrapper,
}