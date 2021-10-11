import React, { Component } from 'react';
import Check from './Check/Check';
import CheckBox from './CheckBox/CheckBox';
import '../Agreement/Agreement.scss';

class Agreement extends Component {
  render() {
    const { name, label, text, handleChange } = this.props;
    return (
      <div className="Agreement">
        <div className="agreement-title">
          <h4>{name}</h4>
          <span className="read">READ</span>
        </div>
        <Check text={text} />
        <CheckBox label={label} handleChange={handleChange} />
      </div>
    );
  }
}
export default Agreement;
