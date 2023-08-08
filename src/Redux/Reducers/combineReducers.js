import { combineReducers } from "redux";
import { TransactionReducer } from "./transactionReducer";
import { todoReducer } from "./todoReducer";
import { inputReducer } from "./InputReducer";
import { postsReducer } from "./postsReducer";

// export const rootReducer = combineReducers({
//   //   TransactionReducer,
//   //   todoReducer,
//   //   inputReducer,
//   amount: TransactionReducer,
//   todo: todoReducer,
//   inputValue: inputReducer,
// });

export const rootReducer = combineReducers({
  amount: TransactionReducer,
  todo: todoReducer,
  inputValue: inputReducer,
  posts: postsReducer,
});
