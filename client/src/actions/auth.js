import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

import { setAlert } from '../actions/alert';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/user', body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'));
      });
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

// Login User
export const loginUser = ({ email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

// Logout User
export const logoutUser = () => async dispatch => {
  dispatch({ type: LOGOUT });
};

// Signout User
export const signoutUser = () => async dispatch => {
  //TODO:
};
