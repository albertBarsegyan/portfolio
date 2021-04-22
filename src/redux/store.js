import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer1 from './reducers/reducer1';
import reducer2 from './reducers/reducer2';
import backgroundColorReducer from './reducers/backgroundColorReducer';
// All reducers
const allReducers = combineReducers({
  first: reducer1,
  second: reducer2,
  background: backgroundColorReducer,
});
// All middleware
//  'applyMiddleware' groups all middlers
//  'composeWithDevTools' do the same as applyMiddleware + browser redux dev tools
const middlewareGroup = composeWithDevTools();

const store = createStore(allReducers, undefined, middlewareGroup);
export default store;
