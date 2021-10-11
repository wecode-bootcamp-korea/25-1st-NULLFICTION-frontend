import React, { Component } from 'react';
import Input from '../Input/Input';
import '../Mobile/Mobile.scss';

class Mobile extends Component {
  render() {
    return (
      <li className="mobile">
        <label>Mobile</label>
        <div className="mobile-input-inner">
          <select className="mobileNum">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
          </select>
          <input type="text" maxLength="4"></input>
          <input type="text" maxLength="4"></input>
        </div>
        <span></span>
      </li>
    );
  }
}

export default Mobile;
