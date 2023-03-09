import { User, UserState } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the loginUser reducer function", () => {
  describe("When it receives empty current state and loginUserAction with a new user with username: 'Alexander', id: '1' and token: 'iu23'", () => {
    test("Then it should return 'Alexander' logged", () => {
      const currentUser: UserState = {
        username: "",
        id: "",
        token: "",
        isLogged: false,
      };
      const newUser: User = {
        username: "Alexander",
        id: "1",
        token: "iu23",
      };

      const expetedUserState: UserState = {
        username: "Alexander",
        id: "1",
        token: "iu23",
        isLogged: true,
      };

      const user = userReducer(currentUser, loginUserActionCreator(newUser));

      expect(user).toStrictEqual(expetedUserState);
    });
  });
});
