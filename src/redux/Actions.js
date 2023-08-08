import axios from "axios";

export const DepositAction = (payload) => {
  return { type: "DEPOSIT", payload: payload };
};
export const WithdrawlAction = (payload) => {
  return { type: "WITHDRAWL", payload: payload };
};

export const WithdrawlAllAction = () => {
  return { type: "WITHDRAWLALL" };
};

export const addTodoAction = (payload) => {
  return { type: "ADDTODO", payload: payload };
};

export const inputValueAction = (payload) => {
  return { type: "UPDATEINPUTVALUE", payload: payload };
};

// export const getPosts = (payload) => {
//   return { type: "POSTS", payload: payload };
// };

// export const getPosts = () => {
//   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//     return { type: "POSTS", payload: res.data };
//   });
// };
export const getPosts = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      dispatch({ type: "POSTS", payload: res.data });
    });
  };
};
