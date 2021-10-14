import React, { Component } from 'react';
import ProductOption from './ProductOption/ProductOption';
import './ProductSelect.scss';
// 삭제 해야함
import Popup from '../../../../../components/Popup/Popup';

class ProductSelect extends Component {
  constructor() {
    super();
    this.state = {
      optionID: 0,
      isPopupOpen: true,
    };
  }

  optionSelect = e => {
    const { value: optionID } = e.target;
    this.setState({
      optionID: Number(optionID),
    });
  };

  closePopup = () => {
    const { isPopupOpen } = this.state;
    this.setState({
      isPopupOpen: !isPopupOpen,
    });
  };

  render() {
    const { optionID, isPopupOpen } = this.state;

    return (
      <section className="productSelect">
        <ProductOption optionID={optionID} optionSelect={this.optionSelect} />
        <button
          onClick={e => {
            e.preventDefault();
            optionID ? alert(`팝업창`) : alert(`필수 옵션을 선택해주세요.`);
          }}
        >
          <span>Add to Cart</span>
          <span>18,000 KRW</span>
        </button>
        {isPopupOpen && <Popup closePopup={this.closePopup} />}
      </section>
    );
  }
}

export default ProductSelect;
