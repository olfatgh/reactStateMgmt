/**
 * Auth selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectAuth,
    authState => authState.username,
  );


  
const makeSelectPassword = () =>
createSelector(
  selectAuth,
  authState => authState.password,
);

const makeSelectUserId = () =>
createSelector(
  selectAuth,
  authState => authState.userId,
);

const makeSelectUserToken = () =>
createSelector(
  selectAuth,
  authState => authState.userToken,
);

export { selectAuth, makeSelectUsername, makeSelectPassword, makeSelectUserId, makeSelectUserToken
 };
