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
  componentDidMount() {
    fetch(`${baseUrl}${this.props.location.search}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ link: data });
      });
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
                console.log(`${shopList.text}====== ${list.link}${index - 1}`);

                return (
                  <li className="shopClose" key={index}>
                    <Link to={`${list.link}${index - 1}`}>{list.text}</Link>
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
const { categoryUrl } = 'http://127.0.0.1:8000/products?main-category=';
const { baseUrl } = 'http://127.0.0.1:8000/products?';

const shopList = [
  {
    link: 'http://127.0.0.1:8000/products',
    text: 'SHOP ALL',
  },
  {
    link: `${baseUrl}best-seller=4`,
    text: 'BEST SELLER',
  },
  {
    link: { categoryUrl },
    text: 'PERFUME',
  },
  {
    link: { categoryUrl },
    text: 'BODY CARE',
  },
  {
    link: { categoryUrl },
    text: 'HAND CARE',
  },
  {
    link: { categoryUrl },
    text: 'LIP CARE',
  },
  {
    link: { categoryUrl },
    text: 'HOME OBJECTS',
  },
  {
    link: { categoryUrl },
    text: 'GIFT SET',
  },
  {
    link: { categoryUrl },
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
