import React, { Component } from 'react';
import './Popup.scss';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      isPopupOn: false,
    };
  }

  togglePopup = () => {
    this.setState({
      isPopupOn: !this.state.isPopupOn,
    });
  };

  render() {
    const { isPopupOn } = this.state;
    const { image, name, price } = this.props;

    return (
      <div>
        <label className="buttonForPopup">
          Add to Cart
          <input type="checkbox" className="popup" onClick={this.togglePopup} />
        </label>
        <div className={isPopupOn ? 'popupWrapperOn' : 'popupWrapperOff'}>
          <div className="popupBackground">
            <div className="popupHeader">옵션 선택</div>
            <button className="buttonForClose" onClick={this.togglePopup}>
              ✕
            </button>

            <div className="popupContent">
              <div className="popupContentElement">
                <h2>{name}</h2>
                <div className="popupProductList">
                  <img src={image} alt="productImage" />
                  <div className="popupProductContent">
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
                  <p className="popupOptionDescription">
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
            onClick={this.togglePopup}
          ></span>
        </div>
      </div>
    );
  }
}

export default Popup;
