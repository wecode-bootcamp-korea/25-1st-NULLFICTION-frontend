import React, { Component } from 'react';
// import Button from '../Button/Button';
import '../SignUp/Outer.scss';

class Outer extends Component {
  render() {
    const { label, eventLabel, image } = this.props;
    return (
      <div className="another-join">
        <label>{label}</label>
        <div className="outerApi">
          <img src={image} alt="kakaoImage" />
        </div>
        <label>{eventLabel}</label>
      </div>
    );
  }
}

export default Outer;
