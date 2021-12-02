import React, { Component } from 'react';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import './ProductDetail.scss';
import { API } from 'config';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: {
        id: 0,
        name: '',
        collection: '',
        size_g: 0,
        size_ml: 0,
        size_oz: 0,
        price: 0,
        detail_description: '',
        scent_description: '',
        ingredient: '',
        image: [],
      },
    };
  }

  componentDidMount() {
    fetch(API.products)
      .then(res => res.json())
      .then(({ result: productInfo }) => {
        this.setState({ productInfo });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { productInfo } = this.state;

    return (
      <main className='productDetail'>
        <div className='path'>Shop All {`>`}</div>
        <div className='wrapper'>
          <div className='productImageWrapper'>
            <ProductImage imageList={productInfo.image} />
            <div className='gift'>
              <span>무료 선물 포장 서비스 </span>
              <span>액세서리류 단품 구매시 혜택</span>
              <span>적용 제외 네이버 페이 구매시 혜택 적용 제외</span>
            </div>
          </div>
          <div className='productInfoWrapper'>
            <ProductInfo {...productInfo} />
          </div>
        </div>
      </main>
    );
  }
}
