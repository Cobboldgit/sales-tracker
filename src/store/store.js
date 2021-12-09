import { combineReducers, createStore } from "redux";
import itemsReducer from "../reducers/itemsReducer";
import customersReducer from "../reducers/customersReducer";
import salesReducer from "../reducers/salesReducer"

const reducers = combineReducers({
  itemsReducer,
  customersReducer,
  salesReducer
});

const store = createStore(reducers);

export default store;
