import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import OrderBasket from './pages/OrderBasket/OrderBasket';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/member/login" component={Login} />
          <Route exact path="/member/join" component={Join} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/detail" component={ProductDetail} />
          <Route exact path="/order/basket" component={OrderBasket} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
