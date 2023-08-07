const initialState = [];
export const todoReducer = (state = initialState, action) => {
  if (action.type === "ADDTODO") {
    return [...state, action.payload];
  }
  return state;
};
