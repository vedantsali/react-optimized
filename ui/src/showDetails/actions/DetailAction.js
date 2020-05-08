/* eslint-disable import/prefer-default-export */
import { ShowDetailsConstants } from './DetailConstants';
import { fetchData, init, recd, Action } from '../../shared';
import getUrl from '../services/DetailsDal';

/**
 * @param {param} param  Movie ID
 * @param {actionType} actionType Type of the action
 */
export const getShowDetails = (param, actionType = ShowDetailsConstants.GET_SHOW_DETAILS) => function (dispatch) {
  const showDetailsUrl = getUrl(actionType, param);
  dispatch(Action(init(actionType)));
  return fetchData(showDetailsUrl).then((response) => {
    response.json().then((data) => {
      dispatch(Action(recd(actionType), data));
    });
  }).catch((error) => error);
};
