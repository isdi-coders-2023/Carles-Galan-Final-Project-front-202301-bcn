import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import type { LoginCredentials } from "../types";
import { store } from "../store/store";
import Wrapper from "../mocks/Wrapper";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { server } from "../mocks/server";
import {
  credentialsErrorHandler,
  internalServerErrorHandler,
} from "../mocks/handlers";
import { toast } from "react-toastify";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const mockedRightCredentials: LoginCredentials = {
  username: "Lluis",
  password: "123456789",
};

const mockedWrongCredentials: LoginCredentials = {
  username: "Lluisdwe",
  password: "1234wefwef56789",
};

const spiedDispatch = jest.spyOn(store, "dispatch");

const mockedToastErrorFunction = jest.spyOn(toast, "error");

beforeAll(() => jest.clearAllMocks());

describe("Given the useUserApi function", () => {
  describe("When its called with right credentials", () => {
    const {
      result: {
        current: { loginUser },
      },
    } = renderHook(() => useUserApi(), { wrapper: Wrapper });
    test("Then it should call the dispatch with the loginUserAction", async () => {
      await loginUser(mockedRightCredentials);

      expect(spiedDispatch).toHaveBeenCalledWith(
        loginUserActionCreator("token")
      );
    });

    test("Then is should call the Dispatch twice with the set and unsetIsLoading action", async () => {
      await loginUser(mockedRightCredentials);

      expect(spiedDispatch).toHaveBeenCalledWith(setIsLoadingActionCreator());

      expect(spiedDispatch).toHaveBeenCalledWith(unsetIsLoadingActionCreator());
    });
  });

  describe("When it's called and there is an error with credentials", () => {
    beforeEach(() => {
      server.use(...credentialsErrorHandler);
    });

    test("Then it should call modal function with 'Invalid Credentials!'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedWrongCredentials);

      expect(mockedToastErrorFunction).toHaveBeenCalled();
    });
  });

  describe("When it's called and there is an error with fetch", () => {
    beforeEach(() => {
      server.use(...internalServerErrorHandler);
    });

    test("Then it should call modal function with 'Invalid Credentials!'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedRightCredentials);

      expect(mockedToastErrorFunction).toHaveBeenCalled();
    });
  });
});
