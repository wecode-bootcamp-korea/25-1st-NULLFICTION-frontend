import React, { Component } from 'react';
import '../CheckBox/CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { label, handleChange } = this.props;
    return (
      <p className="check">
        <label>{label}</label>
        <input type="checkbox" onClick={handleChange}></input>
        <span>동의함</span>
      </p>
    );
  }
}

export default CheckBox;
