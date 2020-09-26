import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    msg: '',
  };

  componentDidMount = async () => {
    // let results = await fetch('https://jm-powerhack.azurewebsites.net/', {

    let results = await fetch('http://localhost:3000/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    results = await results.json();
    console.log('THESE ARE THE RESULTS:', results);
    this.setState(
      {
        msg: results.msg,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <h1>TESTING</h1>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}
