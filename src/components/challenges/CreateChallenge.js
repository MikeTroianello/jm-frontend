import React, { Component } from 'react';
import { post } from '../fetch/fetch';

class CreateChallenge extends Component {
  state = {
    name: '',
    category: '',
    challenge: '',
    bonusChallenge: '',
    minimumChallenge: '',
    message: '',
  };

  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = async (e) => {
    e.preventDefault();
    let results = await post('/challenges/create', this.state);
    console.log('CHALLENGE RESULTS', results);
    this.setState({
      message: results.msg,
    });
    this.props.history.push('/challenges/all');
  };

  render() {
    return (
      <div>
        <h1>Create Your own Challenge</h1>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            onChange={this.updateField}
            value={this.state.name}
            name='name'
          />
        </div>
        <div>
          <label htmlFor='category'> Category:</label>
          <input
            onChange={this.updateField}
            value={this.state.category}
            name='category'
          />
        </div>
        <div>
          <label htmlFor='challenge'>Challenge: </label>
          <input
            onChange={this.updateField}
            value={this.state.challenge}
            name='challenge'
          />
        </div>
        <div>
          <label htmlFor='bonusChallenge'>Bonus Challenge: </label>
          <input
            onChange={this.updateField}
            value={this.state.bonusChallenge}
            name='bonusChallenge'
          />
        </div>
        <div>
          <label htmlFor='minimumChallenge'>Minimum Challenge: </label>
          <input
            onChange={this.updateField}
            value={this.state.minimumChallenge}
            name='minimumChallenge'
          />
        </div>
        <button onClick={this.submitForm}>Create a Challenge</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CreateChallenge;
