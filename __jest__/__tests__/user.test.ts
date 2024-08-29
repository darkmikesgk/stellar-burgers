import {
  userReducer,
  initialState,
  getUserData,
  getIsAuth,
  getRequest,
  getLoginError,
  getRegistationError,
  getUserUpdateError,
  authChecked,
  loginUser,
  registerUser,
  updateUser
} from '../../src/services/slices/user';
import { testUser, testUserUpdated } from '../test-values';

describe('[userReducer]', () => {
  test('должен установить isAuth в true при вызове authChecked', () => {
    const action = { type: authChecked.type };
    const state = userReducer(initialState, action);
    expect(state.isAuth).toBe(true);
  });

  test('селектор getUserData должен возвращать данные пользователя', () => {
    const state = { user: { ...initialState, data: testUser } };
    expect(getUserData(state)).toEqual(testUser);
  });

  test('селектор getIsAuth должен возвращать статус авторизации', () => {
    const state = { user: { ...initialState, isAuth: true } };
    expect(getIsAuth(state)).toBe(true);
  });

  test('селектор getRequest должен возвращать статус запроса', () => {
    const state = { user: { ...initialState, request: true } };
    expect(getRequest(state)).toBe(true);
  });

  test('селектор getLoginError должен возвращать ошибку входа', () => {
    const state = { user: { ...initialState, loginError: 'Ошибка' } };
    expect(getLoginError(state)).toBe('Ошибка');
  });

  test('селектор getRegistationError должен возвращать ошибку регистрации', () => {
    const state = { user: { ...initialState, registrationError: 'Ошибка' } };
    expect(getRegistationError(state)).toBe('Ошибка');
  });

  test('селектор getUserUpdateError должен возвращать ошибку обновления пользователя', () => {
    const state = { user: { ...initialState, updateUserError: 'Ошибка' } };
    expect(getUserUpdateError(state)).toBe('Ошибка');
  });

  test('должен установить request в true при вызове loginUser.pending', () => {
    const action = { type: loginUser.pending.type };
    const state = userReducer(initialState, action);
    expect(state.request).toBe(true);
  });

  test('должен установить данные пользователя и request в false при вызове loginUser.fulfilled', () => {
    const action = { type: loginUser.fulfilled.type, payload: testUser };
    const state = userReducer(initialState, action);
    expect(state.data).toEqual(testUser);
    expect(state.request).toBe(false);
  });

  test('должен установить ошибку и request в false при вызове loginUser.rejected', () => {
    const action = {
      type: loginUser.rejected.type,
      error: { message: 'Ошибка' }
    };
    const state = userReducer(initialState, action);
    expect(state.loginError).toBe('Ошибка');
    expect(state.request).toBe(false);
  });

  test('должен установить request в true при вызове registerUser.pending', () => {
    const action = { type: registerUser.pending.type };
    const state = userReducer(initialState, action);
    expect(state.request).toBe(true);
  });

  test('должен установить данные пользователя и request в false при вызове registerUser.fulfilled', () => {
    const action = { type: registerUser.fulfilled.type, payload: testUser };
    const state = userReducer(initialState, action);
    expect(state.data).toEqual(testUser);
    expect(state.request).toBe(false);
  });

  test('должен установить ошибку и request в false при вызове registerUser.rejected', () => {
    const action = {
      type: registerUser.rejected.type,
      error: { message: 'Ошибка' }
    };
    const state = userReducer(initialState, action);
    expect(state.registrationError).toBe('Ошибка');
    expect(state.request).toBe(false);
  });

  test('должен установить request в true при вызове updateUser.pending', () => {
    const action = { type: updateUser.pending.type };
    const state = userReducer(initialState, action);
    expect(state.request).toBe(true);
  });

  test('должен обновить данные пользователя и установить request в false при вызове updateUser.fulfilled', () => {
    const action = {
      type: updateUser.fulfilled.type,
      payload: { user: testUserUpdated }
    };
    const state = userReducer(initialState, action);
    expect(state.data).toEqual(testUserUpdated);
    expect(state.request).toBe(false);
  });

  test('должен установить ошибку и request в false при вызове updateUser.rejected', () => {
    const action = {
      type: updateUser.rejected.type,
      error: { message: 'Ошибка' }
    };
    const state = userReducer(initialState, action);
    expect(state.updateUserError).toBe('Ошибка');
    expect(state.request).toBe(false);
  });
});
