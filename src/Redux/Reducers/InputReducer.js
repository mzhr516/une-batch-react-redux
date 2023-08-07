const initialState = "";
export const inputReducer = (state = initialState, action) => {
  if (action.type === "UPDATEINPUTVALUE") {
    return action.payload;
  }
  return state;
};
