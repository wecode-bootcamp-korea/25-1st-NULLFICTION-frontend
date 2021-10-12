import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isShopHovered: false,
      isAboutHovered: false,
    };
  }

  render() {
    const { isShopHovered, isAboutHovered } = this.state;
    return (
      <div className="menu">
        <div
          className="category wrapBox"
          onMouseEnter={() => this.setState({ isShopHovered: !isShopHovered })}
          onMouseLeave={() => this.setState({ isShopHovered: !isShopHovered })}
        >
          <Link to="/">SHOP</Link>
          {isShopHovered && (
            <ul className="shopCloseBox">
              {shopList.map((list, index) => {
                return (
                  <li className="shopClose" key={index}>
                    <Link to={list.link}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className="category wrapBox"
          onMouseEnter={() =>
            this.setState({ isAboutHovered: !isAboutHovered })
          }
          onMouseLeave={() =>
            this.setState({ isAboutHovered: !isAboutHovered })
          }
        >
          <Link to="/">ABOUT</Link>
          {isAboutHovered && (
            <ul className="aboutCloseBox">
              {aboutList.map((list, index) => {
                return (
                  <li className="shopClose" key={index}>
                    <Link to={list.link}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="category">
          <Link to="/">STORES</Link>
        </div>
        <div className="category">
          <Link to="/">CONTACT</Link>
        </div>
      </div>
    );
  }
}

export default Menu;

const shopList = [
  {
    link: '/product',
    text: 'SHOP ALL',
  },
  {
    link: '/',
    text: 'BEST SELLER',
  },
  {
    link: '/',
    text: 'PERFUME',
  },
  {
    link: '/',
    text: 'BODY CARE',
  },
  {
    link: '/',
    text: 'HAND CARE',
  },
  {
    link: '/',
    text: 'LIP CARE',
  },
  {
    link: '/',
    text: 'HOME OBJECTS',
  },
  {
    link: '/',
    text: 'GIFT SET',
  },
  {
    link: '/',
    text: 'ACC',
  },
];

const aboutList = [
  {
    link: '/',
    text: 'OUR STORY',
  },
  {
    link: '/',
    text: 'PRESS',
  },
  {
    link: '/',
    text: 'CAMPAIGN',
  },
];
