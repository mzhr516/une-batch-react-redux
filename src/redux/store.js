import { createStore } from "redux";
import { TransactionReducer } from "./Reducers/TransactionReducer";

export const store = createStore(
  TransactionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
