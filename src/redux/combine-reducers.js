import { combineReducers } from "redux";
import { productReducer } from "./reducer";

const combinedReducers = combineReducers({
    products: productReducer
})

export default combinedReducers