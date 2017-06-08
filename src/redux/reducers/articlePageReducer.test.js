import { FETCH_ARTICLE_COMPLETED } from '../constants/actionTypes';
import articlePageReducer from './articlePageReducer';

describe('articlePageReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = articlePageReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    const nextState = articlePageReducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specified article set on it', function() {
    const prevState = {};
    const nextState = articlePageReducer(prevState, { type: FETCH_ARTICLE_COMPLETED, article: { id: 1, title: 'Title' } });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ article: { id: 1, title: 'Title' } });
  });
});
