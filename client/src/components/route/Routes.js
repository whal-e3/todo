import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PropTypes from 'prop-types';

import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import TodoList from '../todo/TodoList';

const Routes = () => {
  return (
    <div className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/todo' component={TodoList} />
      </Switch>
    </div>
  );
};

export default Routes;
