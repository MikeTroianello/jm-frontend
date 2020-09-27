import React, { Component } from 'react';
import { get } from '../fetch/fetch';

import Challenge from './Challenge';

export default class ViewChallenges extends Component {
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
        {this.state.challenges.map((challenge) => {
          return <Challenge all={challenge} />;
        })}
      </div>
    );
  }
}
