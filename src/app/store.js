import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "../features/markdown/markdownSlice";

export const store = configureStore({
  reducer: { markdownSlice },
});
