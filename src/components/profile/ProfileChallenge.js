import React from 'react';
import { connect } from 'react-redux';
import { setChallenge, addChallenge } from '../../redux/actionCreators';
import { post } from '../fetch/fetch';
import { Link } from 'react-router-dom';
// import './challenge.css';

function Challenge(props) {
  const {
    name,
    category,
    challenge,
    bonusChallenge,
    minimumChallenge,
  } = props.all;
  return (
    <div className='challenge'>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>100 Points: {challenge}</p>
      <p>150 Points: {bonusChallenge}</p>
      <p>50 Points: {minimumChallenge}</p>
      {props.button ? (
        <button
          onClick={() => {
            props.addChallenge(
              `/challenges/accept/${props.all._id}`,
              props.all
            );
            props.history.push('/profile');
          }}
        >
          Take this challenge
        </button>
      ) : (
        <Link to='/'>Create an account and take this challenge!</Link>
      )}
    </div>
  );
}

const mapDispatchToProps = {
  setChallenge: (challenge) => setChallenge(challenge),
  addChallenge: (url, challenge) => addChallenge(url, challenge),
};

export default connect(null, mapDispatchToProps)(Challenge);
