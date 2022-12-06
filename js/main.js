let btnOpenMenu = document.querySelector('.menu-open');
let btnCloseMenu = document.querySelector('.menu-close');
let menu = document.querySelector('.menu-container ul');
let links = document.querySelectorAll('.menu-container ul li a');

function toaggleMenu() {
  menu.classList.toggle('show');
}

for (let link of links) {
  link.addEventListener('click', ()=> {
    menu.classList.remove('show');
  });
}

btnOpenMenu.addEventListener('click', toaggleMenu);
btnCloseMenu.addEventListener('click', toaggleMenu);