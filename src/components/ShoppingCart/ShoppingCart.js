import React, { Component } from 'react';
import { isCartEmpty } from '../../selectors';
class ShoppingCart extends Component {
  render() {
    const {
      cart,
      products,
      addToCart,
      checkoutCart,
      subProductQuantity
    } = this.props;
    // {pid:[],byid:{}}   [{},{},{}]
    const cartDiv =
      cart.productId.length && products.length ? (
        <ul>
          {cart.productId.map(e => {
            // <li key={e.id}>{products.find(product => product.id === e)}</li>
            const product = products.find(product => product.id === e);
            return (
              <li key={e}>
                {product.goodsName}
                <span>
                  {product.price}x
                  <button
                    onClick={() => {
                      console.log(123);

                      subProductQuantity(e, {
                        inventory: product.inventory + 1
                      });
                    }}
                  >
                    -
                  </button>
                  <span>{cart.quantityById[e]}</span>
                  <button
                    onClick={() => {
                      if (product.inventory > 0) {
                        addToCart(e, { inventory: product.inventory - 1 });
                      } else {
                        alert('库存不够了！！！');
                      }
                    }}
                  >
                    +
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Please add some products to cart.</div>
      );
    const total =
      cart.productId.length && products.length
        ? cart.productId.reduce(
            (num, e) =>
              num + products.find(i => i.id === e).price * cart.quantityById[e],
            0
          )
        : 0;
    return (
      <div>
        <h2>ShoppingCart</h2>
        {cartDiv}
        <span>$total {total}</span>
        <br />
        <button
          disabled={cart.productId.length ? false : true}
          onClick={() => {
            checkoutCart();
          }}
        >
          Check out
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
