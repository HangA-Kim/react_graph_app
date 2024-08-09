// import { Action, ReducerType, ThunkDispatch, Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
// import theme from "./slice/themeSlice";
// import apis from './slice/apiCallSlice';

// const rootReducer = combineReducers({theme, apis})
// const store = configureStore({
//   reducer: rootReducer,
// });

// export type AppStore = typeof store
// export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = AppStore['dispatch']
// export type AppThunkDispatch = ThunkDispatch<ReducerType, unknown, Action<string>>;

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch
// export default store;

// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import {
  visitorReducer,
  customerReducer,
  revenueReducer,
  salesMapReducer,
  volumServiceReducer,
} from "../features/api/slices";
import { themeReducer } from "./themeSlice";

const store = configureStore({
  reducer: {
    visitors: visitorReducer,
    customers: customerReducer,
    revenues: revenueReducer,
    salesMap: salesMapReducer,
    voulmeService: volumServiceReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
