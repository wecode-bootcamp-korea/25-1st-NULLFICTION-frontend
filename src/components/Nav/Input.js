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

  getData = () => {
    const { keyword } = this.state;
    fetch(`http://10.58.2.54:8000/products?keyword=${keyword}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res.result });
      });
    //여기서 상품 리스트로 이동하는 함수를 호출해야 하는지?
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleInputCheck = e => {
    e.preventDefault();
    const { value } = e.target[0];
    value ? this.getData() : alert('검색어를 입력해주세요.');
  };

  handleInput = () => {
    this.setState({
      placeholder: '',
    });
  };

  render() {
    return (
      <div className="searchBox">
        <form onSubmit={this.handleInputCheck}>
          <input
            className="search"
            type="search"
            placeholder="SEARCH"
            onFocus={this.handleInput}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Input;
