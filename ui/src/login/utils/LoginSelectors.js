import { createSelector } from 'reselect';
const loginErrorData = state => state.error.login;

export const loginSelector = createSelector(
  [loginErrorData],
  loginError => loginError || undefined
);