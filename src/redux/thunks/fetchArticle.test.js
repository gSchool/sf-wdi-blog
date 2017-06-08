import configureCreateMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { FETCH_ARTICLE_STARTED, FETCH_ARTICLE_COMPLETED } from '../constants/actionTypes';
import fetchArticle from './fetchArticle';

jest.mock('../../model/repositories/ArticleRepository');
const ArticleRepository = require('../../model/repositories/ArticleRepository').default;

const createMockStore = configureCreateMockStore([thunkMiddleware]);

describe('fetchArticle', function() {
  it('dispatches FETCH_ARTICLE_STARTED and then FETCH_ARTICLE_COMPLETED', function() {
    const thunk = fetchArticle();
    expect(typeof thunk).toBe('function');
    const store = createMockStore({});
    ArticleRepository.prototype.getArticle.mockReturnValueOnce(Promise.resolve({ id: 1, title: 'Title' }));
    return store.dispatch(thunk).then(article => {
      expect(article).toEqual({ id: 1, title: 'Title' });
      const actions = store.getActions();
      expect(actions.map(action => action.type)).toEqual([FETCH_ARTICLE_STARTED, FETCH_ARTICLE_COMPLETED]);
      expect(actions[1].article).toEqual({ id: 1, title: 'Title' });
    });
  });

  afterAll(function() {
    fetch.resetMocks();
    ArticleRepository.prototype.getArticle.mockReset();
  });
});
