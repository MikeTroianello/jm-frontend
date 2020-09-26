import React from 'react';

import Navbar from './components/Navbar';
import Routes from './components/Routes';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
  }
}

export default App;
