import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import inputReducer from "../slice/inputSlice";

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    input : inputReducer
  },
});

// Type untuk RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
