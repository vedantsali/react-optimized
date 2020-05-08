import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './Reducer';

const composeEnhancers = compose;
const loggerMiddleware = createLogger();
let middleware = [thunkMiddleware];
middleware = [...middleware, loggerMiddleware];

const persistedState = {};
const store = createStore(RootReducer, persistedState, composeEnhancers(applyMiddleware(...middleware)));

export const configureStore = () => new Promise((resolve) => {
  resolve(store);
});
export default store;
