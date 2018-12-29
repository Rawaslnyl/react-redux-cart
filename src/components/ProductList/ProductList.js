import React, { Component } from 'react';

class ProductList extends Component {
  componentDidMount() {}

  render() {
    const { products } = this.props;
    console.log(products);

    const showDiv = products.length ? (
      <ul>
        {products.map(e => (
          <li key={e.id}>
            <span>{e.goodsName}</span>-<span>{e.price}</span>x
            <span>{e.inventory}</span>
            <br />
            <button
              onClick={() => {
                this.addToCart(e.id, e.inventory);
              }}
              disabled={e.inventory ? false : true}
            >
              add to cart
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等...</div>
    );
    return <div>{showDiv}</div>;
  }
  addToCart = (id, num) => {
    if (num > 0) {
      const { addToCart } = this.props;
      addToCart(id, { inventory: num - 1 });
    }
  };
}

export default ProductList;
