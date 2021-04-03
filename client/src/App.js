import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from './components/route/Routes';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import setAuthToken from './utils/setAuthToken';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './App.css';

const App = () => {
  // init User when reload
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
