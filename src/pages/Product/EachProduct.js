import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from './Modal';
import './EachProduct.scss';

class EachProduct extends Component {
  setSize = sizes => {
    const CAPACITY = 0;
    let result = [];
    for (const size of sizes) {
      if (size[CAPACITY]) result.push(size);
    }
    return result;
  };

  render() {
    const {
      id,
      image,
      name,
      collection,
      size_g,
      size_ml,
      size_oz,
      price,
      description,
    } = this.props;

    const size = this.setSize([
      [size_g, 'g'],
      [size_ml, 'ml'],
      [size_oz, 'oz'],
    ]);

    return (
      <li className="eachProduct">
        <img src={image} alt="productImage" />
        <div className="thumbnailInfo">
          <h3
            onClick={() =>
              this.props.history.push(`/products/${this.props.id}`)
            }
          >
            <div className="productName">{name}</div>
            <div>{collection}</div>
          </h3>
          <div className="productInfo">
            <span className="mensuration">
              {size.length !== 0 &&
                size.map((size, idx) => (
                  <span key={idx} className="productVolume">
                    {' '}
                    {size}
                  </span>
                ))}
            </span>
            <span>
              <span className="productPrice">{price.toLocaleString()}</span>
              &nbsp; KRW
            </span>
          </div>
          <p className="productDescription">{description}</p>
        </div>
        <Modal id={id} name={name} price={price} image={image} />
      </li>
    );
  }
}

export default withRouter(EachProduct);
