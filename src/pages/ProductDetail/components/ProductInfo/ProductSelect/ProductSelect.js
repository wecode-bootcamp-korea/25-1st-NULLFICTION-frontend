import React, { Component } from 'react';
import ProductOption from './ProductOption/ProductOption';
import './ProductSelect.scss';

class ProductSelect extends Component {
  render() {
    return (
      <section className="productSelect">
        <ProductOption />
        <button>
          <span>Add to Cart</span>
          <span>18,000 KRW</span>
        </button>
      </section>
    );
  }
}

export default ProductSelect;
