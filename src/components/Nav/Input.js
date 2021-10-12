import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'SEARCH',
      products: [],
      keyword: '',
    };
  }

  componentDidMount() {
    // fetch(`http://localhost:8000/products?keyword=${this.result}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({ products: res });
    //   });
  }

  handleChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleInput = () => {
    this.setState({
      placeholder: '',
    });
  };

  render() {
    const { products, keyword } = this.state;
    const result = products.filter(list =>
      list.toLowerCase().includes(keyword)
    );

    return (
      <div className="searchBox">
        <input
          className="search"
          type="search"
          placeholder="SEARCH"
          onFocus={this.handleInput}
          onChange={result}
        />
      </div>
    );
  }
}

export default Input;
