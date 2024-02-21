import { createSlice } from "@reduxjs/toolkit";

export interface detailsProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  isInputDirty?: boolean;
  hasError: boolean;
}

const initialState: detailsProps[] = [];

export const formDetails = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetails: (state, { payload }) => {
      state.push({ ...payload, isInputDirty: false, hasError: false });
    },
    updateDetails: (state, { payload }) => {
      const index = state.findIndex((detail) => detail.id === payload.id);
      state[index].isInputDirty = true;
      state[index].value = payload.value;
      state[index].hasError =
        (state[index].isInputDirty &&
          state[index].required &&
          !state[index].value.length) ??
        false;
    },
    removeDetail: (state, { payload }) => {
      const index = state.findIndex((detail) => detail.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearDetails: (state) => {
      state.length = 0;
    },
    resetDetails: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.forEach((detail) => {
        detail.value = "";
        detail.hasError = false;
        detail.isInputDirty = false;
      });
    },
  },
});

export const {
  addDetails,
  updateDetails,
  removeDetail,
  resetDetails,
  clearDetails,
} = formDetails.actions;

export default formDetails.reducer;
