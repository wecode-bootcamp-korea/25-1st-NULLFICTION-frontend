import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      isProductListOn: false,
      isScentsListOn: false,
    };
  }

  toggleProductList = () => {
    this.setState({
      isProductListOn: !this.state.isProductListOn,
    });
  };

  toggleScentsList = () => {
    this.setState({
      isScentsListOn: !this.state.isScentsListOn,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="contents">
        <div className="conbox">
          <h1 className="productTitle">PERFUME</h1>
          <span className="filter">
            <div className="selectProductList">
              <button
                className="productListButton"
                onClick={this.toggleProductList}
              >
                Product +
              </button>
              <ul
                className={
                  this.state.isProductListOn
                    ? 'productListOn'
                    : 'productListOff'
                }
              >
                <li className="option">GIFTS</li>
                <li className="option">PERFUME</li>
                <li className="option">BODY CARE</li>
                <li className="option">HAND CARE</li>
                <li className="option">LIP CARE</li>
                <li className="option">SETS</li>
                <li className="option">ACC</li>
              </ul>
            </div>
            <div className="selectScentsList">
              <button
                className="scentsListButton"
                onClick={this.toggleScentsList}
              >
                Scents +
              </button>
              <ul
                className={
                  this.state.isScentsListOn ? 'scentsListOn' : 'scentsListOff'
                }
              >
                <li className="option">SANTAL CREAM</li>
                <li className="option">GENTLE NIGHT</li>
                <li className="option">GAIAC FLOWER</li>
                <li className="option">FORGET ME NOT</li>
                <li className="option">IN THE SHOWER</li>
              </ul>
            </div>
          </span>
          <ul>
            <li className="eachProduct">
              <img src="./images/product/product.jpg" alt="productImage" />
              <div className="thumbnailInfo">
                <a href="">
                  <h3>
                    <div>DISCOVERY EDP SET</div>
                    <div>Perfume</div>
                  </h3>
                </a>
                <div className="productInfo">
                  <span className="mensuration">
                    <span className="productVolumeKr">100</span>ml &nbsp;/&nbsp;{' '}
                    <span className="productVolumeUs">3.3</span>oz
                  </span>
                  <span>
                    <span className="productPrice">32,000</span>
                    &nbsp; KRW
                  </span>
                </div>
                <p className="productDescription">
                  여린 핑크빛 장미의 뽀얗고 클린한 향을 담아낸 95% 천연 식물
                  유래 성분 베지터블 솝. 조밀하고 풍성한 거품이 산뜻하고 뽀득한
                  세정감을 주고, 강력한 보습력의 히알루론산과 다섯 가지 종류의
                  식물성 바디 컨디셔닝 성분이 피부를 촉촉하게 보호합니다.
                </p>
                <button type="button" className="addButton">
                  Add to Cart
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;
