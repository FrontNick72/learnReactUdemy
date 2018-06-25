import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        backgroundColor: 'white',
        fontSize: '24px',
        border: '1px solid red',
        textAlign: 'center',
        marginBottom: '15px',
    }

    const personClass = {
        '@media (min-width: 1024px)': {
            width: '25%'
        }
    }

    return (
        <div style={personClass} className="Person">
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete person!</button>
        </div>
    );
}

export default Radium(person);