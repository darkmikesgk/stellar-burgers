import { getOrdersApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

const fetchOrders = createAsyncThunk('order/fetchOrders', getOrdersApi);

interface IOrderState {
  orders: TOrder[];
  request: boolean;
  error?: string;
}

const initialState: IOrderState = {
  orders: [],
  request: false,
  error: ''
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    orderRequest: (state, action) => {
      state.request = action.payload;
    }
  },
  selectors: {
    getOrders: (state) => state.orders,
    getOrderRequest: (state) => state.request
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.request = false;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.error = action.error.message;
      state.request = false;
    });
  }
});

const orderReducer = ordersSlice.reducer;
const { getOrders, getOrderRequest } = ordersSlice.selectors;
const { orderRequest } = ordersSlice.actions;

export {
  initialState,
  fetchOrders,
  ordersSlice,
  orderReducer,
  getOrders,
  getOrderRequest,
  orderRequest
};
