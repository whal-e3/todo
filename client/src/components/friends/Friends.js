import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  return (
    <Fragment>
      Profile
      <Link to='/todo'>Back to TO:DO</Link>
    </Fragment>
  );
};

export default Friends;
