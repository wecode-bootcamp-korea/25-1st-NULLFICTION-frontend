import React, { Component } from 'react';
import { withRouter } from 'react-router';

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
    const { history } = this.props;
    fetch(`http://10.58.0.90:8000/products?keyword=${keyword}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res.result });
        history.push(`/products?keyword=${keyword}`);
      });
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

export default withRouter(Input);
