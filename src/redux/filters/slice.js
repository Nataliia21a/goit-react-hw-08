import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../auth/operations";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(logout.fulfilled, (state) => {
      state.name = "";
    }),
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
