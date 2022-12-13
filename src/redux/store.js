import { createStore } from "redux";
import combinedReducers from "./combine-reducers";

const store = createStore(combinedReducers)

export { store }