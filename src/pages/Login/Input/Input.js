import React, { Component } from 'react';
import '../Input/Input.scss';

export default class Input extends Component {
  render() {
    const { name, label, type, placeholder, handleButton, handleInput } =
      this.props;
    return (
      <div className="input-inner">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
        />
      </div>
    );
  }
}
