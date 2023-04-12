const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  color: "red",
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertState: (state, action) => {
      const { color } = action.payload;
      state = {
        ...state,
        color,
      };
    },
  },
});

export const { insertState } = cartReducer.actions;

export default cartReducer.reducer;
