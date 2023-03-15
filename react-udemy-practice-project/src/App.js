import React, { useState } from 'react';

import UserList from './components/UserDetails/UserList/UserList';
import UserInput from './components/UserDetails/UserInput/UserInput';
import './App.css';

const App = () => {
  const [userDetails, setUserDetails] = useState([
    { name: 'Gopal', age: 20, id: 'u1' },
    { name: 'Bala', age: 30, id: 'u2' }
  ]);

  const addUserHandler = ({name, age}) => {
    setUserDetails(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name, age, id: Math.random().toString() });
      return updatedUsers;
    });
  };
 
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (userDetails.length > 0) {
    content = (
      <UserList items={userDetails} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
