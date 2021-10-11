import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Button/Button.scss';

class Button extends Component {
  render() {
    const {
      name,
      label,
      color,
      handleButton,
      findUserID,
      goToMain,
      goToSignUp,
    } = this.props;
    return (
      <div className="btn">
        <label>{label}</label>
        <button
          className={color + (handleButton ? ' buttonOn' : ' buttonOff')}
          onClick={(goToMain, goToSignUp)}
        >
          {name}
        </button>
        <Link to="#">
          <p>{findUserID}</p>
        </Link>
      </div>
    );
  }
}

export default Button;
