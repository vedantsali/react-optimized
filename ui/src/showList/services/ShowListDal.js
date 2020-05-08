import { ShowListActionConstants } from '../actions/ShowListActionConstants';
import { baseURL } from '../../shared';

const getURL = (actionType, param) => {
  switch (actionType) {
    case ShowListActionConstants.GET_ALL_SHOW_LISTS:
      return `${baseURL}/getFirstNShows/30`;
    case ShowListActionConstants.FETCH_SEARCH_DATA:
      return `${baseURL}/list/search/${param}`;
    default:
      return `${baseURL}`;
  }
};

export default getURL;
