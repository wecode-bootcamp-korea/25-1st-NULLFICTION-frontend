import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ProductOption from './ProductOption';
import Popup from 'components/Popup/Popup';
import { API } from 'config';
import './ProductSelect.scss';

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
      <section className='productSelect'>
        <ProductOption optionID={optionID} optionSelect={this.optionSelect} />
        <button
          onClick={e => {
            e.preventDefault();
            if (optionID) {
              fetch(API.cart, {
                method: 'POST',
                headers: {
                  Authorization: localStorage.getItem('Authorization'),
                },
                body: JSON.stringify({
                  product_id: id,
                  option_id: optionID,
                  quantity: 1,
                }),
              }).catch(err => console.log(err));
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
