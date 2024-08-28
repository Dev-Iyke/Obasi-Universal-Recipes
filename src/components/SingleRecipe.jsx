import { removeFromFavorites } from "../features/favorites/favoritesSlice";
import { removeRecipes } from "../features/recipes/recipeSlice";
import { useDispatch } from "react-redux";

const SingleRecipe = ({ label, calories, image, id, context }) => {
  //const recipeData = {label, calories, image, id, context}
  const dispatch = useDispatch();

  const handleDeletion = () => {
    if (context === "recipes") {
      dispatch(removeRecipes(id)); // Removes from the main recipe state
    } else if (context === "favorites") {
      // Implement a reducer or action to remove from favorites
      dispatch(removeFromFavorites(id)); // Example function
    }
  };

  return (
    <div className="recipe">
      <h1>{label}</h1>
      <p>{calories}</p>
      <p>{id}</p>
      <img width={200} src={image} alt={label} />
      <button onClick={handleDeletion}>Delete recipe</button>
    </div>
  );
};

export default SingleRecipe;
