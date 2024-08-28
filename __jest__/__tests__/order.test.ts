import {
  createOrder,
  fetchOrderByNumber,
  orderReducer,
  initialState,
  resetOrder,
  getOrderData,
  getLoadingStatus
} from '../../src/services/slices/order';
import { testOrder, testNewOrder } from '../test-values';

describe('[order reducer]', () => {
  test('должен обрабатывать начальное состояние', () => {
    expect(orderReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('должен обрабатывать fetchOrderByNumber.pending', () => {
    const action = { type: fetchOrderByNumber.pending.type };
    const state = orderReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  test('должен обрабатывать fetchOrderByNumber.fulfilled', () => {
    const action = {
      type: fetchOrderByNumber.fulfilled.type,
      payload: { orders: [testOrder.data] }
    };
    const state = orderReducer(initialState, action);
    expect(state.orderData).toEqual(testOrder.data);
    expect(state.isLoading).toBe(false);
  });

  test('должен обрабатывать fetchOrderByNumber.rejected', () => {
    const action = { type: fetchOrderByNumber.rejected.type };
    const state = orderReducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });

  test('должен обрабатывать createOrder.pending', () => {
    const action = { type: createOrder.pending.type };
    const state = orderReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  test('должен обрабатывать createOrder.fulfilled', () => {
    const action = {
      type: createOrder.fulfilled.type,
      payload: { order: testNewOrder.order }
    };
    const state = orderReducer(initialState, action);
    expect(state.orderData).toEqual(testNewOrder.order);
    expect(state.isLoading).toBe(false);
  });

  test('должен обрабатывать createOrder.rejected', () => {
    const action = { type: createOrder.rejected.type };
    const state = orderReducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });

  test('должен обрабатывать resetOrder', () => {
    const action = { type: resetOrder.type };
    const state = orderReducer(
      { ...initialState, orderData: testOrder.data },
      action
    );
    expect(state.orderData).toBeNull();
  });

  test('должен возвращать orderData с помощью getOrderData', () => {
    const state = { order: { ...initialState, orderData: testOrder.data } };
    expect(getOrderData(state)).toEqual(testOrder.data);
  });

  test('должен возвращать isLoading с помощью getLoadingStatus', () => {
    const state = { order: { ...initialState, isLoading: true } };
    expect(getLoadingStatus(state)).toBe(true);
  });
});
