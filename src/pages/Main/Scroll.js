import React, { Component } from 'react';
import './Scroll.scss';

class Scroll extends Component {
  constructor() {
    super();
    this.state = { scrollY: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ scrollY: window.scrollY });
    });
  }

  render() {
    return (
      <section className="scrollSection">
        <img
          alt="rogoScroll"
          src="/images/LogoScroll.png"
          className="rogoScroll"
          style={{ transform: `rotate(${this.state.scrollY * 0.2}deg)` }}
        />
      </section>
    );
  }
}

export default Scroll;
