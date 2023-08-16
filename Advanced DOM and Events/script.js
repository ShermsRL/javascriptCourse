'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting, Creating and Deleting elements
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // return nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // return html collection, its live so when a button is added or removed it will be updated automatically, nodelist doesnt

console.log(document.getElementsByClassName('btn')); // also return html collection

// Creating and inserting elements
// .insertAdjacenentHTML

// create a DOM element
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cokkies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // old way of removing element through dom tranversing
    // message.parentElement.removeChild(message)
  });

// Styles, attributes and classes
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// can only read the ones defined in the DOM
console.log(message.style.height);
console.log(message.style.backgroundColor);

// to read other properties not defined not in the DOM
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// returned undefined because designer is not normally inside a image
console.log(logo.designer);
// to read the designer
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
// different link - one is relative to your working folder
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// setting the class but DO NOT USE as it will overwrite the other class you have, just use the above 4 to work with classes
logo.className = 'Sherman';

// Implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   // current pos + current scroll
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // old school way
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // only for modern browser
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Type of events and event handlers
// add event listener - can add multiple event listener to the same event
// second is can remove event handler in case you dont need it anymore
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

// remove event listener can be anywhere
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old school way
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };
