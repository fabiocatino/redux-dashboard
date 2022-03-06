import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
