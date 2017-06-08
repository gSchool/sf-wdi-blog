import { FETCH_ARTICLE_COMPLETED } from '../constants/actionTypes';
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE_COMPLETED:
      return { ...state, article: action.article };
    default:
      return state;
  }
}
