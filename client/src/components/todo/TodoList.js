import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = ({ isAuthenticated, user }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  // TODO:
  if (user.todo) {
    let todo = user.todo;
    todo.forEach(item => {});
  }

  return (
    <Fragment>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Fragment>
  );
};

TodoList.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(TodoList);
