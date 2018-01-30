import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import { makeGuess, startANewGame, generateAuralUpdate } from './actions';

export class Game extends React.Component {

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.props.dispatch(startANewGame())}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game);