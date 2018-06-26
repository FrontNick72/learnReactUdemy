import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const style = {
        backgroundColor: 'white',
        fontSize: '24px',
        border: '1px solid red',
        textAlign: 'center',
        marginBottom: '15px',
    }

    const rnd = Math.random();

    if ( rnd > 0.7 ) {
        throw new Error( 'Something went wrong' );
    }

    return (
        <div className={classes.Person}>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete person!</button>
        </div>
    );
}

export default person;