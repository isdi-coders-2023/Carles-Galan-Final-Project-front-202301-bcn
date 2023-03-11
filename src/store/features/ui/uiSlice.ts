import { createSlice } from "@reduxjs/toolkit";
import UiStructure from "../../../types";

const initialUiState: UiStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setIsLoading: (currentUiState): UiStructure => ({
      ...currentUiState,
      isLoading: true,
    }),
    unsetIsLoading: (currentUiState): UiStructure => ({
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
