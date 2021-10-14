import React, { Component } from 'react';
import './ProductOption.scss';

class ProductOption extends Component {
  render() {
    const { optionSelect } = this.props;

    return (
      <div className="productOption">
        <select onChange={optionSelect}>
          <option value={0}>Select Option</option>
          <optgroup label="-------------------"></optgroup>
          <optgroup label="엽서">
            <option value={1}> 엽서 1 : Thank you</option>
            <option value={2}> 엽서 2 : Happy Birthday</option>
            <option value={3}> 엽서 3 : Love letter</option>
            <option value={4}> 엽서 4 : Congratulations</option>
            <option value={5}> 엽서 5 : 선택안함</option>
          </optgroup>
        </select>
        <i className="fas fa-chevron-down"></i>
      </div>
    );
  }
}

export default ProductOption;
