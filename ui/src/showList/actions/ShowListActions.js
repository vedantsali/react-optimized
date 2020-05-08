/* eslint-disable import/prefer-default-export */
import { ShowListActionConstants } from './ShowListActionConstants';
import getURL from '../services/ShowListDal';
import {
  fetchData, Action, recd, init
} from '../../shared';

/**
 * Action Used to get the show lists data
 * @param {*} actionType
 */
export const getShowLists = (actionType = ShowListActionConstants.GET_ALL_SHOW_LISTS) => (dispatch) => {
  const movieListUrl = getURL(actionType);// get the url of the movie lists.
  dispatch(Action(init(actionType)));
  fetchData(movieListUrl).then((response) => response.json()).then((data) => dispatch(Action(recd(actionType), { showListData: data }))).catch((error) => {
    console.log(error);
  });
};

/**
 * This is used to fetch the tv show data based on user input search string.
 * @param {*} searchText
 * @param {*} actionType
 */
export const fetchSearchList = (searchText, actionType = ShowListActionConstants.FETCH_SEARCH_DATA) => (dispatch) => {
  const searchUrl = getURL(actionType, searchText);
  dispatch(Action(init(actionType)));
  return fetchData(searchUrl, { searchText })
    .then((response) => response.json())
    .then((data) => {
      dispatch(Action(recd(actionType), { data }));
    }).catch((error) => error);
};
