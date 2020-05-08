import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userLogin from '../src/login/reducers/LoginReducer';
import { LoginActionConstants } from '../src/login/actions/LoginActionConstants';
import { recd } from '../src/shared';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

describe('Test Login Action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ username: '' });
  });

  // describe('Test user logged in', () => {
  //   it('', () => {
  //     store.dispatch(dispatchLoginDetails({ username: 'user1' }));
  //     expect(store.getActions()).toContainEqual({ type: LoginActionConstants.UPDATE_USERNAME, value: { username: 'user1' } });
  //   });
  // });

  // describe('Test user is logged in', () => {
  //   it('', () => {
  //     store
  //       .dispatch(dispatchLoginSuccess(true));
  //     expect(store.getActions()).toContainEqual({ type: LoginActionConstants.SET_LOGIN_STATUS, value: true });
  //   });
  // });

});

describe('Testing UserLogin Reducer', () => {
  const loginUIReducer = userLogin.uiState;
  const loginErrorReducer = userLogin.error;
  const loginDataReducer = userLogin.data;

  it('Login Reducer should return the initial state', () => {
    expect(loginUIReducer({}, { 'type': 'dummy'})).toEqual({});
  });

  it('Login Reducer should return the initial state', () => {
    expect(loginUIReducer(undefined, { 'type': 'dummy' })).toEqual({ isLoggedIn: false});
  }); 

  it('Test Login UserName Dispatch in store', () => {
    const successAction = {
      type: LoginActionConstants.SET_CURRENT_URL,
      value: 'shows/285'
    };
    expect(loginUIReducer(undefined, successAction)).toEqual({ currentURL: 'shows/285', isLoggedIn: false });
  });

  it('Test Login UserName Dispatch in store', () => {
    const successAction = {
      type: LoginActionConstants.SET_CURRENT_URL,
      value: 'op'
    };
    expect(loginUIReducer({}, successAction)).toEqual({ currentURL: 'op' });
  });

  it('Test Login UserName Dispatch in store', () => {
    const successAction = {
      type: LoginActionConstants.SET_CURRENT_URL
    };
    expect(loginUIReducer({}, successAction)).toEqual({});
  });

  it('Test the is user logged In ', () => {
    const successAction = {
      type: LoginActionConstants.CLEAR_CURRENT_URL
    };
    expect(loginUIReducer({}, successAction)).toEqual({ currentURL: '' });
  });



  it('Login Reducer should return the initial state', () => {
    expect(loginErrorReducer({}, { 'type': 'dummy' })).toEqual({});
  });


  it('Login Reducer should return the initial state', () => {
    const successAction = {
      type: recd(LoginActionConstants.POST_LOGIN_REQUEST),
      value: { error: 'error'}
    };
    expect(loginErrorReducer({}, successAction)).toEqual({
      isError: true,
      error: 'error'
    });
  });

  it('Login Reducer should return the initial state', () => {
    const successAction = {
      type: recd(LoginActionConstants.POST_LOGIN_REQUEST),
      value: {}
    };
    expect(loginErrorReducer(undefined, successAction)).toEqual({
      isError: false
    });
  });

  it('Login Reducer should return the initial state', () => {
    expect(loginDataReducer(undefined)).toEqual({});
  });
  
});