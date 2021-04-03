import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <h2>Sign Up</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            className='u-full-width'
            type='text'
            value={name}
            name='name'
            onChange={e => onChange(e)}
            placeholder='Name'
          />
        </div>

        <div>
          <label>Email</label>
          <input
            className='u-full-width'
            type='text'
            value={email}
            name='email'
            onChange={e => onChange(e)}
            placeholder='Email Address'
          />
        </div>

        <div>
          <label>password</label>
          <input
            className='u-full-width'
            type='password'
            value={password}
            name='password'
            onChange={e => onChange(e)}
            placeholder='Enter password'
          />
        </div>

        <div>
          <label>password (confirm)</label>
          <input
            className='u-full-width'
            type='password'
            value={password2}
            name='password2'
            onChange={e => onChange(e)}
            placeholder='Confirm password'
          />
        </div>

        <input
          className='u-full-width button-primary'
          type='submit'
          value='Sign Up'
        />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
