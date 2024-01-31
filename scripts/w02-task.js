/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Juan Islas';
let date = new Date;
let currentYear = date.getFullYear();
let profilePicture = 'images/me.jpg';
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent= currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);
/* Step 5 - Array */
food = ['Hot dog','Steak','Ice cream','Burger','Pizza'];
foodElement.innerHTML = food;

const favoriteFood = 'Apple';
const newFood = food.push(favoriteFood);
const favFood = food;
foodElement.innerHTML += `<br>${favFood}`;

const deleteFirst = food.shift();
const deletedFirst = food;
foodElement.innerHTML += `<br>${deletedFirst}`

const deleteLast = food.pop();
const deletedLast = food;
foodElement.innerHTML += `<br>${deletedLast}`







