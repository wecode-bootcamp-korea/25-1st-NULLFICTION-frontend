import React, { Component } from 'react';
// import Button from '../Button/Button';
import '../SignUp/SignUp.scss';

class SignUp extends Component {
  render() {
    const { name, label } = this.props;
    return (
      <div className="signUpBtn">
        <label>{label}</label>
        <button>{name}</button>
      </div>
    );
  }
}

export default SignUp;
