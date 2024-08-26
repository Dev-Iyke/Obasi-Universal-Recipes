import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  loading: false,
  error: null
};

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (ingredients) => {
  try{
    const fetchUrl = `https://api.edamam.com/search?q=${ingredients}&app_id=e5948554&app_key=ea0581acc2d80c84dbcbd60aec3f8b1f`
    const response = await fetch(fetchUrl)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    console.log(data.hits)
    return data.hits
    }
    catch (err){
      console.log(err.message)
    }
})

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    filterRecipes: (state, action) => {
      state.recipes = state.filter((recipe) => recipe.diets === action.payload);
    },
  },
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
        state.error = action.error.message
      })
      
  }
});


export default recipeSlice.reducer













