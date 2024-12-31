import toast from "react-hot-toast";

export const showToast = (type: "success" | "error", message: string) => {
  if (type === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
