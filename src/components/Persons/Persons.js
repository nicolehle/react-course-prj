import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render(){

    return this.props.person.map((el, index) => {

      return (
        <Person
        click={() => this.props.clicked(index)}
        name={el.name}
        age={el.age}
        key={el.id}
        changed={(event) => this.props.changed(event, el.id)}
        isAuth ={this.props.isAuthenticated}/>
      )
    })
  }
};

export default Persons;
