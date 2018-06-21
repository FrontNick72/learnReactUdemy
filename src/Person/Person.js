import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        backgroundColor: 'white',
        fontSize: '24px',
        border: '1px solid red',
        textAlign: 'center'
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input style={style} type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;