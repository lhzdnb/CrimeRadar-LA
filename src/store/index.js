import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userStatus";

const store = configureStore({
  reducer: userSlice.reducer,
});

export default store;
