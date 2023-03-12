import { UiStructure } from "../../../types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given the uiSlice reducer function", () => {
  describe("When it receives the setIsLoading action", () => {
    test("Then it should set isLoading to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
      };
      const expectedUiState: UiStructure = {
        isLoading: true,
      };
      const newUiState = uiReducer(currentUiState, setIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives the unsetIsLoading action", () => {
    test("Then it should set isLoading to false", () => {
      const currentUi: UiStructure = {
        isLoading: true,
      };
      const expectedUiState: UiStructure = {
        isLoading: false,
      };

      const newUiState = uiReducer(currentUi, unsetIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
