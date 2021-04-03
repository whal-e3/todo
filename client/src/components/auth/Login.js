import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

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
            type='text'
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

export default Login;
