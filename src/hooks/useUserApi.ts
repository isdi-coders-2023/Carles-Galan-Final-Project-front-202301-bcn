import { showErrorMessage } from "../components/Modals/toasts";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { LoginCredentials } from "../types";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const errorMessage = "Something went wrong";

const useUserApi = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: LoginCredentials) => {
    try {
      const response = await fetch(`${ApiUrl}${userEndpoint}${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        const rejectedCredentialsMessage = "Invalid user credentials";

        throw new Error(rejectedCredentialsMessage);
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      dispatch(loginUserActionCreator(token));
    } catch (error) {
      showErrorMessage(errorMessage);
    }
  };

  return { loginUser };
};
export default useUserApi;
