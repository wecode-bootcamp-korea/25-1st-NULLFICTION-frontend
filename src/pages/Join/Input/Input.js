import React, { Component } from 'react';
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
    this.setState({
      isInputFocus: true,
    });
  };

  onInputBlur = () => {
    this.setState({
      isInputBlur: true,
    });
  };

  render() {
    const { isInputBlur } = this.state;
    const { name, label, type, maxLength, handleInput, checkLabel } =
      this.props;

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
