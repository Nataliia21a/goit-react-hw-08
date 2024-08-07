import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggedIn = false;
        state.error = true;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoggedIn = false;
        state.error = true;
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = false;
      })
      .addCase(logout.rejected, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = true;
        state.loading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.isRefreshing = false;
      }),
});

export default authSlice.reducer;
