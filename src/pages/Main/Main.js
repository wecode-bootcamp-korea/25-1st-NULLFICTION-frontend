import React, { Component } from 'react';
import ImgList from './ImgList';
import Scroll from './Scroll';
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
