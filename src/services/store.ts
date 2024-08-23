import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { burgerConstructorSlice } from './slices/burgerConstructor';
import { ingredientSlice } from './slices/ingredients';

//Заменил на combineReducers, который скомбинирует в себе слайсы и будет выступать корневым редьюсером
const rootReducer = combineReducers({
  [burgerConstructorSlice.name]: burgerConstructorSlice.reducer,
  [ingredientSlice.name]: ingredientSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
