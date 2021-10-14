import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ProductOption from './ProductOption';
import './ProductSelect.scss';
// 삭제 해야함
import Popup from '../../../../../components/Popup/Popup';

class ProductSelect extends Component {
  constructor() {
    super();
    this.state = {
      optionID: 0,
      isPopupOpen: false,
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
    const { optionID } = this.state;
    const { id, isPopupOpen } = this.props;

    return (
      <section className="productSelect">
        <ProductOption optionID={optionID} optionSelect={this.optionSelect} />
        <button
          onClick={e => {
            e.preventDefault();

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
              this.props.history.push('/cart');
            } else alert(`필수 옵션을 선택해주세요.`);
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

export default withRouter(ProductSelect);
