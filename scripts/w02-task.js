/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Roiman Romero" ;

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year")


/* Step 4 - Adding Content */

nameElement.innerHTML ='<strong> Roiman Romero</strong>';
imageElement.setAttribute("src", profilePicture);
yearElement.textContent = new Date().getFullYear()
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

// Set alt property of the image element
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

// Display favorite foods as a list in the HTML
foodElement.innerHTML = "<ul>" + favoriteFoods.map(food => `<li>${food}</li>`).join('') + "</ul>";

// Declare and instantiate a variable to hold another single favorite food item
let additionalFavoriteFood = "Burgers";

// Add the new favorite food to the favorite foods array
favoriteFoods.push(additionalFavoriteFood);

// Append the new favorite food item to the list in the HTML
foodElement.innerHTML += `<li>${additionalFavoriteFood}</li>`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Display the modified favorite foods array in the HTML as a list
foodElement.innerHTML += "<ul>" + favoriteFoods.map(food => `<li>${food}</li>`).join('') + "</ul>";

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Display the final modified favorite foods array in the HTML as a list
foodElement.innerHTML += "<ul>" + favoriteFoods.map(food => `<li>${food}</li>`).join('') + "</ul>";



