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
