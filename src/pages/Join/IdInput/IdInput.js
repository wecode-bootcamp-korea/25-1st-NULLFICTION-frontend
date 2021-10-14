import React, { Component } from 'react';
import Input from '../Input/Input';

class IdInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <Input
        name="id"
        label="ID"
        type="text"
        maxLength="12"
        handleInput={handleInput}
      />
    );
  }
}

export default IdInput;
