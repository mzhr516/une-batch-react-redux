const initialState = 100;

export const TransactionReducer = (state = initialState, action) => {

  if (action.type === "DEPOSIT") {
    return state + 100;
  }
  
  if (action.type === "WITHDRAWL") {
    return state - 50;
  }

  return state;
};
