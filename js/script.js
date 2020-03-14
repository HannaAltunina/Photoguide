var ENTER_KEYCODE = 13;

var mainNav = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.header__toggle');

function openMainNav() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  headerToggle.classList.remove('header__toggle--open');
  headerToggle.classList.add('header__toggle--close');
}

function closeMainNav() {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  headerToggle.classList.remove('header__toggle--close');
  headerToggle.classList.add('header__toggle--open');
}

function onNavToggleClick() {
  if (headerToggle.classList.contains('header__toggle--close')) {
    closeMainNav();
  } else {
    openMainNav();
  }
}

function onNavToggleEnterPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    if (headerToggle.classList.contains('header__toggle--close')) {
      closeMainNav();
    } else {
      openMainNav();
    }
  }
}

headerToggle.addEventListener('click', onNavToggleClick);
headerToggle.addEventListener('keyboard', onNavToggleEnterPress);
