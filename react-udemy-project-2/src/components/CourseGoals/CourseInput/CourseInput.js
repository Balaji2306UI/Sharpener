import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length === 0){
      setIsValid(false);
    }
    else {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={ enteredValue }/>
      </div>
      <Button type="submit" disabled={enteredValue.trim().length === 0}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
