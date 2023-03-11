import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import type { LoginCredentials } from "../types";
import { store } from "../store/store";
import Wrapper from "../mocks/Wrapper";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";
import { toast } from "react-toastify";

const mockedUser: LoginCredentials = {
  username: "Lluis",
  password: "123456789",
};

const spiedDispatch = jest.spyOn(store, "dispatch");

const mockedToastFunction = jest.spyOn(toast, "error");

describe("Given the useUserApi function", () => {
  describe("When its called with right credentials", () => {
    test("Then it should call the dispatch with the loginUserAction", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedUser);

      expect(spiedDispatch).toHaveBeenCalledWith(
        loginUserActionCreator("token")
      );
    });
  });

  describe("When it's called and there is an error with the fetch", () => {
    beforeEach(() => {
      server.use(...errorHandlers);
    });

    test("Then it should call showErrorMessage function with 'Something went wrong'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedUser);

      expect(mockedToastFunction).toHaveBeenCalled();
    });
  });
});
