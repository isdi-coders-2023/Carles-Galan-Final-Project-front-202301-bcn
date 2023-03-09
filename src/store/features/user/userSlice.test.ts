import { UserState } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the loginUser reducer function", () => {
  describe("When it receives current state and loginUserAction", () => {
    test("Then it should return the user with token: 'iu23' and property isLogged: true", () => {
      const currentUser: UserState = {
        token: "",
        isLogged: false,
      };
      const expetedUserState: UserState = {
        token: "iu23",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentUser,
        loginUserActionCreator({ token: expetedUserState.token })
      );

      expect(newUserState).toStrictEqual(expetedUserState);
    });
  });
});
