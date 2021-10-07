import React, { Component } from 'react';
import './ProductOption.scss';

class ProductOption extends Component {
  render() {
    return (
      <div className="productOption">
        <select>
          <option value="title">Select Option</option>
          <optgroup label="-------------------"></optgroup>
          <optgroup label="엽서">
            <option> 옵션 </option>
            <option> 옵션 </option>
            <option> 옵션 </option>
            <option> 옵션 </option>
            <option> 옵션 </option>
          </optgroup>
        </select>
        <i className="fas fa-arrow-down"></i>
      </div>
    );
  }
}

export default ProductOption;
