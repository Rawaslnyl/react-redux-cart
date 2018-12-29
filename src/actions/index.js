import axios from 'axios';
import * as actionTypes from '../constants';
console.log(actionTypes);

export const getProducts = () => {
  return dispatch => {
    axios
      .get(
        'https://raw.githubusercontent.com/Rawaslnyl/react-redux-cart/master/api/db.json'
      )
      .then(res => {
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          products: res.data.products
        });
      });
  };
};
export const addToCart = id => {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  };
};
export const checkoutCart = id => {
  return {
    type: actionTypes.CHECKOUT_CART,
    id
  };
};
export const subProductQuantity = id => {
  return {
    type: actionTypes.SUB_PRODUCT_QUANTITY,
    id
  };
};
