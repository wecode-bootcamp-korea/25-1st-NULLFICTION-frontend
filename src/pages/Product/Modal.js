import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
      inputValue: '',
      countQuantity: 1,
      currentProduct: [],
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    const NOT_EXIST = -1;
    if (
      this.state.currentProduct.findIndex(
        item => item.key === event.target.value
      ) !== NOT_EXIST
    )
      return;

    if (event.target.value === '선택 안함') return;

    this.setState({
      currentProduct: [
        ...this.state.currentProduct,
        {
          key: event.target.value,
          name: this.props.name,
          quantity: this.state.countQuantity,
          price: this.props.price,
          value: event.target.value,
        },
      ],
    });
  };

  increaseQuantity = () => {
    this.state.countQuantity < 10
      ? this.setState({
          countQuantity: this.state.countQuantity + 1,
        })
      : alert('최대 주문 수량은 10개입니다.');
  };

  decreaseQuantity = () => {
    this.state.countQuantity > 1
      ? this.setState({
          countQuantity: this.state.countQuantity - 1,
        })
      : alert('최소 주문 수량은 1개입니다.');
  };

  render() {
    const { isModalOn, currentProduct } = this.state;
    const { image, name, price } = this.props;

    return (
      <div className="modal">
        <label className="buttonForModal">
          Add to Cart
          <input
            type="checkbox"
            className="modalInput"
            onClick={this.toggleModal}
          />
        </label>
        <div className={isModalOn ? 'modalWrapperOn' : 'modalWrapperOff'}>
          <div className="modalBackground">
            <div className="modalHeader">옵션 선택</div>
            <button className="closeButton" onClick={this.toggleModal}>
              ✕
            </button>

            <div className="modalContent">
              <div className="modalContentElement">
                <h2>{name}</h2>
                <div className="modalProductList">
                  <img src={image} alt="productImage" />
                  <div className="modalProductContent">
                    <span>엽서</span>
                    <select
                      value={this.state.inputValue}
                      onChange={this.handleChange}
                    >
                      Select
                      <option>- [필수] 옵션을 선택해 주세요 -</option>
                      <option disabled>----------------------------</option>
                      <optgroup label="엽서">
                        <option>엽서 1: Thank you</option>
                        <option>엽서 2: Happy Birthday</option>
                        <option>엽서 3: Love Letter</option>
                        <option>엽서 4: Congratulations</option>
                        <option>선택 안함 </option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="totalProducts">
                  <p className="modalOptionDescription">
                    ❗ &nbsp;위 옵션선택 박스를 선택하시면 아래에 상품이
                    추가됩니다.
                  </p>
                  {currentProduct.length !== 0 &&
                    currentProduct.map((productList, idx) => (
                      <div key={idx} className="selectedWrapper">
                        <div className="selectedProduct">
                          <div>{name}</div>
                          <div className="selectedInput">
                            {productList.value}
                          </div>
                        </div>
                        <div className="selectedCount">
                          <div className="countedNumber">
                            {this.state.countQuantity}
                          </div>
                          <button onClick={this.increaseQuantity}>⬆</button>
                          <button onClick={this.decreaseQuantity}>⬇</button>
                        </div>
                        <div className="selectedPrice">
                          {(price * this.state.countQuantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  <p className="totalPriceWrapper">
                    총 상품금액 (수량):
                    <span className="totalPrice">
                      {(price * this.state.countQuantity).toLocaleString()}
                    </span>
                  </p>
                  <div className="cartButtonWrapper">
                    <button
                      className="cartButton"
                      onClick={() => {
                        this.props.history.push({
                          pathname: 'http://10.58.0.90:8000/order/basket',
                          state: { currentProduct: currentProduct },
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            className="backgroundClickClose"
            onClick={this.toggleModal}
          ></span>
        </div>
      </div>
    );
  }
}

export default Modal;
