import React from 'react';

import User from '../UserListItem/UserListItem';
import './UserList.css';

const UserList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(user => (
        <User key={user.id}>
          {`${user.name} (${user.age} years old)`}
        </User>
      ))}
    </ul>
  );
};

export default UserList;
