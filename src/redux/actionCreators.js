import * as ActionTypes from './actionTypes';
import { post } from '../components/fetch/fetch';

// export const login = () => async (dispatch) => {
//   dispatch(setLogin(user));
// };

export const setLogin = (user) => ({
  type: ActionTypes.LOGGED_IN,
  payload: user,
});

export const logout = () => (dispatch) => {};

export const setLogout = () => ({
  type: ActionTypes.LOGGED_OUT,
});

export const addChallenge = (url, challenge) => async (dispatch) => {
  console.log('IS ANYTHING HAPPENING', challenge);
  let approval = await post(url, challenge);
  console.log(approval);
  dispatch(setChallenge(challenge));
};

export const setChallenge = (challenge) => ({
  type: ActionTypes.SET_CHALLENGE,
  payload: challenge,
});

export const processChallenge = (score) => ({
  type: ActionTypes.PROCESS_CHALLENGE,
  payload: score,
});
