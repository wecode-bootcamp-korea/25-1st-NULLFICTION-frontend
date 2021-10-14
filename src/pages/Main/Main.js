import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ImgList from './ImgList';
import Scroll from './Scroll';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <Scroll />
          <ImgList />
        </div>
      </main>
    );
  }
}

export default Main;
