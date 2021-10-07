import React, { Component } from 'react';
import './ProductImage.scss';

class ProductImage extends Component {
  constructor() {
    super();
    this.state = {
      curImageIdx: 0,
    };
  }

  /* idx의 맨 앞,끝에 왔을 때 어떤 방식으로  할지.. 함수를 두개? 아니면 조건을 하나에 다?*/
  onClick = dir => {
    let { curImageIdx } = this.state;

    dir === 'left'
      ? this.setState({
          curImageIdx: --curImageIdx,
        })
      : this.setState({
          curImageIdx: ++curImageIdx,
        });
  };

  render() {
    const { curImageIdx } = this.state;
    const { productImageUrl } = this.props;

    return (
      <section className="productImages">
        <div className="slide">
          <i
            className="fas fa-chevron-left arrow"
            onClick={() => this.onClick('left')}
          ></i>
          <img src={productImageUrl[curImageIdx]}></img>
          <i
            className="fas fa-chevron-right arrow"
            onClick={() => this.onClick('right')}
          ></i>
        </div>
        {/* 데이터 작업 후 알맞은 key 변경 필요 */}
        <div className="list">
          {productImageUrl.map(image => {
            return <img src={image} key={image}></img>;
          })}
        </div>
      </section>
    );
  }
}

export default ProductImage;
