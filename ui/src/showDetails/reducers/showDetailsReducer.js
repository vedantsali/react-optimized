import { ShowDetailsConstants } from '../actions/DetailConstants';
import { init, recd } from '../../shared';

/**
 * @param {state} state state object
 * @param {action} action type of action
 */
const showDetailsDataReducer = (state = {}, action) => {
  switch (action.type) {
    case recd(ShowDetailsConstants.GET_SHOW_DETAILS): {
      return { ...action.value };
    }
    default:
      return state;
  }
};

/**
 * @param {state} state state object 
 * @param {action} action  type of object
 */
const showDetailsUIReducer = (state = {}, action) => {
  switch (action.type) {
    case init(ShowDetailsConstants.GET_SHOW_DETAILS): {
      return { ...state, isLoading: true };
    }
    case recd(ShowDetailsConstants.GET_SHOW_DETAILS): {
      return { ...state, activeID: action.value.show_id, isLoading: false };
    }
    default:
      return state;
  }
};

export default {
  name: 'showDetails',
  data: showDetailsDataReducer,
  error: (() => { return {} }),
  uiState: showDetailsUIReducer
};
