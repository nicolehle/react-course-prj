import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.alt ? 'red' : 'green' };
  color: white;
  border: none;
  padding: 16px;
  font-size: 16px;
  &:hover {
    background: ${props => props.alt ? 'salmon' : 'lightgreen' };
    color: black;
`;

class App extends Component {
  state = {
    person: [
      {id:'asdgs1', name: 'Nicole', age: 26},
      {id:'asdgs2', name: 'Daniel', age: 30},
      {id:'asdgs3', name: 'Lolo', age: 234}
    ],
    showPerson: false
  }

  changeNameHandler = (event, id) => {

    const personIndex = this.state.person.findIndex(p => p.id === id);

    const person = {...this.state.person[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState(
      {
        person: persons
      }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;

    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
     const persons = [...this.state.person];
     persons.splice(personIndex,1);

     this.setState({
       person: persons
     })
  }

  render() {

    // const style = {
    //   background: 'green',
    //   color: 'white',
    //   border: 'none',
    //   padding: '16px',
    //   fontSize: '16px',
    //   ':hover': {
    //     background: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <=1){
      classes.push('bold');
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((el, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={el.name}
            age={el.age}
            key={el.id}
            changed={(event) => this.changeNameHandler(event, el.id)}/>
          })}
        </div>
      )

      // style.background = 'red';
      // style[':hover'] = {
      //   background: 'salmon',
      //   color: 'black'
      // }
    }

     return (
          <div className="App">
            <h1>Hello, REACT</h1>
            <p className={classes.join(' ')}>This is working!</p>
            <StyledButton
            alt = {this.state.showPerson}
            onClick={this.togglePersonHandler}>Toggle Name!</StyledButton>
            {persons}
          </div>
    );
  }
}
export default App;
