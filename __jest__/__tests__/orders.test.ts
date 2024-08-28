import {
  getOrders,
  getOrderRequest,
  orderReducer,
  initialState,
  orderRequest,
  fetchOrders
} from '../../src/services/slices/orders';
import { testOrderList } from '../test-values';

describe('[orders reducer]', () => {
  test('должен обработать экшен orderRequest', () => {
    const action = { type: orderRequest.type, payload: true };
    const state = orderReducer(initialState, action);
    expect(state.request).toBe(true);
  });

  test('должен обработать экшен fetchOrders.fulfilled', () => {
    const action = { type: fetchOrders.fulfilled.type, payload: testOrderList };
    const state = orderReducer(initialState, action);
    expect(state.orders).toEqual(testOrderList);
    expect(state.request).toBe(false);
  });

  test('должен обработать экшен fetchOrders.rejected', () => {
    const action = {
      type: fetchOrders.rejected.type,
      error: { message: 'Error message' }
    };
    const state = orderReducer(initialState, action);
    expect(state.error).toBe('Error message');
    expect(state.request).toBe(false);
  });

  test('должен вернуть список заказов', () => {
    const state = { orders: { orders: testOrderList, request: false } };
    const orders = getOrders(state);
    expect(orders).toEqual(testOrderList);
  });

  test('должен вернуть статус запроса', () => {
    const state = { orders: { orders: [], request: true } };
    const requestStatus = getOrderRequest(state);
    expect(requestStatus).toBe(true);
  });
});
