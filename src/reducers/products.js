import { ADD_TO_CART, SUB_PRODUCT_QUANTITY, GET_PRODUCTS } from '../constants';
const iniState = [];
const products = (state = iniState, action) => {
  // 修改 state 的方法 相关 action 的一些事
  // state 永远是最新的
  const { type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return action.products;
    case ADD_TO_CART:
      const newState = [...state];
      newState.find(e => e.id === action.id).inventory--;
      return newState;
    case SUB_PRODUCT_QUANTITY:
      return state.map(e => {
        if (e.id === action.id) {
          e.inventory++;
        }
        return e;
      });
    default:
      return state;
  }
};

export default products;
