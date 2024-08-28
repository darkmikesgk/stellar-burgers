import {
  burgerConstructorReducer,
  addToConstructor,
  removeFromConstructor,
  changeOfPosition,
  clearConstructor
} from '../../src/services/slices/burgerConstructor';
import {
  testReadyBurger,
  testNewBun,
  testNewIngredient,
  testChangeOfPositionIngredients
} from '../test-values';

describe('[burgerConstructor reducer]', () => {
  const initialState = {
    bun: null,
    ingredients: []
  };

  test('Добавление булочки в конструктор', () => {
    const action = addToConstructor(testNewBun);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.bun).toEqual({ ...testNewBun, id: expect.any(String) });
    expect(state.ingredients).toHaveLength(0);
  });

  test('Добавление ингредиента в конструктор', () => {
    const action = addToConstructor(testNewIngredient);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.ingredients).toHaveLength(1);
    expect(state.ingredients[0]).toEqual({
      ...testNewIngredient,
      id: expect.any(String)
    });
  });

  test('Удаление ингредиента из конструктора', () => {
    const initialStateWithIngredients = {
      bun: null,
      ingredients: [testReadyBurger.ingredients[0]]
    };

    const action = removeFromConstructor(testReadyBurger.ingredients[0].id);
    const state = burgerConstructorReducer(initialStateWithIngredients, action);

    expect(state.ingredients).toHaveLength(0);
  });

  test('Изменение порядка ингредиентов в конструкторе', () => {
    const initialStateWithIngredients = {
      bun: null,
      ingredients: testChangeOfPositionIngredients.ingredients
    };
    const action = changeOfPosition({ i: 0, j: 1 });
    const state = burgerConstructorReducer(initialStateWithIngredients, action);
    expect(state.ingredients).toEqual([
      testChangeOfPositionIngredients.ingredients[1],
      testChangeOfPositionIngredients.ingredients[0]
    ]);
  });

  test('Очистка конструктора', () => {
    const initialStateWithIngredients = {
      bun: testNewBun,
      ingredients: testReadyBurger.ingredients
    };

    const action = clearConstructor();
    const state = burgerConstructorReducer(initialStateWithIngredients, action);

    expect(state).toEqual(initialState);
  });
});
