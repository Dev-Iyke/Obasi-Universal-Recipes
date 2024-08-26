import { useState } from "react";
import { fetchRecipes } from "../features/recipes/recipeSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch()


  const handleSearch = (ingredients) => {
    const search = ingredients.split(',').map((s) => s.trim())
    console.log(search);
    dispatch(fetchRecipes(search))
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch(ingredients)
      }}>
        <input
          type="text"
          placeholder="what ingredients do you have?"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
