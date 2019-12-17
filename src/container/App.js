import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../Auxiliary/WithClass';
import Auxiliary from '../Auxiliary/Auxiliary';

class App extends Component {
  state = {
    person: [
      {id:'asdgs1', name: 'Nicole', age: 26},
      {id:'asdgs2', name: 'Daniel', age: 30},
      {id:'asdgs3', name: 'Lolo', age: 234}
    ],
    showPerson: false,
    changeCounter: 0,
    authenticated: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => p.id === id);
    const person = {...this.state.person[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return (
        {person: persons, changeCounter: prevState.changeCounter + 1}
      )
    }
  )
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;

    this.setState({
      showPerson: !doesShow
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  deletePersonHandler = (personIndex) => {
     const persons = [...this.state.person];
     persons.splice(personIndex,1);

     this.setState({
       person: persons
     })
  }

  render() {

    let persons = null;
    if(this.state.showPerson) {
      persons =
          <Persons
            person = {this.state.person}
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler}
            isAuthenticated = {this.state.authenticated}
          />;
    }

     return (
          <Auxiliary>
            <Cockpit
              title = {this.props.appTitle}
              showPerson={this.state.showPerson}
              person = {this.state.person}
              clicked = {this.togglePersonHandler}
              login={this.loginHandler}/>
            {persons}
          </Auxiliary>
    );
  }
}
export default withClass(App, classes.App);
