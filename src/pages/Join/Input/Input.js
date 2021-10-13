import React, { Component, useDebugValue } from 'react';
import '../Input/Input.scss';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      isInputFocus: false,
      isInputBlur: false,
    };
  }

  onInputFocus = () => {
    const { isInputFocus } = this.state;
    this.setState({
      isInputFocus: true,
    });
  };

  onInputBlur = () => {
    const { isInputFocus } = this.state;
    this.setState({
      isInputBlur: true,
    });
  };

  render() {
    const { isInputFocus, isInputBlur } = this.state;
    const {
      name,
      label,
      type,
      maxLength,
      handleInput,
      checkLabel,
      onInputFocus,
      onInputBlur,
    } = this.props;

    return (
      <div className="userId">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          maxLength={maxLength}
          onChange={handleInput}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
        />
        {name.length > 0 && isInputBlur && <span>{checkLabel}</span>}
      </div>
    );
  }
}

export default Input;
