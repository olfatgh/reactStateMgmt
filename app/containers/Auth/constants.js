/*
 * AuthConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

 // Inputs tracking
export const CHANGE_USERNAME = 'boilerplate/Auth/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'boilerplate/Auth/CHANGE_PASSWORD';

export const RETRIEVE_TOKEN = 'boilerplate/Auth/RETRIEVE_TOKEN';
export const SIGNIN = 'boilerplate/Auth/SIGNIN';
export const SIGN_OUT = 'boilerplate/Auth/SIGN_OUT';
export const SIGN_UP = 'boilerplate/Auth/SIGN_UP';
