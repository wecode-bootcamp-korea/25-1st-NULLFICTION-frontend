import React, { Component } from 'react';
import '../Input/Input.scss';

class Input extends Component {
  render() {
    const { name, label, type, placeholder, handleButton, getInputValue } =
      this.props;
    return (
      <div className="input-inner">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={getInputValue}
          // onKeyPress={handleButton}
        />
      </div>
    );
  }
}
export default Input;
