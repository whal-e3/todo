import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Fragment>
      Profile
      <Link to='/todo'>Back to TO:DO</Link>
    </Fragment>
  );
};

export default Profile;
