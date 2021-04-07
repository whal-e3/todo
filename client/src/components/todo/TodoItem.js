import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { deleteTodo, updateTodo } from '../../actions/todo';
import { setAlert } from '../../actions/alert';
import dateFormat from '../../utils/dateFormat';

const TodoItem = ({
  content,
  date,
  location,
  item,
  deleteTodo,
  updateTodo,
  setAlert,
}) => {
  const [itemInfo, setItemInfo] = useState({
    cont: content,
    day: date,
    loc: location,
  });

  const { cont, day, loc } = itemInfo;

  const dateString = dateFormat(day);

  const onClick = e => {
    deleteTodo(item._id);
  };

  const onChange = e => {
    setItemInfo({ ...itemInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    updateTodo(item._id, cont, day, loc);
    setAlert('TO:DO submitted!', 'success', 1000);
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

export default connect(null, { deleteTodo, updateTodo, setAlert })(TodoItem);
