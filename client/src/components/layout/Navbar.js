import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const menu = isAuthenticated ? (
    <div className='menu'>
      <Link to='/profile'>profile</Link>
      {' | '}
      <Link to='/friends'>friends</Link>
    </div>
  ) : (
    <div className='menu'>
      <Link to='/register'>Sign Up</Link>
      {' | '}
      <Link to='/login'>Login</Link>
    </div>
  );

  return (
    <div className='container'>
      <div className='navbar'>
        <h1 className='title'>
          {' '}
          <i className='fas fa-clipboard-list'></i> TO:DO
        </h1>

        {menu}
      </div>
      <hr style={{ marginBottom: '1rem', marginTop: '1rem' }} />
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
