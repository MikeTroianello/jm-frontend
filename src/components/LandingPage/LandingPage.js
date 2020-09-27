import React from 'react';

import Signup from './Signup';
import Login from './Login';
import { connect } from 'react-redux';

function LandingPage(props) {
  if (props.user.username) {
    props.history.push('/profile');
  }
  return (
    <div>
      <h1>THIS IS THE LANDING PAGE</h1>
      <Signup />
      <Login />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
});

export default connect(mapStateToProps)(LandingPage);
