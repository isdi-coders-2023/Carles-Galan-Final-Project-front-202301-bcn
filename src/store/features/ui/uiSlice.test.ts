import UiStructure from "../../../types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given the setIsLoading reducer function", () => {
  describe("When it receives current state and setIsLoading action", () => {
    test("Then it should return a new state with property isLoading true", () => {
      const currentUi: UiStructure = {
        isLoading: false,
      };
      const expectedUserState: UiStructure = {
        isLoading: true,
      };

      const newUiState = uiReducer(currentUi, setIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUserState);
    });
  });
});

describe("Given the unsetIsLoading reducer function", () => {
  describe("When it receives current state and unsetIsLoading action", () => {
    test("Then it should return a new state with property isLoading false", () => {
      const currentUi: UiStructure = {
        isLoading: true,
      };
      const expectedUserState: UiStructure = {
        isLoading: false,
      };

      const newUiState = uiReducer(currentUi, unsetIsLoadingActionCreator());

      expect(newUiState).toStrictEqual(expectedUserState);
    });
  });
});
