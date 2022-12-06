let btnOpenMenu = document.querySelector('.menu-open');
let btnCloseMenu = document.querySelector('.menu-close');
let menu = document.querySelector('.menu-container ul');

function toaggleMenu() {
  menu.classList.toggle('show');
}

btnOpenMenu.addEventListener('click', toaggleMenu);
btnCloseMenu.addEventListener('click', toaggleMenu);