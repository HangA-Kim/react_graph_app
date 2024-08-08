import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice";

const store = configureStore({
  reducer: {
    theme,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
