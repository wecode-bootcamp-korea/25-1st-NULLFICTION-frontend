import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import './OrderBasket.scss';

class OrderBasket extends Component {
  render() {
    return (
      <main className="orderBasket">
        <div className="linkWrapper">
          <Link className="link" to="/product">
            Return to store
          </Link>
        </div>
        <Cart />
      </main>
    );
  }
}

export default OrderBasket;
