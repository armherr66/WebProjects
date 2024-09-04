'use strict';

/******************************************
 *
 * SELECT, CREATE AND DELETE ELEMENTS
 */

// Selecting elements
console.log(document.documentElement); // Entire HTML document <html>...</html>
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>

const header = document.querySelector('.header'); // Element
const allSections = document.querySelectorAll('.section'); // NodeListOf<Element> - Doesn't update when adding/removing elements

document.getElementById('section--1'); // HTMLElement
document.getElementsByTagName('button'); // HTMLCollection - It's a live list of elements
document.getElementsByClassName('btn') // HTMLCollection

// Creating elements

// .insertAdjacentHTML

const message = document.createElement('div'); // HTMLDivElement
message.classList.add('cookie-message');
message.innerHTML = "We use cookies for improving functionality and analytics. <button class= 'btn btn--close-cookie'>Got it!</button>";
header.append(message);

// Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  message.remove();
});


/******************************************
 *
 * STYLES, ATTRIBUTES AND CLASSES
 */

// Styles
// We can set inline style rules
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// We can only read values of properties set inline
console.log(message.style.height); // (empty string)
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// The getComputedStyle function provides the real value of all the attribues
console.log(getComputedStyle(message).height); // 54.2667px
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// We can modify CSS properties
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
// Standard attributes (can be read and set)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1:5500/img/logo.png
console.log(logo.className); // nav__logo

// Non-standard attributes
console.log(logo.getAttribute('designer')); // Armando
logo.setAttribute('company', 'Bankist');

// Getting absolute and relative values
console.log(logo.getAttribute('src')); // img/logo.png
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:5500/#
console.log(link.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');


/******************************************
 *
 * DOM
 */

const h1 = document.querySelector('h1');

// Selecting child elements
console.log(h1.querySelectorAll('.highlight')); // NodeList (2)
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'white'

// Selecting parent elements
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Selecting siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);

[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) e.style.transform = 'scale(0.5)'
});