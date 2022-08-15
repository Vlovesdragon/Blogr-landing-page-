const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visiblity = nav.getAttribute('data-visible');
  if (visiblity === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

let productIcon = document.getElementById('product-icon');
let productMenu = document.getElementById('product-menu');
let companyIcon = document.getElementById('company-icon');
let companyMenu = document.getElementById('company-menu');
let connectIcon = document.getElementById('connect-icon');
let connectMenu = document.getElementById('connect-menu');

function openMenu(event) {
  const id = event.target.id;

  console.log(id);

  if (id.includes('product') && productMenu.classList.contains('hidden')) {
    productIcon.classList.add('rotate-icon');
    productMenu.classList.add('active');
    productMenu.classList.remove('hidden');
  } else {
    productIcon.classList.remove('rotate-icon');
    productMenu.classList.remove('active');
    productMenu.classList.add('hidden');
  }

  if (id.includes('company') && companyMenu.classList.contains('hidden')) {
    companyIcon.classList.add('rotate-icon');
    companyMenu.classList.add('active');
    companyMenu.classList.remove('hidden');
  } else {
    companyIcon.classList.remove('rotate-icon');
    companyMenu.classList.remove('active');
    companyMenu.classList.add('hidden');
  }

  if (id.includes('connect') && connectMenu.classList.contains('hidden')) {
    connectIcon.classList.add('rotate-icon');
    connectMenu.classList.add('active');
    connectMenu.classList.remove('hidden');
  } else {
    connectIcon.classList.remove('rotate-icon');
    connectMenu.classList.remove('active');
    connectMenu.classList.add('hidden');
  }
}
