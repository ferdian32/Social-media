import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definisi initialState
interface InputState {
  value: string;
}

const initialState: InputState = {
  value: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    onChangeEventHandler: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});


export const { onChangeEventHandler } = inputSlice.actions;
export default inputSlice.reducer;
