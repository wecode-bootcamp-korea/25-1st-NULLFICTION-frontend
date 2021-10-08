import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Img from './Img';
import Scroll from './Scroll';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav />
        <Scroll />
        <Img />
      </div>
    );
  }
}

export default Main;
