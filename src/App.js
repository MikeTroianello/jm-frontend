import React from 'react';

import StatusBar from './components/StatusBar';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar />

        <div className='content-box'>
          <div>
            <Navbar />
          </div>
          <div className='content'>
            <Routes />
          </div>
        </div>
      </>
    );
  }
}

export default App;
