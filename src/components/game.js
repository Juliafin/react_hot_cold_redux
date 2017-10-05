import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/actions';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.setInitialState(actions.setInitialState)
        
    }

    addGuess(action, guess, feedback ) {
        this.props.dispatch(action(guess, feedback));
    }

    setFeedback(action, feedback) {
        this.props.dispatch(action(feedback));
    }
    
    setInitialState(action) {
        this.props.dispatch(action());
    }

    newGame() {
        this.setInitialState(actions.setInitialState)
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setFeedback(actions.setFeedback, 'Please enter a valid Number');
            return;
        }

        const difference = Math.abs(guess - this.props.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        
        this.addGuess(actions.addGuess, guess, feedback);
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    feedback: state.feedback,
    guesses: state.guesses,
    correctAnswer: state.correctAnswer

});

export default connect(mapStateToProps)(Game)


