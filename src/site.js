(function () {
  const DOMElements = {
    modal: document.getElementById('portfolioDetailsModal'),
    modalToggles: document.getElementsByClassName('modal-toggle')
  }

  // Add click event listners to all modal toggle icons
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
})();