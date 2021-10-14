import React, { Component } from 'react';
import { URL } from '../config';
import '../Input/Input.scss';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      isAvailableId: false,
    };
  }

  isFormBlur = () => {
    const { isCheckedIdform } = this.state;
    this.setState({
      isAvailableId: true,
    });
  };

  render() {
    const {
      name,
      label,
      type,
      maxLength,
      handleInput,
      checkLabel,
      isAvailableId,
      value,
    } = this.props;
    return (
      <div className="userId info">
        <label>{label}</label>
        <input
          value={value}
          type={type}
          name={name}
          maxLength={maxLength}
          onChange={handleInput}
          onBlur={this.isIdFormBlur}
        />
        <span>{checkLabel}</span>
        {isAvailableId ? (
          <span>{`${name}는 사용가능한 아이디 입니다.`}</span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Input;
