import React, { Component } from 'react';
import Input from '../Input/Input';

class PwInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <Input
        name="pw"
        type="password"
        label="Password"
        checkLabel="(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)"
        maxLength="16"
        handleInput={handleInput}
      />
    );
  }
}

export default PwInput;
