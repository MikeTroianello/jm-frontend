import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../fetch/fetch';

import Challenge from './Challenge';

class ViewChallenges extends Component {
  state = {
    challenges: [],
  };
  componentDidMount = async () => {
    let results = await get('/challenges/all');
    console.log('TH CHALEHGNELD ', results);
    this.setState({
      challenges: results.challenges,
    });
  };
  render() {
    return (
      <div>
        <h1>ALL AVAILABLE CHALLENGES</h1>
        {this.state.challenges.map((challenge, i) => {
          return (
            <Challenge
              all={challenge}
              key={i}
              button={Boolean(this.props.user.username)}
              history={this.props.history}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(ViewChallenges);
