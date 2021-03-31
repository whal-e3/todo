import React from 'react';

const Register = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input className='u-full-width' type='text' placeholder='Enter name' />
      </div>

      <div>
        <label>Email</label>
        <input className='u-full-width' type='text' placeholder='Enter email' />
      </div>

      <div>
        <label>password</label>
        <input
          className='u-full-width'
          type='text'
          placeholder='Enter password'
        />
      </div>

      <div>
        <label>password (confirm)</label>
        <input
          className='u-full-width'
          type='text'
          placeholder='Confirm password'
        />
      </div>

      <input
        className='u-full-width button-primary'
        type='submit'
        value='Sign Up'
      />
    </form>
  );
};

export default Register;
