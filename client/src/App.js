import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './components/route/Routes';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
