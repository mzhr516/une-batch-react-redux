const initialState = 100;
// {type:"deposit",payload:200}
export const TransactionReducer = (state = initialState, action) => {
  if (action.type === "DEPOSIT") {
    return state + action.payload;
  }
  if (action.type === "WITHDRAWL") {
    return state - action.payload;
  }
  if (action.type === "WITHDRAWLALL") {
    return 0;
  }
  return state;
};
