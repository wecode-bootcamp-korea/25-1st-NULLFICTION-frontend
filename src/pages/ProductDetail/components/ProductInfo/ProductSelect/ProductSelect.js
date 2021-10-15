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
    const { optionID, isPopupOpen } = this.state;
    const { id } = this.props;

    return (
      <section className="productSelect">
        <ProductOption optionID={optionID} optionSelect={this.optionSelect} />
        <button
          onClick={e => {
            e.preventDefault();
            if (optionID) {
              fetch('http://10.58.3.156:8000/cart', {
                method: 'POST',
                headers: {
                  Authorization:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.y2j5H_mbt1TBJdsiatUoH45sABlaALeyBO06EnnbR4c',
                  //  Authorization: localStorage.getItem('Authorization'),
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
