import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EachProduct.scss';
import Popup from './Popup';

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
    console.log(size); // [  [ unit, capacity  ] , [ unit, capacity ]   ]
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
              {size.length !== 0 &&
                size.map((size, idx) => (
                  <span key={idx} className="productVolume">
                    {' '}
                    {size}
                  </span>
                ))}
              {/* <span className="productVolumeKr">{size_ml}</span>ml &nbsp;/&nbsp;{' '}
              <span className="productVolumeUs">{size_oz}</span>
              oz */}
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
