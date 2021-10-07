import React, { Component } from 'react';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSelect from './ProductSelect/ProductSelect';

import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    return (
      <div className="productInfo">
        <ProductDescription />
        <ProductCategory />
      </div>
    );
  }
}

export default ProductInfo;
