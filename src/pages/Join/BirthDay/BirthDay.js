import React, { Component } from 'react';
import Input from '../Input/Input';
import '../BirthDay/BirthDay.scss';

class BirthDay extends Component {
  // componentDidMount() {
  //   const { value } = this.state;
  //   this.setState({
  //     birthDayBox: value,
  //   });
  // }

  render() {
    const { label, maxlangth, getInputValue } = this.props;
    return (
      <li className="birthDay">
        <label>{label}</label>
        <input type="text" placeholder="YYYY" maxLength="4" />
        <input type="text" placeholder="MM" maxLength="2" />
        <input type="text" placeholder="DD" maxLength="2" />
      </li>
    );
  }
}

export default BirthDay;
