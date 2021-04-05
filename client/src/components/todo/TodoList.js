import React, { Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import TodoItem from './TodoItem';
import { getTodo } from '../../actions/todo';

const TodoList = ({ getTodo, isAuthenticated, loading, todo }) => {
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return loading || todo === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {todo.map(item => (
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
  loading: state.todo.loading,
  todo: state.todo.todo,
});

export default connect(mapStateToProps, { getTodo })(TodoList);
