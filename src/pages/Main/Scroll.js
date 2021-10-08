import React, { Component, useRef } from 'react';
import './Scroll.scss';
import { Link } from 'react-router-dom';

class Scroll extends Component {
  // function RogoEvent () {
  //   const scroll = useRef(null);

  // function handleScroll() {
  //   window.addEventListener('scroll', () => {
  //     const value = window.scrollY;
  //     scroll.current.style.middle = value + 'px';
  //   })

  //   }
  // }

  render() {
    return (
      <section className="scrollSection">
        <div className="rogoScrollBox">
          <Link to="/">
            <img alt="rogoScroll" src="/images/LogoScroll.png" />
          </Link>
        </div>
      </section>
    );
  }
}

export default Scroll;
