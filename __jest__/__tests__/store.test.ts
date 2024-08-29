import { burgerConstructorSlice } from '../../src/services/slices/burgerConstructor';
import { ingredientSlice } from '../../src/services/slices/ingredients';
import { orderSlice } from '../../src/services/slices/order';
import { feedSlice } from '../../src/services/slices/feed';
import { userSlice } from '../../src/services/slices/user';
import { ordersSlice } from '../../src/services/slices/orders';
import { rootReducer } from '../../src/services/store';

describe('[rootReducer]', () => {
  test('Проверка корректной инициализации reducers', () => {
    const initialState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    const expectedState = {
      [burgerConstructorSlice.name]: burgerConstructorSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [ingredientSlice.name]: ingredientSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [orderSlice.name]: orderSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [feedSlice.name]: feedSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [userSlice.name]: userSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      }),
      [ordersSlice.name]: ordersSlice.reducer(undefined, {
        type: 'UNKNOWN_ACTION'
      })
    };
    expect(initialState).toEqual(expectedState);
  });
});
