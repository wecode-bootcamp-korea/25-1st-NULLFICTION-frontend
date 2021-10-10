import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ImgList from './ImgList';
import Scroll from './Scroll';
import './Main.scss';

class Main extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     imgList: [],
  //   };
  // }
  // componentDidMount() {
  //   fetch('http://localhost:3000/imgData.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ imgList: res });
  //     });
  // }
  render() {
    // const { imgList } = this.state;
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
