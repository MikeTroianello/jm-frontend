import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';

import LandingPage from './LandingPage/LandingPage';
import Signup from './LandingPage/Signup';
import Profile from './Profile';

import Blog from './other/Blog';
import Test from './other/Test';
import NotFound from './other/NotFound';
import ViewChallenge from './challenges/ViewChallenges';
import CreateChallenge from '../components/challenges/CreateChallenge';
import CreateGroup from '../components/groups/CreateGroup';
import FindGroup from '../components/groups/FindGroup';
import Group from '../components/groups/Group';

import Logout from './LandingPage/Logout';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <LandingPage {...props} />} />
      <Route exact path='/home' render={(props) => <Home {...props} />} />
      <Route exact path='/blog' render={(props) => <Blog {...props} />} />
      <Route exact path='/test' render={(props) => <Test {...props} />} />
      <Route exact path='/logout' render={(props) => <Logout {...props} />} />
      <Route exact path='/profile' render={(props) => <Profile {...props} />} />
      <Route
        exact
        path='/challenges/all'
        render={(props) => <ViewChallenge {...props} />}
      />
      <Route
        exact
        path='/challenges/create'
        render={(props) => <CreateChallenge {...props} />}
      />
      <Route
        exact
        path='/groups/create'
        render={(props) => <CreateGroup {...props} />}
      />
      <Route
        exact
        path='/groups/find-group'
        render={(props) => <FindGroup {...props} />}
      />
      <Route
        exact
        path='/groups/your-group/:id'
        render={(props) => <Group {...props} />}
      />

      <Route component={NotFound} />
    </Switch>
  );
}
