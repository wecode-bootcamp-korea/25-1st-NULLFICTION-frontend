import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isShopHovered: false,
      isAboutHovered: false,
      shopList: [
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
      ],
      aboutList: [
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
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        <div
          className="category wrapBox"
          onMouseEnter={() =>
            this.setState({ isShopHovered: !this.state.isShopHovered })
          }
          onMouseLeave={() =>
            this.setState({ isShopHovered: !this.state.isShopHovered })
          }
        >
          <Link to="/">SHOP</Link>
          {this.state.isShopHovered && (
            <ul className="shopCloseBox">
              {this.state.shopList.map((list, index) => {
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
            this.setState({ isAboutHovered: !this.state.isAboutHovered })
          }
          onMouseLeave={() =>
            this.setState({ isAboutHovered: !this.state.isAboutHovered })
          }
        >
          <Link to="/">ABOUT</Link>
          {this.state.isAboutHovered && (
            <ul className="aboutCloseBox">
              {this.state.aboutList.map((list, index) => {
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
