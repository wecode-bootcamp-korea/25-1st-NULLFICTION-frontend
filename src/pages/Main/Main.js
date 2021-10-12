import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="mainContainer">
          <Nav />
        </div>
        <Footer />
      </main>
    );
  }
}

export default Main;
