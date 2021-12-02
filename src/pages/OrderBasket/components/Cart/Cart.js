import React, { Component } from 'react';
import Product from './Product';
import { API, userToken } from 'config';
import { defaultShipping } from './config';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch(API.cart, {
      headers: {
        Authorization: userToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.hasOwnProperty('result')) {
          this.setState({
            result: data.result,
          });
        }
      })
      .catch(err => console.log(err));
  }

  setCount = (e, id) => {
    const { value } = e.target;
    const { result } = this.state;

    const selectedItem = result.find(item => item.cart_id === id);
    const isPlusInvalid = value > 0 && selectedItem.quantity >= 10;
    const isMinusInvalid = value < 0 && selectedItem.quantity < 2;

    if (isPlusInvalid || isMinusInvalid) return;

    const nextCart = result.map(item => {
      if (item.cart_id !== id) return item;
      else {
        fetch(API(id), {
          method: 'PATCH',
          headers: {
            Authorization: userToken,
          },
          body: JSON.stringify({
            quantity: item.quantity + Number(value),
          }),
        }).catch(err => console.log(err));
        return { ...item, quantity: item.quantity + Number(value) };
      }
    });
    this.setState({ result: nextCart });
  };

  removeProduct = id => {
    const { result } = this.state;

    fetch(API(id), {
      method: 'DELETE',
      headers: {
        Authorization: userToken,
      },
    }).catch(err => console.log(err));

    const nextCart = result.filter(product => product.cart_id !== id);

    this.setState({
      result: nextCart,
    });
  };

  totalPrice = () => {
    const { result } = this.state;
    let total = 0;
    result.forEach(
      item => (total += item.price * item.quantity + defaultShipping)
    );
    return total;
  };

  render() {
    const { result } = this.state;

    return (
      <section className='cart'>
        <span>Cart</span>
        <ul className='productList'>
          {result.length !== 0 ? (
            result.map((product, idx) => (
              <Product
                data={product}
                setCount={this.setCount}
                removeProduct={this.removeProduct}
                key={idx}
              />
            ))
          ) : (
            <p className='emptyMessage'>{EMPTY_MESSAGE}</p>
          )}
        </ul>
        <ul className='cartInfo'>
          <li className='subTotal'>
            <label>Subtotal</label>
            <span>{this.totalPrice().toLocaleString()} KRW</span>
          </li>
          <li className='shipping'>
            <label>Shipping</label>
            <span>{defaultShipping.toLocaleString()} KRW</span>
          </li>
          <li className='total'>
            <label>Total</label>
            <span>
              {`${(this.totalPrice()
                ? this.totalPrice() + defaultShipping
                : 0
              ).toLocaleString()} KRW`}
            </span>
          </li>
          <button className='checkout'>PROCEED TO CHECKOUT</button>
        </ul>
      </section>
    );
  }
}

export default Cart;

const EMPTY_MESSAGE = 'Your cart is empty. Go Shopping';
