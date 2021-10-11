import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'SEARCH',
    };
  }

  handleInput = () => {
    this.setState({
      placeholder: '',
    });
  };
  render() {
    return (
      <div className="searchBox">
        <input
          className="search"
          type="search"
          placeholder="SEARCH"
          onFocus={this.handleInput}
        />
      </div>
    );
  }
}

export default Input;
