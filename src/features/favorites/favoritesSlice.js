import { createSlice } from "@reduxjs/toolkit";

const storeLength = retrieveFromStore().length

//Conditionally setting the initial states of the favorites store to what is returned from the local store
const initialState = {
  favorites: retrieveFromStore(),
  count: storeLength
};
//Retrieve data from the store
function retrieveFromStore (){
  try{
    const storedFavorites = localStorage.getItem("locallyStoredFavorites");
    return storedFavorites ? JSON.parse(storedFavorites) : []
  }catch(err){
    console.warn("Could not retrieve favorites from store", err);
    return [];
  }
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) =>{
      const recipeToAdd = action.payload
      const recipeExists = state.favorites.some((fav) => fav.id === recipeToAdd.id)
      if (!recipeExists){
        state.favorites = [...state.favorites, recipeToAdd]
        //Sending new favorites to the local storage
        localStorage.setItem("locallyStoredFavorites", JSON.stringify(state.favorites))
        state.count += 1;
      }
    },
    removeFromFavorites: (state, action) =>{
      state.favorites = state.favorites.filter((recipe) => recipe.id !== action.payload)
      state.count -= 1;
      //removing deleted favorites from the local storage
      localStorage.setItem("locallyStoredFavorites", JSON.stringify(state.favorites))
    }

  },
});

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer