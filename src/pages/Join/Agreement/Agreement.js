import React, { Component } from 'react';
import Check from './Check/Check';
import CheckBox from './CheckBox/CheckBox';
import '../Agreement/Agreement.scss';

class Agreement extends Component {
  render() {
    const {
      idx,
      name,
      label,
      text,
      handleClickChange,
      isAgreementRead,
      toggleAgreementRead,
    } = this.props;

    console.log(this.props.isAgreementRead);
    return (
      <div className="Agreement">
        <div className="agreement-title">
          <h4>{name}</h4>
          <span className="read" onClick={toggleAgreementRead}>
            READ
          </span>
        </div>
        <Check text={text} isAgreementRead={isAgreementRead} />
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
