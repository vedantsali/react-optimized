import testDataConstants from './testConstants/TestConstants';
import TVSHOW_DETAILS_DATA from './testConstants/TestConstants';
//import { fetchTvShowDetails, fetchData, fetchSearchList } from '../src/tvshow/actions/TvShowActions';
//import DATA from './testConstants/TestConstants';
//import { shallow } from 'enzyme';
//import { TvShowDetailContainer } from '../src/tvshow/components/container/TvShowDetailContainer';
import { fetchData } from '../src/shared/actions/SharedActions';
import DETAILS_DATA from './testConstants/TestConstants';
import FIRST_30_TVSHOW_LIST from './testConstants/TestConstants';

// describe('#fetchDataRequest() using ', () => {
//   it('should load user the TV Details data based on showId', () => {
//     return fetchData(ShowListActionConstants.FETCH_TV_SHOW_DETAILS, { showId: 12155 })
//       .then(data => {
//         expect(data).toBeDefined();
//         expect(data).toEqual(TVSHOW_DETAILS_DATA);
//       });
//   });
//   it('should load user the TV Details data based on showId', () => {
//     return fetchData(ShowListActionConstants.FETCH_TV_SHOW_DETAILS, { showId: 12155 })
//       .then(data => {
//         expect(data).toBeDefined();
//         expect(data.production_countries[0].name).toEqual('United States of America');
//       });
//   });
//   it('should load user the TV List data', () => {
//     return fetchData(ShowListActionConstants.FETCH_TV_SHOW_LIST_DATA, { activePage: 1 })
//       .then(data => {
//         expect(data).toBeDefined();
//         //FIRST_30_TVSHOW_LIST
//         expect(data[0].title).toEqual('Robin Hood');
//       });
//   });

//   it('should load user the TV List data', () => {
//     return fetchData(ShowListActionConstants.FETCH_SEARCH_DATA, { searchText: 'Robin' })
//       .then(data => {
//         expect(data).toBeDefined();
//         expect(data[0].title).toEqual('Robin Hood');
//       });
//   });

  // it('should load user the TV List data', () => {
  //   return fetchDataRequest(TvConstants.TvShowsActionConstants.FETCH_ALL_TV_SHOW_LIST_DATA)
  //     .then(data => {
  //       expect(data).toBeDefined();
  //       expect(data[0].title).toEqual('Robin Hood');
  //     });
  // });


   //   // allows us to easily return reponses and/or success/fail for a thunk that calls a service
  //   const mockServiceCreator = (body, succeeds = true) => () =>
  //     new Promise((resolve, reject) => {
  //       setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  //     });

  //   describe('Test Login Action', () => {
  //     let store;
  //     beforeEach(() => {
  //       store = mockStore({ username: '' });
  //     });

  //     describe('Test user logged in', () => {
  //       it('', () => {
  //         store
  //           .dispatch(fetchSearchList({ searchText: 'Robin' }, TvConstants.TvShowsActionConstants.FETCH_SEARCH_DATA));
  //         console.log(store.getActions());
  //         expect(store.getActions()).toContainEqual({ type: init(TvConstants.TvShowsActionConstants.FETCH_SEARCH_DATA), value: undefined });
  //       });
  //     });
  //   });
  // });