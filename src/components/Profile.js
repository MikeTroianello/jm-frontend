import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, post } from './fetch/fetch';
import { setScore } from '../redux/actionCreators';

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
    let results = post(`/challenges/score/${this.state.challenge._id}`, score);
    this.props.setScore(score);
    this.setState({
      challenges: results.challenges,
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.user.username}!</h1>
        <h2>Your current Challenge</h2>
        {this.state.challenge && (
          <div className='challenge'>
            <h2>{this.state.challenge.name}</h2>
            <p>{this.state.challenge.category}</p>
            <p>For 100 Points: {this.state.challenge.challenge}</p>
            <p>For 150 Points: {this.state.challenge.bonusChallenge}</p>
            <p>For 50 Points: {this.state.challenge.minimumChallenge}</p>

            <div className='three-buttons'>
              <button onClick={() => this.score(50)}>Minimum Challenge</button>
              <button onClick={() => this.score(100)}>Regular Challenge</button>
              <button onClick={() => this.score(150)}>Bonus Challenge</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

const mapDispatchToProps = {
  setScore: (score) => setScore(score),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
