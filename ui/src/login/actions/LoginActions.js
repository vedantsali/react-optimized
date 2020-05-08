
import { LoginActionConstants } from './LoginActionConstants';
import { getURL } from '../services/LoginDal';
import {
  fetchData, Action, History, init, recd,
} from '../../shared';

const loginService = (formData, actionType) => (dispatch) => {
  sessionStorage.removeItem('jwt-token');
  const loginURL = getURL(actionType);

  const requestBody = JSON.stringify({
    username: formData.username,
    password: formData.password,
  });

  const headers = {
    method: 'POST',
  };

  dispatch(Action(init(actionType)));
  return fetchData(loginURL, { body: requestBody, ...headers })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        sessionStorage.setItem('jwt-token', data.token);
        return true;
      }
      dispatch(Action(recd(actionType), data));
    }).catch((error) => {
      dispatch(Action(recd(actionType), error));
    });
};


/**
 * Action Used to get the show lists data
 * @param {*} actionType
 */
export const submitLoginRequest = (formData, actionType = LoginActionConstants.POST_LOGIN_REQUEST) => (dispatch, getState) => {
  dispatch(loginService(formData, actionType)).then((response) => {
    if (response === true) {
      let URL = getState().uiState.login.currentURL;
      URL = URL || 'list';
      History.push(URL);
    } else {
      // console.log(response);
    }
  }).catch((error) => {
    console.log(error);
  });
};
