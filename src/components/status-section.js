import React from 'react';
import {connect} from 'react-redux';
import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';
import {makeGuess, generateAuralUpdate} from '../actions';


function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}

function mapStatetoProps(state){
  return {
    guesses: state.guesses,
    auralStatus: state.auralStatus
  }
};

export default connect(mapStatetoProps)(StatusSection);