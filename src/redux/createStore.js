import { createStore } from 'redux';
import createRootReducer from './createRootReducer';
import createEnhancer from './createEnhancer';
export default function() {
  return createStore(createRootReducer(), {}, createEnhancer());
}
