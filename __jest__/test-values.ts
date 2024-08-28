export const testReadyBurger = {
  bun: {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    name: 'Краторная булка N-200i',
    price: 1255,
    proteins: 80,
    type: 'bun',
    __v: 0,
    _id: '643d69a5c3f7b9001cfa093c',
    id: '61f7bd51-a07a-4608-836c-2d6cdcbfe92e'
  },
  ingredients: [
    {
      calories: 3377,
      carbohydrates: 420,
      fat: 48,
      image: 'https://code.s3.yandex.net/react/code/cheese.png',
      image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/cheese-mobile.png',
      name: 'Сыр с астероидной плесенью',
      price: 4142,
      proteins: 84,
      type: 'main',
      __v: 0,
      _id: '643d69a5c3f7b9001cfa094a',
      id: '872cdad1-ded3-4abd-bec8-ba0abaf0fe58'
    },
    {
      calories: 986,
      carbohydrates: 609,
      fat: 689,
      image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
      image_large:
        'https://code.s3.yandex.net/react/code/mineral_rings-large.png',
      image_mobile:
        'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
      name: 'Хрустящие минеральные кольца',
      price: 300,
      proteins: 808,
      type: 'main',
      __v: 0,
      _id: '643d69a5c3f7b9001cfa0946',
      id: '8358920c-8719-47df-9f1f-21cbc59a7a17'
    }
  ]
};

export const testNewBun = {
  calories: 643,
  carbohydrates: 85,
  fat: 26,
  image: 'https://code.s3.yandex.net/react/code/bun-01.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
  name: 'Флюоресцентная булка R2-D3',
  price: 988,
  proteins: 44,
  type: 'bun',
  __v: 0,
  _id: '643d69a5c3f7b9001cfa093d'
};

export const testNewIngredient = {
  calories: 643,
  carbohydrates: 85,
  fat: 26,
  image: 'https://code.s3.yandex.net/react/code/meat-03.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
  name: 'Филе Люминесцентного тетраодонтимформа',
  price: 988,
  proteins: 44,
  type: 'main',
  __v: 0,
  _id: '643d69a5c3f7b9001cfa093e'
};

export const testChangeOfPositionIngredients = {
  bun: {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    name: 'Краторная булка N-200i',
    price: 1255,
    proteins: 80,
    type: 'bun',
    __v: 0,
    _id: '643d69a5c3f7b9001cfa093c',
    id: '61f7bd51-a07a-4608-836c-2d6cdcbfe92e'
  },
  ingredients: [
    {
      calories: 986,
      carbohydrates: 609,
      fat: 689,
      image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
      image_large:
        'https://code.s3.yandex.net/react/code/mineral_rings-large.png',
      image_mobile:
        'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
      name: 'Хрустящие минеральные кольца',
      price: 300,
      proteins: 808,
      type: 'main',
      __v: 0,
      _id: '643d69a5c3f7b9001cfa0946',
      id: '8358920c-8719-47df-9f1f-21cbc59a7a17'
    },
    {
      calories: 3377,
      carbohydrates: 420,
      fat: 48,
      image: 'https://code.s3.yandex.net/react/code/cheese.png',
      image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/cheese-mobile.png',
      name: 'Сыр с астероидной плесенью',
      price: 4142,
      proteins: 84,
      type: 'main',
      __v: 0,
      _id: '643d69a5c3f7b9001cfa094a',
      id: '872cdad1-ded3-4abd-bec8-ba0abaf0fe58'
    }
  ]
};

export const testFeed = {
  orders: [
    {
      _id: '66cef93a119d45001b502897',
      ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
      status: 'done',
      name: 'Флюоресцентный люминесцентный бургер',
      createdAt: '2024-08-28T10:17:30.247Z',
      updatedAt: '2024-08-28T10:17:30.771Z',
      number: 51376
    },
    {
      _id: '66cef91e119d45001b502896',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0945',
        '643d69a5c3f7b9001cfa0947'
      ],
      status: 'done',
      name: 'Флюоресцентный фалленианский антарианский бургер',
      createdAt: '2024-08-28T10:17:02.990Z',
      updatedAt: '2024-08-28T10:17:03.561Z',
      number: 51375
    },
    {
      _id: '66cef53a119d45001b50287f',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa094a',
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Флюоресцентный астероидный бессмертный минеральный традиционный-галактический бургер',
      createdAt: '2024-08-28T10:00:26.293Z',
      updatedAt: '2024-08-28T10:00:27.573Z',
      number: 51374
    }
  ],
  total: 51002,
  totalToday: 77
};

export const testIngredients = [
  {
    _id: '643d69a5c3f7b9001cfa093f',
    name: 'Мясо бессмертных моллюсков Protostomia',
    type: 'main',
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: 'https://code.s3.yandex.net/react/code/meat-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    __v: 0
  },
  {
    _id: '643d69a5c3f7b9001cfa0940',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    __v: 0
  },
  {
    _id: '643d69a5c3f7b9001cfa093d',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    __v: 0
  }
];

export const testOrder = {
  data: {
    _id: '66cf49e1119d45001b5029e1',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa093e'
    ],
    owner: '66c97636119d45001b501be8',
    status: 'done',
    name: 'Флюоресцентный люминесцентный био-марсианский бургер',
    createdAt: '2024-08-28T16:01:37.414Z',
    updatedAt: '2024-08-28T16:01:37.925Z',
    number: 51388,
    __v: 0,
    isLoading: false
  }
};

export const testNewOrder = {
  name: 'Био-марсианский флюоресцентный люминесцентный метеоритный бургер',
  order: {
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa093d',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Филе Люминесцентного тетраодонтимформа',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0
      },
      {
        _id: '643d69a5c3f7b9001cfa0940',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0
      }
    ],
    _id: '66cf4f3b119d45001b5029f7',
    owner: {
      name: 'DarkMike',
      email: 'vany2008@yandex.ru',
      createdAt: '2024-08-24T05:57:10.085Z',
      updatedAt: '2024-08-25T07:22:59.729Z'
    },
    status: 'done',
    createdAt: '2024-08-28T16:24:27.205Z',
    updatedAt: '2024-08-28T16:24:27.685Z',
    number: 51391,
    price: 5400,
    isLoading: false
  }
};

export const testOrderList = [
  {
    _id: '66c97650119d45001b501bea',
    ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2024-08-24T05:57:36.585Z',
    updatedAt: '2024-08-24T05:57:37.185Z',
    number: 50913
  },
  {
    _id: '66c97729119d45001b501bee',
    ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
    status: 'done',
    name: 'Флюоресцентный люминесцентный бургер',
    createdAt: '2024-08-24T06:01:13.445Z',
    updatedAt: '2024-08-24T06:01:13.973Z',
    number: 50915
  },
  {
    _id: '66c9797b119d45001b501bf1',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa093e'
    ],
    status: 'done',
    name: 'Флюоресцентный люминесцентный био-марсианский бургер',
    createdAt: '2024-08-24T06:11:07.980Z',
    updatedAt: '2024-08-24T06:11:08.511Z',
    number: 50917
  }
];

export const testUser = {
  email: 'vany2008@yandex.ru',
  name: 'Ivan'
};

export const testUserUpdated = {
  email: 'darkmike537@hotmail.com',
  name: 'Mike'
};
