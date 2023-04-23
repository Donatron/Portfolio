const SkillTypeEnums = require('../enums/SkillTypeEnums');

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

const experienceHTML = (experience) => {
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

const skillDetailsHTML = (skills, sectionTitle, isPrimary = false) => {
  let html = `
    <div class="row section-container-spacer">
      <div class="col-xs-12 col-md-12">
        ${isPrimary ? "<h2>Tech Stack</h2>" : ""}
        <p>
          ${sectionTitle}
        </p>
      </div>
    </div>
    <div class="row  reveal reveal-content">
  `;
  
  for (const skill of skills) {
    html += `
      <div class="col-xs-4 col-sm-3 col-lg-2">
        <i class=" img-responsive image-center my-3 devicon ${skill.devicon} colored"></i>
      </div>
    `
  }
  html += '</div>'

  return html;
}

const skillsHTML = (skills) => {
  let html = `
    <div class="section-container tech-container">
      <div class="container text-center">
  `;

  const primarySkills = skills.filter((skill) => skill.skillType === SkillTypeEnums.PRIMARY_SKILL)
  const secondarySkills = skills.filter((skill) => skill.skillType === SkillTypeEnums.SECONDARY_SKILL)
  const developmentTools = skills.filter((skill) => skill.skillType === SkillTypeEnums.DEVELOPMENT_TOOL)

  if (primarySkills.length > 0) html += skillDetailsHTML(primarySkills, 'Primary Skills', true)
  if (secondarySkills.length > 0) html += skillDetailsHTML(secondarySkills, 'Secondary Skills')
  if (developmentTools.length > 0) html += skillDetailsHTML(developmentTools, 'Development Tools')

  html += `
    </div>
  </div>
  `

  return html;
}


module.exports = {
  experienceHTML,
  modalHTML,
  skillsHTML,
}