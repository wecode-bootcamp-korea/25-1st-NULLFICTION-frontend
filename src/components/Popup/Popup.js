import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './Popup.scss';

class Popup extends Component {
  render() {
    const { closePopup } = this.props;

    return (
      <section className="popup">
        <header>
          <span>Add to Cart</span>
          <button>X</button>
        </header>
        <div className="context">장바구니에 상품이 정상적으로 담겼습니다.</div>
        <div className="links">
          <Link className="goToCart" to="/cart">
            View Cart
          </Link>
          <button className="continue" onClick={closePopup}>
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(Popup);
