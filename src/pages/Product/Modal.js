import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
      inputValue: '',
      currentProduct: [],
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  handleChange = event => {
    const { name, price } = this.props;
    const { currentProduct } = this.state;
    const { value: selectedOption } = event.target;

    if (selectedOption === '선택 안함') return;

    const selectedProduct = currentProduct.find(
      item => item.id === selectedOption
    );
    const isAlreadyExist = !!selectedProduct;

    if (isAlreadyExist) {
      this.setState(prev => {
        const prevProduct = prev.currentProduct;
        const nextProduct = prevProduct.map(product => {
          if (product.id !== selectedProduct.id) return product;
          else return { ...product, quantity: product.quantity + 1 };
        });

        return { currentProduct: nextProduct };
      });
    } else {
      const optionToAdd = {
        id: selectedOption,
        name,
        price,
        value: selectedOption,
        quantity: 1,
      };

      this.setState(prev => ({
        currentProduct: [...prev.currentProduct, optionToAdd],
      }));
    }

    this.setState({ inputValue: selectedOption });
  };

  increaseQuantity = (quantity, id) => {
    if (quantity > 9) return alert('상품별 최대 주문 수량은 10개입니다.');

    const newProduct = this.state.currentProduct.map(product => {
      if (product.id !== id) return product;
      else return { ...product, quantity: quantity + 1 };
    });
    this.setState({
      currentProduct: newProduct,
    });
  };

  decreaseQuantity = (quantity, id) => {
    if (quantity < 2) return alert('상품별 최소 주문 수량은 1개입니다.');

    const newProduct = this.state.currentProduct.map(product => {
      if (product.id !== id) return product;
      else return { ...product, quantity: quantity - 1 };
    });
    this.setState({
      currentProduct: newProduct,
    });
  };

  render() {
    const { isModalOn, currentProduct } = this.state;
    const { id, image, name, price } = this.props;

    const totalQuantity = currentProduct.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );

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
                    currentProduct.map((product, idx) => (
                      <div key={idx} className="selectedWrapper">
                        <div className="selectedProduct">
                          <div>{name}</div>
                          <div className="selectedInput">{product.value}</div>
                        </div>
                        <div className="selectedCount">
                          <div className="countedNumber">
                            {product.quantity}
                          </div>
                          <button
                            onClick={() =>
                              this.increaseQuantity(
                                product.quantity,
                                product.id
                              )
                            }
                          >
                            ⬆
                          </button>
                          <button
                            onClick={() =>
                              this.decreaseQuantity(
                                product.quantity,
                                product.id
                              )
                            }
                          >
                            ⬇
                          </button>
                        </div>
                        <div className="selectedPrice">
                          {(price * product.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  <p className="totalPriceWrapper">
                    총 상품금액 (수량):
                    <span className="totalPrice">
                      {totalQuantity.toLocaleString()}
                    </span>
                  </p>
                  <div className="cartButtonWrapper">
                    <Link
                      to="/cart"
                      onClick={() => {
                        this.state.currentProduct.forEach(product => {
                          fetch('http://10.58.3.156:8000/cart', {
                            method: 'POST',
                            headers: {
                              Authorization:
                                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NH0.y2j5H_mbt1TBJdsiatUoH45sABlaALeyBO06EnnbR4c',
                            },
                            body: JSON.stringify({
                              product_id: this.props.id,
                              option_id: Number(product.id[3]),
                              quantity: product.quantity,
                            }),
                          });
                        });
                        this.props.history.push('/cart');
                      }}
                    >
                      <button className="cartButton">Add to Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="backgroundClickClose" onClick={this.toggleModal} />
        </div>
      </div>
    );
  }
}

export default withRouter(Modal);
