import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import movieListReducer from '../src/showList/reducers/ShowListReducer';
import {ShowListActionConstants} from '../src/showList/actions/ShowListActionConstants';
import testDataConstants from './testConstants/TestConstants';

import { init, recd } from '../src/shared';

describe('Testing reducers', () => {

  const showListReducer = movieListReducer.data;
  const showListUIReducer = movieListReducer.uiState;
  const showListErrorReducer = movieListReducer.error;
  const data = testDataConstants.mockData;
  const error = testDataConstants.mockError;

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should return the initial state', () => {
    expect(showListReducer(undefined, {})).toEqual([]);
  });

  it('it should handle post request', () => {
    const successAction = {
      type: recd(ShowListActionConstants.GET_ALL_SHOW_LISTS),
      value: { showListData: data }
    };
    expect(showListReducer([], successAction)).toEqual(data);
  });

  it('it should handle post request', () => {
    const successAction = {
      type: recd(ShowListActionConstants.GET_ALL_SHOW_LISTS),
      value: data
    };
    expect(showListReducer([], successAction)).toEqual([]);
  });

  it('it should handle post request', () => {
    const successAction = {
      type: recd(ShowListActionConstants.FETCH_SEARCH_DATA),
      value: {data : data }
    };
    expect(showListReducer({}, successAction)).toEqual(data);
  });

  it('it should handle post request', () => {
    const successAction = {
      type: recd(ShowListActionConstants.FETCH_SEARCH_DATA),
      value: data
    };
    expect(showListReducer({}, successAction)).toEqual([]); 
  });


  it('should return the initial state', () => {
    expect(showListUIReducer(undefined, {})).toEqual({});
  });

  it('it should handle post request', () => {
    const successAction = {
      type: init(ShowListActionConstants.GET_ALL_SHOW_LISTS)
    };
    expect(showListUIReducer({}, successAction)).toEqual({ isLoading: true });
  });

  it('it should handle post request', () => {
    const successAction = {
      type: recd(ShowListActionConstants.GET_ALL_SHOW_LISTS)
    };
    expect(showListUIReducer([], successAction)).toEqual({ isLoading: false });
  });

  it('Login Reducer should return the initial state', () => {
    expect(showListErrorReducer(undefined)).toEqual({});
  });
});
