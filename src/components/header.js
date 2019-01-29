import React from 'react';
import {connect} from 'react-redux';
import TopNav from './top-nav';
import {generateAuralUpdate, restartGame} from '../actions';
import './header.css';

function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.dispatch(generateAuralUpdate())}
        onRestartGame={() => props.dispatch(restartGame())}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header)