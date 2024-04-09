document.addEventListener("DOMContentLoaded", () => {
    const fetchRecipeBtn = document.getElementById("fetch-recipe-btn");
    const recipeNameElement = document.getElementById("recipe-name");
    const recipeIngredientsElement = document.getElementById("recipe-ingredients");
    const recipeInstructionsElement = document.getElementById("recipe-instructions");

    const apiKey = "05f2a7c1652b4ba28e3a386d6a1ab30c"; // Replace with your Spoonacular API key

    // Fetch a random recipe
    const fetchRecipe = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
            const data = await response.json();
            const recipe = data.recipes[0];
            
            // Display recipe details
            recipeNameElement.textContent = recipe.title;
            recipeIngredientsElement.textContent = `Ingredients: ${recipe.extendedIngredients.map(ingredient => ingredient.original).join(', ')}`;
            recipeInstructionsElement.textContent = `Instructions: ${recipe.instructions}`;
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    };

    fetchRecipeBtn.addEventListener("click", fetchRecipe);
});
