import React, { Component } from 'react';
import Input from './Input/Input';
import Mobile from './Mobile/Mobile';
import Agreement from './Agreement/Agreement';
import Button from './Button/Button';
import UESR_INFO from './Agreement/UESR_INFO';
import { SIGN_UP } from './config';
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
      id: '',
      pw: '',
      pwCheck: '',
      mobile: { num1: '', num2: '', num3: '' },
      checkList: { check1: false, check2: false, check3: false },
      isAgreementRead: { read1: false, read2: false, read3: false },
      usingid: false,
      usingpw: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleClickChange = e => {
    const { checkList } = this.state;
    const { name } = e.target;
    this.setState({
      checkList: {
        ...checkList,
        [name]: !checkList[name],
      },
    });
  };

  handleMobileInput = e => {
    const { mobile } = this.state;
    const { name, value } = e.target;
    this.setState({
      mobile: {
        ...mobile,
        [name]: value,
      },
    });
  };

  toggleAgreementRead = name => {
    const { isAgreementRead } = this.state;
    this.setState({
      isAgreementRead: { ...isAgreementRead, [name]: !isAgreementRead[name] },
    });
  };
  toggleIdCheck = () => {
    const { idCheck } = this.state;
    this.setState({
      idCheck: !idCheck,
    });
  };

  signUp = () => {
    const {
      id: username,
      pw: password,
      name,
      email,
      mobile,
      year,
      month,
      date,
      checkList,
    } = this.state;
    fetch(`${SIGN_UP}`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        birthday: `${year}-${month}-${date}`,
        mobile: `${mobile.num1}${mobile.num2}${mobile.num3}`,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('회원가입 축하드립니다.');
          this.props.goToLogin('login');
        } else {
          alert('이미 가입된 이메일 입니다.');
        }
      });
  };

  render() {
    const {
      name,
      email,
      mobile,
      year,
      month,
      date,
      id,
      pw,
      pwCheck,
      checkList,
    } = this.state;
    const checkForm = pw => {
      // const num = /[0-9]/;
      // const str = /[a-zA-Z]/;
      // const special = /[~!@#$%^&*()_+|<>?:{}]/;
      const formCheck =
        name &&
        email.includes('@') &&
        mobile.length >= 11 &&
        year > 1920 &&
        year < 2007 &&
        month > 0 &&
        month < 13 &&
        date > 0 &&
        date < 32 &&
        id &&
        pw.length >= 8 &&
        pwCheck === pw;

      formCheck
        ? this.signUp()
        : this.setState(
            {
              name: '',
              email: '',
              mobile: '',
              year: '',
              month: '',
              date: '',
              pw: '',
              pwCheck: '',
              gender: '',
            },
            () => {
              alert('회원가입 정보를 다시 확인해 주세요');
            }
          );
    };
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
              idCheck={this.state.idCheck}
              toggleIdCheck={this.toggleIdCheck}
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
            <Mobile
              name="num"
              label="Mobile"
              options={[
                { id: '0', option: '선택' },
                { id: '1', option: '010' },
                { id: '2', option: '011' },
                { id: '3', option: '016' },
                { id: '4', option: '017' },
                { id: '5', option: '018' },
                { id: '6', option: '019' },
              ]}
              handleMobileInput={this.handleMobileInput}
            />
            <Input name="email" type="email" label="E-mail" />
            <li className="birthDay">
              <label>Birthday</label>
              <input
                name="year"
                type="text"
                placeholder="YYYY"
                maxLength="4"
                onChange={this.handleInput}
              />
              <input
                name="month"
                type="text"
                placeholder="MM"
                maxLength="2"
                onChange={this.handleInput}
              />
              <input
                name="date"
                type="text"
                placeholder="DD"
                maxLength="2"
                onChange={this.handleInput}
              />
            </li>
          </ul>
          <div className="register-agreement">
            {UESR_INFO.map(data => {
              const { id, name, label, text } = data;
              return (
                <Agreement
                  key={id}
                  idx={id}
                  name={name}
                  label={label}
                  text={text}
                  handleClickChange={this.handleClickChange}
                  toggleAgreementRead={this.toggleAgreementRead}
                  isAgreementRead={this.state.isAgreementRead[`read${id}`]}
                />
              );
            })}
          </div>
          <Button name="Sign UP" checkForm={checkForm} />
        </div>
      </main>
    );
  }
}

export default Join;
