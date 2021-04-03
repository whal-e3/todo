import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/auth';

const Login = ({ isAuthenticated, loginUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    loginUser({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/todo' />;
  }

  return (
    <Fragment>
      <h2>Sign In</h2>
      <form onSubmit={e => onSubmit(e)}>
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

        <input
          className='u-full-width button-primary'
          type='submit'
          value='Sign In'
        />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.protoTypes = {
  isAuthenticated: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
