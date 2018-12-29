import axios from 'axios';
import * as actionTypes from '../constants';
console.log(actionTypes);

export const getProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3008/products').then(res => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: res.data
      });
    });
  };
};
export const addToCart = (id, newInventory) => {
  return dispatch => {
    axios
      .patch(`http://localhost:3008/products/${id}`, newInventory)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_TO_CART,
          id
        });
      });
  };
};
export const checkoutCart = id => {
  return dispatch => {
    dispatch({
      type: actionTypes.CHECKOUT_CART,
      id
    });
  };
};
export const subProductQuantity = (id, newInventory) => {
  return dispatch => {
    axios
      .patch(`http://localhost:3008/products/${id}`, newInventory)
      .then(() => {
        dispatch({
          type: actionTypes.SUB_PRODUCT_QUANTITY,
          id
        });
      });
  };
};
