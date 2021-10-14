import React, { Component } from 'react';
import Product from './Product/Product';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    // 임시
    this.state = {
      result: [
        {
          id: 1,
          name: 'GIFT SET',
          count: 1,
          price: 17000,
          optionID: '엽서 1 : Thank you',
        },
        {
          id: 2,
          name: '향기로운 비누',
          count: 1,
          price: 13000,
          optionID: 0,
        },
        {
          id: 3,
          name: '향기로운 샴푸',
          count: 1,
          price: 22000,
          optionID: 0,
        },
      ],
    };
  }

  componentDidMount() {
    //  fetch 필요
  }

  setCount = (e, id) => {
    const { value } = e.target;
    const { result } = this.state;

    const selectedItem = result.find(item => item.id === id);
    const isPlusInvalid = value > 0 && selectedItem.count >= 10;
    const isMinusInvalid = value < 0 && selectedItem.count < 2;

    if (isPlusInvalid || isMinusInvalid) return;

    const nextCart = result.map(item => {
      if (item.id !== id) return item;
      else return { ...item, count: item.count + Number(value) };
    });

    this.setState({ result: nextCart });
  };

  removeProduct = id => {
    const { result } = this.state;

    this.setState({
      result: result.filter(product => product.id !== id),
    });
  };

  totalPrice = () => {
    const { result } = this.state;
    let total = 0;
    result.forEach(item => (total += item.price * item.count));
    return `${total.toLocaleString()} KRW`;
  };

  render() {
    const { result } = this.state;
    return (
      <section className="cart">
        <span>Cart</span>
        <ul className="productList">
          {result.length !== 0 ? (
            result.map((product, idx) => (
              <Product
                data={product}
                setCount={this.setCount}
                removeProduct={this.removeProduct}
                key={product.id}
              />
            ))
          ) : (
            <p className="emptyMessage">{EMPTY_MESSAGE}</p>
          )}
        </ul>
        <ul className="cartInfo">
          <li className="subTotal">
            <label>Subtotal</label>
            <span>{this.totalPrice()}</span>
          </li>
          <li className="shipping">
            <label>Shopping</label>
            <span>0</span>
          </li>
          <li className="total">
            <label>Total</label>
            <span>{this.totalPrice()}</span>
          </li>
          <button className="checkout">PROCEED TO CHECKOUT</button>
        </ul>
      </section>
    );
  }
}

export default Cart;

const EMPTY_MESSAGE = 'Your cart is empty. Go Shopping';
