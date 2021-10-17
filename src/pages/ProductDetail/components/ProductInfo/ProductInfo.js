import React, { Component } from 'react';
import ProductDescription from './ProductDescription';
import ProductCategory from './ProductCategory';
import ProductSelect from './ProductSelect';
import './ProductInfo.scss';

export default class ProductInfo extends Component {
  stringToHtml = str => {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    const htmlArray = [...doc.body.children].map(
      categoryElement => categoryElement.innerHTML
    );
    return htmlArray;
  };

  render() {
    const {
      id,
      name,
      collection,
      size_g,
      size_ml,
      size_oz,
      price,
      detail_description,
      scent_description,
      ingredient,
    } = this.props;

    return (
      <div className="productInfo">
        <ProductDescription
          name={name}
          sizes={[
            [size_g, 'g'],
            [size_ml, 'ml'],
            [size_oz, 'oz'],
          ].filter(item => item[0])}
          collection={collection}
          price={price}
          detailDescriptionList={this.stringToHtml(detail_description)}
        />
        <ProductCategory
          name="scent"
          contextList={this.stringToHtml(scent_description)}
        />
        <ProductCategory name="ingredient" contextList={[ingredient]} />
        <ProductCategory
          name="infomation"
          contextList={this.stringToHtml(INFOMATION_CONTEXT)}
        />
        <ProductSelect id={id} />
      </div>
    );
  }
}

const INFOMATION_CONTEXT = `
<div>hello@nonfiction.kr</div> 
<span className="contact">1:1 채팅</span> 
<p>* 평일 오후 12시 이전 결제건에 한해 당일 발송 처리 됩니다.</p> 
<p>* 상품준비중 단계에서만 취소 및 주문서 수정가능하며, 배송준비중 단계에서는 불가한 점 양해 바랍니다.</p>`;
