import React, { Component } from 'react';
import { post } from '../fetch/fetch';

class FindGroup extends Component {
  state = {
    name: '',
    password: '',
    message: '',
  };

  updateField = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log('THE STATE IS:', this.state)
    );
  };

  join = async (e) => {
    e.preventDefault();
    let results = await post(
      `/groups/join-by-name/${this.state.name}`,
      this.state
    );
    console.log('DID WE FIND THE GROUP??', results);
    console.log('=-=-=-=-=-=-=', results.group);
    this.setState({
      message: results.msg,
    });
    if (results.success) {
      this.props.history.push(`/groups/your-group/${results.group._id}`);
    }
  };

  render() {
    return (
      <div>
        <h1>FIND A GROUP</h1>
        <div>
          <label htmlFor='name'>Name of the Group:</label>
          <input
            name='name'
            value={this.state.name}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='password'>Password (optional):</label>
          <input
            name='password'
            value={this.state.password}
            type='password'
            placeholder='******'
            onChange={this.updateField}
          />
        </div>
        <button onClick={this.join}>Join Group</button>
      </div>
    );
  }
}

export default FindGroup;
