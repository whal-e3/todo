import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import dateFormat from '../../utils/dateFormat';

import { logoutUser, signoutUser } from '../../actions/auth';

const Profile = ({ user, logoutUser, signoutUser }) => {
  if (!user) {
    user = localStorage.getItem('profile');
  }

  const { avatar, date, email, name } = user;

  const profile = { avatar, date, email, name };

  localStorage.setItem('profile', JSON.stringify(profile));

  const logOut = () => {
    alert('Are you sure you want to log out?');
    logoutUser();
    return <Redirect to='/' />;
  };

  const signOut = () => {
    alert(
      'Are you sure you want to sign out? This will erase every information of you on this app permanently!!'
    );
    signoutUser();
    return <Redirect to='/' />;
  };

  return (
    <Fragment>
      <Link to='/todo'>Back to TO:DO</Link>
      <div className='profile'>
        <br />
        <img src={avatar} alt='profile' />
        <br />
        <div className='profile-info'>
          <h4>name: {name}</h4>
          <h4>email: {email}</h4>
          <h5>register date: {dateFormat(date)}</h5>
        </div>
      </div>
      <div className='logging'>
        <button onClick={() => logOut()}>Log Out</button>
        <button onClick={() => signOut()} className='alert-danger'>
          Sign Out
        </button>
      </div>
    </Fragment>
    //logout
  );
};

Profile.propTypes = { user: PropTypes.object };

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps, { logoutUser, signoutUser })(Profile);
