import { renderHook } from "@testing-library/react";
import useUserApi from "./useUserApi";
import type { UserCredentials } from "../types";
import { store } from "../store/store";
import Wrapper from "../mocks/Wrapper";

const mockedUserCredentials: UserCredentials = {
  username: "Lluis",
  password: "123456789",
};

const spiedDispatch = jest.spyOn(store, "dispatch");

describe("Given the useUserApi function", () => {
  describe("When its invoked", () => {
    test("Then it should call the dispatch with the loginUserActionCreator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserApi(), { wrapper: Wrapper });

      await loginUser(mockedUserCredentials);

      expect(spiedDispatch).toHaveBeenCalled();
    });
  });
});
