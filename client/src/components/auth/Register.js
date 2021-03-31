import React, { Fragment, useState } from 'react';

const Register = () => {
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
      console.log('Password does not match');
    } else {
      console.log(formData);
    }
  };

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
            type='text'
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
            type='text'
            value={password2}
            name='password2'
            onChange={e => onChange(e)}
            placeholder='Confirm password'
          />
        </div>

        <input
          className='u-full-width button-primary'
          type='submit'
          value='Register'
        />
      </form>
    </Fragment>
  );
};

export default Register;
