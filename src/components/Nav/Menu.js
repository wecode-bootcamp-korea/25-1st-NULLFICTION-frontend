import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.scss';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isShopHovered: false,
      isAboutHovered: false,
      link: '',
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
                    <Link
                      to={
                        //link가 categoryUrl일때 index를 붙이고 그렇지 않을떄 link를 리턴
                        list.link === categoryUrl
                          ? `${categoryUrl}${index - 1}`
                          : list.link
                      }
                    >
                      {list.text}
                    </Link>
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

export default withRouter(Menu);
const categoryUrl = '/products?main-category=';
const baseUrl = '/products?';

const shopList = [
  {
    link: baseUrl,
    text: 'SHOP ALL',
  },
  {
    link: `${baseUrl}best-seller=4`,
    text: 'BEST SELLER',
  },
  {
    link: categoryUrl,
    text: 'PERFUME',
  },
  {
    link: categoryUrl,
    text: 'BODY CARE',
  },
  {
    link: categoryUrl,
    text: 'HAND CARE',
  },
  {
    link: categoryUrl,
    text: 'LIP CARE',
  },
  {
    link: categoryUrl,
    text: 'HOME OBJECTS',
  },
  {
    link: categoryUrl,
    text: 'GIFT SET',
  },
  {
    link: categoryUrl,
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
