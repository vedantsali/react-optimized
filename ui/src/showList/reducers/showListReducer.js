import { ShowListActionConstants } from '../actions/ShowListActionConstants';
import { init, recd } from '../../shared';

const initialState = [];
/**
 * Show Lists data reducer
 * @param {state} state state object
 * @param {action} action type of action
 */
const showListReducer = (state = initialState, action) => {
  switch (action.type) {
    case recd(ShowListActionConstants.GET_ALL_SHOW_LISTS): {
      if (action.value && action.value.showListData && action.value.showListData.length > 0) {
        return [...action.value.showListData];
      }
      return state;
    }
    case recd(ShowListActionConstants.FETCH_SEARCH_DATA): {
      if (action.value && action.value.data && action.value.data.length > 0) {
        return [...action.value.data];
      }
      return [];
    }
    default:
      return state;
  }
};

/**
 *  Show Lists ui reducer
 * @param {state} state state object
 * @param {action} action type of action
 */
const showListUIReducer = (state = {}, action) => {
  switch (action.type) {
    case init(ShowListActionConstants.GET_ALL_SHOW_LISTS): {
      return { ...state, isLoading: true };
    }
    case recd(ShowListActionConstants.GET_ALL_SHOW_LISTS): {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};

export default {
  name: 'movieList',
  data: showListReducer,
  error: (() => ({})),
  uiState: showListUIReducer,
};
