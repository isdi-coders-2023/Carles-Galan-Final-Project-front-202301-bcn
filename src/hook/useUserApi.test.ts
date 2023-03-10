import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import type { LoginCredentials } from "../types";
import { store } from "../store/store";
import Wrapper from "../mocks/Wrapper";
import { loginUserActionCreator } from "../store/features/user/userSlice";

const mockedUser: LoginCredentials = {
  username: "Lluis",
  password: "123456789",
};

const spiedDispatch = jest.spyOn(store, "dispatch");

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
});
