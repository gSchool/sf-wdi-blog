import { combineReducers } from 'redux';

import indexPageReducer from './reducers/indexPageReducer';
import articlePageReducer from './reducers/articlePageReducer';

export default function createRootReducer() {
  return combineReducers({
    indexPage: indexPageReducer,
    articlePage: articlePageReducer
  });
}
