import React, { Component } from 'react';
import './Img.scss';
import { Link } from 'react-router-dom';

class Img extends Component {
  // constructor() {
  //   super();
  //   this.state({

  //   });
  // }

  render() {
    return (
      <section className="imgSection">
        <div className="mainImgPBox">
          <div className="soapTopBox textBox">
            <Link to="/">
              <img
                alt="soapTop"
                src="/images/soapTop.jpg"
                className="soapTop"
              />
              <div className="leftTextBox">
                <h3>[NEW] 베르가못과 얼그레이의 향, 카노페 센티드 솝 </h3>
                <br /> <br />
                <br />
                <p>
                  내면의 목소리를 발견하는 시간. <br />
                  향기를 입는 또 하나의 방식을 이야기합니다.
                </p>
              </div>
            </Link>
          </div>
          <div className="ImgEmptyBox"></div>
        </div>
        <div className="mainImgPBox ">
          <div className="womanTopBox textBox">
            <Link to="/">
              <img
                alt="womanTop"
                src="/images/womanTop.jpg"
                className="womanTop"
              />
            </Link>
          </div>
          <div className="sampleTopBox textBox">
            <Link to="/">
              <img
                alt="sampleTop"
                src="/images/sampleTop.jpg"
                className="sampleTop"
              />
              <div className="rightTextBox">
                <h3>[NEW] 다마스크 로즈의 향, 로즈페일 센티드 솝 </h3>
                <br /> <br />
                <br />
                <p>
                  천연 식물 유래 성분 95%로 이루어진 <br />
                  깨끗한 장미 향의 베지터블 솝입니다. <br />
                  향기를 입는 또 하나의 방식을 이야기합니다.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mainImgPBox">
          <div className="bathRoomBox textBox">
            <Link to="/">
              <img
                alt="bathRoom"
                src="/images/bathRoom.jpg"
                className="bathRoom"
              />
              <div className="shortTextBox">
                <h3> Body Care </h3>
              </div>
            </Link>
          </div>
          <div className="ImgEmptyBox"></div>
        </div>
        <div className="mainImgPBox">
          <div className="sampleBottomBox textBox">
            <Link to="/">
              <img
                alt="sampleBottom"
                src="/images/sampleBottom.jpg"
                className="sampleBottom"
              />
              <div className="shortTextBox">
                <h3> hand Care </h3>
              </div>
            </Link>
          </div>
          <div className="ImgEmptyBox"></div>
        </div>
        <div className="mainImgPBox">
          <div className="creamBox textBox">
            <Link to="/">
              <img alt="cream" src="/images/cream.jpg" className="cream" />
            </Link>
          </div>
          <div className="womanBottomBox textBox">
            <Link to="/">
              <img
                alt="womanBottom"
                src="/images/womanBottom.jpg"
                className="womanBottom"
              />
              <div className="shortTextBox">
                <h3> Shop All </h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="mainImgPBox">
          <div className="twotoneBox textBox">
            <Link to="/">
              <img
                alt="twotone"
                src="/images/twotone.jpg"
                className="twotone"
              />
              <div className="shortTextBox">
                <h3> Body Care </h3>
              </div>
            </Link>
          </div>
          <div className="ImgEmptyBox"></div>
        </div>
      </section>
    );
  }
}

export default Img;
