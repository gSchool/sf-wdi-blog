import { FETCH_ARTICLES_COMPLETED } from '../constants/actionTypes';
import indexPageReducer from './indexPageReducer';

describe('indexPageReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = indexPageReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    const nextState = indexPageReducer(prevState, { type: 'FOOBAR' });
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specified articles set on it', function() {
    const prevState = {};
    const nextState = indexPageReducer(prevState, { type: FETCH_ARTICLES_COMPLETED, articles: [{ id: 1, title: 'Title' }] });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ articles: [{ id: 1, title: 'Title' }] });
  });
});
