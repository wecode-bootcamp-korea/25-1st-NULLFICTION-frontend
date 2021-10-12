import React, { Component } from 'react';
import './Check.scss';

class Check extends Component {
  render() {
    const { id, text, isAgreementRead } = this.props;
    return (
      <div className={isAgreementRead ? 'clickContentOn' : 'clickContentOff'}>
        <p id={id}>{text}</p>
      </div>
    );
  }
}

export default Check;
