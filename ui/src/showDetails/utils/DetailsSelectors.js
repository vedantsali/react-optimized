import { createSelector } from 'reselect';
import { getCommentsDescription } from './DetailsUtil';

const showDetailsData = state => state.data.current.showDetails;
const showDetailsUI = state => state.uiState.showDetails;

/**
 * Selector use to get data from the showDetails node.
 */
export const detailsSelector = createSelector(
  [showDetailsData],
  showDetails => showDetails
);

/**
 * Selector use to get the ui data from the showDetails node.
 */
export const detailsUISelector = createSelector(
  [showDetailsUI],
  showUIDetails => showUIDetails || undefined
);

/**
 * Selector use to get the user comments.
 */
export const getCommentsOfUser = createSelector(
  [showDetailsData],
  showDetailsData => getCommentsDescription(showDetailsData)
);