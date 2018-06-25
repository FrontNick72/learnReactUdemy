import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'dasd1', name: 'Michel', age:'23' },
      { id: 'dczx2', name: 'Rudik', age: '22' },
      { id: 'xcvb3', name: 'Gora', age: '25' }
    ],
    framework: ['Vue', 'React', 'Angular'],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changedNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    const doesPerson = this.state.showPersons;

    this.setState({
      showPersons: !doesPerson
    })
  }

  render() {
    let persons = null;

    const style = {
        backgroundColor: 'green',
        fontSize: '24px',
        border: '1px solid red',
        textAlign: 'center',
        marginBottom: '15px',
        ':hover': {
          backgroundColor: 'black',
          color: '#fff'
        }
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)} 
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.changedNameHandler(event, person.id)} />;    
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'red'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello, I'm your first React App!</h1>
          <p className={classes.join(' ')}>Hello</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>  
          {persons}
        </div>
      </StyleRoot>      
    );
    // return React.createElement('div', { className: 'App', }, React.createElement('h1', null, 'Hello, I\'m your first React App!'));
  }
}

export default Radium(App);
