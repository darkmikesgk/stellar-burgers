import {
  burgerConstructorReducer,
  addToConstructor,
  removeFromConstructor,
  changeOfPosition,
  clearConstructor,
  initialState
} from '../../src/services/slices/burgerConstructor';
import {
  testReadyBurger,
  testNewBun,
  testNewIngredient,
  testChangeOfPositionIngredients
} from '../test-values';

jest.mock('uuid', () => ({ v4: () => '0000-0000-0000-0000' }));

describe('[burgerConstructor reducer]', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Добавление булочки в конструктор', () => {
    const action = addToConstructor(testNewBun);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.bun).toEqual({ ...testNewBun, id: '0000-0000-0000-0000' });
    expect(state.ingredients).toHaveLength(0);
  });

  test('Замена булочки в конструкторе', () => {
    const initialStateWithBun = {
      ...initialState,
      bun: { ...testNewBun, id: '0000-0000-0000-0000' }
    };
    const action = addToConstructor(testNewBun);
    const state = burgerConstructorReducer(initialStateWithBun, action);

    expect(state.bun).toEqual({ ...testNewBun, id: '0000-0000-0000-0000' });
    expect(state.ingredients).toHaveLength(0);
  });

  test('Добавление ингредиента в конструктор', () => {
    const action = addToConstructor(testNewIngredient);
    const state = burgerConstructorReducer(initialState, action);

    expect(state.ingredients).toHaveLength(1);
    expect(state.ingredients[0]).toEqual({
      ...testNewIngredient,
      id: '0000-0000-0000-0000'
    });
  });

  test('Добавление нескольких ингредиентов в конструктор', () => {
    const action1 = addToConstructor(testNewIngredient);
    const action2 = addToConstructor(testNewIngredient);
    let state = burgerConstructorReducer(initialState, action1);
    state = burgerConstructorReducer(state, action2);

    expect(state.ingredients).toHaveLength(2);
    expect(state.ingredients[0]).toEqual({
      ...testNewIngredient,
      id: '0000-0000-0000-0000'
    });
    expect(state.ingredients[1]).toEqual({
      ...testNewIngredient,
      id: '0000-0000-0000-0000'
    });
  });

  test('Удаление ингредиента из конструктора', () => {
    const initialStateWithIngredients = {
      ...initialState,
      ingredients: [{ ...testNewIngredient, id: '0000-0000-0000-0000' }]
    };

    const action = removeFromConstructor('0000-0000-0000-0000');
    const state = burgerConstructorReducer(initialStateWithIngredients, action);

    expect(state.ingredients).toHaveLength(0);
  });

  test('Изменение порядка ингредиентов в конструкторе', () => {
    const initialStateWithIngredients = {
      ...initialState,
      ingredients: testChangeOfPositionIngredients.ingredients.map(
        (ingredient, index) => ({
          ...ingredient,
          id: `0000-0000-0000-000${index}`
        })
      )
    };
    const action = changeOfPosition({ i: 0, j: 1 });
    const state = burgerConstructorReducer(initialStateWithIngredients, action);
    expect(state.ingredients).toEqual([
      {
        ...testChangeOfPositionIngredients.ingredients[1],
        id: '0000-0000-0000-0001'
      },
      {
        ...testChangeOfPositionIngredients.ingredients[0],
        id: '0000-0000-0000-0000'
      }
    ]);
  });

  test('Очистка конструктора', () => {
    const initialStateWithIngredients = {
      bun: { ...testNewBun, id: '0000-0000-0000-0000' },
      ingredients: testReadyBurger.ingredients.map((ingredient, index) => ({
        ...ingredient,
        id: `0000-0000-0000-000${index}`
      }))
    };

    const action = clearConstructor();
    const state = burgerConstructorReducer(initialStateWithIngredients, action);

    expect(state).toEqual(initialState);
  });
});
