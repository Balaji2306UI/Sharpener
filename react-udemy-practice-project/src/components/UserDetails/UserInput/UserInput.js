import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './UserInput.css';

const UserInput = props => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const nameInputChangeHandler = event => {
    setUserName(event.target.value);
    if(event.target.value.trim().length === 0){
      setIsNameValid(false);
    }
    else {
      setIsNameValid(true);
    }
  };

  const ageInputChangeHandler = event => {
    let age = event.target.value;
    setUserAge(age);
    if(age <= 0){
      setIsAgeValid(false);
    }
    else {
      setIsAgeValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    //props.onAddGoal(enteredValue);
    //setEnteredValue('');
    if((userAge <=0) && userName.trim().length === 0 ) {
      alert("Please enter a valid name and age!");
      return;
    }
    else if(userAge <=0) {
      alert("Please enter a valid age(>0)")
    }
    else if(userName.trim().length === 0) {
      alert("Please enter a valid name");
    }
    else {
      let userObj = {
        name: userName,
        age: userAge
      }
      props.onAddUser(userObj);
      setUserName('');
      setUserAge('');
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isNameValid ? '' : 'invalid'}`}>
        <label>Username</label>
        <input type="text" onChange={nameInputChangeHandler} value={ userName }/>
      </div>
      <div className={`form-control ${isAgeValid ? '' : 'invalid'}`}>
        <label>Age (Years)</label>
        <input type="number" onChange={ageInputChangeHandler} value={ userAge }/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default UserInput;
