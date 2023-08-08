const initialState = [];

export const postsReducer = (state = initialState, action) => {
  if (action.type === "POSTS") {
    return action.payload;
  }
  return state;
};
