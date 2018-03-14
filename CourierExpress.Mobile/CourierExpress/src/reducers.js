import { combineReducers } from "redux";
import account from "./reducers/accountReducer";
import orders from "./reducers/orderReducer";

export default combineReducers({
    account,
    orders
});
