import { configureStore } from "@reduxjs/toolkit";
import { predictionReducers } from "./reducers/predictions";
import userReducers from "./reducers/users";
import oddsEventReducer from "./reducers/oddsEvent";

const store = configureStore({
  reducer: {
    predictions: predictionReducers,
    users: userReducers,
    oddsEvents: oddsEventReducer,
  },
});

export default store;
