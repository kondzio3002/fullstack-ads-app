import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dataReducer from './dataRedux';

const subreducers = {
  data: dataReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  composeWithDevTools(
		applyMiddleware(thunk),
	)
);

export default store;