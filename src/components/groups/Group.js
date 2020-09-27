import React, { Component } from 'react';
import { get, post } from '../fetch/fetch';

class Group extends Component {
  state = {
    name: '',
    phoneMessage: '',
    phone: '',
    message: '',
  };
  componentDidMount = async () => {
    let results = await get(`/groups/your-group/${this.props.match.params.id}`);
    console.log('HITHIHEIH', results);
    this.setState({
      name: results.group.nsma,
    });
  };

  // messageGroup = async () => {
  //   let results = await post(`/groups/message-group/${this.props.match.params.id}`)

  // }

  updateField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = async (e) => {
    e.preventDefault();
    let numArr = this.state.phone.split(' ');
    let results = await post(
      `/groups/message-group/${this.props.match.params.id}`,
      { phoneMessage: this.state.phoneMessage, numArr }
    );
    this.setState({
      message: results.msg,
      name: '',
      phoneMessage: '',
    });
  };

  render() {
    return (
      <div>
        <h1>YOU MADE IT TO THE GROUP!!</h1>
        <div>
          <h2>Send a mass message out to alert everyone when to start:</h2>
          <textarea
            rows='4'
            cols='50'
            value={this.state.phoneMessage}
            onChange={this.updateField}
            name='phoneMessage'
          ></textarea>
          <h2>Phone #'s</h2>
          <input
            name='phone'
            value={this.state.phone}
            onChange={this.updateField}
          ></input>
          <p>Start each number with a +</p>
          <p>Do not put any dashes or special characters in the numbers</p>
          <p>Separate each number with a space</p>
        </div>
        <button onClick={this.submit}>Send Text</button>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default Group;
