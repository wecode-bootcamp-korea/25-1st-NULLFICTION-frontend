import React, { Component, useRef } from 'react';
import './Scroll.scss';
import { Link } from 'react-router-dom';
import { ScrollRotate } from 'react-scroll-rotate';
import { func } from 'prop-types';

class Scroll extends Component {
  scrollRotate = () => {
    console.log('ing...');
    const image = document.querySelector('.rogoScroll');
    image.style.transform = 'rotate(' + window.pageYOffset / 2 + 'deg)';
  };
  componentDidMount = () => {
    window.addEventListener('onscroll', ScrollRotate);
  };
  render() {
    console.log('render...');
    // window.onscroll = function () {
    //   ScrollRotate();
    // };

    return (
      <section className="scrollSection">
        <div className="rogoScrollBox">
          <Link to="/">
            <img
              // ref={ scroll }
              onScroll={ScrollRotate}
              alt="rogoScroll"
              src="/images/LogoScroll.png"
              className="rogoScroll"
            />
          </Link>
        </div>
      </section>
    );
  }
}

export default Scroll;
