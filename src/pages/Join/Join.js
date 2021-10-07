import React, { Component } from 'react';
import './Join.scss';

class Join extends Component {
  render() {
    return (
      <main className="Join">
        <div className="container">
          <h1>Sign Up</h1>
          <ul className="join-inner">
            <li>
              <label>ID</label>
              <input type="text" name="id" />
              <span>아이디를 입력해 주세요.</span>
            </li>
            <li>
              <label>Password</label>
              <input type="password" name="id" maxlength="16" />
              <span>
                (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
              </span>
            </li>
            <li>
              <label>Password Check</label>
              <input type="password" name="id" maxlength="16" />
              <span></span>
            </li>
            <li>
              <label>Name</label>
              <input type="text" name="id" />
              <span></span>
            </li>

            <li className="mobile">
              <label>Mobile</label>
              <select className="mobile1">
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
              </select>
              <input type="text" maxlength="4"></input>
              <input type="text" maxlength="4"></input>
              <span></span>
            </li>

            <li>
              <label>E-mail</label>
              <input type="text" name="id" />
              <span></span>
            </li>
            <li className="birthDay">
              <label>Birthday</label>
              <input type="text" placeholder="YYYY" maxlength="4" />
              <input type="text" placeholder="MM" maxlength="2" />
              <input type="text" placeholder="DD" maxlength="2" />
            </li>
          </ul>
          <div className="register-agreement">
            <div className="agreement-header">
              <h4>Agreement</h4>
              <span>READ</span>
            </div>
            <div className="agreement-content">
              <p>
                제1조(목적)
                <br />
                이 약관은 논픽션(주)(전자상거래 사업자)가 운영하는 논픽션(이하
                “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라
                한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및
                책임사항을 규정함을 목적으로 합니다.
                <br />
                ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
                반하지 않는 한 이 약관을 준용합니다.」
              </p>
              <p>
                제2조(정의)
                <br />① “몰”이란
                <span>논픽션(주)</span>
                <span>
                  가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기
                  위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수
                  있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을
                  운영하는 사업자의 의미로도 사용합니다.
                </span>
              </p>
            </div>
            <p className="check">
              <span>이용약관에 동의하십니까?</span>
              <input type="checkbox"></input>
              <label>동의함</label>
            </p>
          </div>
          <div className="register-agreement">
            <div className="agreement-header">
              <h4>Privacy Policy</h4>
              <span>READ</span>
            </div>
            <div className="agreement-content">
              <p>
                제1조(목적)
                <br />
                이 약관은 논픽션(주)(전자상거래 사업자)가 운영하는 논픽션(이하
                “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라
                한다)를 이용함에 있어 사이버 몰과 이용자의 권리.의무 및
                책임사항을 규정함을 목적으로 합니다.
                <br />
                ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
                반하지 않는 한 이 약관을 준용합니다.」
              </p>
              <p>
                제2조(정의)
                <br />① “몰”이란
                <span>논픽션(주)</span>
                <span>
                  가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기
                  위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수
                  있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을
                  운영하는 사업자의 의미로도 사용합니다.
                </span>
              </p>
            </div>
            <p className="check">
              <span>개인정보 수집 및 이용에 동의하십니까? </span>
              <input type="checkbox"></input>
              <label>동의함</label>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Join;
