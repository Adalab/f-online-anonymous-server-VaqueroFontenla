'use strict'

const menuButton = document.querySelector('.nav-trigger');
const closeButton = document.querySelector('.nav-close');

const navMenu = document.querySelector('.nav');



menuButton.addEventListener('click', () => {
  navMenu.classList.remove('hidden')
  menuButton.classList.add('hidden')
});

closeButton.addEventListener('click', () => {
  navMenu.classList.add('hidden')
  menuButton.classList.remove('hidden')
});