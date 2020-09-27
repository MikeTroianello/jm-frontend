import * as ActionTypes from './actionTypes';
import { post } from '../components/fetch/fetch';

export const login = () => (dispatch) => {};

export const setLogin = (user) => ({
  type: ActionTypes.LOGGED_IN,
  payload: user,
});

export const logout = () => (dispatch) => {};

export const setLogout = () => ({
  type: ActionTypes.LOGGED_OUT,
});

export const addChallenge = (url, challenge) => async (dispatch) => {
  console.log('IS ANYTHING HAPPENING');
  await post(url, challenge);
  dispatch(setChallenge(challenge));
};

export const setChallenge = (challenge) => ({
  type: ActionTypes.SET_CHALLENGE,
  payload: challenge,
});

export const setScore = (score) => ({
  type: ActionTypes.SET_SCORE,
  payload: score,
});
