import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      giftList: [
        {
          src: '/',
          title: '공식 온라인',
        },
        {
          src: '/',
          title: '스토어 혜택',
        },
        {
          src: '/',
          title: '무료 시향지 신청',
        },
      ],
      infoList: [
        {
          src: '',
          title: '배송 & 교환/반품',
        },
        {
          src: '',
          title: '이용약관',
        },
        {
          src: '',
          title: '개인정보 보호정책',
        },
        {
          src: '',
          title: '적립금안내',
        },
        {
          src: '',
          title: '주문조회',
        },
      ],
      contactList: [
        {
          src: '',
          title: '문의하기',
        },
        {
          src: '',
          title: '자주묻는 질문',
        },
        {
          src: '',
          title: '공지사항',
        },
        {
          src: '',
          title: '고객 센터',
        },
        {
          src: '',
          title: '매장안내',
        },
      ],
      socialList: [
        {
          src: '',
          title: 'Instagram',
        },
        {
          src: '',
          title: 'Facebook',
        },
        {
          src: '',
          title: 'Printerest',
        },
        {
          src: '',
          title: 'Kakao',
        },
      ],
    };
  }
  render() {
    return (
      <footer>
        <article>
          <section>
            {/* <div className="leftBox"> */}
            <ul className="firstWrapBox">
              CUSTOMER SERVICE
              <li className="number">
                <i class="fas fa-phone-alt"></i>
                1666-7891
              </li>
              <li className="time">
                <i class="far fa-clock"></i>
                10:00 ~ 17:00 (Lunch Time 12:00 ~ 13:30)
              </li>
              <li className="day">
                <i class="fas fa-check"></i>
                토, 일요일 및 공휴일 휴무
              </li>
            </ul>
            {/* </div> */}
            {/* <div className="rightBox"> */}
            <ul className="wrapBox">
              GIFT
              {this.state.giftList.map((list, index) => {
                return (
                  <li className="text" key={index}>
                    <Link to={list.src}>{list.title}</Link>
                  </li>
                );
              })}
            </ul>

            <ul className="wrapBox">
              INFO
              {this.state.infoList.map((list, index) => {
                return (
                  <li className="text" key={index}>
                    <Link to={list.src}>{list.title}</Link>
                  </li>
                );
              })}
            </ul>

            <ul className="wrapBox">
              CONTACT US
              {this.state.contactList.map((list, index) => {
                return (
                  <li className="text" key={index}>
                    <Link to={list.src}>{list.title}</Link>
                  </li>
                );
              })}
            </ul>

            <ul className="wrapBox">
              SOCIAL
              {this.state.socialList.map((list, index) => {
                return (
                  <li className="text" key={index}>
                    <Link to={list.src}>{list.title}</Link>
                  </li>
                );
              })}
            </ul>
            {/* </div> */}
          </section>
          <p>
            상호명 : (주)널픽션 / 대표 : 홍길동 / 사업자 등록번호 : 819-87-00000
            / 통신판매업신고번호 : 2019-서울용산-0000 / 주소 : 서울시 용산구
            대사관로11길 20-00 / 전화: 02-790-1234 <br />
            고객센터 : 1666-1234 / 문의 : hello@nullfiction.kr / Wholesale 문의
            :wholesale@nullfiction.kr 마케팅/PR 문의 : press@nullfiction.kr/
            개인정보보호책임자 : 홍길동
          </p>
        </article>
      </footer>
    );
  }
}

export default Footer;
