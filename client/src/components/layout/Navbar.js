import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <h1 className='title'>
          {' '}
          <i className='fas fa-clipboard-list'></i> TO:DO
        </h1>

        <div className='menu'>
          <Link to='#'>SignUp</Link>
          {' | '}
          <Link to='#'>Login</Link>
        </div>
      </div>
      <hr style={{ marginBottom: '1rem', marginTop: '1rem' }} />
    </Fragment>
  );
};

export default Navbar;
