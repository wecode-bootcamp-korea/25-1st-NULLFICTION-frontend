import React, { Component } from 'react';
import Input from '../Input/Input';

class PwCheckInput extends Component {
  render() {
    const { handleInput } = this.props;
    return (
      <Input
        name="pwCheck"
        label="Password Check"
        type="password"
        maxLength="16"
        handleInput={this.handleInput}
      />
    );
  }
}

export default PwCheckInput;
