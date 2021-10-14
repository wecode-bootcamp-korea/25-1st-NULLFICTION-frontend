import React, { Component } from 'react';
import './ProductCategory.scss';

class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      focus: '',
    };
  }

  setFocusCategory = category => {
    const { focus } = this.state;
    this.setState({ focus: focus === category ? '' : category });
  };

  render() {
    const { focus } = this.state;
    const { name, contextList } = this.props;

    return (
      <div className="productCategory">
        <div
          className={`${focus === name && 'focus'} category`}
          name={name}
          onClick={() => this.setFocusCategory(name)}
        >
          <div className="header">
            <span>{name}</span>
            <span>{focus === name ? '-' : '+'}</span>
          </div>
          <div className="context">
            {contextList.map((context, idx) => (
              <div
                className={`${name === 'infomation' && 'contant'}`}
                key={idx}
              >
                {context}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategory;
