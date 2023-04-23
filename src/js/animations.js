import jump from 'jump.js';
const { TimelineMax, Power2 } = require('gsap/all');
const {
  aboutLink,
  contactLink,
  nameSpan,
  navLinks,
  portfolioLink,
  profileImage,
  title,
  subTitle,
} = require('./DOMElements')

// Create greensock timeline
const tl = new TimelineMax();

// Get Greensock working
tl.fromTo(
  nameSpan,
  0.5,
  { x: -500, y: -60, autoAlpha: 0 },
  { x: 120, y: -60, autoAlpha: 1 },
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
const createSmoothScroll = (element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');

    jump(target, {
      duration: 500,
      offset: -100
    });
  });
}

createSmoothScroll(aboutLink);
createSmoothScroll(portfolioLink);
/*
 ** End smooth scrolling
*/