import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import LandingPage from './LandingPage/LandingPage';

import Blog from './other/Blog';
import Test from './other/Test';
import NotFound from './other/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <LandingPage {...props} />} />
      <Route exact path='/home' render={(props) => <Home {...props} />} />
      <Route exact path='/blog' render={(props) => <Blog {...props} />} />
      <Route exact path='/test' render={(props) => <Test {...props} />} />
      <Route component={NotFound} />
    </Switch>
  );
}
