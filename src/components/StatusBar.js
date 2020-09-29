import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

const StatusBar = (props) => {
  console.log('PRAHPS', props);
  return props.user.username ? <SubStatusBar {...props} /> : <NullStatusBar />;
};

const NullStatusBar = () => {
  return (
    <div className='status-bar null'>
      <h1>Productathon</h1>
      <h1>Log in or create an Account!</h1>
    </div>
  );
};

const SubStatusBar = (props) => {
  console.log('SUBSTATUS PROPS', props);
  return (
    <div className='status-bar null'>
      <h1>Productathon</h1>
      <h2>Hello {props.user.username}!</h2>
      <h2>Your current score: {props.user.score}</h2>
      {props.user.challenge && <p>{props.user.challenge.name}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps)(StatusBar);
