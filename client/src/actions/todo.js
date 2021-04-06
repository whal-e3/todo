import axios from 'axios';
import { TODO_LOADED, TODO_ERROR } from './types';

// Create Todo
export const createTodo = () => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const data = { content: '', location: '' };

    await axios.post('/api/todo', data, config);

    dispatch(getTodo());
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

// Read Todo
export const getTodo = () => async dispatch => {
  try {
    const res = await axios.get('/api/todo');

    dispatch({ type: TODO_LOADED, payload: res.data[0] });
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

// Update Todo
export const updateTodo = () => async dispatch => {
  try {
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

// Delete Todo
export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`/api/todo/${id}`);

    dispatch(getTodo());
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

// TODO: update todo
