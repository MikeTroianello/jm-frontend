import React from 'react';
import { connect } from 'react-redux';
import { setChallenge, addChallenge } from '../../redux/actionCreators';
import { post } from '../fetch/fetch';
import './challenge.css';

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
      <p>For 100 Points: {challenge}</p>
      <p>For 150 Points: {bonusChallenge}</p>
      <p>For 50 Points: {minimumChallenge}</p>
      <button
        onClick={() => {
          props.addChallenge(`/challenges/accept/${props.all._id}`, props.all);
        }}
      >
        Take this challenge
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  setChallenge: (challenge) => setChallenge(challenge),
  addChallenge: (url, challenge) => addChallenge(url, challenge),
};

export default connect(null, mapDispatchToProps)(Challenge);
