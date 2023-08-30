import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  predictions: [],
};
export const predictionReducers = createReducer(initialState, {
  AllPredictionRequest: (state) => {
    state.loading = true;
  },
  AllPredictionSuccess: (state, action) => {
    state.loading = false;
    state.predictions = action.payload;
  },
  AllPredictionFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export default predictionReducers;
