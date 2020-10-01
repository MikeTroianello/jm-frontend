import * as ActionTypes from './actionTypes';

let defaultState = {
  username: '',
  score: null,
  challenge: null,
  previousChallenge: null,
  group: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      const {
        username,
        score,
        previousChallenges,
        currentChallenge,
      } = action.payload;
      return {
        username: username,
        score: score,
        previousChallenges: previousChallenges,
        currentChallenge,
      };
    case ActionTypes.SET_CHALLENGE:
      console.log(
        'THIS IS THE CONSOLE LOG THAT YOU NEED TO LOOK FOR',
        action.payload
      );
      return { ...state, challenge: action.payload };
    case ActionTypes.SET_GROUP:
      return { ...state, group: action.payload };
    case ActionTypes.PROCESS_CHALLENGE:
      return { ...state, score: action.payload };
    case ActionTypes.LOGGED_OUT:
      return { ...defaultState };
    default:
      return { ...state };
  }
};
