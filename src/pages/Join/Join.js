import React, { Component } from 'react';
import Input from './Input/Input';
import Mobile from './Mobile/Mobile';
import BirthDay from './BirthDay/BirthDay';
import Agreement from './Agreement/Agreement';
import Button from './Button/Button';
import UESR_INFO from './Agreement/UESR_INFO';
import './Join.scss';

class Join extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      year: '',
      month: '',
      date: '',
      numOne: '',
      numTwo: '',
      numThree: '',
      id: '',
      pw: '',
      pwCheck: '',
      check: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChange = () => {
    const { check } = this.state;
    this.setState({
      check: !check,
    });
  };

  signUp = () => {
    const {
      id,
      pw,
      name,
      email,
      mobile,
      year,
      month,
      date,
      numOne,
      numTwo,
      numThree,
    } = this.state;
    fetch('http://10.58.7.78:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_id: id,
        password: pw,
        name: name,
        email: email,
        birthday: year + '-' + month + '-' + date,
        mobile: numOne + '-' + numTwo + '-' + numThree,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          this.props.history.push('/login');
        } else {
          alert('이미 가입된 이메일 입니다.');
        }
      });
  };

  render() {
    console.log(this.state);
    const { year, month, date, numOne, numTwo, numThree } = this.state;
    return (
      <main className="Join">
        <div className="container">
          <h1>Sign Up</h1>
          <ul className="join-inner">
            <Input
              name="id"
              label="ID"
              type="text"
              checkLabel="아이디를 입력해 주세요."
              maxLength="12"
              handleInput={this.handleInput}
            />
            <Input
              name="pw"
              type="password"
              label="Password"
              checkLabel="(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)"
              maxLength="16"
              handleInput={this.handleInput}
            />
            <Input
              name="pwCheck"
              label="Password Check"
              type="password"
              maxLength="16"
              handleInput={this.handleInput}
            />
            <Input
              name="name"
              label="Name"
              type="text"
              maxLength="6"
              handleInput={this.handleInput}
            />

            <li className="mobile">
              <label>Mobile</label>
              <div className="mobile-input-inner">
                <select className="mobileNum" name="numOne">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                </select>
                <input
                  name="numTwo"
                  type="tel"
                  maxLength="4"
                  value={numTwo}
                  onChange={this.handleInput}
                ></input>
                <input
                  name="numThree"
                  type="tel"
                  maxLength="4"
                  value={numThree}
                  onChange={this.handleInput}
                ></input>
              </div>
              <span></span>
            </li>
            <Input
              name="email"
              type="email"
              label="E-mail"
              handleInput={this.handleInput}
            />

            <li className="birthDay">
              <label>Birthday</label>
              <input
                name="year"
                type="text"
                placeholder="YYYY"
                maxLength="4"
                value={year}
                onChange={this.handleInput}
              />
              <input
                name="month"
                type="text"
                placeholder="MM"
                maxLength="2"
                value={month}
                onChange={this.handleInput}
              />
              <input
                name="date"
                type="text"
                placeholder="DD"
                maxLength="2"
                value={date}
                onChange={this.handleInput}
              />
            </li>
          </ul>
          <div className="register-agreement">
            {UESR_INFO.map(data => {
              const { id, name, label, text, check } = data;
              return (
                <Agreement
                  key={id}
                  id={id}
                  name={name}
                  label={label}
                  text={text}
                  check={check}
                  handleChange={this.handleChange}
                />
              );
            })}
          </div>
          <Button name="Sign UP" signUp={this.signUp} />
        </div>
      </main>
    );
  }
}

export default Join;
