import { useDispatch, useSelector } from "react-redux";
import SingleRecipe from "../components/SingleRecipe";
import Search from "../components/Search";
import { addToFavorites } from "../features/favorites/favoritesSlice";

const Recipes = () => {
  const { recipes, loading, error } = useSelector((state) => state.recipes);
  console.log("retrieved recipes:", recipes);
  console.log(error);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  } else if (!loading && recipes === undefined) {
    return (
      <div>Unable to fetch recipes. Please check your network connection</div>
    );
  }

  return (
    <div>
      <h1>Recipes</h1>
      <div>
        <Search />
      </div>
      <div className="recipes">
        {recipes.length === 0 ? (
          <div>no recipe</div>
        ) : (
          <div>
            <div>
              {recipes.map((hit, index) => {
                const aRecipe = hit.recipe;
                return (
                  <div>
                    <SingleRecipe
                      key={index}
                      label={aRecipe.label}
                      calories={aRecipe.calories}
                      image={aRecipe.image}
                      id={aRecipe.id}
                      context="recipes"
                    />
                    <button onClick={() => dispatch(addToFavorites(aRecipe))}>
                      Add to fav
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
