import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import TodoItem from './TodoItem';
import { getTodo, createTodo } from '../../actions/todo';

const TodoList = ({ getTodo, createTodo, loading, todo }) => {
  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return loading || todo === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {todo.map(item => (
        <TodoItem
          key={item._id}
          item={item}
          content={item.content}
          date={item.date}
          location={item.location}
        />
      ))}
      <div className='todo-btn'>
        <i
          className='fas fa-plus-circle fa-3x plus-icon'
          onClick={e => createTodo()}
        ></i>
      </div>
    </Fragment>
  );
};

TodoList.propTypes = {
  todo: PropTypes.array,
};

const mapStateToProps = state => ({
  loading: state.todo.loading,
  todo: state.todo.todo,
});

export default connect(mapStateToProps, { getTodo, createTodo })(TodoList);
