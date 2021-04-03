import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';

const Routes = () => {
  return (
    <div className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;
