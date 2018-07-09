import React from 'react';
import Aux from '../../hoc/Auxible'

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    const btnClass = props.showPersons ? [classes.Button, classes.Red].join(' ') : classes.Button;    

    if (props.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }

    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>Hello</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button> 
        </Aux>
    );
};

export default cockpit;