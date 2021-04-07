import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import TodoList from '../todo/TodoList';
import Profile from '../profile/Profile';
import Friends from '../friends/Friends';

const Routes = () => {
  return (
    <div className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/todo' component={TodoList} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
    </div>
  );
};

export default Routes;
