import React, { Component } from 'react';
import ProductImage from './components/ProductImage/ProductImage';
import ProductInfo from './components/ProductInfo/ProductInfo';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productImageUrl: [
        // 임시 값 -> mock 데이터로 변경 필요
        '/images/productDetail/myImage.jpg',
        '/images/productDetail/myImage2.jpg',
        '/images/productDetail/myImage3.jpg',
      ],
    };
  }

  componentDidMount() {
    // 상품 상세 페이지 패치해와야함
  }

  render() {
    const { productImageUrl } = this.state;

    return (
      <div className="productDetail">
        <main>
          <div className="path">Shop All {`>`}</div>
          <div className="wrapper">
            <div className="leftWrapper">
              <ProductImage productImageUrl={productImageUrl} />
              <div className="etc">
                <span>무료 선물 포장 서비스 </span>
                <span>액세서리류 단품 구매시 혜택</span>
                <span>적용 제외 네이버 페이 구매시 혜택 적용 제외</span>
              </div>
            </div>
            <div className="rightWrapper">
              <ProductInfo />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProductDetail;
