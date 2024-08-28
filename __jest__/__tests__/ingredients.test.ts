import {
  initialState,
  ingredientReducer,
  fetchIngredients,
  selectIngredients,
  selectIsLoading
} from '../../src/services/slices/ingredients';
import { testIngredients } from '../test-values';

describe('ingredientSlice', () => {
  test('должен обрабатывать начальное состояние', () => {
    const newState = ingredientReducer(undefined, { type: '@@INIT' });
    expect(newState).toEqual(initialState);
  });

  test('должен обрабатывать fetchIngredients.pending', () => {
    const newState = ingredientReducer(initialState, {
      type: fetchIngredients.pending.type
    });
    expect(newState.isLoading).toBe(true);
  });

  test('должен обрабатывать fetchIngredients.fulfilled', () => {
    const newState = ingredientReducer(initialState, {
      type: fetchIngredients.fulfilled.type,
      payload: testIngredients
    });
    expect(newState.isLoading).toBe(false);
    expect(newState.ingredients).toEqual(testIngredients);
  });

  test('должен обрабатывать fetchIngredients.rejected', () => {
    const newState = ingredientReducer(initialState, {
      type: fetchIngredients.rejected.type
    });
    expect(newState.isLoading).toBe(false);
  });

  test('должен выбирать ингредиенты', () => {
    const state = {
      ingredients: { ...initialState, ingredients: testIngredients }
    };
    const ingredients = selectIngredients(state);
    expect(ingredients).toEqual(testIngredients);
  });

  test('должен выбирать isLoading', () => {
    const state = { ingredients: { ...initialState, isLoading: true } };
    const isLoading = selectIsLoading(state);
    expect(isLoading).toBe(true);
  });
});
