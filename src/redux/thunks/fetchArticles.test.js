import configureCreateMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { FETCH_ARTICLES_STARTED, FETCH_ARTICLES_COMPLETED } from '../constants/actionTypes';
import fetchArticles from './fetchArticles';

jest.mock('../../model/repositories/ArticleRepository');
const ArticleRepository = require('../../model/repositories/ArticleRepository').default;

const createMockStore = configureCreateMockStore([thunkMiddleware]);

describe('fetchArticles', function() {
  it('dispatches FETCH_ARTICLES_STARTED and then FETCH_ARTICLES_COMPLETED', function() {
    const thunk = fetchArticles();
    expect(typeof thunk).toBe('function');
    const store = createMockStore({});
    ArticleRepository.prototype.getArticles.mockReturnValueOnce(Promise.resolve([{ id: 1, title: 'Title' }]));
    return store.dispatch(thunk).then(articles => {
      expect(articles).toEqual([{ id: 1, title: 'Title' }]);
      const actions = store.getActions();
      expect(actions.map(action => action.type)).toEqual([FETCH_ARTICLES_STARTED, FETCH_ARTICLES_COMPLETED]);
      expect(actions[1].articles).toEqual([{ id: 1, title: 'Title' }]);
    });
  });

  afterAll(function() {
    fetch.resetMocks();
    ArticleRepository.prototype.getArticles.mockReset();
  });
});
