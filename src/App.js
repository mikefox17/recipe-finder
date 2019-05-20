import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "ed58ea66";
  const APP_KEY = "01493d76fa793d9524adb47b715920d0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title is-1">Recipe Finder</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            id="searchbar"
            className="search-bar"
            className="input is-rounded"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="button is-primary is-rounded">Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            ingredientLines={recipe.recipe.ingredientLines}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
