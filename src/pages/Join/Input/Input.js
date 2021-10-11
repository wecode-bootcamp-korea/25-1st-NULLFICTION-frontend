import React, { Component } from 'react';
import '../Input/Input.scss';

class Input extends Component {
  render() {
    const { name, label, type, checkLabel, maxLength, handleInput } =
      this.props;
    return (
      <li className="userId">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          maxLength={maxLength}
          onChange={handleInput}
        />
        <span>{checkLabel}</span>
      </li>
    );
  }
}

export default Input;
