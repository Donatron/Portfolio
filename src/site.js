(function () {
  const experience = require('./data/experience');
  
  const DOMElements = {
    modal: document.getElementById('portfolioDetailsModal'),
    modalToggles: document.getElementsByClassName('modal-toggle'),
    experience: document.getElementById('experience'),
  }

  // Add click event listeners to all modal toggle icons
  for (let i = 0; i < DOMElements.modalToggles.length; i++) {
    (function (index) {
      DOMElements.modalToggles[index].addEventListener("click", function () {

        setModalTogglesZIndex();
        // Find Parent with carousel-overlay class
        const parent = DOMElements.modalToggles[i].closest('.carousel-overlay');

        // Find closest carousel inner and get portfolio item details
        const carouselInner = findSiblingElement(parent, '.carousel-inner');
        const portfolioItem = setSelectedPortfolioItem(carouselInner);

        DOMElements.modal.innerHTML = modalHTML(portfolioItem);
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
    for (let i = 0; i < DOMElements.modalToggles.length; i++) {
      const overlay = DOMElements.modalToggles[i].closest('.carousel-overlay');
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

  const modalHTML = (portfolioItem) => {
    return `
    <div class="modal-dialog" role="document">
    ${portfolioItem.coverImage}
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">${portfolioItem.title}</h5>
        </div>
        <div class="modal-body">
          <p id="modal-description">${portfolioItem.description}</p>
          <div class="portfolio-item_details-tech" id="modal-tech-stack">
            ${portfolioItem.tech}
          </div>
          ${portfolioItem.links}
        </div>
      </div>
    </div>
    `;
  }

  const experienceDetailsHTML = (details) => {
    let html = '';
    for (const detail of details) {
      html += `<li>${detail}</li>`
    }
    return html;
  }

  const experienceHTML = () => {
    let html = '<h2>Experience</h2>';
    for (const exp of experience) {
      const {
        title,
        companyName,
        location,
        startDate,
        endDate,
        isCurrentRole,
        isContract,
        details
      } = exp;

      const expDetails = experienceDetailsHTML(details)

      html += `
        <div class="col-xs-12 col-md-6">
          <h6>${title}: ${companyName} - ${location}</h6>
          <i>${startDate} - ${isCurrentRole ? 'Present' : endDate} ${isContract ? '(Contract)' : ''}</i>
          <ul>${expDetails}</ul>
        </div>
      `;
    }
    return html;
  }

  DOMElements.experience.innerHTML = experienceHTML()
})();