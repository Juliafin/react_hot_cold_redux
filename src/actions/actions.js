

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess, feedback) => {
  return {
    type: ADD_GUESS,
    guess,
    feedback
  }; 
};

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = (feedback) => {
  return {
    type: SET_FEEDBACK,
    feedback
  };
};

export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const setInitialState = () => {
  return {
    type: SET_INITIAL_STATE
  };
};