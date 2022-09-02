import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import * as reducers from "./store";
import { postsApiSlice } from "./services/postsApi";

const rootReducer = combineReducers({
  ...reducers,
  [postsApiSlice.reducerPath]: postsApiSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApiSlice.middleware)
});

setupListeners(store.dispatch);
