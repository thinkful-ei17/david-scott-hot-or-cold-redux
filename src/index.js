import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/store';
import {makeGuess, generateAuralUpdate, startANewGame} from './components/actions';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

console.log(store.getState());

store.dispatch(makeGuess(5));
store.dispatch(makeGuess(7));
store.dispatch(makeGuess(77));
store.dispatch(generateAuralUpdate());

console.log(store.getState());

store.dispatch(startANewGame());

console.log(store.getState());


