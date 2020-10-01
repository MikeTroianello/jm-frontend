import React, { Component } from 'react';
import { get, post } from '../fetch/fetch';

import { connect } from 'react-redux';
import { setLogin } from '../../redux/actionCreators';

import './styles.css';

class Login extends Component {
  state = {
    username: 'Mike',
    password: 'mike',
  };

  updateField = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log('THE STATE IS:', this.state)
    );
  };

  submitForm = async (e) => {
    e.preventDefault();
    let results = await post('/register/login', this.state);
    console.log('THESE ARE THE RESULTS of the LOGINNNNNNN:', results);
    this.setState(
      {
        msg: results.message,
      },
      () => console.log(this.state)
    );
    if (results.success) {
      this.props.setLogin(results.user);
    }
  };

  // submitForm = async (e) => {
  //   e.preventDefault();
  //   let results = await post('/register/login', this.state);
  //   console.log('THESE ARE THE RESULTS:', results);
  //   this.setState(
  //     {
  //       msg: results.message,
  //     },
  //     () => console.log(this.state)
  //   );
  //   if (results.success) {
  //     this.props.setLogin(results.user);
  //   }
  // };

  render() {
    // console.log('BIG MONEY', this.props.history);
    return (
      <div className='signup'>
        <h1>Log In</h1>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            onChange={this.updateField}
            value={this.state.username}
            name='username'
          />
        </div>
        <div>
          <label htmlFor='password'>Username:</label>
          <input
            onChange={this.updateField}
            value={this.state.password}
            name='password'
            type='password'
          />
        </div>
        <button onClick={this.submitForm}>Log in</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setLogin: (user) => setLogin(user),
};

export default connect(null, mapDispatchToProps)(Login);
