import "react-toastify/dist/ReactToastify.css";
import { toast, ToastOptions } from "react-toastify";

const toasSetting: ToastOptions<{}> = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const showErrorMessage = (message: string) => {
  toast.error(message, toasSetting);
};

export const showSuccesMessage = (message: string) => {
  toast.success(message, toasSetting);
};
