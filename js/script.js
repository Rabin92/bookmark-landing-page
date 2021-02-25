const body = document.querySelector('body');
const nav = document.querySelector('#js-nav');
const logoPathOne = document.querySelector('.active-path');
const logoPathTwo = document.querySelector('.active-path-two');
const logoPathThree = document.querySelector('.active-path-three');
nav.style.display = 'none';
const menu = document.querySelector('#js-menu');
const menuLines = menu.children;

menu.addEventListener('click', () => {
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
    body.style.overflow = 'hidden';
    logoPathOne.style.fill = '#fff';
    logoPathTwo.style.fill = '#fff';
    logoPathThree.style.fill = '#252b46';
    menu.classList.add('active');
    for (let i = 0; i < menuLines.length; i++) {
      menuLines[i].style.border = '1px solid #fff';
    }
  } else {
    nav.style.display = 'none';
    body.style.overflow = 'auto';
    logoPathOne.style.fill = '';
    logoPathTwo.style.fill = '';
    logoPathThree.style.fill = '';
    menu.classList.remove('active');
    for (let i = 0; i < menuLines.length; i++) {
      menuLines[i].style.border = '1px solid #000';
    }
  }
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => tabContent.classList.remove('show'));
    target.classList.add('show');

    tabs.forEach(tab => tab.classList.remove('show'));
    tab.classList.add('show');
  });
});

const email = document.querySelector('#js-email');
const btn = document.querySelector('#js-contact');
const errorIcon =
  btn.previousElementSibling.previousElementSibling.previousElementSibling;
const errorMsg = email.nextElementSibling;

btn.addEventListener('click', () => {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value !== '' && email.value.match(mailFormat)) {
    email.style.border = '';
    errorIcon.style.display = '';
    errorMsg.style.display = '';
  } else {
    email.style.border = '2px solid #fa5757';
    errorIcon.style.display = 'block';
    errorMsg.style.display = 'block';
  }
});
