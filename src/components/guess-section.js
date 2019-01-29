import React from 'react';
import { connect } from 'react-redux';
import Feedback from './feedback';
import GuessForm from './guess-form';
// import store from './store';
import {makeGuess} from '../actions';


function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.dispatch(makeGuess(guess))} />
    </section>
  );
}

const mapStatetoProp = state => {
  return {
    guesses: state.guesses,
    feedback: state.feedback
  }
};

export default connect(mapStatetoProp)(GuessSection);