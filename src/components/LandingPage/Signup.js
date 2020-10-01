import React, { Component } from 'react';
import { url } from '../fetch/url';
import { get, post } from '../fetch/fetch';

import { connect } from 'react-redux';
import { setLogin } from '../../redux/actionCreators';

import './styles.css';

class Signup extends Component {
  state = {
    username: 'Mike',
    password: 'mike',
    phone: '',
    email: '',
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
    let results = await post('/register/signup', this.state);
    console.log('THESE ARE THE RESULTS:', results);
    this.setState(
      {
        msg: results.msg,
      },
      () => console.log(this.state)
    );
    if (!results.err) {
      this.props.setLogin(results.user);
    }
    // this.props.history.push('/profile');
  };

  render() {
    return (
      <div className='signup'>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            onChange={this.updateField}
            value={this.state.username}
            name='username'
            placeholder='jane doe, etc.'
          />
        </div>
        <div>
          <label htmlFor='password'>password:</label>
          <input
            onChange={this.updateField}
            value={this.state.password}
            name='password'
            type='password'
            placeholder='*******'
          />
        </div>
        <div>
          <label htmlFor='phone'>phone:</label>
          <input
            onChange={this.updateField}
            value={this.state.phone}
            name='phone'
            type='tel'
            placeholder='867-5309'
          />
        </div>
        <div>
          <label htmlFor='email'>email:</label>
          <input
            onChange={this.updateField}
            value={this.state.email}
            name='email'
            type='email'
            placeholder='dale@mail.co'
          />
        </div>
        <button onClick={this.submitForm}>Sign Up</button>
      </div>
    );
  }
}

const mapDispatchtoProps = {
  setLogin: (user) => setLogin(user),
};

export default connect(null, mapDispatchtoProps)(Signup);
