const API_KEY = '1';

async function searchMeals() {
    const searchInput = document.getElementById('searchInput').value;
    const mealsContainer = document.getElementById('mealsContainer');
    
    // Clear previous search results
    mealsContainer.innerHTML = '';
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${searchInput}`);
        const data = await response.json();
        
        if (!data.meals) {
            mealsContainer.innerHTML = '<p>No meals found. Please try again.</p>';
            return;
        }
        
        data.meals.forEach(meal => {
            const mealHTML = `
                <div class="meal">
                    <h2>${meal.strMeal}</h2>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <p>Category: ${meal.strCategory}</p>
                    <p>Area: ${meal.strArea}</p>
                    <p>Instructions: ${meal.strInstructions}</p>
                </div>
            `;
            mealsContainer.innerHTML += mealHTML;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        mealsContainer.innerHTML = '<p>An error occurred. Please try again later.</p>';
    }
}
