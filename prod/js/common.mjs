/**
 * Define variables & objects
 */
const burgerBtn = document.querySelector('.menu__btn');
const tabButtons = document.querySelectorAll('.js-dropdown-btn');

// const DOMAnimations = {

//   /**
//    * SlideUp
//    *
//    * @param {HTMLElement} element
//    * @param {Number} duration
//    * @return {Promise<boolean>}
//    */
//   slideUp: function(element, duration = 500) {
//     return new Promise(function(resolve, reject) {
//       element.style.height = element.offsetHeight + 'px';
//       element.style.transitionProperty = `height, margin, padding`;
//       element.style.transitionDuration = duration + 'ms';
//       element.offsetHeight;
//       element.style.overflow = 'hidden';
//       element.style.height = 0;
//       element.style.paddingTop = 0;
//       element.style.paddingBottom = 0;
//       element.style.marginTop = 0;
//       element.style.marginBottom = 0;
//       window.setTimeout(function() {
//         element.style.display = 'none';
//         element.style.removeProperty('height');
//         element.style.removeProperty('padding-top');
//         element.style.removeProperty('padding-bottom');
//         element.style.removeProperty('margin-top');
//         element.style.removeProperty('margin-bottom');
//         element.style.removeProperty('overflow');
//         element.style.removeProperty('transition-duration');
//         element.style.removeProperty('transition-property');
//         resolve(false);
//       }, duration);
//     });
//   },

//   /**
//    * SlideDown
//    *
//    * @param {HTMLElement} element
//    * @param {Number} duration
//    * @return {Promise<boolean>}
//    */
//   slideDown: function(element, duration = 500) {
//     return new Promise(function(resolve, reject) {
//       element.style.removeProperty('display');
//       let display = window.getComputedStyle(element).display;

//       if (display === 'none') {
//         display = 'block';
//       }

//       element.style.display = display;
//       const height = element.offsetHeight;
//       element.style.overflow = 'hidden';
//       element.style.height = 0;
//       element.style.paddingTop = 0;
//       element.style.paddingBottom = 0;
//       element.style.marginTop = 0;
//       element.style.marginBottom = 0;
//       element.offsetHeight;
//       element.style.transitionProperty = `height, margin, padding`;
//       element.style.transitionDuration = duration + 'ms';
//       element.style.height = height + 'px';
//       element.style.removeProperty('padding-top');
//       element.style.removeProperty('padding-bottom');
//       element.style.removeProperty('margin-top');
//       element.style.removeProperty('margin-bottom');
//       window.setTimeout(function() {
//         element.style.removeProperty('height');
//         element.style.removeProperty('overflow');
//         element.style.removeProperty('transition-duration');
//         element.style.removeProperty('transition-property');
//       }, duration);
//     });
//   },

//   /**
//    * SlideToggle
//    *
//    * @param {HTMLElement} element
//    * @param {Number} duration
//    * @return {Promise<boolean>}
//    */
//   slideToggle: function(element, duration = 500) {
//     if (window.getComputedStyle(element).display === 'none') {
//       return this.slideDown(element, duration);
//     } else {
//       return this.slideUp(element, duration);
//     }
//   },
// };


// Define handler's functions
/**
 * Open/close menu
 *
 */
function openMenu() {
  burgerBtn.classList.toggle('menu__btn_active');
}

/**
 * Change tab-content
 *
 */
function changeTabContent() {
  const target = event.currentTarget;
  const contentTab = target.nextElementSibling;
  if (target.classList.contains('is-select')) {
    hideAllTab();
  } else {
    hideAllTab();
    target.classList.add('is-select');
    showTabContent(contentTab);
  }


  // if (target.classList.contains('is-select')) {
  //   hideAllTab();
  // } else {
  //   hideAllTab();
  //   target.classList.add('is-select');
  //   showTabContent(contentTab);
  // }
}

/**
 * Hide tab-content
 *
 * @param {HTMLElement} element
 */
function hideAllTab() {
  for (const tabButton of tabButtons) {
    tabButton.classList.remove('is-select');
    tabButton.nextElementSibling.style.height = '0';
    tabButton.querySelector('.js-dropdown-arrow').classList.remove('is-rotate');
  }

  // for (const tabButton of tabButtons) {
  //   tabButton.classList.remove('is-select');
  //   DOMAnimations.slideUp(tabButton.nextElementSibling);
  // }
}

/**
 * Show tab-content
 *
 * @param {HTMLElement} element
 */
function showTabContent(element) {
  element.style.height = element.scrollHeight + 'px';
  element.previousElementSibling.querySelector('.js-dropdown-arrow')
      .classList.add('is-rotate');

  // DOMAnimations.slideDown(element);
}

// Event's call
document.addEventListener('DOMContentLoaded', () => {
  burgerBtn.addEventListener('click', openMenu);

  if (document.documentElement.clientWidth <= 576) {
    for (const tabButton of tabButtons) {
      tabButton.addEventListener('click', changeTabContent);
    }
  }
});
