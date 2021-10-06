import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Nav />
      </div>
    );
  }
}

export default Main;
