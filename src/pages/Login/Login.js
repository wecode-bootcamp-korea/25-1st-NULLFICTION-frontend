import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input/Input';
import Button from './Button/Button';
import Outer from './SignUp/Outer';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  getInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isButtonOn, id, pw } = this.state;
    const isValid = !(id.length < 4 || id.length > 12) && pw.length > 5;

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
              getInputValue={this.getInputValue}
            />
            <Input
              name="pw"
              placeholder="비밀번호"
              type="password"
              label="Password"
              getInputValue={this.getInputValue}
            />
            <Button name="Login" isValid={isValid} />
            <Link to="/">
              <p>Forgotten ID or Password</p>
            </Link>
          </form>
          <form className="join-inner">
            <Button
              name="Sign Up"
              label="아직 회원이 아니세요?"
              color="signUpColor"
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

export default Login;
