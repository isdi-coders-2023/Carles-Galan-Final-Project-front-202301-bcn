import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";

const initialUserState: UserState = {
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<string>
    ): UserState => ({
      ...currentUserState,
      token: action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
