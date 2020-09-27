import React, { Component } from 'react';
import { post } from '../fetch/fetch';

import { connect } from 'react-redux';
import { setLogout } from '../../redux/actionCreators';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentDidMount = async () => {
    await post('/register/logout');
    this.props.setLogout();
    this.props.history.push('/');
  };
  render() {
    return <div></div>;
  }
}

const mapDispatchToProps = {
  setLogout: () => setLogout(),
};

export default connect(null, mapDispatchToProps)(Logout);

//add redux to clear the reducer. also add redirect
