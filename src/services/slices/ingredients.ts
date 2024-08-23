import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { getIngredientsApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchIngredients = createAsyncThunk('ingredients/fetch', async () =>
  getIngredientsApi()
);

interface IngredientState {
  isLoading: boolean;
  ingredients: TIngredient[];
}

const initialState: IngredientState = {
  isLoading: false,
  ingredients: []
};

const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    selectIngredients: (state) => state.ingredients,
    selectIsLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

const ingredientReducer = ingredientSlice.reducer;
const { selectIngredients, selectIsLoading } = ingredientSlice.selectors;

export {
  ingredientSlice,
  ingredientReducer,
  selectIngredients,
  selectIsLoading,
  fetchIngredients
};
