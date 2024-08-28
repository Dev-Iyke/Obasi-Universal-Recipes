import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipes/recipeSlice";
import favoritesSlice from "../features/favorites/favoritesSlice";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesSlice,
  },
});

export default store;
