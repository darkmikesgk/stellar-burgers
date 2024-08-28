import tokensJson from '../fixtures/tokens.json';
import { setCookie, deleteCookie, getCookie } from '../../src/utils/cookie';

beforeEach(() => {
  cy.visit('http://localhost:4000/');
  cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
});

describe('[Конструктор бургера]', () => {
  const addItemToConstructor = (
    dataCy: string,
    expectedText: string,
    selector: string
  ) => {
    cy.get(`[data-cy=${dataCy}] button`).contains('Добавить').click();
    cy.get(selector)
      .should('have.length', 1)
      .last()
      .should('contain.text', expectedText);
  };

  it('Добавление булочки в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa093d',
      'Флюоресцентная булка R2-D3',
      '[data-cy=bun]'
    );
  });

  it('Добавление ингредиента в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa0947',
      'Плоды Фалленианского дерева',
      '[data-cy=constructor-element]'
    );
  });

  it('Добавление соуса в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa0945',
      'Соус с шипами Антарианского плоскоходца',
      '[data-cy=constructor-element]'
    );
  });
});

describe('[Модальные окна]', () => {
  beforeEach(() => {
    cy.get('[data-cy=643d69a5c3f7b9001cfa0949]').click();
  });

  it('Открытие модального окна', () => {
    cy.get('[data-cy=modal]')
      .should('exist')
      .and('contain.text', 'Мини-салат Экзо-Плантаго');
  });

  it('Закрытие модального окна при клике на крестик.', () => {
    cy.get('[data-cy=modal]')
      .should('exist')
      .find('[data-cy=close-button]')
      .click();
    cy.get('[data-cy=modal]').should('not.exist');
  });

  it('Закрытие модального окна при клике на оверлей.', () => {
    cy.get('[data-cy=modal]').should('exist');
    cy.get('body').click(0, 0);
    cy.get('[data-cy=modal]').should('not.exist');
  });
});

describe('[Создание заказа]', () => {
  before(() => {
    localStorage.setItem('refreshToken', tokensJson.refreshToken);
    setCookie('accessToken', tokensJson.accessToken);
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' });
  });

  it('Проверка оформления заказа с последующим открытием модального окна', () => {
    cy.get(`[data-cy=643d69a5c3f7b9001cfa093c] button`)
      .contains('Добавить')
      .click();
    cy.get(`[data-cy=643d69a5c3f7b9001cfa0941] button`)
      .contains('Добавить')
      .click();
    cy.get(`[data-cy=643d69a5c3f7b9001cfa0947] button`)
      .contains('Добавить')
      .click();
    cy.get(`[data-cy=643d69a5c3f7b9001cfa0945] button`)
      .contains('Добавить')
      .click();

    cy.get('[data-cy=submit-order]').contains('Оформить заказ').click();

    cy.get('[data-cy=modal]')
      .should('exist')
      .and('contain.text', 'Ваш заказ начали готовить')
      .find('[data-cy=order-id]')
      .should('have.text', '51420');

    cy.get('[data-cy=modal]').find('[data-cy=close-button]').click();
    cy.get('[data-cy=modal]').should('not.exist');
    cy.get('[data-cy=constructor-item]').should('have.length', 0);
  });

  after(() => {
    localStorage.clear();
    deleteCookie('accessToken');
  });
});
