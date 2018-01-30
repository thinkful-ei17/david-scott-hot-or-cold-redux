import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export class Game extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <main role="main">
          <GuessSection />
          <StatusSection />
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