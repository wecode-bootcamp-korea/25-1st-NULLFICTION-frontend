import React, { Component } from 'react';
import Input from './Input/Input';
import Mobile from './Mobile/Mobile';
import Agreement from './Agreement/Agreement';
import Button from './Button/Button';
import UESR_INFO from './Agreement/UESR_INFO';
import { URL } from './config';
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
      isAvailableId: false,
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

  //회원가입
  signUp = e => {
    e.preventDefault();
    const {
      id,
      pw,
      pwCheck,
      name,
      email,
      mobile,
      year,
      month,
      date,
      checkList,
    } = this.state;
    const formCheckList =
      name &&
      email.includes('@') &&
      email.includes('.com') &&
      year > 1920 &&
      year < 2007 &&
      month > 0 &&
      month < 13 &&
      date > 0 &&
      date < 32 &&
      id &&
      pw.length >= 8 === pwCheck;

    const isCheckListValue = Object.entries(checkList).every(
      e => e[1] === true
    );

    if (formCheckList && isCheckListValue) {
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          username: id,
          password: pw,
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
            this.props.history.push('/member/login');
          } else {
            alert('이미 가입된 아이디 입니다.');
          }
        });
    } else {
      alert('아이디를 다시 확인하세요');
    }
  };

  isIdCheck = e => {
    const { value: username } = e.target;
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        username,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          this.setState({ isAvailableId: true });
        } else if (res.message === 'ERROR_ID_ALREADY_EXIST’') {
          console.log('이미 사용중인 아이디입니다.');
        }
      });
  };

  render() {
    return (
      <main className="Join">
        <div className="container">
          <h1>Sign Up</h1>
          <form className="join-inner">
            <Input
              name="id"
              label="ID"
              type="text"
              maxLength="12"
              handleInput={this.handleInput}
              isIdCheck={this.isIdCheck}
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
              label="Mobile"
              handleMobileInput={this.handleMobileInput}
              options={[
                { id: '0', option: '선택' },
                { id: '1', option: '010' },
                { id: '2', option: '011' },
                { id: '3', option: '016' },
                { id: '4', option: '017' },
                { id: '5', option: '018' },
                { id: '6', option: '019' },
              ]}
            />

            <Input
              name="email"
              type="email"
              label="E-mail"
              handleInput={this.handleInput}
            />

            <div className="birthDay">
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
            </div>
          </form>
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
          <Button name="SignUP" signUp={this.signUp} />
        </div>
      </main>
    );
  }
}

export default Join;
