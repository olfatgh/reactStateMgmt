/*
 * AuthReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USERNAME,CHANGE_PASSWORD,SIGNIN,SIGN_OUT} from './constants';

// The initial state of the App
export const initialState = {
  username: 'user',
  password: 'pass',
  userId:'',
  userToken:null,
};

/* eslint-disable default-case, no-param-reassign */
const authReducer = (state = initialState, action) =>
  produce(state, draft => {


    console.log("..... action is",action.type);
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        // draft.username = action.username.replace(/@/gi, '');
        draft.username = action.username;

        break;
      case CHANGE_PASSWORD:
        // Delete prefixed '@' from the github username
        // draft.password = action.password.replace(/#/gi, '');
        draft.password = action.password;
        break;
      case SIGNIN:
        draft.userId = action.userId;
        draft.userToken = action.userToken;
        break;
      case SIGN_OUT:
        draft.userId = action.userId;
        draft.userToken = action.userToken;
        break;
    }
  });

export default authReducer;
