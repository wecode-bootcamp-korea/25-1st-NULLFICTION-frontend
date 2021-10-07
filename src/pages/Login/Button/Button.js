import React, { Component } from 'react';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const { name, label, isButtonOn } = this.props;
    return (
      <div className="btn">
        <label>{label}</label>
        <button className={isButtonOn ? 'buttonOn' : 'buttonOff'}>
          {name}
        </button>
      </div>
    );
  }
}

export default Button;
