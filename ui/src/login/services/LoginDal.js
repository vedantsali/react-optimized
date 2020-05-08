import { LoginActionConstants } from '../actions/LoginActionConstants';
import { baseURL } from '../../shared';

export const getURL = (actionType) => {
  switch (actionType) {
    case LoginActionConstants.POST_LOGIN_REQUEST:
      return `${baseURL}/login`;
  }
};