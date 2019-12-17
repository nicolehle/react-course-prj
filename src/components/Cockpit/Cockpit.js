import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {
  const btnElRef = useRef(null);

  useEffect(() => {
    btnElRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = '';
  if(props.showPerson){
    btnClass = classes.Red;
  }
  if(props.person.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.person.length <=1){
    assignedClasses.push(classes.bold);
  }


  return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button
        ref={btnElRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Name!</button>
        <button onClick={props.login}>log in</button>
    </div>
)}

export default Cockpit;
