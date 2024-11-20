const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    ingredients: "Chicken, yogurt, spices, tomatoes, cream",
  },
  {
    id: 3,
    name: "Beef Tacos",
    ingredients: "Ground beef, taco shells, lettuce, cheese, salsa",
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    ingredients: "Mixed vegetables, soy sauce, garlic, ginger, rice",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    ingredients: "Flour, cocoa powder, sugar, eggs, butter",
  },
];

let favorites = [];
let shoppingList = [];

document
  .getElementById("search-button")
  .addEventListener("click", searchRecipes);

function searchRecipes() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query)
  );
  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  results.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div>
                <h3>${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients}</p>
            </div>
            <div>
                <span class="favorite" onclick="toggleFavorite(${recipe.id})">
                    ${
                      favorites.includes(recipe.id)
                        ? "Remove from Favorites"
                        : "Add to Favorites"
                    }
                </span>
                <span class="add-to-shopping" onclick="addToShopping('${
                  recipe.ingredients
                }')">Add to Shopping List</span>
            </div>
        `;
    resultsContainer.appendChild(card);
  });
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }
  displayResults(
    recipes.filter((recipe) =>
      recipe.name
        .toLowerCase()
        .includes(document.getElementById("search").value.toLowerCase())
    )
  );
  displayFavorites();
}

function displayFavorites() {
  const favoritesContainer = document.getElementById("favorites");
  favoritesContainer.innerHTML = "";
  favorites.forEach((favId) => {
    const recipe = recipes.find((r) => r.id === favId);
    const favItem = document.createElement("div");
    favItem.textContent = recipe.name;
    favoritesContainer.appendChild(favItem);
  });
}

function addToShopping(ingredients) {
  const items = ingredients.split(", ").map((item) => item.trim());
  shoppingList.push(...items);
  displayShoppingList();
}

function displayShoppingList() {
  const shoppingListContainer = document.getElementById("shopping-list");
  shoppingListContainer.innerHTML = "";
  const uniqueItems = [...new Set(shoppingList)];
  uniqueItems.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.textContent = item;
    shoppingListContainer.appendChild(listItem);
  });
}
