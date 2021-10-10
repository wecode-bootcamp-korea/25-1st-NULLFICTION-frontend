import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ImgList from './ImgList';
import Scroll from './Scroll';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav />
        <Scroll />
        <ImgList />
      </div>
    );
  }
}

export default Main;
