import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './Person.module.css';
import Auxiliary from '../../../Auxiliary/Auxiliary';
import withClass from '../../../Auxiliary/WithClass';

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();

  }

  componentDidMount(){
    this.inputElementRef.current.focus();
  }

  render(){

    return (
      <Auxiliary>
      {this.props.isAuth ? <p>Authenticated!</p> : <p>Plz, log in</p>}
      <p onClick={this.props.click}>I am a {this.props.name}, age of {this.props.age}</p>
      <p>{this.props.children}</p>
      <input
        ref={this.inputElementRef}
        type="text"
        onChange={this.props.changed}
        value={this.props.name}/>
      </Auxiliary>
    )
  }

};

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);
