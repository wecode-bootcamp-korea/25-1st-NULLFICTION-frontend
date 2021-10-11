import React, { Component } from 'react';
import ProductImage from './components/ProductImage/ProductImage';
import ProductInfo from './components/ProductInfo/ProductInfo';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: {
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
    fetch('http://192.168.1.229:8000/products/product?id=3')
      .then(res => res.json())
      .then(({ result: data }) => {
        data
          ? this.setState({
              data,
            })
          : // 임시. 404 페이지 작성 필요
            console.log('not found');
      });
  }

  render() {
    const {
      name,
      collection,
      size_g,
      size_ml,
      size_oz,
      price,
      detail_description,
      scent_description,
      ingredient,
      image,
    } = this.state.data;

    return (
      <main className="productDetail">
        <div className="path">Shop All {`>`}</div>
        <div className="wrapper">
          <div className="leftWrapper">
            <ProductImage imageList={image} />
            <div className="etc">
              <span>무료 선물 포장 서비스 </span>
              <span>액세서리류 단품 구매시 혜택</span>
              <span>적용 제외 네이버 페이 구매시 혜택 적용 제외</span>
            </div>
          </div>
          <div className="rightWrapper">
            <ProductInfo
              info={{
                name,
                collection,
                size_g,
                size_ml,
                size_oz,
                price,
                detail_description,
                scent_description,
                ingredient,
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default ProductDetail;
