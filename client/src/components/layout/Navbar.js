import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { logoutUser } from '../../actions/auth';

const Navbar = ({ isAuthenticated, logoutUser }) => {
  const logOut = () => {
    alert('Are you sure you want to log out?');
    logoutUser();
    return <Redirect to='/' />;
  };

  const menu = isAuthenticated ? (
    <div className='menu'>
      <Link to='/profile'>Profile</Link>
      {' | '}
      <span style={{ color: '#dc3545' }} onClick={() => logOut()}>
        LogOut
      </span>
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
  logoutUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
