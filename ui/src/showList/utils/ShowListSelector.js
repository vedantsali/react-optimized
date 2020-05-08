import { createSelector } from 'reselect';
import { showDetailsOfSearchedMovies } from './ShowListUtils';
/**
 * Selector used to get the movie list data from current
 * @param {*} state
 */
const movieLists = (state) => state.data.current.movieList;

/**
 * Selector used to get the movie list data from ui state
 * @param {*} state
 */
const movieListsUI = (state) => state.uiState.movieList;

/**
 * Selector used to get the ui movie list data
 */
export const getMovieListUISelector = createSelector(
  [movieListsUI],
  (movieListsUIData) => movieListsUIData || undefined,
);

/**
 * Selector used to form the table data based on the input text of the user.
 */
export const getMovieListTable = createSelector(
  [movieListsUI, movieLists],
  (movieListData, movieListsUIData) => showDetailsOfSearchedMovies(movieListData, movieListsUIData),
);

const tvShowList = (state) => state.data.current.movieList.tvShowList;
const tvShowDetails = (state) => state.data.current.movieList.tvShowDetails;
const allTvShows = (state) => state.data.current.movieList.allTvShows;


/**
 * Selector to get list of N tv shows from state
 */
export const getTvShowListSel = createSelector(
  [tvShowList],
  (tvShowListArr) => tvShowListArr,
);

/**
 * Selector to get details of single TV show
 */
export const getTvShowDetailsSel = createSelector(
  [tvShowDetails],
  (tvShowDetailsObj) => tvShowDetailsObj,
);

/**
 * Selector to get list of all tv shows from state
 */
export const getAllTvShowsListSel = createSelector(
  [allTvShows],
  (allTvShowListArr) => allTvShowListArr,
);
