import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import OrderBasket from './pages/OrderBasket/OrderBasket';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/member/login" component={Login} />
          <Route exact path="/member/join" component={Join} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={OrderBasket} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
