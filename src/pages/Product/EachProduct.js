import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EachProduct.scss';
import Popup from './Popup';

class EachProduct extends Component {
  render() {
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
              <div className="productName">{name}</div>
              <div>{collection}</div>
            </h3>
          </Link>
          <div className="productInfo">
            <span className="mensuration">
              <span className="productVolumeKr">{size_ml}</span>ml &nbsp;/&nbsp;{' '}
              <span className="productVolumeUs">{size_oz}</span>
              oz
            </span>
            <span>
              <span className="productPrice">{price.toLocaleString()}</span>
              &nbsp; KRW
            </span>
          </div>
          <p className="productDescription">{description}</p>
        </div>
        <Popup id={id} name={name} price={price} image={image} />
      </li>
    );
  }
}

export default EachProduct;
