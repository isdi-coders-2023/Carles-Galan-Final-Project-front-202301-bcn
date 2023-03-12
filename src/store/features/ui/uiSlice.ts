import { createSlice } from "@reduxjs/toolkit";
import { UiStructure } from "../../../types";

const initialState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoading: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState: UiStructure): UiStructure => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});
export const {
  setIsLoading: setIsLoadingActionCreator,
  unsetIsLoading: unsetIsLoadingActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
