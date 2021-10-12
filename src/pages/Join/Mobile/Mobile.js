import React, { Component } from 'react';
import '../Mobile/Mobile.scss';

class Mobile extends Component {
  render() {
    const { label, options, handleMobileInput } = this.props;
    return (
      <li className="mobile">
        <label>{label}</label>
        <div className="mobile-input-inner">
          <select
            className="mobileNum"
            name="num1"
            onChange={handleMobileInput}
          >
            {options.map(el => {
              return (
                <option key={el.id} value={el.value}>
                  {el.option}
                </option>
              );
            })}
          </select>
          <input
            name="num2"
            type="text"
            maxLength="4"
            onChange={handleMobileInput}
          ></input>

          <input
            name="num3"
            type="text"
            maxLength="4"
            onChange={handleMobileInput}
          ></input>
        </div>
        <span></span>
      </li>
    );
  }
}

export default Mobile;
