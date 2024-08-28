import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  loading: false,
  error: null
};

//Generating an ID for each recipe
const generateId = (label, url) => {
  return `${label}-${url}`.replace(/[^a-zA-Z0-9]/g, "_")
}

// Fetch recipes based on search ingredients
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (ingredients) => {
  try{
    const fetchUrl = `https://api.edamam.com/search?q=${ingredients}&app_id=e5948554&app_key=ea0581acc2d80c84dbcbd60aec3f8b1f`
    const response = await fetch(fetchUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    console.log(data.hits)
    //Assigning the id to each recipe inside hits
    data.hits.map(recipe => recipe.recipe.id = generateId(recipe.recipe.label, recipe.recipe.url))
    //returning hits as the top level resource but mutated to have ids for the recipes
    return data.hits
    }
    catch (err){
      console.log(err.message)
    }
})

//Slice to handle recipes functionality
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    removeRecipes: (state, action) => {
      state.recipes = state.recipes.filter((hit) => {
        const aRecipe = hit.recipe
        return aRecipe.id !== action.payload;
      })     
    },
  },
  //Extra reducers to handle the fetch responses and update the state of the recipes accordingly
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload       
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = true
      })     
  }
});

export const {removeRecipes} = recipeSlice.actions
export default recipeSlice.reducer













