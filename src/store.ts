import { configureStore } from "@reduxjs/toolkit";
import { formDetails, formElements } from "./slices";

export const store = configureStore({
  reducer: {
    elements: formElements,
    details: formDetails,
  },
});
