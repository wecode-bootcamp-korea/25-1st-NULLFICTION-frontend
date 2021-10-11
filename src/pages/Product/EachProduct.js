import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EachProduct.scss';

class EachProduct extends Component {
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
    const {
      id,
      image,
      name,
      collection,
      size_ml,
      size_oz,
      price,
      description,
    } = this.props;
    return (
      <li className="eachProduct">
        <img src={image} alt="productImage" />
        <div className="thumbnailInfo">
          <Link
            to={{
              pathname: '/product/detail',
              state: {
                id,
              },
            }}
          >
            <h3>
              <div>{name}</div>
              <div>{collection}</div>
            </h3>
          </Link>
          <div className="productInfo">
            <span className="mensuration">
              <span className="productVolumeKr">{size_ml}</span>ml &nbsp;/&nbsp;{' '}
              <span className="productVolumeUs">{size_oz}</span>oz
            </span>
            <span>
              <span className="productPrice">{price}</span>
              &nbsp; KRW
            </span>
          </div>
          <p className="productDescription">{description}</p>
          <input type="checkbox" id="popup" onClick={this.togglePopup}></input>
          <label for="popup" id="buttonForPopup">
            Add to Cart
          </label>
          <div className={isPopupOn ? 'popupWrapperOn' : 'popupWrapperOff'}>
            <div className="popupBackground">
              <div className="popupHeader">옵션 선택</div>
              <label for="popup" id="buttonForClose">
                ✕
              </label>
              <div className="popupContent">
                <div className="popupContentElement">
                  <h2>Rose Pale</h2>
                  <div className="popupProductList">
                    <img
                      src="./images/product/product.jpg"
                      alt="productImage"
                    />
                    <div>
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
                    <table>총 상품금액 (수량): </table>
                  </div>
                </div>
              </div>
            </div>
            <label for="popup" id="backgroundClickClose"></label>
          </div>
        </div>
      </li>
    );
  }
}

export default EachProduct;
