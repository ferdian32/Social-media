import {configureStore,createSlice} from "@reduxjs/toolkit";




export const store = configureStore({
  reducer :{
    counter : '',
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch