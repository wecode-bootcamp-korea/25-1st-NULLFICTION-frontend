import React, { Component } from 'react';
import './Img.scss';
import { Link } from 'react-router-dom';

class Img extends Component {
  // constructor() {
  //   super();
  //   this.state({
  //     imgTextBox: false,
  //   });
  // }

  render() {
    return (
      <section className="imgSection">
        <div className="mainImgPBox">
          <div className="mainImgCBox leftImg">
            <Link to="/">
              <img
                alt="soapTop"
                src="/images/soapTop.jpg"
                className="soapTop"
              />
              <div className="imgTextBox">
                <h3>[NEW] 베르가못과 얼그레이의 향, 카노페 센티드 솝 </h3>
                <br /> <br />
                <br />
                <p>
                  {' '}
                  내면의 목소리를 발견하는 시간. <br />
                  향기를 입는 또 하나의 방식을 이야기합니다.{' '}
                </p>
              </div>
            </Link>
          </div>
          <div className="mainImgCBox"></div>
        </div>
        <div className="mainImgPBox ">
          <div className="mainImgCBox smallImg">
            <Link to="/">
              <img
                alt="womanTop"
                src="/images/womanTop.jpg"
                className="womanTop"
              />
            </Link>
          </div>
          <div className="mainImgCBox">
            <Link to="/">
              <img
                alt="sampleTop"
                src="/images/sampleTop.jpg"
                className="sampleTop"
              />
            </Link>
          </div>
        </div>
        <div className="mainImgPBox">
          <div className="mainImgCBox leftImg">
            <Link to="/">
              <img
                alt="bathRoom"
                src="/images/bathRoom.jpg"
                className="bathRoom"
              />
            </Link>
          </div>
          <div className="mainImgCBox"></div>
        </div>
        <div className="mainImgPBox">
          <div className="mainImgCBox leftImg">
            <Link to="/">
              <img
                alt="sampleBottom"
                src="/images/sampleBottom.jpg"
                className="sampleBottom"
              />
            </Link>
          </div>
          <div className="mainImgCBox"></div>
        </div>
        <div className="mainImgPBox rightBox">
          <div className="mainImgCBox smallImg">
            <Link to="/">
              <img alt="cream" src="/images/cream.jpg" className="cream" />
            </Link>
          </div>
          <div className="mainImgCBox rightImg">
            <Link to="/">
              <img
                alt="womanBottom"
                src="/images/womanBottom.jpg"
                className="womanBottom"
              />
            </Link>
          </div>
        </div>
        <div className="mainImgPBox">
          <div className="mainImgCBox leftImg">
            <Link to="/">
              <img
                alt="twotone"
                src="/images/twotone.jpg"
                className="twotone"
              />
            </Link>
          </div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default Img;
