import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

const fetchFeed = createAsyncThunk(
  'order/fetchTotal',
  async (_, { dispatch }) => {
    dispatch(resetFeed());
    const data = await getFeedsApi();
    return data;
  }
);

interface IFeedState {
  orders: TOrder[];
  total: number;
  totalToday: number;
}

export const initialState: IFeedState = {
  orders: [],
  total: 0,
  totalToday: 0
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    resetFeed: () => initialState
  },
  selectors: {
    getFeed: (state) => state,
    getFeedData: (state) => ({
      total: state.total,
      totalToday: state.totalToday
    }),
    getFeedOrders: (state) => state.orders
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
  }
});

const feedReducer = feedSlice.reducer;
const { getFeed, getFeedData, getFeedOrders } = feedSlice.selectors;
const { resetFeed } = feedSlice.actions;

export {
  feedSlice,
  fetchFeed,
  feedReducer,
  getFeed,
  getFeedData,
  getFeedOrders,
  resetFeed
};
