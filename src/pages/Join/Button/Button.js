import React, { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const { name, label, checkForm } = this.props;
    return (
      <div className="join-btn">
        <label>{label}</label>
        <button onClick={checkForm}>{name}</button>
      </div>
    );
  }
}

export default Button;
