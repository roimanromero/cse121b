/* Profile Object  */
let myProfile = {
    name: "Roiman Romero",
    photo: "images/roiman.jpg",
    favoriteFoods: [
        'Rice',
        'Tikka Masala',
        'Prioshki',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Reading',
        'Writing',
        'Painting',
        'Drawing',
        'Playing',
        'Photography',
        'Cooking',
        'Gardening',
    ],
    placesLived: [
        {
            place: "San Francisco, CA",
            length: '1 year'
        },
        {
            place: "Cali, Colombia",
            length: "6 months"
        },
        {
            place: "Popayan, Colombia",
            length: "8 months"
        }
    ]
};

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List */
const favoriteFoodsList = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived Datalist */
const placesLivedDL = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    
    placesLivedDL.appendChild(dt);
    placesLivedDL.appendChild(dd);
});
