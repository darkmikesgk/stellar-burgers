import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

interface IBurgerConstructorState {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
}

const initialState: IBurgerConstructorState = {
  bun: null,
  ingredients: []
};

const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addToConstructor: {
      reducer: (state, { payload }: PayloadAction<TConstructorIngredient>) => {
        if (payload.type === 'bun') {
          state.bun = payload;
        } else {
          state.ingredients.push(payload);
        }
      },
      prepare: (ingredient: TIngredient) => {
        const id = uuidv4();
        return { payload: { ...ingredient, id } };
      }
    },
    removeFromConstructor: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    changeOfPosition: (state, action) => {
      const { i, j } = action.payload;
      const temp = state.ingredients[i];
      state.ingredients[i] = state.ingredients[j];
      state.ingredients.splice(j, 1, temp);
    },
    clearConstructor: () => initialState
  },
  selectors: {
    selectConstructorItems: (state) => state
  }
});

const burgerConstructorReducer = burgerConstructorSlice.reducer;
const { selectConstructorItems } = burgerConstructorSlice.selectors;
const {
  addToConstructor,
  removeFromConstructor,
  changeOfPosition,
  clearConstructor
} = burgerConstructorSlice.actions;

export {
  burgerConstructorSlice,
  burgerConstructorReducer,
  selectConstructorItems,
  addToConstructor,
  removeFromConstructor,
  changeOfPosition,
  clearConstructor
};
