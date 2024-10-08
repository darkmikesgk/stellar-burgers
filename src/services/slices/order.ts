import { getOrderByNumberApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

const fetchOrderByNumber = createAsyncThunk(
  'order/getOrderByNumber',
  async (orderNumber: number, { dispatch }) => {
    const order = await getOrderByNumberApi(orderNumber);
    dispatch(resetOrder());
    return order;
  }
);

const createOrder = createAsyncThunk(
  'order/createNewBurger',
  async (ingredients: string[], { dispatch }) => {
    const response = await orderBurgerApi(ingredients);
    dispatch(resetOrder());
    return response;
  }
);

interface IOrderState {
  orderData: TOrder | null;
  isLoading: boolean;
}

const initialState: IOrderState = {
  orderData: null,
  isLoading: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.orderData = null;
    }
  },
  selectors: {
    getOrderData: (state) => state.orderData,
    getLoadingStatus: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderByNumber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrderByNumber.fulfilled, (state, action) => {
        state.orderData = action.payload.orders[0];
        state.isLoading = false;
      })
      .addCase(fetchOrderByNumber.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderData = action.payload.order;
        state.isLoading = false;
      })
      .addCase(createOrder.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

const orderReducer = orderSlice.reducer;
const { getOrderData, getLoadingStatus } = orderSlice.selectors;
const { resetOrder } = orderSlice.actions;

export {
  initialState,
  fetchOrderByNumber,
  createOrder,
  orderSlice,
  orderReducer,
  getOrderData,
  getLoadingStatus,
  resetOrder
};
