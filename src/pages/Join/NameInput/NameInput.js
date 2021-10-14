import React, { Component } from 'react';
import Input from '../Input/Input';

class NameInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <Input
        name="name"
        label="Name"
        type="text"
        maxLength="6"
        handleInput={handleInput}
      />
    );
  }
}

export default NameInput;
