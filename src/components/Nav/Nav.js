import React, { Component } from 'react';
import Input from './Input';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="navBox">
          <Link to="/">
            <img alt="navLogo" src="/images/navLogo.png" className="navLogo" />
          </Link>
          <ul className="topUl">
            <li className="topLi">USD</li>
            <li className="topLi">
              <Link to="/member/login" className="topLink">
                LOGIN
              </Link>
            </li>
            <li className="topLi">
              <Link to="/order/basket" className="topLink">
                CART(0)
              </Link>
            </li>
          </ul>
        </div>

        <div className="menuBox">
          <Menu />
          <Input />
        </div>
      </div>
    );
  }
}

export default Nav;
