import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  render() {
    const { isModalOn } = this.state;
    const { image, name, price } = this.props;

    return (
      <div className="modal">
        <label className="buttonForModal">
          Add to Cart
          <input
            type="checkbox"
            className="modalInput"
            onClick={this.toggleModal}
          />
        </label>
        <div className={isModalOn ? 'modalWrapperOn' : 'modalWrapperOff'}>
          <div className="modalBackground">
            <div className="modalHeader">옵션 선택</div>
            <button className="closeButton" onClick={this.toggleModal}>
              ✕
            </button>

            <div className="modalContent">
              <div className="modalContentElement">
                <h2>{name}</h2>
                <div className="modalProductList">
                  <img src={image} alt="productImage" />
                  <div className="modalProductContent">
                    <span>엽서</span>
                    <select>
                      Select
                      <option>- [필수] 옵션을 선택해 주세요 -</option>
                      <option disabled>----------------------------</option>
                      <optgroup label="엽서">
                        <option>엽서 1: Thank you</option>
                        <option>엽서 2: Happy Birthday</option>
                        <option>엽서 3: Love Letter</option>
                        <option>엽서 4: Congratulations</option>
                        <option>선택 안함 </option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="totalProducts">
                  <p className="modalOptionDescription">
                    ❗ &nbsp;위 옵션선택 박스를 선택하시면 아래에 상품이
                    추가됩니다.
                  </p>
                  <p className="totalPriceWrapper">
                    총 상품금액 (수량):
                    <span className="totalPrice">{price.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span
            className="backgroundClickClose"
            onClick={this.toggleModal}
          ></span>
        </div>
      </div>
    );
  }
}

export default Modal;
