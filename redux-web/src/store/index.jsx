import { legacy_createStore, combineReducers } from "redux";
import cartReducer from './cartReducer';

const store = legacy_createStore(combineReducers({
    cart: cartReducer
}));

export default store;