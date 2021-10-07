import React, { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const { name, label, isButtonOn, isValid, color } = this.props;
    return (
      <div className="btn">
        <label>{label}</label>
        <button className={color + (isValid ? ' buttonOn' : ' buttonOff')}>
          {name}
        </button>
      </div>
    );
  }
}

export default Button;
