import SingleRecipe from "../components/SingleRecipe";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites, count } = useSelector((state) => state.favorites);

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <div>no favorites</div>
      ) : (
        <div>
          <div>
            <h2>My favorites: {count}</h2>
            {favorites.map((aFav, index) => {
              //const aFav = hit.recipe;
              return (
                <SingleRecipe
                  key={index}
                  label={aFav.label}
                  calories={aFav.calories}
                  image={aFav.image}
                  id={aFav.id}
                  context="favorites"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
