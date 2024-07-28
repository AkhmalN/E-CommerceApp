import { combineReducers } from "redux";
import productReducer from "./products";
import userReducer from "./users";
const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer,
});
export default rootReducer;
