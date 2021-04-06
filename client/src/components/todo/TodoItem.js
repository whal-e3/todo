import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../../actions/todo';

const TodoItem = ({ content, date, location, item, deleteTodo }) => {
  const dateFormat = new Date(date);
  let month = dateFormat.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let dates = dateFormat.getDate();
  if (dates < 10) {
    dates = '0' + dates;
  }
  const year = dateFormat.getFullYear();
  const dateString = year + '-' + month + '-' + dates;

  const onClick = e => {
    deleteTodo(item._id);
  };

  const onChange = e => {};

  return (
    <Fragment>
      <div className='todo-item'>
        <input
          className='u-full-width'
          type='text'
          placeholder='TO:DO'
          value={content}
          onChange={e => onChange(e)}
        />

        <div className='todo-info'>
          <input
            className='todo-date'
            type='date'
            value={dateString}
            onChange={e => onChange(e)}
          />
          <input
            className='todo-loc'
            type='location'
            placeholder='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <div className='todo-del' onClick={e => onClick(e)}>
            X
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { deleteTodo })(TodoItem);
