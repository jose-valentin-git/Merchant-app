import { ToastOptions, toast } from "react-toastify";

class ToastUtils {
  private static defaultOption: ToastOptions = {
    pauseOnFocusLoss: false,
  };

  static success = (message?: string, options?: ToastOptions) => {
    if (!message) message = "Success";

    return toast.success(message, options || this.defaultOption);
  };

  static warn = (message: string, options?: ToastOptions) => {
    return toast.warn(message, options || this.defaultOption);
  };

  static error = (message?: string | undefined, options?: ToastOptions) => {
    if (!message) message = "Error";

    return toast.error(message, options || this.defaultOption);
  };
}

export default ToastUtils;
