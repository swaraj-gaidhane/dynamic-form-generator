import { createSlice } from "@reduxjs/toolkit";

export interface elementProps {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  inputType?: string;
  options?: string[];
  maxLength?: number;
}

const initialState: elementProps[] = [];

export const formElements = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.unshift(payload);
    },
    deleteElement: (state, { payload }) => {
      const index = state.findIndex((element) => element.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    resetElements: (state) => {
      state.length = 0;
    },
  },
});

export const { addElement, deleteElement, resetElements } =
  formElements.actions;

export default formElements.reducer;
