import { configureStore } from "@reduxjs/toolkit";
import markdownSlicer from "./markdownSlicer";

export const store = configureStore({
  reducer: {
    markdown: markdownSlicer,
  },
});
