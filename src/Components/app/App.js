import React, {useState, useEffect} from 'react';
import './App.css';
import '../recipe/Recipe';
import Recipe from '../recipe/Recipe';

  const App = () => {
    const APP_ID = '9c6b6425';
    const APP_KEY = 'b4b18197434acdc06948d4864a727a17';

    // Create state//
    const [recipes, setRecipes] = useState([]);
    const [searchState, setSearchState] = useState('');
    const [query, setQuery] = useState('chicken');

    
    useEffect(() => {
      getRecips();
    },[query]);

    const getRecips = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);

    }
    const updateSearch = (e) => {
      setSearchState(e.target.value);
    }

    const updateQuery = (e) => {
      e.preventDefault();
      setQuery(searchState);
      setSearchState('');
    }

    return (
      <div className="App">
      <form onSubmit={updateQuery}
            className="search-form"
      >
        <input className="search-bar"
              type="text"
              value={searchState}
              onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes-container">
        {recipes.map(recipe => (
              <Recipe
              //Past props in Recipe.js
                title={recipe.recipe.label}
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                key={recipe.recipe.label} 
              />
        
        ))}
      </div>
      </div>
    );
  }

export default App;
