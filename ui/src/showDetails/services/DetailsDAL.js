import { ShowDetailsConstants } from '../actions/DetailConstants';
import { baseURL } from '../../shared';

/**
 *
 * @param {actionType} actionType Type of action
 * @param {param} param  Movie ID
 */
const getUrl = (actionType, param) => {
  switch (actionType) {
    case ShowDetailsConstants.GET_SHOW_DETAILS: {
      return `${baseURL}/getShow/${param}`
    }
    default: return '';
  }
};

export default getUrl;
