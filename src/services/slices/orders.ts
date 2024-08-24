import { getOrdersApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

const fetchOrders = createAsyncThunk('order/fetchOrders', async () =>
  getOrdersApi()
);

interface IOrderState {
  orders: TOrder[];
  request: boolean;
}

const initialState: IOrderState = {
  orders: [],
  request: false
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
    });
  }
});

const orderReducer = ordersSlice.reducer;
const { getOrders, getOrderRequest } = ordersSlice.selectors;
const { orderRequest } = ordersSlice.actions;

export {
  fetchOrders,
  ordersSlice,
  orderReducer,
  getOrders,
  getOrderRequest,
  orderRequest
};
