import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //function to fetch data from api
  const searchRecipe = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipe();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    searchRecipe();
  };

  return (
    <div className="container">
      <h2>Our Recipe App</h2>
      <SearchBar handleSubmit={handleSubmit} value={query} onChange={event => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      <div className='recipes'>
        {recipes ? recipes.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        )) : "No Recipe Found"}

      </div>
        <p>Made By Aryan 💖</p>
    </div>
  )
};

export default App;
