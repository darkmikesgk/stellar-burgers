import tokensJson from '../fixtures/tokens.json';
import { setCookie, deleteCookie } from '../../src/utils/cookie';

//const testUrl = 'http://localhost:4000';

const SELECTORS = {
  modal: '[data-cy=modal]',
  closeButton: '[data-cy=close-button]',
  addButton: (dataCy: string) => `[data-cy=${dataCy}] button`,
  submitOrder: '[data-cy=submit-order]',
  constructorItem: '[data-cy=constructor-item]',
  bun: '[data-cy=bun]',
  constructorElement: '[data-cy=constructor-element]'
};

beforeEach(() => {
  //cy.visit(testUrl);
  cy.visit('/');
  cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
});

describe('[Конструктор бургера]', () => {
  const addItemToConstructor = (
    dataCy: string,
    expectedText: string,
    selector: string
  ) => {
    cy.get(SELECTORS.addButton(dataCy)).as('addButton');
    cy.get('@addButton').contains('Добавить').click();
    cy.get(selector)
      .should('have.length', 1)
      .last()
      .should('contain.text', expectedText);
  };

  it('Добавление булочки в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa093d',
      'Флюоресцентная булка R2-D3',
      SELECTORS.bun
    );
  });

  it('Добавление ингредиента в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa0947',
      'Плоды Фалленианского дерева',
      SELECTORS.constructorElement
    );
  });

  it('Добавление соуса в конструктор.', () => {
    addItemToConstructor(
      '643d69a5c3f7b9001cfa0945',
      'Соус с шипами Антарианского плоскоходца',
      SELECTORS.constructorElement
    );
  });
});

describe('[Модальные окна]', () => {
  beforeEach(() => {
    cy.get('[data-cy=643d69a5c3f7b9001cfa0949]').as('modalTrigger').click();
    cy.get(SELECTORS.modal, { timeout: 1000 }).as('modal');
  });

  it('Открытие модального окна', () => {
    cy.get('@modal')
      .should('exist')
      .and('contain.text', 'Мини-салат Экзо-Плантаго');
  });

  it('Закрытие модального окна при клике на крестик.', () => {
    cy.get('@modal')
      .should('exist')
      .find(SELECTORS.closeButton)
      .as('closeButton')
      .click();
    cy.get('@modal').should('not.exist');
  });

  it('Закрытие модального окна при клике на оверлей.', () => {
    cy.get('@modal').should('exist');
    cy.get('body').click(0, 0);
    cy.get('@modal').should('not.exist');
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
    const addItem = (dataCy: string) => {
      cy.get(SELECTORS.addButton(dataCy)).as('addButton');
      cy.get('@addButton').contains('Добавить').click();
    };

    addItem('643d69a5c3f7b9001cfa093c');
    addItem('643d69a5c3f7b9001cfa0941');
    addItem('643d69a5c3f7b9001cfa0947');
    addItem('643d69a5c3f7b9001cfa0945');

    cy.get(SELECTORS.submitOrder).contains('Оформить заказ').click();

    cy.get(SELECTORS.modal)
      .as('modal')
      .should('exist')
      .and('contain.text', 'Ваш заказ начали готовить')
      .find('[data-cy=order-id]')
      .should('have.text', '51420');

    cy.get('@modal').find(SELECTORS.closeButton).click();
    cy.get('@modal').should('not.exist');
    cy.get(SELECTORS.constructorItem).should('have.length', 0);
  });

  after(() => {
    localStorage.clear();
    deleteCookie('accessToken');
  });
});
