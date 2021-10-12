import React, { Component } from 'react';
import './ProductDescription.scss';

class ProductDescription extends Component {
  render() {
    const { name, size, collection, detailDescriptionList } = this.props;

    return (
      <div className="productDescription">
        <span className="name header">{name}</span>
        <div className="capacity header">
          {size.map((size, idx) => (
            <span key={idx}>{size}</span>
          ))}
        </div>
        <span className="collection header">{collection}</span>
        <div className="detail">
          {detailDescriptionList.map((detailDescription, idx) => (
            <p key={idx}>{detailDescription}</p>
          ))}
        </div>
        <div className="etc">
          <p>
            * 선물용으로 구매하시는 분들을 위해 쇼핑백을 별도 판매하고 있습니다.
            ACC 메뉴에서 구매하실 수 있습니다.
          </p>
          <p>
            * 회원가입 시 3,000원 쿠폰 즉시 지급 (비회원 구매 시 혜택 적용이
            어려운 점 참고 부탁드립니다.)
          </p>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
