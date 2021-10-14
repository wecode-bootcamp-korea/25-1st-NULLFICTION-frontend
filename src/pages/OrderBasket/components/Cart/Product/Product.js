import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  render() {
    const { data, setCount, removeProduct } = this.props;

    return (
      <li className="product">
        <div className="main">
          <Link className="name" to="#">
            {data.name}
          </Link>
          <div className="countAndRemove">
            <button value={-1} onClick={e => setCount(e, data.cart_id)}>
              DOWN
            </button>
            <span className="count">{data.quantity}</span>
            <button value={1} onClick={e => setCount(e, data.cart_id)}>
              UP
            </button>
            <button onClick={() => removeProduct(data.cart_id)}>Remove</button>
          </div>
          <div className="price">
            {(data.quantity * data.price).toLocaleString()} KRW
          </div>
        </div>
        <div className="option">{data.option}</div>
      </li>
    );
  }
}

export default Product;
