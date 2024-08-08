import { Action, ReducerType, ThunkDispatch, Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./slice/themeSlice";
import apis from './slice/apiCallSlice';

const rootReducer = combineReducers({theme, apis})
const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppThunkDispatch = ThunkDispatch<ReducerType, unknown, Action<string>>;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch
export default store;
