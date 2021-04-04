/* eslint-disable import/no-anonymous-default-export */

import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TODO_ERROR,
} from '../actions/types';

const initialState = {
  todos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:

    case UPDATE_TODO:

    case DELETE_TODO:

    case TODO_ERROR:

    default:
      return state;
  }
}
