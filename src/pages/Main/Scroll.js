import React, { Component } from 'react';
import './Scroll.scss';
import { Link } from 'react-router-dom';

class Scroll extends Component {
  render() {
    return (
      <section className="scrollSection">
        <div className="rogoScrollBox">
          <Link to="/">
            <img
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
