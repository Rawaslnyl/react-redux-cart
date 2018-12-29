import React, { Component } from 'react';
import Cart from './Cart/Cart';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getProducts } from '../actions';

class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3008/products').then(res => {
    //   store.dispatch({
    //     type: 'GET_PRODCTS',
    //     products: res.data
    //   });
    // });
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>react-redux shopping-cart</h1>
          <Cart />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(App);
