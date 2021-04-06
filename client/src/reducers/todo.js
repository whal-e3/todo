/* eslint-disable import/no-anonymous-default-export */
import {
  TODO_CREATED,
  TODO_LOADED,
  TODO_UPDATED,
  TODO_DELETED,
  TODO_ERROR,
} from '../actions/types';

const initialState = { todo: [], loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TODO_CREATED:
    case TODO_LOADED:
    case TODO_UPDATED:
    case TODO_DELETED:
      return { ...state, todo: payload.todos, loading: false };
    case TODO_ERROR:
      return { ...state, todo: [], loading: false };
    default:
      return state;
  }
}
