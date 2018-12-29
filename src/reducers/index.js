import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
// combineReducers 的返回值就相当于之前定义的函数
// combineReducers 函数要传递一个对象， createStore 会将该对象存储 store 中
const rootReducer = combineReducers({
  products,
  cart
});
export default rootReducer;
