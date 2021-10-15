import React, { Component } from 'react';
import EachProduct from './EachProduct.js';
import PRODUCT_LIST from './productList';
import SCENTS_LIST from './scentsList';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      isProductListOn: false,
      isScentsListOn: false,
      productList: [],
    };
  }

  componentDidMount() {
    fetch('data/productList.json')
      // `http://10.58.0.90:8000/products${this.props.location.search}`
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data,
        });
      });
  }

  toggleProductList = () => {
    this.setState({
      isProductListOn: !this.state.isProductListOn,
    });
  };

  toggleScentsList = () => {
    this.setState({
      isScentsListOn: !this.state.isScentsListOn,
    });
  };

  render() {
    const { isProductListOn, isScentsListOn, productList } = this.state;

    return (
      <div className="contents">
        <div className="contentBox">
          <h1 className="productTitle">PERFUME</h1>
          <span className="filter">
            <div className="selectProductList">
              <button
                className="productListButton"
                onClick={this.toggleProductList}
              >
                Product +
              </button>
              <ul
                className={
                  isProductListOn ? 'productList on' : 'productList off'
                }
              >
                {PRODUCT_LIST.map((product, idx) => {
                  return (
                    <li key={idx} className="option">
                      {product.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="selectScentsList">
              <button
                className="scentsListButton"
                onClick={this.toggleScentsList}
              >
                Scents +
              </button>
              <ul
                className={isScentsListOn ? 'scentsList on' : 'scentsList off'}
              >
                {SCENTS_LIST.map((scent, idx) => {
                  return (
                    <li key={idx} className="option">
                      {scent.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </span>
          <ul>
            {productList.map((product, idx) => {
              return (
                <EachProduct
                  key={idx}
                  id={product.id}
                  name={product.name}
                  collection={product.collection}
                  subCategory={product.sub_category}
                  size_g={product.size_g}
                  size_ml={product.size_ml}
                  size_oz={product.size_oz}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Product;
