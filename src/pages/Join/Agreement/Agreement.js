import React, { Component } from 'react';
import Check from './Check/Check';
import CheckBox from './CheckBox/CheckBox';
import '../Agreement/Agreement.scss';

class Agreement extends Component {
  render() {
    const { idx, name, label, text, handleClickChange } = this.props;

    return (
      <div className="Agreement">
        <div className="agreement-title">
          <h4>{name}</h4>
          <span className="read">READ</span>
        </div>
        <Check text={text} />
        <CheckBox
          idx={idx}
          label={label}
          handleClickChange={handleClickChange}
        />
      </div>
    );
  }
}
export default Agreement;
