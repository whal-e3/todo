import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <h1 className='title'>
          {' '}
          <i className='fas fa-clipboard-list'></i> TO:DO
        </h1>

        <div className='menu'>
          <Link to='/register'>SignUp</Link>
          {' | '}
          <Link to='/login'>Login</Link>
        </div>
      </div>
      <hr style={{ marginBottom: '1rem', marginTop: '1rem' }} />
    </div>
  );
};

export default Navbar;
