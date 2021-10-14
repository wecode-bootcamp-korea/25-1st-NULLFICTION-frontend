import React, { Component } from 'react';
import ProductOption from './ProductOption/ProductOption';
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
            // console.log(id, optionID);

            if (optionID)
              fetch('URL', {
                method: 'POST',
                body: JSON.stringfy({
                  product_id: id,
                  option_id: optionID,
                  quantity: 1,
                }),
              });
            // alert(`팝업창`) : alert(`필수 옵션을 선택해주세요.`);
          }}
        >
          <span>Add to Cart</span>
          <span>18,000 KRW</span>
        </button>
      </section>
    );
  }
}

export default ProductSelect;
