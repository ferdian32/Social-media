import { createSlice } from "@reduxjs/toolkit";
interface defaultState {
  value : number
};
const initialState : defaultState = {value:0};

const counterSlice = createSlice({
  name:'reducer',
  initialState,
  reducers : {
    increment : (state:number):void => {
      state.value +=1
    },
    decrement : (state:number):void => {
      state.value -=1
    }
  }
});

export const {increment,decrement} = counterSlice.actions