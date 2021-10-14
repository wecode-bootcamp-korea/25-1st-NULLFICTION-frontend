import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ImgList.scss';

class ImgList extends Component {
  render() {
    return (
      <section className="imgSection">
        <div className="mainImgPBox">
          <div className="soapTopBox textBox">
            <Link to="/">
              <img
                alt="soapTop"
                src="https://images.unsplash.com/photo-1622116555322-a5d04117efce?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1617507089522-cef1a40c4c61?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDY3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="womanTop"
              />
            </Link>
          </div>
          <div className="sampleTopBox textBox">
            <Link to="/">
              <img
                alt="sampleTop"
                src="https://images.unsplash.com/photo-1620917669809-1af0497965de?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1523772354886-34a1dc2f72e7?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1601327413082-1eefaafeb2b8?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDIxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
          <div className="creamBox">
            <Link to="/">
              <img
                alt="cream"
                src="https://images.unsplash.com/photo-1620946419923-06eec7e45220?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDQxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="cream"
              />
            </Link>
          </div>
          <div className="womanBottomBox textBox">
            <Link to="/">
              <img
                alt="womanBottom"
                src="https://images.unsplash.com/photo-1594824483472-f70a4decd6d8?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
                src="https://images.unsplash.com/photo-1511933801659-156d99ebea3e?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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

export default ImgList;
