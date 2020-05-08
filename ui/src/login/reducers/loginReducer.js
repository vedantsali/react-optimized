import { LoginActionConstants } from '../actions/LoginActionConstants';
import { recd } from '../../shared';

const errorState = { isError: false };
const logginState = { isLoggedIn: false };

const loginErrorReducer = (state = errorState, action) => {
  switch (action.type) {
    case recd(LoginActionConstants.POST_LOGIN_REQUEST): {
      if (action.value.error) {
        return {
          ...state,
          isError: true,
          error: action.value.error
        }
      }
      return state;
    }
    default:
      return state;
  }
};

const loginUIReducer = (state = logginState, action) => {
  switch (action.type) {
    case (LoginActionConstants.SET_CURRENT_URL): {
      if (action.value) {
        return {
          ...state,
          currentURL: action.value,
        }
      }
      return state;
    }
    case (LoginActionConstants.CLEAR_CURRENT_URL): {
      return {
        ...state,
        currentURL: '',
      }
    }
    default:
      return state;
  }
};

export default {
  name: 'login',
  data: (() => { return {} }),
  error: loginErrorReducer,
  uiState: loginUIReducer
};