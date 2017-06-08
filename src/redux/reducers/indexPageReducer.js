import { FETCH_ARTICLES_COMPLETED } from '../constants/actionTypes';
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES_COMPLETED:
      return { ...state, articles: action.articles };
    default:
      return state;
  }
}
