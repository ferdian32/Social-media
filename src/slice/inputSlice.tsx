import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definisi initialState
interface InputState {
  value: string;
}

const initialState: InputState = {
  value: "",
};

// Buat Redux Slice
const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    onChangeEventHandler: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Export actions dan reducer
export const { onChangeEventHandler } = inputSlice.actions;
export default inputSlice.reducer;
