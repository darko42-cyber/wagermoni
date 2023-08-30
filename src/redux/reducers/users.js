import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
};
export const userReducers = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload?.data;
    if (action.payload.success) {
      state.isAuthenticated = true;
    }
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
  LoginUserRequest: (state) => {
    state.loading = true;
  },
  LoginUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload?.data;
    if (action.payload.success) {
      state.isAuthenticated = true;
    }
  },
  LoginUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export default userReducers;
