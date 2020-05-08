import { combineReducers } from 'redux';
import modules from './modules';
import getModuleReducers from '../utils/ReducerUtil';

const dataReducer = combineReducers({
  current: combineReducers(getModuleReducers(modules, 'data')),
});

const appReducer = combineReducers({
  error: combineReducers(getModuleReducers(modules, 'error')),
  data: dataReducer,
  uiState: combineReducers(getModuleReducers(modules, 'uiState')),
});

/**
 * @function RootReducer is pure function for updating the sate.
 * @param {state} state  data passeed input to the pure function RootReducer.
 * @param {action} action type of action
 */
const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }
  return appReducer(state, action);
};
export default RootReducer;
