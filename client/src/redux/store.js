import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import adsReducer from './adsRedux';
import requestReducer from './requestRedux';

const subreducers = {
  ads: adsReducer,
  request: requestReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
	)
);

export default store;