import {
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  resetPasswordApi,
  TLoginData,
  TRegisterData,
  updateUserApi
} from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { TUser } from '@utils-types';

const getUser = createAsyncThunk('user/get', getUserApi);

const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async (_, { dispatch }) => {
    const token = getCookie('accessToken');
    if (token) {
      await dispatch(getUser());
    }
    dispatch(authChecked());
  }
);

const loginUser = createAsyncThunk(
  'user/login',
  async (loginData: TLoginData, { rejectWithValue }) => {
    const data = await loginUserApi(loginData);
    setCookie('accessToken', data.accessToken);
    if (!data.success) {
      return rejectWithValue(data);
    }
    setCookie('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data.user;
  }
);

const logoutUser = createAsyncThunk('user/logout', logoutApi);

const registerUser = createAsyncThunk(
  'user/register',
  async (data: TRegisterData, { rejectWithValue }) => {
    const registrationData = await registerUserApi(data);
    if (!registrationData.success) {
      rejectWithValue(registrationData);
    }
    setCookie('accessToken', registrationData.accessToken);
    localStorage.setItem('refreshToken', registrationData.refreshToken);
    return registrationData.user;
  }
);

const updateUser = createAsyncThunk(
  'user/update',
  async (newData: Partial<TRegisterData>) => updateUserApi(newData)
);

const resetPass = createAsyncThunk(
  'user/resetPassword',
  async (data: { password: string; token: string }) => resetPasswordApi(data)
);

interface IUserState {
  data: TUser | null;
  isAuth: boolean;
  request: boolean;
  loginError: string;
  registrationError: string;
  updateUserError: string;
}

const initialState: IUserState = {
  data: null,
  isAuth: false,
  request: false,
  loginError: '',
  registrationError: '',
  updateUserError: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authChecked: (state) => {
      state.isAuth = true;
    }
  },
  selectors: {
    getUserData: (state) => state.data,
    getIsAuth: (state) => state.isAuth,
    getRequest: (state) => state.request,
    getLoginError: (state) => state.loginError,
    getRegistationError: (state) => state.registrationError,
    getUserUpdateError: (state) => state.updateUserError
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.request = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isAuth = true;
        state.request = false;
        state.loginError = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuth = true;
        state.loginError = action.error.message || '';
        state.request = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.request = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.request = false;
        localStorage.clear();
        deleteCookie('accessToken');
        state.data = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.request = false;
        console.log('Ошибка при авторизации');
      })
      .addCase(registerUser.pending, (state) => {
        state.request = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.request = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registrationError = action.error.message || '';
        state.request = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loginError = '';
        state.registrationError = '';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
      })

      .addCase(updateUser.pending, (state) => {
        state.request = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload.user;
        state.request = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserError = action.error.message || '';
        state.request = false;
      });
  }
});

const userReducer = userSlice.reducer;

const {
  getUserData,
  getIsAuth,
  getRequest,
  getLoginError,
  getRegistationError,
  getUserUpdateError
} = userSlice.selectors;

const { authChecked } = userSlice.actions;

export {
  authChecked,
  initialState,
  getUser,
  checkAuth,
  updateUser,
  loginUser,
  logoutUser,
  registerUser,
  resetPass,
  userSlice,
  userReducer,
  getUserData,
  getIsAuth,
  getRequest,
  getLoginError,
  getRegistationError,
  getUserUpdateError
};
