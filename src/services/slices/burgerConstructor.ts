import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';

interface IBurgerConstructor {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
}

const initialState: IBurgerConstructor = {
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
        const id = nanoid();
        return { payload: { ...ingredient, id } };
      }
    },
    removeFromConstructor: (state, action) => {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    }
  },
  selectors: {
    selectConstructorItems: (state) => state
  }
});

const burgerConstructorReducer = burgerConstructorSlice.reducer;
const { selectConstructorItems } = burgerConstructorSlice.selectors;
const { addToConstructor, removeFromConstructor } =
  burgerConstructorSlice.actions;

export {
  burgerConstructorSlice,
  burgerConstructorReducer,
  selectConstructorItems,
  addToConstructor,
  removeFromConstructor
};
