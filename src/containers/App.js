import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxible';

import classes from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state = {
      persons: [
        { id: 'dasd1', name: 'Michel', age:23 },
        { id: 'dczx2', name: 'Rudik', age: 22 },
        { id: 'xcvb3', name: 'Gora', age: 25 }
      ],
      framework: ['Vue', 'React', 'Angular'],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');    
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');  
  }

  componentWillReceiveProps(nextProps) {
      console.log('[Update App.js] Inside componentWillReceiveProps', nextProps);        
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState, this.props);          
  //     return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);          
  }

  componentDidUpdate() {
      console.log('[Update App.js] Inside componentDidUpdate');
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

    this.setState( (prevState, props) => {
      return {
        showPersons: !doesPerson,
        toggleClicked: prevState.toggleClicked + 1
      }
      
    } );
  }

  render() {
    console.log('[App.js] Inside render()'); 
    let persons = null;    

    if (this.state.showPersons) {
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.changedNameHandler} />; 
    }    

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons:true})}}>
          show Persons
        </button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
    // return React.createElement('div', { className: 'App', }, React.createElement('h1', null, 'Hello, I\'m your first React App!'));
  }
}

export default withClass(App, classes.App);
