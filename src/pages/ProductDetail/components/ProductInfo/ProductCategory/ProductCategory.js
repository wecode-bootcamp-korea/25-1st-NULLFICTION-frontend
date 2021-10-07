import React, { Component } from 'react';
import './ProductCategory.scss';

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      categoryClassName: 'category',
      headerIcon: '+',
    };
  }

  // 혹시 이 부분 더 줄일 수 있을 지 궁금합니다..
  onClick = () => {
    const { categoryClassName } = this.state;

    categoryClassName === 'category'
      ? this.setState({
          categoryClassName: 'category on',
          headerIcon: '⎻',
        })
      : this.setState({
          categoryClassName: 'category',
          headerIcon: '+',
        });
  };

  render() {
    const { categoryClassName, headerIcon } = this.state;

    return (
      <div className="productCategory">
        <div className={categoryClassName} onClick={this.onClick}>
          {/* 리스트 들어 올 것*/}
          <div className="header">
            <span>Scent</span>
            <span>{headerIcon}</span>
          </div>
          <div className="context">
            "핑크빛 다마스크 로즈의 향기로움. 밀키한 샌 "핑크빛 다마스크 로즈의
            향기로움. 밀키한 샌달우드와 바이올렛이 만드는 부드럽고 깨끗한 잔향."
            꿀처럼 달콤한 향을 머금은 여린 핑크빛 "핑크빛 다마스크 로즈의
            향기로움. 밀키한 샌달우드와 바이올렛이 만드는 부드럽고 깨끗한 잔향."
            꿀처럼 달콤한 향을 머금은 여린 핑크빛 다마스크 로즈. 부드러운 무스
            위에 펼쳐진 사랑스러운 꽃잎의 흔적. 밀키한 샌달우드와 파우더리한
            바이올렛 노트가 더해 빚어낸, 사랑스럽고 페미닌한 향. MAIN NOTE –
            Damask Rose, Geranium, Violet, Amber, Musk
          </div>
        </div>
        <div className="category ingredients">
          {/* 리스트 들어 올 것*/}
          <div className="header">
            <span>Ingredients</span>
            <span>+</span>
          </div>
        </div>
        <div className="category information">
          {/* 리스트 들어 올 것*/}
          <div className="header">
            <span>Information</span>
            <span>+</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategory;
