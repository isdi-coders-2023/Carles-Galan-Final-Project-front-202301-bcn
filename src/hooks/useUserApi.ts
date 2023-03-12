import {
  showErrorMessage,
  showSuccesMessage,
} from "../components/Modals/toasts";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { LoginCredentials } from "../types";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const serverErrorMessage = "Something went wrong";
const invalidCredentialsErrorMessage = "Invalid credentials";
const succesMessage = "Login successfully!";

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
        showErrorMessage(invalidCredentialsErrorMessage);
        return;
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      dispatch(loginUserActionCreator(token));

      showSuccesMessage(succesMessage);
    } catch (error) {
      showErrorMessage(serverErrorMessage);
    }
  };

  return { loginUser };
};
export default useUserApi;
