import React, { Component } from 'react';
import Input from '../Input/Input';

class EmailInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <Input
        name="email"
        type="email"
        label="E-mail"
        handleInput={handleInput}
      />
    );
  }
}

export default EmailInput;
