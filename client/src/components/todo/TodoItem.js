import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { deleteTodo, updateTodo } from '../../actions/todo';

const TodoItem = ({
  content,
  date,
  location,
  item,
  deleteTodo,
  updateTodo,
}) => {
  const [itemInfo, setItemInfo] = useState({
    cont: content,
    day: date,
    loc: location,
  });

  const { cont, day, loc } = itemInfo;

  // date formating ---------- move to utils folder
  const dateFormat = new Date(day);
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
  // --------------------------

  const onClick = e => {
    deleteTodo(item._id);
  };

  const onChange = e => {
    setItemInfo({ ...itemInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    updateTodo(item._id, cont, day, loc);
  };

  return (
    <Fragment>
      <div className='todo-item'>
        <div className='info-1'>
          <input
            className='u-full-width todo-content'
            type='text'
            name='cont'
            placeholder='TO:DO'
            value={cont}
            onChange={e => onChange(e)}
          />
          <div className='todo-submit' onClick={e => onSubmit(e)}>
            \/
          </div>
        </div>

        <div className='todo-info'>
          <input
            className='todo-date'
            type='date'
            name='day'
            value={dateString}
            onChange={e => onChange(e)}
          />
          <input
            className='todo-loc'
            type='location'
            name='loc'
            placeholder='location'
            value={loc}
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

export default connect(null, { deleteTodo, updateTodo })(TodoItem);
