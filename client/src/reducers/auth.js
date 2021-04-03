/* eslint-disable import/no-anonymous-default-export */
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return { ...state, user: payload, isAuthenticated: true, loading: false };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}
