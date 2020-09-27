import React, { Component } from 'react';
import { post } from '../fetch/fetch';

class CreateGroup extends Component {
  state = {
    name: '',
    password: '',
    public: true,
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

  create = async (e) => {
    e.preventDefault();
    let results = await post('/groups/create', this.state);
    console.log('-=-=-=-=-=-=-=-=-=-=', results);
    this.setState({
      message: results.msg,
    });
    this.props.history.push(`/groups/your-group/${results.group._id}`);
  };

  render() {
    return (
      <div>
        <h1>Create a group</h1>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            name='name'
            value={this.state.name}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            name='password'
            value={this.state.password}
            placeholder='optional'
            type='password'
            onChange={this.updateField}
          />
        </div>
        <button onClick={this.create}>Create Group</button>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default CreateGroup;
