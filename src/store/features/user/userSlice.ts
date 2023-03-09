import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "../../../types";

const initialUserState: UserState = {
  username: "",
  token: "",
  id: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentState,
      action: PayloadAction<UserStructure>
    ): UserState => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
