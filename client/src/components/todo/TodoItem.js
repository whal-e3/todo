import React, { Fragment } from 'react';

const TodoItem = () => {
  const onClick = e => {};

  return (
    <Fragment>
      <div className='todo-item'>
        <input className='u-full-width' type='text' placeholder='TO:DO' />

        <div className='todo-info'>
          <input className='todo-date' type='date' />
          <input className='todo-loc' type='location' placeholder='location' />
          <div className='todo-del' onClick={e => onClick(e)}>
            X
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoItem;
