import React, { Component } from 'react';
import './Scroll.scss';

class Scroll extends Component {
  constructor() {
    super();
    this.state = { scrollY: 0 };
  }

  detectScroll = () => {
    this.setState({
      scrollY: window.scrollY,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.detectScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.detectScroll);
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
