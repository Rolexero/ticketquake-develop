import { useNavigate } from "react-router-dom";
import useCanGoBack from "./useCanGoBack";

const useGoBack = () => {
  const navigate = useNavigate();
  const canGoBack = useCanGoBack();

  const goBack = (fallback = "/") => {
    if (canGoBack) {
      navigate(-1);
      return;
    }

    if (fallback) {
      navigate(fallback);
      return;
    }
  };

  return goBack;
};

export default useGoBack;
