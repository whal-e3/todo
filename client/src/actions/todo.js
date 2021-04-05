import axios from 'axios';
import {
  TODO_CREATED,
  TODO_LOADED,
  TODO_UPDATED,
  TODO_DELETED,
  TODO_ERROR,
} from './types';

export const getTodo = () => async dispatch => {
  try {
    const res = await axios.get('api/todo');

    dispatch({ type: TODO_LOADED, payload: res.data[0].todos });
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

export const updateTodo = () => async dispatch => {
  try {
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};

export const deleteTodo = () => async dispatch => {
  try {
  } catch (err) {
    dispatch({ type: TODO_ERROR });
  }
};
