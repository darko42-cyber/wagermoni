import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  oddsEvent: {},
  allOddsEvent: [],
};
export const oddsEventReducer = createReducer(initialState, {
  NewOddsEventRequest: (state) => {
    state.loading = true;
  },
  NewOddsEventSuccess: (state, action) => {
    state.loading = false;
    state.oddsEvent = action.payload;
  },
  NewOddsEventFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetAllOddsEventRequest: (state) => {
    state.loading = true;
  },
  GetAllOddsEventSuccess: (state, action) => {
    state.loading = false;
    state.allOddsEvent = action.payload;
  },
  GetAllOddsEventFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  LikeOddsEventSuccess: (state, action) => {
    const item = action.payload;
    const existItem = state.allOddsEvent.find((i) => i._id === item._id);
    if (existItem) {
      return {
        ...state,
        allOddsEvent: state.allOddsEvent.map((i) =>
          i._id === existItem._id ? item : i
        ),
      };
    } else {
      return { ...state };
    }
  },
});

export default oddsEventReducer;
