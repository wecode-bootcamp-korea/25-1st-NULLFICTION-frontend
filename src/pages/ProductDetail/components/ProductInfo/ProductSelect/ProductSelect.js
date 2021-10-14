import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ProductOption from './ProductOption';
import './ProductSelect.scss';

class ProductSelect extends Component {
  constructor() {
    super();
    this.state = {
      optionID: 0,
    };
  }

  optionSelect = e => {
    const { value: optionID } = e.target;
    this.setState({
      optionID: Number(optionID),
    });
  };

  render() {
    const { optionID } = this.state;
    const { id } = this.props;

    return (
      <section className="productSelect">
        <ProductOption optionID={optionID} optionSelect={this.optionSelect} />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.history.push('/cart');
            console.log(id, optionID);
            console.log(typeof id, typeof optionID);
            if (optionID) {
              fetch('http://10.58.0.90:8000/cart', {
                method: 'POST',
                headers: {
                  Authorization: localStorage.getItem('Authorization'),
                },
                body: JSON.stringify({
                  product_id: id,
                  option_id: optionID,
                  quantity: 1,
                }),
              });
            } else alert(`필수 옵션을 선택해주세요.`);
          }}
        >
          <span>Add to Cart</span>
          <span>18,000 KRW</span>
        </button>
      </section>
    );
  }
}

export default withRouter(ProductSelect);
