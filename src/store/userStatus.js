import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "remember",
  initialState: {
    remember: false,
  },
  reducers: {
    setRemember(state, action) {
      state.remember = action.payload.status;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
