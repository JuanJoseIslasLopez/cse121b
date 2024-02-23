/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Juan Islas',
    photo: 'images/me.jpg',
    favoriteFoods: [
        'Stake',
        'Fries',
        'Ice cream',
        'Pasta',
        'Pizza'
      ],
    hobbies: [
        'Play pc games',
        'Read mistery and horror books',
        'Listen rock music',
    ],
    placesLived: [
      
    ]
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Montevideo, Uruguay',
      length: '24 years'
    },
    {
        place: 'Valparaiso, Chile',
        length: '6 months'
    },
    {
        place: 'La Serena, Chile',
        length: '6 months'
    },
  );
/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
  });
/* Places Lived DataList */
const placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
  const dt = document.createElement('dt');
  dt.textContent = place.place;
  const dd = document.createElement('dd');
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});