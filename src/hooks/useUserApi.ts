import {} from "../components/Modals/toasts";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { useAppDispatch } from "../store/hooks";
import { LoginCredentials } from "../types";
import modal from "../components/Modals/toasts";
import { errorTypes } from "./types";

const ApiUrl = process.env.REACT_APP_URL_API_USERS;
const userEndpoint = "/users";
const loginEndpoint = "/login";

const { defaultErrorMessage, invalidCredentialsErrorMessage } = errorTypes;

const useUserApi = () => {
  const dispatch = useAppDispatch();
  const uiDispatch = useAppDispatch();

  const loginUser = async (userCredentials: LoginCredentials) => {
    try {
      uiDispatch(setIsLoadingActionCreator());
      const response = await fetch(`${ApiUrl}${userEndpoint}${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
      uiDispatch(unsetIsLoadingActionCreator());

      if (response.status === 401) {
        modal("error", invalidCredentialsErrorMessage);
        return;
      }

      if (response.status === 429) {
        throw new Error();
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      dispatch(loginUserActionCreator(token));
    } catch (error) {
      modal("error", defaultErrorMessage);
    }
  };

  return { loginUser };
};
export default useUserApi;
