import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import { loadUser } from '../../actions/auth';
import TodoItem from './TodoItem';

const TodoList = ({ loadUser, isAuthenticated, user, loading }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return loading || user.todo === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {user.todo.map(item => (
        <TodoItem
          key={item._id}
          content={item.content}
          date={item.date}
          location={item.location}
        />
      ))}
    </Fragment>
  );
};

TodoList.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(TodoList);
