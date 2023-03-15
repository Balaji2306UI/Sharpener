import React from 'react';

import './UserListItem.css';

const User = props => {

  return (
    <li className="goal-item">
      {props.children}
    </li>
  );
};

export default User;
