/**
 * Define variables
 */
const burgerBtn = document.querySelector('.menu__btn');

// Define functions
/**
 * Open/close menu
 *
 */
function openMenu() {
  burgerBtn.classList.toggle('menu__btn_active');
}

// Event's call
burgerBtn.addEventListener('click', openMenu);
