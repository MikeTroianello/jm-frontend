import * as ActionTypes from './actionTypes';

let defaultState = {
  username: '',
  score: null,
  challenges: [],
  challenge: null,
  group: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      console.log('INSIDE THE REDUCER', action.payload);
      const { username, score, challenges } = action.payload;
      return { username: username, score: score, challenges: challenges };
    case ActionTypes.SET_CHALLENGE:
      return { ...state, challenge: action.payload };
    case ActionTypes.SET_GROUP:
      return { ...state, group: action.payload };
    case ActionTypes.SET_SCORE:
      return { ...state, score: action.payload };
    case ActionTypes.LOGGED_OUT:
      return { ...defaultState };
    default:
      return { ...state };
  }
};
