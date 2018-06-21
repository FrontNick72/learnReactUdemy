import React, { Component } from 'react';
import Person from './Person/Person';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Nikita', age:'23' },
      { name: 'Gosha', age: '22' },
      { name: 'Pasha', age: '25' }
    ],
    framework: ['Vue', 'React', 'Angular'],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('click');
    this.setState({
      persons: [
        { name: newName, age: '23' },
        { name: 'Gosha', age: '22' },
        { name: 'Pasha', age: '55' }
      ],
      framework: ['React', 'Vue', 'Angular']
    })
  }

  changedNameHandler = (event) => {
    // console.log('click');
    this.setState({
      persons: [
        { name: 'Nikita', age: '23' },
        { name: event.target.value, age: '22' },
        { name: 'Pasha', age: '55' }
      ],
      framework: ['React', 'Vue', 'Angular']
    })
  }

  togglePersonsHandler = (event) => {
    const doesPerson = this.state.showPersons;

    this.setState({
      showPersons: !doesPerson
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Nikita!!!')} 
            changed={this.changedNameHandler}>My hobiies: {this.state.framework[1]} - the best</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, I'm your first React App!</h1>
        <p>Hello</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* this.state.persons.forEach(element => {
          <Person name={element.name} age={element.age} />
        }); */}      
        {persons}
      </div>      
    );
    // return React.createElement('div', { className: 'App', }, React.createElement('h1', null, 'Hello, I\'m your first React App!'));
  }
}

export default App;
