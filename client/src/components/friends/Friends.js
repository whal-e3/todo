import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
  return (
    <Fragment>
      <Link to='/todo'>Back to TO:DO</Link>
      <h2>Friends</h2>
      <table class='u-full-width'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>img</td>
            <td>Dave Gamache</td>
            <td>sara@gmail.com</td>
          </tr>
          <tr>
            <td>img</td>
            <td>Dwayne Johnson</td>
            <td>kevin@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Friends;
