import { loginUserActionCreator } from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { LoginCredentials } from "../types";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const useUserApi = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: LoginCredentials) => {
    const response = await fetch(`${ApiUrl}${userEndpoint}${loginEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      return;
    }
    const { token } = await response.json();
    dispatch(loginUserActionCreator(token));
  };

  return { loginUser };
};
export default useUserApi;
