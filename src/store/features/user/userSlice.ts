import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../../../types";

const initialUserState: UserState = {
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentState, action: PayloadAction<User>): UserState => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
