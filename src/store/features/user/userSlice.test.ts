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
        token: "holitoken",
        isLogged: true,
      };

      const newUserState = userReducer(
        currentUser,
        loginUserActionCreator("holitoken")
      );

      expect(newUserState).toStrictEqual(expetedUserState);
    });
  });
});
