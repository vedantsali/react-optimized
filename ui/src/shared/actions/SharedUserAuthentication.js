/* eslint-disable import/prefer-default-export */
import { getAuth, Action } from './SharedActions';
import { LoginActionConstants } from '../../login/actions/LoginActionConstants';

export const isUserLoggedIn = (currentURL) => (dispatch) => {
  const authenticated = getAuth();
  if (!authenticated) {
    dispatch(Action(LoginActionConstants.SET_CURRENT_URL, currentURL));
  }
};
