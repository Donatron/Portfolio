(function () {
  const {
    modal,
    modalToggles,
    experience: experienceContainer,
    techContainer,
  } = require('./DOMElements');
  const {
    experienceHTML,
    heroHTML,
    modalHTML,
    skillsHTML,
  } = require('./markup');
  const experience = require('../data/experience');
  const skills = require('../data/skills')

  // Add click event listeners to all modal toggle icons
  for (let i = 0; i < modalToggles.length; i++) {
    (function (index) {
      modalToggles[index].addEventListener("click", function () {

        setModalTogglesZIndex();
        // Find Parent with carousel-overlay class
        const parent = modalToggles[i].closest('.carousel-overlay');

        // Find closest carousel inner and get portfolio item details
        const carouselInner = findSiblingElement(parent, '.carousel-inner');
        const portfolioItem = setSelectedPortfolioItem(carouselInner);

        modal.innerHTML = modalHTML(portfolioItem);
        modal.style.display = 'flex'
      })
    })(i);
  }

  const findSiblingElement = (element, selector) => {
    let sibling = element.nextElementSibling;

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    };
  }

  const setModalTogglesZIndex = () => {
    for (let i = 0; i < modalToggles.length; i++) {
      const overlay = modalToggles[i].closest('.carousel-overlay');
      overlay.style.zIndex = 10;
    }
  }

  const setSelectedPortfolioItem = (carouselInner) => {
    const portfolioItem = {}

    portfolioItem['title'] =
      carouselInner.querySelector('.portfolio-item_details-title').innerHTML;
    portfolioItem['description'] =
      carouselInner.querySelector('.portfolio-item_details-description').innerHTML;
    portfolioItem['tech'] =
      carouselInner.querySelector('.portfolio-item_details-tech').innerHTML;
    portfolioItem['links'] =
      carouselInner.querySelector('.portfolio-item_details-links').innerHTML;
    portfolioItem['coverImage'] =
      carouselInner.querySelector('.cover-image').innerHTML;

    return portfolioItem;
  }

  experienceContainer.innerHTML = experienceHTML(experience)
  techContainer.innerHTML = skillsHTML(skills)
})();