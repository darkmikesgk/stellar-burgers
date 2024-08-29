import { expect, describe } from '@jest/globals';
import {
  getFeed,
  getFeedData,
  getFeedOrders,
  resetFeed,
  feedReducer
} from '../../src/services/slices/feed';
import { fetchFeed } from '../../src/services/slices/feed';
import { initialState } from '../../src/services/slices/feed';
import { testFeed } from '../test-values';

describe('[FeedSlice]', () => {
  describe('Проверка обработки экшнов', () => {
    test('Инициализация состояния', () => {
      const state = feedReducer(undefined, { type: '@@INIT' });
      expect(state).toEqual(initialState);
    });
    test('Очистка ленты', () => {
      const stateAfterReset = feedReducer(testFeed, resetFeed());
      expect(stateAfterReset.orders).toEqual([]);
    });
    test('Получение полного состояния', () => {
      const state = { feed: testFeed };
      expect(getFeed(state)).toEqual(testFeed);
    });

    test('Получение данных ленты', () => {
      const state = { feed: testFeed };
      expect(getFeedData(state)).toEqual({
        total: testFeed.total,
        totalToday: testFeed.totalToday
      });
    });

    test('Получение заказов ленты', () => {
      const state = { feed: testFeed };
      expect(getFeedOrders(state)).toEqual(testFeed.orders);
    });
  });

  describe('Проверка асинхронных экшнов', () => {
    test('Получение списка недавних заказов', async () => {
      const stateAfterFetch = feedReducer(initialState, {
        type: fetchFeed.fulfilled.type,
        payload: testFeed
      });
      expect(stateAfterFetch.orders).toEqual(testFeed.orders);
      expect(stateAfterFetch.total).toBe(testFeed.total);
      expect(stateAfterFetch.totalToday).toBe(testFeed.totalToday);
    });

    test('Обработка ошибок при получении списка заказов', async () => {
      const error = new Error('Failed to fetch');
      const stateAfterFetch = feedReducer(initialState, {
        type: fetchFeed.rejected.type,
        error
      });
      expect(stateAfterFetch.orders).toEqual([]);
      expect(stateAfterFetch.total).toBe(0);
      expect(stateAfterFetch.totalToday).toBe(0);
    });
  });
});
