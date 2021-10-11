import React, { Component } from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import Outer from './SignUp/Outer';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    const { id, pw } = this.state;
    if (
      (id.length < 4 || id.length > 12) &&
      (pw.length < 8 || pw.length >= 12)
    ) {
      fetch('http://10.58.7.78:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          user_id: id,
          password: pw,
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user_id', response.user_id);
            this.props.history.push('/');
          } else if (response.message === 'INVALID_USER_ID') {
            alert('아이디를 다시 확인해주세요');
            this.setState({ id: '', pw: '' });
          }
        });
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      this.setState({ id: '', pw: '' });
    }
  };

  goToSignUp = () => {
    this.props.history.push('join');
  };

  render() {
    const { id, pw } = this.state;
    const handleButton = !(
      (id.length < 8 || id.length >= 12) &&
      (pw.length < 8 || pw.length >= 12)
    );
    return (
      <main className="Login">
        <div className="container">
          <h1>Login</h1>
          <form className="login-inner">
            <Input
              name="id"
              placeholder="아이디"
              type="text"
              label="ID"
              handleInput={this.handleInput}
            />
            <Input
              name="pw"
              placeholder="비밀번호"
              type="password"
              label="Password"
              handleInput={this.handleInput}
            />
            <Button
              name="Login"
              findUserID="Forgotten ID or Password"
              handleButton={handleButton}
              goToMain={this.goToMain}
            />
          </form>
          <form className="join-inner">
            <Button
              name="Sign Up"
              label="아직 회원이 아니세요?"
              color="signUpColor"
              goToSignUp={this.goToSignUp}
            />
            <Outer
              label="간편 로그인"
              image="../images/Login/kakao.png"
              alt="kakaoImage"
            />
            <Outer
              eventLabel="회원가입 시 3,000원 쿠폰 지급 및 무료 선물 포장 제공"
              image="../images/Login/naver.png"
              alt="naverImage"
            />
          </form>
        </div>
      </main>
    );
  }
}
