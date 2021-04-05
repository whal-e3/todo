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
      return { ...state };
    case TODO_LOADED:
      return { ...state, todo: payload, loading: false };
    case TODO_UPDATED:
      return { ...state };
    case TODO_DELETED:
      return { ...state };
    case TODO_ERROR:
      return { ...state, todo: [], loading: false };
    default:
      return state;
  }
}
