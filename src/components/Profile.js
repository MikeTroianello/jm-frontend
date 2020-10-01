import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, post } from './fetch/fetch';
import { processChallenge } from '../redux/actionCreators';

import '../App.css';

class Profile extends Component {
  state = {
    challenge: null,
  };

  componentDidMount = async () => {
    let results = await get('/users/profile');
    console.log('RESULTS OF THE PROFILE', results);
    this.setState(
      {
        challenge: results.challenge,
      },
      () => console.log('WHAT IS THE STATE', this.state.challenge)
    );
  };

  score = async (score) => {
    const { id } = this.state;
    let results = post(`/challenges/process-challenge`, { score, id });
    this.props.processChallenge(score);
    this.setState({
      challenges: results.challenges,
    });
  };

  render() {
    console.log('bebebebebebebebebeb PRORPSOPWEFBWEFI', this.props);
    return (
      <div>
        <h1>Welcome, {this.props.user.username}!</h1>
        <h2>Your current Challenge</h2>
        {this.props.user.currentChallenge && (
          <div className='challenge'>
            <h2>{this.props.user.currentChallenge.name}</h2>
            <p>{this.props.user.currentChallenge.category}</p>
            <p>For 100 Points: {this.props.user.currentChallenge.challenge}</p>
            <p>
              For 150 Points: {this.props.user.currentChallenge.bonusChallenge}
            </p>
            <p>
              For 50 Points: {this.props.user.currentChallenge.minimumChallenge}
            </p>

            <div className='three-buttons'>
              <button onClick={() => this.score(1)}>Minimum Challenge</button>
              <button onClick={() => this.score(2)}>Regular Challenge</button>
              <button onClick={() => this.score(3)}>Bonus Challenge</button>
            </div>
            <button onClick={() => this.score(0)}>Drop Challenge</button>
          </div>
        )}
        <h2>Previous Challenges</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {
  processChallenge: (score) => processChallenge(score),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
