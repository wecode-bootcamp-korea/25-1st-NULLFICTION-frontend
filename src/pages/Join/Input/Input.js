import React, { Component } from 'react';
import { URL } from '../config';
import '../Input/Input.scss';

class Input extends Component {
  render() {
    const {
      name,
      label,
      type,
      maxLength,
      handleInput,
      checkLabel,
      isAvailableId,
      isIdCheck,
    } = this.props;

    return (
      <div className="userId">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          maxLength={maxLength}
          onChange={handleInput}
          onBlur={isIdCheck}
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
