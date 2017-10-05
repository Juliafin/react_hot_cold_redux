// import actions
import {ADD_GUESS, SET_FEEDBACK, SET_INITIAL_STATE} from './../actions/actions';

const initialState = { 
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};


const hotColdReducer = (state = initialState, action) => {

  if (action.type === ADD_GUESS) {

    return Object.assign({}, state,
      {
        guesses: [...state.guesses, action.guess],
        feedback: action.feedback
      }
    );
  } else if (action.type === SET_FEEDBACK) {

    return Object.assign( {}, state, {feedback:action.feedback});
  
  } else if (action.type === SET_INITIAL_STATE) {
    
    return Object.assign( {}, initialState, 
      {correctAnswer: Math.floor(Math.random() * 100) + 1});
  
  } else {
    return state;
  }

};

export default hotColdReducer;